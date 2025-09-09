import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import rateLimiter from '@/lib/rateLimiter';
import { getClientIP } from '@/utils/ipUtils';

// Create a timeout wrapper for operations
const withTimeout = (promise, timeoutMs = 10000) => {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Operation timeout')), timeoutMs)
    )
  ]);
};

export async function POST(request) {
  const startTime = Date.now();
  console.log('🚀 Contact form submission started');

  try {
    // Get client IP address
    const clientIP = getClientIP(request);
    console.log(`📍 Request from IP: ${clientIP}`);

    // Check rate limit
    if (!rateLimiter.allowRequest(clientIP)) {
      const timeRemaining = rateLimiter.getTimeRemaining(clientIP);
      console.log(`🚫 Rate limit exceeded for IP: ${clientIP}`);

      return NextResponse.json(
          {
            error: 'Rate limit exceeded. Please try again later.',
            retryAfter: timeRemaining
          },
          {
            status: 429,
            headers: {
              'Retry-After': timeRemaining.toString(),
              'X-RateLimit-Limit': '40',
              'X-RateLimit-Remaining': '0',
              'X-RateLimit-Reset': new Date(Date.now() + (timeRemaining * 1000)).toISOString()
            }
          }
      );
    }

    // Get rate limit info for headers
    const rateLimitInfo = rateLimiter.getRateLimitInfo(clientIP);

    const formData = await request.formData();

    const testMode = formData.get('testMode');
    if (testMode === 'true') {
      return NextResponse.json(
          {
            success: true,
            message: 'Test mode - Form submitted successfully (no data saved)'
          },
          {
            status: 200,
            headers: {
              'X-RateLimit-Limit': '40',
              'X-RateLimit-Remaining': rateLimitInfo.remaining.toString(),
              'X-RateLimit-Reset': new Date(rateLimitInfo.resetTime).toISOString()
            }
          }
      );
    }

    const fullname = formData.get('fullname');
    const email = formData.get('email');
    const phone = formData.get('phone') || null;
    const company = formData.get('company') || null;
    const message = formData.get('message');

    // Validate required fields
    if (!fullname || !email || !message) {
      return NextResponse.json(
          { error: 'Missing required fields: fullname, email, and message are required' },
          {
            status: 400,
            headers: {
              'X-RateLimit-Limit': '40',
              'X-RateLimit-Remaining': rateLimitInfo.remaining.toString(),
              'X-RateLimit-Reset': new Date(rateLimitInfo.resetTime).toISOString()
            }
          }
      );
    }

    // Check environment variables early
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
          { error: 'Database service configuration error' },
          { status: 500 }
      );
    }

    // Initialize Supabase client with optimized settings
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY,
        {
          auth: {
            persistSession: false,
            autoRefreshToken: false,
            detectSessionInUrl: false
          },
          global: {
            headers: {
              'X-Client-Info': 'mapgain-contact-form'
            }
          }
        }
    );

    // Collect all files first
    const files = [];
    for (let i = 0; i < 5; i++) {
      const file = formData.get(`attachment_${i}`);
      if (file && file.size > 0) {
        files.push({ file, index: i });
      }
    }

    // Upload all files in parallel with timeout
    const attachments = [];
    if (files.length > 0) {
      const uploadStart = Date.now();
      console.log(`📁 Starting upload of ${files.length} files...`);

      const uploadPromises = files.map(async ({ file, index }) => {
        const timestamp = Date.now();
        const fileExtension = file.name.split('.').pop();
        const uniqueFilename = `${timestamp}_${index}_${file.name}`;

        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('contact-attachments')
            .upload(uniqueFilename, file);

        if (uploadError) {
          throw new Error(`Failed to upload ${file.name}: ${uploadError.message}`);
        }

        return {
          filename: file.name,
          size: file.size,
          type: file.type,
          storage_path: uploadData.path
        };
      });

      try {
        const uploadResults = await withTimeout(
            Promise.all(uploadPromises),
            15000 // 15 second timeout for file uploads
        );
        attachments.push(...uploadResults);

        console.log(`✅ File uploads completed in ${Date.now() - uploadStart}ms`);
      } catch (error) {
        return NextResponse.json(
            { error: `File upload failed: ${error.message}` },
            {
              status: 500,
              headers: {
                'X-RateLimit-Limit': '40',
                'X-RateLimit-Remaining': rateLimitInfo.remaining.toString(),
                'X-RateLimit-Reset': new Date(rateLimitInfo.resetTime).toISOString()
              }
            }
        );
      }
    }

    const contactData = {
      fullname: fullname,
      email: email,
      phone: phone,
      company: company,
      message: message,
      attachments: attachments,
      attachment_count: attachments.length,
      ip_address: clientIP,
      created_at: new Date().toISOString()
    };

    // Save contact data and record submission in parallel
    const dbStart = Date.now();
    console.log('💾 Starting database save...');

    const { data, error } = await withTimeout(
        supabase
            .from('contact_submissions')
            .insert([contactData])
            .select(),
        5000
    );

    console.log(`✅ Database save completed in ${Date.now() - dbStart}ms`);

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
          { error: 'Failed to save data to database' },
          {
            status: 500,
            headers: {
              'X-RateLimit-Limit': '40',
              'X-RateLimit-Remaining': rateLimitInfo.remaining.toString(),
              'X-RateLimit-Reset': new Date(rateLimitInfo.resetTime).toISOString()
            }
          }
      );
    }

    const totalTime = Date.now() - startTime;
    console.log(`🎉 Contact form completed in ${totalTime}ms total`);

    return NextResponse.json(
        {
          success: true,
          message: 'Form submitted successfully to database',
          data: data[0]
        },
        {
          status: 200,
          headers: {
            'X-RateLimit-Limit': '40',
            'X-RateLimit-Remaining': rateLimitInfo.remaining.toString(),
            'X-RateLimit-Reset': new Date(rateLimitInfo.resetTime).toISOString()
          }
        }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    const clientIP = getClientIP(request);
    const rateLimitInfo = rateLimiter.getRateLimitInfo(clientIP);

    return NextResponse.json(
        { error: 'Internal server error' },
        {
          status: 500,
          headers: {
            'X-RateLimit-Limit': '40',
            'X-RateLimit-Remaining': rateLimitInfo.remaining.toString(),
            'X-RateLimit-Reset': new Date(rateLimitInfo.resetTime).toISOString()
          }
        }
    );
  }
}
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Secure endpoint to serve images from private storage
export async function GET(request, { params }) {
  try {
    // Check environment variables first
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        { error: 'Database service configuration error' },
        { status: 500 }
      );
    }

    // Initialize Supabase client inside the function to avoid build-time errors
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    const { path } = params;
    
    if (!path) {
      return NextResponse.json(
        { error: 'File path is required' },
        { status: 400 }
      );
    }


    // Get the file from private storage
    const { data, error } = await supabase.storage
      .from('contact-attachments')
      .download(path);

    if (error) {
      // Storage error
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      );
    }

    // Convert blob to buffer
    const buffer = await data.arrayBuffer();
    
    // Get file info to determine content type
    const { data: fileInfo } = await supabase.storage
      .from('contact-attachments')
      .list('', {
        search: path
      });

    const contentType = fileInfo?.[0]?.metadata?.mimetype || 'application/octet-stream';

    // Return the file with proper headers
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000', // Cache for 1 year
      },
    });

  } catch (error) {
    // Error serving file
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


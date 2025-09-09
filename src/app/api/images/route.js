import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// GET endpoint to retrieve images from a contact submission
export async function GET(request) {
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

    const { searchParams } = new URL(request.url);
    const submissionId = searchParams.get('submissionId');
    
    if (!submissionId) {
      return NextResponse.json(
        { error: 'Submission ID is required' },
        { status: 400 }
      );
    }

    // Get the contact submission with attachments
    const { data: submission, error } = await supabase
      .from('contact_submissions')
      .select('attachments')
      .eq('id', submissionId)
      .single();

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch submission' },
        { status: 500 }
      );
    }

    if (!submission) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      attachments: submission.attachments || []
    });

  } catch (error) {
    // Error fetching images
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve all submissions with images (for admin view)
export async function POST(request) {
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

    const body = await request.json();
    const { limit = 10, offset = 0 } = body;

    // Get contact submissions with attachments
    const { data: submissions, error } = await supabase
      .from('contact_submissions')
      .select('id, fullname, email, company, ip_address, attachments, created_at')
      .not('attachments', 'is', null)
      .gt('attachment_count', 0)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch submissions' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      submissions: submissions || []
    });

  } catch (error) {
    // Error fetching submissions
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


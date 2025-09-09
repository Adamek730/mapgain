import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Simple endpoint to show you what's in your database
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

    // Get all contact submissions with their attachments
    const { data: submissions, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10);

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch data from database' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Here's what's in your database:",
      submissions: submissions || []
    });

  } catch (error) {
    // Error
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


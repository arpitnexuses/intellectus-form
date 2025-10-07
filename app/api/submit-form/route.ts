import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        { error: 'No data provided' },
        { status: 400 }
      );
    }

    // Log the form data (you can replace this with your actual form processing logic)
    console.log('Form submission received:', body);

    // Return success response
    return NextResponse.json(
      { message: 'Form submitted successfully', data: body },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
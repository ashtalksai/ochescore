import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    status: 'ok',
    timestamp: new Date().toISOString(),
    app: 'ochescore',
    version: '1.0.0'
  });
}

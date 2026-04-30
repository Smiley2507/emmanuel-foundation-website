import { NextRequest, NextResponse } from 'next/server';
import { getTransactionStatus } from '@/lib/momo';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const referenceId = searchParams.get('referenceId');

    if (!referenceId) {
      return NextResponse.json(
        { error: 'referenceId is required' },
        { status: 400 }
      );
    }

    const status = await getTransactionStatus(referenceId);

    return NextResponse.json(status);
  } catch (error) {
    console.error('MoMo status check error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Status check failed: ${message}` },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { country: string } }
) {
  const { country } = params;

  const mockData: Record<string, any> = {
    singapore: {
      capital: 'Singapore',
      population: 5700000,
      currency: 'SGD',
    },
    malaysia: {
      capital: 'Kuala Lumpur',
      population: 32700000,
      currency: 'MYR',
    },
    indonesia: {
      capital: 'Jakarta',
      population: 273000000,
      currency: 'IDR',
    },
  };

  const data = mockData[country.toLowerCase()] || {
    error: 'Country not found',
  };

  return NextResponse.json(data);
}

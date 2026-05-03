import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const client = await pool.connect();

    try {
      const result = await client.query('SELECT description FROM education LIMIT 1');

      if (result.rows.length === 0) {
        return NextResponse.json({ error: 'No education data found' }, { status: 404 });
      }

      return NextResponse.json({ education: result.rows[0].description });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch education' }, { status: 500 });
  }
}

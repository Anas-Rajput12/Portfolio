import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const client = await pool.connect();

    try {
      const result = await client.query('SELECT github, linkedin, email FROM socials LIMIT 1');

      if (result.rows.length === 0) {
        return NextResponse.json({ error: 'No social data found' }, { status: 404 });
      }

      return NextResponse.json(result.rows[0]);
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch socials' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const client = await pool.connect();

    try {
      const experienceResult = await client.query(`
        SELECT id, role, company, duration
        FROM experience
        ORDER BY id
      `);

      const experience = await Promise.all(
        experienceResult.rows.map(async (exp) => {
          const detailsResult = await client.query(
            'SELECT detail FROM experience_details WHERE experience_id = $1',
            [exp.id]
          );

          return {
            role: exp.role,
            company: exp.company,
            duration: exp.duration,
            details: detailsResult.rows.map(row => row.detail)
          };
        })
      );

      return NextResponse.json(experience);
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch experience' }, { status: 500 });
  }
}

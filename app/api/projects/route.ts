import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const client = await pool.connect();

    try {
      const projectsResult = await client.query(`
        SELECT id, title, description, link, github, image
        FROM projects
        ORDER BY id
      `);

      const projects = await Promise.all(
        projectsResult.rows.map(async (project) => {
          const techResult = await client.query(
            'SELECT tech_name FROM project_tech WHERE project_id = $1',
            [project.id]
          );

          return {
            title: project.title,
            description: project.description,
            tech: techResult.rows.map(row => row.tech_name),
            link: project.link,
            github: project.github,
            image: project.image
          };
        })
      );

      return NextResponse.json(projects);
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve(__dirname, '../.env.local') });

import pool from '../lib/db';
import { portfolioData } from '../data/portfolioData';

async function migrate() {
  const client = await pool.connect();

  try {
    console.log('Starting migration...');

    // Drop existing tables if they exist
    await client.query('DROP TABLE IF EXISTS project_tech CASCADE');
    await client.query('DROP TABLE IF EXISTS experience_details CASCADE');
    await client.query('DROP TABLE IF EXISTS projects CASCADE');
    await client.query('DROP TABLE IF EXISTS skills CASCADE');
    await client.query('DROP TABLE IF EXISTS experience CASCADE');
    await client.query('DROP TABLE IF EXISTS socials CASCADE');
    await client.query('DROP TABLE IF EXISTS education CASCADE');

    console.log('Dropped existing tables...');

    // Create education table
    await client.query(`
      CREATE TABLE education (
        id SERIAL PRIMARY KEY,
        description TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create skills table
    await client.query(`
      CREATE TABLE skills (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create projects table
    await client.query(`
      CREATE TABLE projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        link VARCHAR(500),
        github VARCHAR(500),
        image VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create project_tech table (for tech stack)
    await client.query(`
      CREATE TABLE project_tech (
        id SERIAL PRIMARY KEY,
        project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
        tech_name VARCHAR(255) NOT NULL
      )
    `);

    // Create socials table
    await client.query(`
      CREATE TABLE socials (
        id SERIAL PRIMARY KEY,
        github VARCHAR(500),
        linkedin VARCHAR(500),
        email VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create experience table
    await client.query(`
      CREATE TABLE experience (
        id SERIAL PRIMARY KEY,
        role VARCHAR(255) NOT NULL,
        company VARCHAR(255) NOT NULL,
        duration VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create experience_details table
    await client.query(`
      CREATE TABLE experience_details (
        id SERIAL PRIMARY KEY,
        experience_id INTEGER REFERENCES experience(id) ON DELETE CASCADE,
        detail TEXT NOT NULL
      )
    `);

    console.log('Created all tables...');

    // Insert education
    await client.query(
      'INSERT INTO education (description) VALUES ($1)',
      [portfolioData.education]
    );
    console.log('Inserted education data...');

    // Insert skills
    for (const skill of portfolioData.skills) {
      await client.query(
        'INSERT INTO skills (name) VALUES ($1)',
        [skill]
      );
    }
    console.log('Inserted skills data...');

    // Insert projects and their tech stacks
    for (const project of portfolioData.projects) {
      const result = await client.query(
        'INSERT INTO projects (title, description, link, github, image) VALUES ($1, $2, $3, $4, $5) RETURNING id',
        [project.title, project.description, project.link, project.github, project.image]
      );

      const projectId = result.rows[0].id;

      // Insert tech stack for this project
      for (const tech of project.tech) {
        await client.query(
          'INSERT INTO project_tech (project_id, tech_name) VALUES ($1, $2)',
          [projectId, tech]
        );
      }
    }
    console.log('Inserted projects data...');

    // Insert socials
    await client.query(
      'INSERT INTO socials (github, linkedin, email) VALUES ($1, $2, $3)',
      [portfolioData.socials.github, portfolioData.socials.linkedin, portfolioData.socials.email]
    );
    console.log('Inserted socials data...');

    // Insert experience and details
    for (const exp of portfolioData.experience) {
      const result = await client.query(
        'INSERT INTO experience (role, company, duration) VALUES ($1, $2, $3) RETURNING id',
        [exp.role, exp.company, exp.duration]
      );

      const expId = result.rows[0].id;

      // Insert details for this experience
      for (const detail of exp.details) {
        await client.query(
          'INSERT INTO experience_details (experience_id, detail) VALUES ($1, $2)',
          [expId, detail]
        );
      }
    }
    console.log('Inserted experience data...');

    console.log('Migration completed successfully!');

  } catch (error) {
    console.error('Migration failed:', error);
    throw error;
  } finally {
    client.release();
    await pool.end();
  }
}

migrate();

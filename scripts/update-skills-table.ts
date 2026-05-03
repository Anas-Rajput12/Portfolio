import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve(__dirname, '../.env.local') });

import pool from '../lib/db';

async function updateSkillsTable() {
  const client = await pool.connect();

  try {
    console.log('Updating skills table structure...');

    // Drop existing skills table
    await client.query('DROP TABLE IF EXISTS skills CASCADE');

    // Create new skills table with categories
    await client.query(`
      CREATE TABLE skills (
        id SERIAL PRIMARY KEY,
        category VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('Skills table updated successfully!');

    // Insert categorized skills data
    const skillsData = [
      {
        category: "Programming Languages",
        items: ["JavaScript (ES6+)", "TypeScript", "Python", "C++"],
      },
      {
        category: "Frontend Development",
        items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
      },
      {
        category: "Backend & Databases",
        items: [
          "Node.js",
          "Express.js",
          "Flask",
          "MongoDB",
          "PostgreSQL",
          "MySQL",
          "Firebase (Firestore, Auth, Hosting)",
          "Sanity.io (Headless CMS)",
        ],
      },
      {
        category: "AI & Emerging Tech",
        items: [
          "Generative AI",
          "Agentic AI & SDKs",
          "Chatbots & Voice Assistants",
          "Machine Learning Models",
          "Web 3.0 & Blockchain Basics",
        ],
      },
      {
        category: "AI/ML Frameworks & Tools",
        items: [
          "Streamlit",
          "Chainlit",
          "LangChain",
          "OpenAI API",
          "Hugging Face Transformers",
          "Jupyter Notebook",
        ],
      },
      {
        category: "Developer Tools & Platforms",
        items: [
          "Git & GitHub",
          "VS Code",
          "Figma",
          "Postman",
          "Docker",
          "Vercel",
          "Netlify",
          "Railway",
          "XAMPP",
        ],
      },
    ];

    for (const skillGroup of skillsData) {
      for (const skill of skillGroup.items) {
        await client.query(
          'INSERT INTO skills (category, name) VALUES ($1, $2)',
          [skillGroup.category, skill]
        );
      }
    }

    console.log('Skills data migrated successfully!');

  } catch (error) {
    console.error('Failed to update skills table:', error);
    throw error;
  } finally {
    client.release();
    await pool.end();
  }
}

updateSkillsTable();

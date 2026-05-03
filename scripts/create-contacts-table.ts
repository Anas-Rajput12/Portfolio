import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve(__dirname, '../.env.local') });

import pool from '../lib/db';

async function createContactsTable() {
  const client = await pool.connect();

  try {
    console.log('Creating contacts table...');

    await client.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(500) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('Contacts table created successfully!');

  } catch (error) {
    console.error('Failed to create contacts table:', error);
    throw error;
  } finally {
    client.release();
    await pool.end();
  }
}

createContactsTable();

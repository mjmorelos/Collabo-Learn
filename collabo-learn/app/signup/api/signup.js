// pages/api/signup.js
import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body;

    try {
      const dataFilePath = path.join(process.cwd(), 'data.json');
      const existingData = await fs.readFile(dataFilePath, 'utf-8');
      const newData = [...JSON.parse(existingData), formData];
      await fs.writeFile(dataFilePath, JSON.stringify(newData, null, 2));

      res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ success: false, message: 'Error submitting the form' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}

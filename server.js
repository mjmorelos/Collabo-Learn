const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const DATA_FILE = path.join(__dirname, 'data.json');

app.use(bodyParser.json());

app.post('/api/signup', async (req, res) => {
  try {
    // Check if data.json exists, if not, create an empty array
    const existingData = await fs.readFile(DATA_FILE, 'utf-8').catch(() => '[]');
    const parsedData = JSON.parse(existingData);

    // Append new user data to the existing data
    parsedData.push({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      phone: req.body.phone,
    });

    // Write the updated data back to the file
    await fs.writeFile(DATA_FILE, JSON.stringify(parsedData, null, 2), 'utf-8');

    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

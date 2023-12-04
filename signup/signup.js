// pages/api/signup.js
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, username, password, phone } = req.body;

    // Validate the data if needed

    const userData = {
      name,
      email,
      username,
      password,
      phone,
    };

    // Load existing data from data.json
    const filePath = path.join(process.cwd(), 'data.json');
    const rawData = fs.readFileSync(filePath);
    const existingData = JSON.parse(rawData);

    // Add the new user data
    existingData.push(userData);

    // Save the updated data back to data.json
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

    res.status(200).json({ message: 'User data saved successfully' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    

    if (response.ok) {
      console.log('Form submitted successfully');
      // Clear the form after submission if needed
      setFormData({
        name: '',
        email: '',
        username: '',
        password: '',
        phone: '',
      });
    } else {
      console.error('Error submitting the form');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};

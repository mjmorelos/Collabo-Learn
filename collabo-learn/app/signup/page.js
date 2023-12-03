// Import necessary modules
"use client";
import { useState } from 'react';
import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navbar';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/signup', {
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
          phone: '',
        });
      } else {
        console.error('Error submitting the form');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };



  return (
    <div className='bg-white'>
        <Navbar />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className="signup-container bg-black">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-form text-white">
            <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input className='text-black'
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                
            />
            </div>

            <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input className='text-black'
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                required
            />
            <small>Valid email address required</small>
            </div>

            <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input className='text-black'
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
            />
            </div>

            <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              className='text-black'
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

            <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input className='text-black'
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
            />
            </div>

            <button onSubmit={handleSubmit} type="submit">Submit</button>
        </form>

        <style jsx>{`
            .signup-container {
            
            max-width: 400px;
            margin: auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            .signup-form {
            display: grid;
            gap: 15px;
            }

            .form-group {
            display: flex;
            flex-direction: column;
            }

            label {
            margin-bottom: 5px;
            }

            input {
            padding: 8px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            }

            button {
            padding: 10px;
            font-size: 16px;
            background-color: #0070f3;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            }

            button:hover {
            background-color: #0056b3;
            }

            small {
            color: #888;
            font-size: 12px;
            }
        `}</style>
        </div>
        <br /><br /><br /><br /><br />
        <Footer />
    </div>
  );
};

export default Signup;

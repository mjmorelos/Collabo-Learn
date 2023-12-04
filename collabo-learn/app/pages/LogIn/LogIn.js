// pages/Login.js
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navbar';
import { authenticateMockUser } from '../../components/mock-auth';
import { useRouter } from 'next/router';  

const Login = () => {
    const router = useRouter();  // Initialize the useRouter hook
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
  
    const [authenticatedUser, setAuthenticatedUser] = useState(null);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleSignIn = () => {
        const authenticatedUser = authenticateMockUser(formData.email, formData.password);
    
        if (authenticatedUser) {
          alert(`Welcome, ${authenticatedUser.name}!`);
          setAuthenticatedUser(authenticatedUser);
    
          // Redirect to the homepage after successful login
          router.push('/pages/Home');  // Change '/Home' to the desired homepage path
        } else {
          alert("Incorrect email/password. Try Again.");
        }
      };

      useEffect(() => {
        // Redirect to the homepage if the user is already authenticated
        if (authenticatedUser) {
          router.push('/Home');  // Change '/Home' to the desired homepage path
        }
      }, [authenticatedUser, router]);
    
  return (
    <div className='bg-white'>
      <Navbar />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div className="signup-container bg-black">
        <h2>Login</h2>
        <form onSubmit={handleSignIn} className="signup-form text-white">
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              className='text-black'
              type="email"
              id="email"
              name="email"
              value={formData.email}
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

          <button type="submit">Login</button>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <p>Don't have an account? <Link href="/SignUp" style={{ textDecoration: 'underline' }}>Sign Up</Link></p>
          </div>
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

export default Login;

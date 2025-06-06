import React, { useState } from 'react';
import axios from 'axios';
import './auth.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
    const handleChange = (e) => {
    const {name, value} = e.target;
      setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {email, password} = formData;
    if (email && password ) {
      

    if (!email || !password) {
      console.log('Please fill in all fields');
      setError('Please fill in all fields');
    return;
  }
  console.log('Login');

    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password
      });

      const token = response.data.token;

      if (token) {
        localStorage.setItem('token', token);
        console.log('Token stored in local storage:', token);
      }

      console.log('Login successful:', response.data);
      navigate('/');
      } catch (error) {
        console.error('Error during login:', error);
        setError('Invalid email or password');
      }
    }
  }

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-card">
        <h2 className="auth-title">Welcome Back</h2>

        <label>Email Address</label>
        <input type="email" name="email" onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} required />

        <button type="submit">Login</button>

        <p className="auth-footer">Don't have an account? <a href="/register">Register</a></p>
      </form>
    </div>
  );
};

export default Login;

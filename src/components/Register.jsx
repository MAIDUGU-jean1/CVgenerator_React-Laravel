import React, { useState } from 'react';
import './auth.css';


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
       const {name , value} = e.target
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    // You’ll send this to Laravel later
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-card">
        <h2 className="auth-title">Create Account</h2>

        <label>Full Name</label>
        <input type="text" name="name" onChange={handleChange} required />

        <label>Email Address</label>
        <input type="email" name="email" onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} required />

        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" onChange={handleChange} required />

        <button type="submit">Register</button>

        <p className="auth-footer">Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
};

export default Register;

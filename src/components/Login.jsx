import React, { useState } from 'react';
import './auth.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const {name, value} = e.target;
      setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    // Later: send to Laravel
  };

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

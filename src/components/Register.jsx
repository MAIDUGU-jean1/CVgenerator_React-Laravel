import { useState } from 'react';
import './auth.css';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
       const {name , value} = e.target
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form Data',formData);
    if(formData.password != formData.confirmPassword){
      console.log('Password Do not match');
      return ;
    }
    try {
      await axios.post('http://localhost:8000/api/register',{
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }).then((response) => {
        console.log(response.data)
      })
    } catch (error) {
      console.error('error during registration ', error)
    }
          
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-card">
        <h2 className="auth-title">Create Account</h2>

        <label>Username</label>
        <input type="text" name="name" onChange={handleInputChange} required />

        <label>Email Address</label>
        <input type="email" name="email" onChange={handleInputChange} required />

        <label>Password</label>
        <input type="password" name="password" onChange={handleInputChange} required />

        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" onChange={handleInputChange} required />

        <button type="submit">Register</button>

        <p className="auth-footer">Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
};

export default Register;

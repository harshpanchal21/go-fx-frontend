import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return alert('Passwords do not match');
    }

    try {
      const res = await axios.post('https://your-backend-url/api/auth/signup', {
        name: form.name,
        email: form.email,
        password: form.password,
      });
      localStorage.setItem('token', res.data.token);
      alert('Signup successful');
    } catch (err) {
      alert(err.response?.data?.msg || 'Signup failed');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 mt-10">
      <h2 className="text-xl font-bold">Create your GO-FX Account</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input className="border p-2 w-full" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required />
        <input className="border p-2 w-full" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <input className="border p-2 w-full" type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required />
        <input className="border p-2 w-full" type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

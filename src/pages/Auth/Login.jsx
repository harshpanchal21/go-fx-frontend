import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('https://your-backend-url/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      alert('Login successful');
    } catch (err) {
      alert(err.response.data.msg || 'Error');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Login to GO-FX</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input className="border p-2 w-full" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <input className="border p-2 w-full" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;

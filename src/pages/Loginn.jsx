import React, { useState } from 'react';

function Login({ onRegister }) {
  // State to manage form input values
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Login successful');
        // Handle successful login (e.g., redirect, store token, etc.)
      } else {
        alert(result.error);
      }
    } catch (err) {
      alert('Something went wrong');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg bg-white"
          />
        </div>
        <div className="relative">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg bg-white"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-center">
        <span>Don't have an account? </span>
        <button onClick={onRegister} className="text-blue-500 hover:underline">
          Register here.
        </button>
      </p>
    </div>
  );
}

export default Login;

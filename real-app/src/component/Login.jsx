import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure react-router-dom is installed

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.email.includes('@')) {
      newErrors.email = 'Invalid email address';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      // Add backend logic here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-gray-500">or sign in with</div>

        <div className="mt-4 flex flex-col space-y-3">
          <button className="flex items-center justify-center bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition">
            {/* Google Icon */}
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.35 11.1h-9.18v2.92h5.3c-.23 1.3-1.4 3.8-5.3 3.8-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8c1.8 0 3 .7 3.7 1.3l2.5-2.5C17.6 3.9 15.7 3 13.3 3 7.9 3 3.6 7.3 3.6 12.7s4.3 9.7 9.7 9.7c5.6 0 9.3-3.9 9.3-9.3 0-.6-.1-1.3-.2-1.9z" />
            </svg>
            Sign in with Google
          </button>

          <button className="flex items-center justify-center bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 transition">
            {/* Facebook Icon */}
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.5 9.9v-7H7.5v-3h3V9.5c0-3 1.8-4.6 4.5-4.6 1.3 0 2.6.2 2.6.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3h-2.9v7C18.3 21.1 22 17 22 12z" />
            </svg>
            Sign in with Facebook
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

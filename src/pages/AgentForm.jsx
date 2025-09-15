import React from 'react';

const AgentForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-lg w-full p-8 shadow-md rounded-lg bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Agent Onboarding</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-md" />
          <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border rounded-md" />
          <input type="text" placeholder="Agency Name" className="w-full px-4 py-2 border rounded-md" />
          <textarea placeholder="Tell us about your experience" className="w-full px-4 py-2 border rounded-md" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgentForm;

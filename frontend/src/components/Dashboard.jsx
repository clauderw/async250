import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const name = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="flex-1 flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center w-full max-w-md border mx-auto">      
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome, {name || 'User'}!</h1>
        <p className="text-gray-500 mb-8">You are now logged into your Stock Management dashboard.</p>
        <div className="space-y-4">
          <button 
            onClick={handleLogout}
            className="bg-red-500 text-white px-8 py-3 rounded-full font-bold hover:bg-red-600 transition-colors w-full max-w-xs mx-auto block"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

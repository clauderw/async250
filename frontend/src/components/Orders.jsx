import React from 'react';
import { useNavigate } from 'react-router-dom';

function Orders() {
  const navigate = useNavigate();
  const name = localStorage.getItem("username") || 'User';

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Orders</h1>
        <p className="text-gray-500 mb-8">Welcome to Orders page, {name}!</p>
        <p className="text-lg">Placeholder for orders list. Integrate with backend API later.</p>
        <div className="mt-8 flex gap-4">
          <button 
            onClick={() => navigate('/dashboard')}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-600"
          >
            Go to Dashboard
          </button>
          <button 
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Orders;


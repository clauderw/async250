// LINE 1: Import React tools
import React from 'react';
import { useNavigate } from 'react-router-dom';

// LINE 2: Dashboard component
function Dashboard() {
  
  // LINE 3: Initialize navigation
  const navigate = useNavigate();
  
  // LINE 4: Read the name we saved in Login from localStorage
  const name = localStorage.getItem("username");

  // LINE 5: Function to logout
  const handleLogout = () => {
    localStorage.clear(); // Clear all saved data
    navigate("/login");   // Go back to login screen
  };

  return (
    // LINE 6: Layout for the dashboard card
    <div className="bg-white p-10 rounded-xl shadow-lg text-center w-full max-w-md border">
      
      {/* LINE 7: Display the logged-in user's name */}
      <h1 className="text-3xl font-bold text-gray-800">Welcome, {name}!</h1>
      
      {/* LINE 8: A simple message */}
      <p className="text-gray-500 mt-2">You are now logged into your student portal.</p>
      
      {/* LINE 9: Logout button area */}
      <div className="mt-8">
        <button 
          onClick={handleLogout}
          className="bg-red-500 text-white px-6 py-2 rounded-full font-bold hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      
    </div>
  );
}

export default Dashboard;
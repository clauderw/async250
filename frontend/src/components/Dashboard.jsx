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
    <div className="flex-1 flex items-center justify-center min-h-screen p-4 bg-gray-100">
      {/* LINE 6: Layout for the dashboard card */}
      <div className="bg-white p-10 rounded-xl shadow-lg text-center w-full max-w-md border mx-auto">      
        {/* LINE 7: Display the logged-in user's name */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome, {name}!</h1>
        
        {/* LINE 8: A simple message */}
        <p className="text-gray-500 mb-8">You are now logged into your Stock Management dashboard.</p>
        
        {/* LINE 9: Logout button area */}
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
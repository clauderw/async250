// // LINE 1: Import React and useState (useState stores data)
// import React, { useState } from 'react';

// // LINE 2: Import our three screens
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Dashboard from './components/Dashboard';

// // LINE 3: Main App component
// function App() {
  
//   // LINE 4: This variable decides which screen to show (true = login, false = signup)
//   const [showLogin, setShowLogin] = useState(true);
  
//   // LINE 5: This variable stores the logged in user (null = not logged in)
//   const [user, setUser] = useState(null);

//   // LINE 6: If user is logged in, show Dashboard
//   if (user !== null) {
//     return <Dashboard user={user} setUser={setUser} />;
//   }

//   // LINE 7: If not logged in, show either Login or Signup
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       {showLogin === true ? (
//         <Login setUser={setUser} setShowLogin={setShowLogin} />
//       ) : (
//         <Signup setUser={setUser} setShowLogin={setShowLogin} />
//       )}
//     </div>
//   );
// }

// // LINE 8: Export so other files can use App
// export default App;











// LINE 1: Import Route tools
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

// LINE 2: Import our pages
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Test from './components/test';
import test from 'node:test';

// LINE 3: Main App function
function App() {
  return (
    // LINE 4: Router wrapper
    <BrowserRouter>
      
      {/* LINE 5: Center everything on screen with Tailwind */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        
        {/* LINE 6: List of page paths */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/test' element={<Test/>}/>
          <Route path="/" element={<Signup />} /> 
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
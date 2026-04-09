import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      setUser({ name: username });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUser(null);
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:text-gray-900';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Async Africa" className="h-8 w-8" />
              <span className="font-bold text-xl text-gray-900">STOCK MANAGEMENT SYSTEM</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/dashboard"
              className={`px-3 py-2 rounded-md font-medium ${isActive('/dashboard')}`}
            >
              Dashboard
            </Link>
            <Link
              to="/orders"
              className={`px-3 py-2 rounded-md font-medium ${isActive('/orders')}`}
            >
              Orders
            </Link>
<Link to="/products" className={`flex items-center space-x-1 px-3 py-2 rounded-md font-medium ${isActive('/products')}`}>
              <img src="/logo.png" alt="Stock" className="h-5 w-5 flex-shrink-0" />
              Products
            </Link>
            {user ? (
              <button
                onClick={handleLogout}
                className="px-3 py-2 rounded-md font-medium text-gray-600 hover:text-gray-900"
              >
                Logout ({user.name})
              </button>
            ) : (
              <Link
                to="/login"
                className={`px-3 py-2 rounded-md font-medium ${isActive('/login')} text-gray-600 hover:text-gray-900`}
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              to="/dashboard"
              className={`block px-3 py-2 rounded-md font-medium ${isActive('/dashboard')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/orders"
              className={`block px-3 py-2 rounded-md font-medium ${isActive('/orders')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Orders
            </Link>
<Link
              to="/products"
              className={`flex items-center space-x-1 block px-3 py-2 rounded-md font-medium ${isActive('/products')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <img src="/logo.png" alt="Stock" className="h-5 w-5 flex-shrink-0" />
              Products
            </Link>
            {user ? (
              <button
                onClick={handleLogout}
                className="block w-full text-left px-3 py-2 rounded-md font-medium text-gray-600 hover:text-gray-900"
              >
                Logout ({user.name})
              </button>
            ) : (
              <Link
                to="/login"
                className={`block px-3 py-2 rounded-md font-medium ${isActive('/login')} text-gray-600 hover:text-gray-900`}
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


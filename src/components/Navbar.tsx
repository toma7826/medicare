import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, X, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className="bg-white shadow-md" 
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link 
              to="/" 
              className="flex-shrink-0 flex items-center"
              aria-label="Home"
            >
              <span className="text-2xl font-bold text-blue-600">Medicare</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              aria-current={location.pathname === '/' ? 'page' : undefined}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/services'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              aria-current={location.pathname === '/services' ? 'page' : undefined}
            >
              Services
            </Link>
            <Link
              to="/doctors"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/doctors'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              aria-current={location.pathname === '/doctors' ? 'page' : undefined}
            >
              Doctors
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/contact'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              aria-current={location.pathname === '/contact' ? 'page' : undefined}
            >
              Contact
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">{user.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  aria-label="Logout"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-md text-sm font-medium text-blue-600 hover:text-blue-800"
                  aria-label="Login"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  aria-label="Sign up"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              aria-current={location.pathname === '/' ? 'page' : undefined}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/services'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              aria-current={location.pathname === '/services' ? 'page' : undefined}
            >
              Services
            </Link>
            <Link
              to="/doctors"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/doctors'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              aria-current={location.pathname === '/doctors' ? 'page' : undefined}
            >
              Doctors
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/contact'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              aria-current={location.pathname === '/contact' ? 'page' : undefined}
            >
              Contact
            </Link>
            {user ? (
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <User className="h-10 w-10 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{user.name}</div>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <button
                    onClick={logout}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                    aria-label="Logout"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="space-y-1">
                  <Link
                    to="/login"
                    className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:text-blue-800"
                    aria-label="Login"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                    aria-label="Sign up"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
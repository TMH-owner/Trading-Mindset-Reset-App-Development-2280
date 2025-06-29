import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiHome, FiCalendar, FiBarChart3, FiUser, FiLogOut, FiBook } = FiIcons;

const Navbar = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: FiHome },
    { path: '/booking', label: 'Book Appointment', icon: FiCalendar },
    { path: '/course', label: 'Courses', icon: FiBook },
    ...(user ? [{ path: '/dashboard', label: 'Dashboard', icon: FiBarChart3 }] : [])
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-calm-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-success-500 rounded-xl flex items-center justify-center shadow-lg">
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751180182134-blob" 
                alt="Logo" 
                className="w-6 h-6 text-white"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
              Trader Mindset Hub
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-primary-50 text-primary-600 shadow-sm'
                    : 'text-calm-600 hover:text-primary-600 hover:bg-calm-50'
                }`}
              >
                <SafeIcon icon={item.icon} className="text-sm" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}

            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 px-3 py-2 bg-success-50 rounded-lg">
                  <SafeIcon icon={FiUser} className="text-success-600" />
                  <span className="text-sm font-medium text-success-700">{user.name}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-2 px-4 py-2 text-calm-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                >
                  <SafeIcon icon={FiLogOut} className="text-sm" />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-6 py-2 bg-gradient-to-r from-primary-500 to-success-500 text-white font-medium rounded-lg hover:from-primary-600 hover:to-success-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-calm-100 transition-colors"
          >
            <SafeIcon icon={isOpen ? FiX : FiMenu} className="text-xl" />
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-calm-200"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-calm-600 hover:text-primary-600 hover:bg-calm-50'
                }`}
              >
                <SafeIcon icon={item.icon} />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}

            {user ? (
              <div className="mt-4 pt-4 border-t border-calm-200">
                <div className="flex items-center space-x-3 px-4 py-2 mb-2">
                  <SafeIcon icon={FiUser} className="text-success-600" />
                  <span className="font-medium text-success-700">{user.name}</span>
                </div>
                <button
                  onClick={() => {
                    onLogout();
                    setIsOpen(false);
                  }}
                  className="flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 w-full"
                >
                  <SafeIcon icon={FiLogOut} />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            ) : (
              <div className="mt-4 pt-4 border-t border-calm-200 space-y-2">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 bg-gradient-to-r from-primary-500 to-success-500 text-white font-medium rounded-lg hover:from-primary-600 hover:to-success-600 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiTwitter, FiLinkedin, FiYoutube } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-calm-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-success-500 rounded-xl flex items-center justify-center">
                <img 
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751180182134-blob" 
                  alt="Logo" 
                  className="w-6 h-6"
                />
              </div>
              <span className="text-xl font-bold">Trader Mindset Hub</span>
            </div>
            <p className="text-calm-300 mb-6 max-w-md">
              Transform your trading psychology with proven LOA, Ho'oponopono, and NLP techniques. 
              Master emotional control and achieve consistent trading results.
            </p>
            <div className="space-y-2 text-sm text-calm-300">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMail} />
                <span>support@tradermindsethub.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiPhone} />
                <span>+91 89993 49416</span>
              </div>
              <div className="flex items-start space-x-2">
                <SafeIcon icon={FiMapPin} className="mt-0.5" />
                <span>203, Swarasamwad, 425/9, Mukund Nagar, Pune – 411037, Maharashtra</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-calm-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/booking" className="block text-calm-300 hover:text-white transition-colors">
                Book Appointment
              </Link>
              <Link to="/course" className="block text-calm-300 hover:text-white transition-colors">
                Courses
              </Link>
              <Link to="/dashboard" className="block text-calm-300 hover:text-white transition-colors">
                Dashboard
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-calm-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-calm-300 hover:text-white transition-colors">
                Terms of Use
              </Link>
            </div>
            
            <h3 className="text-lg font-semibold mb-4 mt-8">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-calm-300 hover:text-white transition-colors">
                <SafeIcon icon={FiTwitter} className="text-xl" />
              </a>
              <a href="#" className="text-calm-300 hover:text-white transition-colors">
                <SafeIcon icon={FiLinkedin} className="text-xl" />
              </a>
              <a href="#" className="text-calm-300 hover:text-white transition-colors">
                <SafeIcon icon={FiYoutube} className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-calm-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-calm-400 text-sm">
            © 2024 Trader Mindset Hub. All rights reserved.
          </p>
          <p className="text-calm-400 text-sm mt-2 md:mt-0">
            SEBI Registered Research Analyst
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
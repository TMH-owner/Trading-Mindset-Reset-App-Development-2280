import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiTrendingUp, FiTarget, FiZap } = FiIcons;

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-success-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-success-100 rounded-full text-sm font-medium text-primary-700">
              <SafeIcon icon={FiZap} className="mr-2" />
              Trading Psychology Masterclass 2025
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Master Your{' '}
              <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
                Trading Mindset
              </span>
              {' '}for Consistent Results
            </h1>

            <p className="text-xl text-calm-600 leading-relaxed">
              Transform your trading psychology with proven LOA, Ho'oponopono, and NLP techniques. 
              Join 1M+ traders who've discovered the secret to emotional control and consistent profits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-success-500 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-success-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Find Your Perfect Balance
                <SafeIcon icon={FiArrowRight} className="ml-2" />
              </Link>
              
              <Link
                to="/course"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-500 text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-200"
              >
                Explore Courses
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiTrendingUp} className="text-success-500" />
                <span className="text-sm text-calm-600">1M+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiTarget} className="text-primary-500" />
                <span className="text-sm text-calm-600">95% Success Rate</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-primary-100 to-success-100 rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Successful Trader"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiTrendingUp} className="text-success-600 text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-calm-900">Consistent Profits</p>
                  <p className="text-sm text-calm-600">Emotional Control Mastery</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
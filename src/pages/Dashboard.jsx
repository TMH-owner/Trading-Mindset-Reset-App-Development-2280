import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import ProgressChart from '../components/ProgressChart';
import MindsetMetrics from '../components/MindsetMetrics';
import LearningPath from '../components/LearningPath';

const { FiTrendingUp, FiTarget, FiBrain, FiHeart, FiBook, FiCalendar } = FiIcons;

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('week');

  const stats = [
    {
      icon: FiTrendingUp,
      title: 'Trading Consistency',
      value: '87%',
      change: '+12%',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiTarget,
      title: 'Emotional Control',
      value: '94%',
      change: '+8%',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiBrain,
      title: 'Mindset Score',
      value: '91%',
      change: '+15%',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiHeart,
      title: 'Stress Level',
      value: 'Low',
      change: '-25%',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const recentActivities = [
    {
      type: 'session',
      title: 'Completed Ho\'oponopono Healing Session',
      time: '2 hours ago',
      icon: FiHeart
    },
    {
      type: 'practice',
      title: 'NLP Anchoring Practice - 15 minutes',
      time: '1 day ago',
      icon: FiBrain
    },
    {
      type: 'lesson',
      title: 'Law of Attraction Module Completed',
      time: '2 days ago',
      icon: FiBook
    },
    {
      type: 'session',
      title: 'Live Cohort Session Attended',
      time: '3 days ago',
      icon: FiCalendar
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Your Trading Psychology Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            Track your mindset transformation and trading consistency progress
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                <SafeIcon icon={stat.icon} className="text-white text-xl" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {stat.title}
              </h3>
              
              <div className="flex items-end justify-between">
                <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <ProgressChart timeRange={timeRange} setTimeRange={setTimeRange} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg h-full">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Activities</h3>
              
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <SafeIcon icon={activity.icon} className="text-primary-600 text-sm" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <MindsetMetrics />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <LearningPath />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
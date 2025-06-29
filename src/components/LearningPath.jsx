import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiClock, FiLock, FiPlay, FiBrain, FiHeart, FiTarget } = FiIcons;

const LearningPath = () => {
  const modules = [
    {
      id: 1,
      title: 'Foundation of Trading Psychology',
      description: 'Understanding the mindset basics',
      status: 'completed',
      progress: 100,
      icon: FiBrain,
      color: 'green'
    },
    {
      id: 2,
      title: 'NLP Anchoring Techniques',
      description: 'Master emotional state control',
      status: 'current',
      progress: 65,
      icon: FiTarget,
      color: 'blue'
    },
    {
      id: 3,
      title: 'Ho\'oponopono for Traders',
      description: 'Healing trading trauma and blocks',
      status: 'current',
      progress: 30,
      icon: FiHeart,
      color: 'purple'
    },
    {
      id: 4,
      title: 'Law of Attraction Mastery',
      description: 'Align with trading success',
      status: 'locked',
      progress: 0,
      icon: FiBrain,
      color: 'gray'
    },
    {
      id: 5,
      title: 'Advanced Mindset Integration',
      description: 'Combining all techniques',
      status: 'locked',
      progress: 0,
      icon: FiTarget,
      color: 'gray'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return FiCheck;
      case 'current':
        return FiPlay;
      case 'locked':
        return FiLock;
      default:
        return FiClock;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-500 bg-green-100';
      case 'current':
        return 'text-blue-500 bg-blue-100';
      case 'locked':
        return 'text-gray-400 bg-gray-100';
      default:
        return 'text-orange-500 bg-orange-100';
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Learning Path</h3>
      
      <div className="space-y-4">
        {modules.map((module, index) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative p-4 rounded-lg border-2 transition-all duration-200 ${
              module.status === 'current'
                ? 'border-blue-200 bg-blue-50'
                : module.status === 'completed'
                ? 'border-green-200 bg-green-50'
                : 'border-gray-200 bg-gray-50'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor(module.status)}`}>
                <SafeIcon icon={getStatusIcon(module.status)} className="text-lg" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {module.title}
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  {module.description}
                </p>
                
                {module.status !== 'locked' && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">{module.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${module.progress}%` }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                        className={`h-2 rounded-full ${
                          module.status === 'completed'
                            ? 'bg-green-500'
                            : 'bg-blue-500'
                        }`}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
            <SafeIcon icon={FiTarget} className="text-primary-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Next Live Session</h4>
            <p className="text-sm text-gray-600">Tomorrow at 7:00 PM IST</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlay, FiBook, FiClock, FiUsers, FiStar, FiDownload, FiLock } = FiIcons;

const CoursePage = ({ user }) => {
  const [selectedModule, setSelectedModule] = useState(null);

  const modules = [
    {
      id: 1,
      title: 'Foundation of Trading Psychology',
      description: 'Understanding the core principles of trading mindset',
      duration: '45 min',
      videos: 3,
      status: user ? 'unlocked' : 'locked',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      lessons: [
        { title: 'Introduction to Trading Psychology', duration: '15 min', type: 'video' },
        { title: 'Common Mental Traps', duration: '20 min', type: 'video' },
        { title: 'Building Mental Resilience', duration: '10 min', type: 'article' }
      ]
    },
    {
      id: 2,
      title: 'NLP Anchoring Techniques',
      description: 'Master emotional state control through NLP',
      duration: '60 min',
      videos: 4,
      status: user ? 'unlocked' : 'locked',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      lessons: [
        { title: 'What is NLP Anchoring?', duration: '12 min', type: 'video' },
        { title: 'Creating Positive Anchors', duration: '18 min', type: 'video' },
        { title: 'Practical Exercises', duration: '20 min', type: 'video' },
        { title: 'Daily Practice Guide', duration: '10 min', type: 'article' }
      ]
    },
    {
      id: 3,
      title: 'Ho\'oponopono Healing for Traders',
      description: 'Ancient Hawaiian healing practices for trading trauma',
      duration: '50 min',
      videos: 3,
      status: user ? 'unlocked' : 'locked',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      lessons: [
        { title: 'Understanding Ho\'oponopono', duration: '15 min', type: 'video' },
        { title: 'Four Key Phrases Practice', duration: '25 min', type: 'video' },
        { title: 'Healing Trading Blocks', duration: '10 min', type: 'article' }
      ]
    },
    {
      id: 4,
      title: 'Law of Attraction for Trading Success',
      description: 'Align your mindset with consistent profits',
      duration: '55 min',
      videos: 4,
      status: user ? 'unlocked' : 'locked',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      lessons: [
        { title: 'LOA Fundamentals', duration: '15 min', type: 'video' },
        { title: 'Visualization Techniques', duration: '20 min', type: 'video' },
        { title: 'Affirmations for Traders', duration: '12 min', type: 'video' },
        { title: 'Success Stories', duration: '8 min', type: 'article' }
      ]
    }
  ];

  const handleModuleClick = (module) => {
    if (module.status === 'unlocked') {
      setSelectedModule(module);
    }
  };

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
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-calm-900 mb-4">
            Trading Psychology Masterclass
          </h1>
          <p className="text-xl text-calm-600 max-w-3xl mx-auto">
            Transform your trading mindset with proven techniques in LOA, Ho'oponopono, and NLP
          </p>
        </motion.div>

        {!user && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-primary-50 to-success-50 rounded-2xl p-8 mb-8 border border-primary-200"
          >
            <div className="text-center">
              <SafeIcon icon={FiLock} className="text-4xl text-primary-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-calm-900 mb-2">
                Unlock Full Course Access
              </h3>
              <p className="text-calm-600 mb-6">
                Sign in to access all video lessons, exercises, and exclusive content
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#/login"
                  className="px-6 py-3 bg-gradient-to-r from-primary-500 to-success-500 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-success-600 transition-all duration-200"
                >
                  Sign In
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#/signup"
                  className="px-6 py-3 border-2 border-primary-500 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all duration-200"
                >
                  Create Account
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-calm-900 mb-6">Course Modules</h2>
            <div className="space-y-4">
              {modules.map((module, index) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleModuleClick(module)}
                  className={`p-6 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                    module.status === 'unlocked'
                      ? selectedModule?.id === module.id
                        ? 'border-primary-500 bg-primary-50 shadow-lg'
                        : 'border-calm-200 bg-white hover:border-primary-300 hover:shadow-md'
                      : 'border-calm-100 bg-calm-50 cursor-not-allowed opacity-60'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-calm-900 flex-1">
                      {module.title}
                    </h3>
                    {module.status === 'locked' ? (
                      <SafeIcon icon={FiLock} className="text-calm-400 mt-1" />
                    ) : (
                      <SafeIcon icon={FiPlay} className="text-primary-500 mt-1" />
                    )}
                  </div>
                  
                  <p className="text-calm-600 text-sm mb-4">{module.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-calm-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiClock} />
                        <span>{module.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiPlay} />
                        <span>{module.videos} videos</span>
                      </div>
                    </div>
                    {module.status === 'unlocked' && (
                      <div className="flex items-center space-x-1 text-success-600">
                        <SafeIcon icon={FiStar} />
                        <span>Unlocked</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            {selectedModule ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="aspect-video">
                  <iframe
                    src={selectedModule.videoUrl}
                    title={selectedModule.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-calm-900 mb-4">
                    {selectedModule.title}
                  </h2>
                  <p className="text-calm-600 mb-6">{selectedModule.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-calm-900 mb-4">Course Content</h3>
                    <div className="space-y-3">
                      {selectedModule.lessons.map((lesson, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-calm-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <SafeIcon 
                              icon={lesson.type === 'video' ? FiPlay : FiBook} 
                              className="text-primary-500" 
                            />
                            <div>
                              <h4 className="font-medium text-calm-900">{lesson.title}</h4>
                              <p className="text-sm text-calm-600">{lesson.duration}</p>
                            </div>
                          </div>
                          <SafeIcon icon={FiDownload} className="text-calm-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <SafeIcon icon={FiPlay} className="text-6xl text-calm-300 mb-6 mx-auto" />
                <h3 className="text-2xl font-bold text-calm-900 mb-4">
                  Select a Module to Begin
                </h3>
                <p className="text-calm-600">
                  Choose a module from the left sidebar to start your learning journey
                </p>
              </div>
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-success-50 to-primary-50 rounded-2xl p-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-calm-900 mb-4">
              Join Our Live Sessions
            </h3>
            <p className="text-calm-600 mb-6">
              Connect with fellow traders and get real-time feedback from our experts
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-calm-600">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiUsers} />
                <span>Live Q&A Sessions</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiClock} />
                <span>Weekly Workshops</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiStar} />
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CoursePage;
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiClock, FiUsers } = FiIcons;

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-5xl font-bold mb-6">
            Take Control of Your Trading Journey
          </h2>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of successful traders who have transformed their mindset and achieved consistent results. 
            Your journey to trading mastery starts with a single decision.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-12 py-6 bg-white text-primary-600 font-bold text-lg rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              Start Your Transformation
              <SafeIcon icon={FiArrowRight} className="ml-3 text-xl" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiUsers} className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2">1M+ Students</h3>
              <p className="opacity-80">Join our global community</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiClock} className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Live Sessions</h3>
              <p className="opacity-80">Weekly interactive training</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiArrowRight} className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Proven Results</h3>
              <p className="opacity-80">95% success rate</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
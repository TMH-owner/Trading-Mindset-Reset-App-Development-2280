import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiX } = FiIcons;

const Benefits = () => {
  const benefits = [
    {
      with: 'Comprehensive Learning: Deep understanding of both basic and advanced trading psychology concepts',
      without: 'Limited Knowledge: Fragmented resources leading to gaps in understanding and ineffective strategies'
    },
    {
      with: 'Subconscious Rewiring Techniques: Practical exercises to rewire limiting beliefs and foster a healthier mindset',
      without: 'Stagnant Mindset: Struggle with self-doubt and fear, hindering decision-making abilities'
    },
    {
      with: 'Supportive Community: Collaborative cohort environment for sharing experiences and insights',
      without: 'Isolation: Working alone, missing valuable peer support and learning opportunities'
    },
    {
      with: 'Expert Guidance: Personalized feedback and mentorship from seasoned professionals',
      without: 'Self-Taught Pitfalls: Common traps leading to costly mistakes and missed opportunities'
    },
    {
      with: 'Actionable Strategies: Practical tools that can be immediately applied to trading practices',
      without: 'Theoretical Knowledge: Theory without actionable steps, leaving traders overwhelmed and unprepared'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            With vs Without Our Masterclass
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the dramatic difference our comprehensive approach makes in your trading journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <SafeIcon icon={FiCheck} className="text-green-600 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-green-700">With Our Masterclass</h3>
            </div>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg"
                >
                  <SafeIcon icon={FiCheck} className="text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{benefit.with}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-200"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <SafeIcon icon={FiX} className="text-red-600 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-red-700">Without Our Masterclass</h3>
            </div>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg"
                >
                  <SafeIcon icon={FiX} className="text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{benefit.without}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
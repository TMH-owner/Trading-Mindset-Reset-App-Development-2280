import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiBrain, FiHeart, FiTarget, FiUsers, FiBookOpen, FiTrendingUp } = FiIcons;

const Features = () => {
  const features = [
    {
      icon: FiBrain,
      title: 'Subconscious Rewiring',
      description: 'Master NLP anchoring techniques to reprogram limiting beliefs and develop a winning trader mindset.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiHeart,
      title: 'Ho\'oponopono Healing',
      description: 'Release negative emotions and trading trauma through ancient Hawaiian healing practices.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: FiTarget,
      title: 'Law of Attraction',
      description: 'Align your thoughts and emotions with trading success to attract consistent profitable opportunities.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiUsers,
      title: 'Live Cohort Learning',
      description: 'Join weekly live sessions with like-minded traders for real-time feedback and community support.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FiBookOpen,
      title: 'Comprehensive Curriculum',
      description: 'From basic psychology to advanced mindset mastery - everything you need for trading success.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: FiTrendingUp,
      title: 'Proven Results',
      description: 'Join 1M+ traders who have transformed their trading psychology and achieved consistent results.',
      color: 'from-emerald-500 to-green-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Makes Our Course Different?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just teach trading strategies - we transform your entire relationship with trading through proven psychological techniques.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <SafeIcon icon={feature.icon} className="text-white text-2xl" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiGift, FiUser, FiHeart, FiBook } = FiIcons;

const Bonuses = () => {
  const bonuses = [
    {
      icon: FiUser,
      title: 'Personalized Mindset Assessment Session',
      value: '₹5,000',
      description: 'Dive deep into your trading mindset with a one-on-one session designed to identify your unique psychological barriers and strengths. Get actionable insights and strategies to cultivate a winning mindset.'
    },
    {
      icon: FiHeart,
      title: 'Law of Attraction Toolkit',
      value: '₹3,000',
      description: 'Comprehensive toolkit with guided meditations, affirmations, and visualization exercises specifically designed for traders. Align your thoughts and emotions with your trading goals.'
    },
    {
      icon: FiBook,
      title: 'Ho\'oponopono Prayer Guide for Traders',
      value: '₹4,000',
      description: 'Beautiful guide introducing the transformative power of Ho\'oponopono prayers. Foster forgiveness and healing, releasing negative emotions holding you back in trading.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-medium text-purple-700 mb-4">
            <SafeIcon icon={FiGift} className="mr-2" />
            Limited Time Offer
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Exclusive Fast Action Bonuses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For the next 10 people who take action today, you'll receive these valuable bonuses worth ₹12,000 absolutely FREE!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <SafeIcon icon={bonus.icon} className="text-white text-2xl" />
              </div>
              
              <div className="mb-4">
                <span className="text-2xl font-bold text-purple-600">{bonus.value}</span>
                <span className="text-sm text-gray-500 ml-2">Value</span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {bonus.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {bonus.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">Total Bonus Value: ₹12,000</h3>
          <p className="text-xl opacity-90">
            Don't miss out on this opportunity to enrich your trading mindset and set yourself up for success!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Bonuses;
import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiUser } = FiIcons;

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Day Trader',
      content: 'The Ho\'oponopono techniques completely transformed my emotional relationship with trading. I went from panic selling to confident decision-making.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Priya Sharma',
      role: 'Swing Trader',
      content: 'The NLP anchoring techniques are game-changers. I can now maintain my composure even during volatile market conditions.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Amit Patel',
      role: 'Options Trader',
      content: 'Law of Attraction principles helped me align my mindset with success. My trading consistency improved by 300% in just 3 months.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const questions = [
    'Do you find yourself second-guessing your trading decisions, even when you\'ve done your homework?',
    'Are you often overwhelmed by the emotional rollercoaster that comes with market fluctuations?',
    'Do you feel the pressure of balancing your job responsibilities with the demands of trading?',
    'Have you ever experienced the frustration of making the same mistakes repeatedly, despite knowing better?',
    'Is the fear of losing capital keeping you up at night, affecting your overall well-being?'
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
            Can You Relate to These Questions?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            If you answered yes to any of these, you're not alone. Here's how our students overcame these challenges.
          </p>
        </motion.div>

        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {questions.map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-400"
              >
                <p className="text-gray-700 font-medium">{question}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="text-yellow-400 text-lg fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <SafeIcon icon={FiUser} className="text-gray-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
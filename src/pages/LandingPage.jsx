import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Bonuses from '../components/Bonuses';
import CTA from '../components/CTA';

const { FiArrowRight } = FiIcons;

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <Bonuses />
      <CTA />
    </motion.div>
  );
};

export default LandingPage;
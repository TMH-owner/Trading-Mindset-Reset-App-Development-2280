import React from 'react';
import { motion } from 'framer-motion';

const TermsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <h1 className="text-4xl font-bold text-calm-900 mb-8">Terms of Use</h1>
          
          <div className="prose prose-lg max-w-none text-calm-700 space-y-6">
            <p>
              Please read these Terms of Use carefully. By accessing or using www.tradermindsethub.com ("Website"), you agree to be bound by these Terms. If you do not agree, you must stop using this Website and any of its services immediately.
            </p>
            <p>
              These Terms must be read along with our Privacy Policy and any other policies listed on this Website.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">1. Definitions</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>"You", "User" – any individual visiting, browsing, or using the Website.</li>
                  <li>"We", "Us", "Our" – Trader Mindset Hub, its owners, affiliates, and legal representatives.</li>
                  <li>"Services" – Educational courses, webinars, digital learning materials related to stock market psychology, Law of Attraction (LOA), NLP, and Ho'oponopono practices.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">2. Nature of Services</h2>
                <p>
                  Trader Mindset Hub provides educational and informational content only. We are SEBI-registered as a Research Analyst but currently do not offer investment advisory or stock recommendation services. All stock/company names mentioned are strictly for illustrative and educational purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">3. Acceptance of Terms</h2>
                <p>
                  By proceeding beyond the homepage, you acknowledge that you have read and accepted these Terms and are legally bound by them. Trader Mindset Hub may revise these Terms at any time. Continued use of the Website indicates your agreement to the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">4. Intellectual Property</h2>
                <p>
                  All content on this Website—including text, images, videos, graphics, and scripts—is the property of Trader Mindset Hub and is protected under applicable intellectual property laws. No content may be reproduced, copied, or used for commercial purposes without written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">5. Educational Use Only</h2>
                <p>
                  Content provided is not professional financial, psychological, legal, or medical advice. Always consult a qualified professional before taking any actions based on the information on this Website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">6. Compliance with SEBI Research Analyst Regulations (2014)</h2>
                <p>Trader Mindset Hub complies with SEBI Research Analyst Regulations, 2014 (as amended). We do not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Make stock-specific recommendations for buying/selling.</li>
                  <li>Provide model portfolios.</li>
                  <li>Offer financial planning or investment advisory services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">7. Refund Policy</h2>
                <p>
                  All purchases made on Trader Mindset Hub are final and non-refundable. You are requested to review your purchase carefully.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">8. Limitation of Liability</h2>
                <p>
                  We are not liable for any direct, indirect, incidental, or consequential damages that result from the use of or inability to use the Website. Use the information at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">9. Consent to Communication</h2>
                <p>
                  You agree to receive communication via calls, SMS, or emails from Trader Mindset Hub or its representatives even if your number is registered under NDNC.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">10. Privacy Policy</h2>
                <p>
                  We are committed to protecting your data. Please read our separate Privacy Policy to understand how we collect, use, and secure your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">11. Cookies</h2>
                <p>
                  Our Website uses cookies to improve user experience. You may adjust your browser settings to manage cookie preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">12. Grievance Redressal</h2>
                <p>If you have any complaints, please refer to our Grievance Redressal Policy.</p>
                <div className="bg-calm-50 p-6 rounded-lg">
                  <p><strong>Compliance Officer:</strong> Makarand Godbole</p>
                  <p><strong>Email:</strong> support@tradermindsethub.com</p>
                  <p><strong>Phone:</strong> +91 89993 49416</p>
                  <p><strong>Address:</strong> 203, Swarasamwad, 425/9, Mukund Nagar, Pune – 411037, Maharashtra</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">13. Governing Law</h2>
                <p>
                  These Terms shall be governed in accordance with the laws of India. Disputes arising shall be subject to the jurisdiction of the courts of Pune, Maharashtra.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-calm-200">
              <p className="text-center text-calm-900 font-semibold">
                © Trader Mindset Hub. All rights reserved.
              </p>
              <p className="text-sm text-calm-600 text-center mt-2">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TermsPage;
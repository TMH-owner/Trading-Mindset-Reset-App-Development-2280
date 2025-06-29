import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
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
          <h1 className="text-4xl font-bold text-calm-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-calm-700 space-y-6">
            <p>
              At Trader Mindset Hub ("we", "us", or "our"), we value your privacy and are committed to protecting your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website www.tradermindsethub.com ("Website").
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">1. Information We Collect</h2>
                <p>We may collect the following types of personal and non-personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, email address, phone number</li>
                  <li>Billing and payment information</li>
                  <li>Location/IP address, browser type, and access times</li>
                  <li>User activity and preferences on the Website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">2. Use of Information</h2>
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide access to our educational services and courses</li>
                  <li>Process payments and send confirmation emails</li>
                  <li>Communicate with you regarding upcoming webinars, offers, and updates</li>
                  <li>Improve our Website experience and customer service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">3. Legal Basis for Processing</h2>
                <p>
                  Your data is processed based on your consent, contractual necessity, or compliance with legal obligations including SEBI Research Analyst Regulations, 2014 or any other applicable law in India.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">4. Sharing Your Information</h2>
                <p>We do not sell your personal information. We may share your data with trusted third-party service providers solely for the purpose of:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment processing</li>
                  <li>Email marketing or webinar delivery platforms</li>
                  <li>Legal or regulatory compliance, including SEBI requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">5. Cookies</h2>
                <p>We use cookies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Recognize you when you return to our Website</li>
                  <li>Understand user preferences and enhance functionality</li>
                </ul>
                <p>You can choose to disable cookies in your browser settings.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">6. Data Retention</h2>
                <p>
                  We retain your information as long as necessary to provide services and fulfill legal obligations. You may request deletion by contacting us at support@tradermindsethub.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">7. Security</h2>
                <p>
                  We follow best practices to ensure the confidentiality and security of your data. However, no system is 100% secure and we cannot guarantee absolute protection.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">8. Your Rights</h2>
                <p>
                  You may request access to, correction of, or deletion of your personal data. You may also opt out of promotional emails at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">9. Consent to Communication</h2>
                <p>
                  By using our Website, you consent to receiving communication via email, calls, or SMS, even if your number is on the DND registry.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">10. Children's Privacy</h2>
                <p>
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal data from minors.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">11. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with the effective date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-calm-900 mb-4">12. Grievance Redressal</h2>
                <p>If you have any concerns regarding your data:</p>
                <div className="bg-calm-50 p-6 rounded-lg">
                  <p><strong>Compliance Officer:</strong> Makarand Godbole</p>
                  <p><strong>Email:</strong> support@tradermindsethub.com</p>
                  <p><strong>Phone:</strong> +91 89993 49416</p>
                  <p><strong>Address:</strong> 203, Swarasamwad, 425/9, Mukund Nagar, Pune – 411037, Maharashtra</p>
                </div>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-calm-200">
              <p className="text-sm text-calm-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PrivacyPage;
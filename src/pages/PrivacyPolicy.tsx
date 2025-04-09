import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          At Medicare, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
          disclose, and safeguard your information when you visit our website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
        <p className="mb-4">We collect information that you provide directly to us, including:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Name and contact information</li>
          <li>Medical history and health information</li>
          <li>Appointment details</li>
          <li>Payment information</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide and maintain our services</li>
          <li>Process your appointments and payments</li>
          <li>Send you important updates and notifications</li>
          <li>Improve our services and user experience</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">4. Data Protection</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect your personal data 
          against unauthorized access, alteration, disclosure, or destruction.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
        <p className="mb-4">Under GDPR, you have the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing of your data</li>
          <li>Data portability</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          Email: privacy@medicare.com
          <br />
          Phone: +917026157826
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 
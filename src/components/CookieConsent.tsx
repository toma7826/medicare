import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50"
      role="alert"
      aria-live="polite"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="mb-4 sm:mb-0">
          <p className="text-sm">
            We use cookies to enhance your experience on our website. By continuing to use our site, 
            you agree to our use of cookies. Learn more in our{' '}
            <a 
              href="/privacy-policy" 
              className="text-blue-400 hover:text-blue-300 underline"
              aria-label="Read our privacy policy"
            >
              Privacy Policy
            </a>.
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium"
            aria-label="Accept cookies"
          >
            Accept
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm font-medium"
            aria-label="Close cookie consent"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 
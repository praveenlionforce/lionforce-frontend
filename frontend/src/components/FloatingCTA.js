import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';

function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-20 right-0 bg-white rounded-lg shadow-2xl p-4 w-64 border border-gray-200"
              >
                <div className="space-y-3">
                  <a
                    href="/contact"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-50 transition-colors"
                    data-testid="floating-contact-link"
                  >
                    <Mail className="w-5 h-5 text-teal-600" />
                    <span className="text-sm text-gray-700">Contact Us</span>
                  </a>
                  <a
                    href="tel:+919600536354"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-50 transition-colors"
                    data-testid="floating-phone-link"
                  >
                    <Phone className="w-5 h-5 text-teal-600" />
                    <span className="text-sm text-gray-700">Call Now</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gradient-to-r from-teal-600 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-110"
            data-testid="floating-cta-button"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MessageCircle className="w-6 h-6" />
            )}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FloatingCTA;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSiteContent } from '../hooks/useSiteContent';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const { global } = useSiteContent();

  const headerLogo = global?.headerLogo || 'https://customer-assets.emergentagent.com/job_elegant-refresh-3/artifacts/jeiik01t_Lionforce%20new%20logo%20set-crop.png';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      category: 'Digital Solutions',
      items: [
        { name: 'Custom eLearning', path: '/services/elearning' },
        { name: 'Software Development', path: '/services/software-development' },
        { name: 'UX/UI Design', path: '/services/ux-ui-design' },
        { name: 'Creative Services', path: '/services/creative' },
        { name: 'Digital Marketing', path: '/services/digital-marketing' },
        { name: 'Consulting', path: '/services/consulting' },
      ]
    },
    {
      category: 'Expand to India',
      items: [
        { name: 'India Team Setup (EOR • ODC • COE)', path: '/services/india-expansion' }
      ]
    }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
      data-testid="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" data-testid="navbar-logo">
            <img 
              src={headerLogo} 
              alt="Lionforce Logo" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                location.pathname === '/' ? 'text-teal-600' : 'text-gray-700'
              }`}
              data-testid="nav-home"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('services')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
                data-testid="nav-services"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {openDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200"
                  >
                    <div className="grid grid-cols-1 divide-y divide-gray-100">
                      {services.map((category, idx) => (
                        <div key={idx} className="p-4">
                          <h3 className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-3">
                            {category.category}
                          </h3>
                          <div className="space-y-2">
                            {category.items.map((item, itemIdx) => (
                              <Link
                                key={itemIdx}
                                to={item.path}
                                className="block px-3 py-2 text-sm text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded transition-colors"
                                data-testid={`nav-service-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/industries"
              className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                location.pathname === '/industries' ? 'text-teal-600' : 'text-gray-700'
              }`}
              data-testid="nav-industries"
            >
              Industries
            </Link>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                location.pathname === '/about' ? 'text-teal-600' : 'text-gray-700'
              }`}
              data-testid="nav-about"
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                location.pathname === '/contact' ? 'text-teal-600' : 'text-gray-700'
              }`}
              data-testid="nav-contact"
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105"
              data-testid="nav-cta-button"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 p-2"
            data-testid="mobile-menu-button"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block py-2 text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsOpen(false)}
                data-testid="mobile-nav-home"
              >
                Home
              </Link>

              {services.map((category, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider">
                    {category.category}
                  </div>
                  {category.items.map((item, itemIdx) => (
                    <Link
                      key={itemIdx}
                      to={item.path}
                      className="block py-2 pl-4 text-gray-600 hover:text-teal-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                      data-testid={`mobile-nav-service-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}

              <Link
                to="/industries"
                className="block py-2 text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsOpen(false)}
                data-testid="mobile-nav-industries"
              >
                Industries
              </Link>

              <Link
                to="/about"
                className="block py-2 text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsOpen(false)}
                data-testid="mobile-nav-about"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="block py-2 text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsOpen(false)}
                data-testid="mobile-nav-contact"
              >
                Contact
              </Link>

              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-teal-600 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all"
                onClick={() => setIsOpen(false)}
                data-testid="mobile-nav-cta-button"
              >
                Get Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
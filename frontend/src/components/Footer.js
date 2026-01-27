import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800" data-testid="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_modern-lionforce/artifacts/tpwlbe6e_footerlogo.png" 
              alt="Lionforce Technologies Private Limited" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm mb-4">
              Empowering Minds, Transforming Solutions. Your partner in innovative eLearning and software development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors" data-testid="footer-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors" data-testid="footer-twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors" data-testid="footer-facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-teal-400 text-sm transition-colors" data-testid="footer-link-home">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-teal-400 text-sm transition-colors" data-testid="footer-link-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-400 hover:text-teal-400 text-sm transition-colors" data-testid="footer-link-industries">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-teal-400 text-sm transition-colors" data-testid="footer-link-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/elearning" className="text-gray-400 hover:text-teal-400 text-sm transition-colors" data-testid="footer-service-elearning">
                  Custom eLearning
                </Link>
              </li>
              <li>
                <Link to="/services/software-development" className="text-gray-400 hover:text-teal-400 text-sm transition-colors" data-testid="footer-service-software">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services/ux-ui-design" className="text-gray-400 hover:text-teal-400 text-sm transition-colors" data-testid="footer-service-uxui">
                  UX/UI Design
                </Link>
              </li>
              <li>
                <Link to="/services/eor" className="text-gray-400 hover:text-teal-400 text-sm transition-colors" data-testid="footer-service-eor">
                  EOR Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="tel:+919600536354" className="text-gray-400 hover:text-teal-400 text-sm transition-colors" data-testid="footer-phone">
                  +91 96005 36354
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="mailto:info@lionforce.net" className="text-gray-400 hover:text-teal-400 text-sm transition-colors" data-testid="footer-email">
                  info@lionforce.net
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Chennai, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Lionforce Technologies Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
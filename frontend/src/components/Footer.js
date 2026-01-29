import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { useSiteContent } from '../hooks/useSiteContent';

function Footer() {
  const { global } = useSiteContent();
  
  const footerLogo = global?.footerLogo || 'https://customer-assets.emergentagent.com/job_modern-lionforce/artifacts/tpwlbe6e_footerlogo.png';
  const companyName = global?.companyName || 'Lionforce Technologies Pvt Ltd';
  const footerDescription = global?.footer?.description || 'Empowering Minds, Transforming Solutions. Your partner in innovative eLearning and software development.';
  const socialLinks = global?.socialLinks || {};

  return (
    <footer className="bg-gray-900 border-t border-gray-800" data-testid="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src={footerLogo} 
              alt={companyName} 
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm mb-4">
              {footerDescription}
            </p>
            <div className="flex space-x-4">
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors" data-testid="footer-linkedin">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors" data-testid="footer-twitter">
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors" data-testid="footer-facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors" data-testid="footer-instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              )}
              {socialLinks.youtube && (
                <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors" data-testid="footer-youtube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              )}
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
                <Link to="/services/india-expansion" className="text-gray-400 hover:text-teal-400 text-sm transition-colors" data-testid="footer-service-eor">
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
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useSiteContent } from '../hooks/useSiteContent';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function Contact() {
  const { content, global } = useSiteContent('contact');
  const [searchParams] = useSearchParams();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    service: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // CMS content with fallbacks
  const hero = content?.hero || {};
  const info = content?.info || {};
  const contactStats = content?.stats || [];
  const form = content?.form || {};
  const steps = content?.steps || {};

  const services = form.services || [
    'Custom eLearning',
    'Software Development',
    'UX/UI Design',
    'Creative Services',
    'Digital Marketing',
    'Consulting',
    'India Expansion (EOR/ODC/COE)'
  ];

  // Pre-select service based on URL query parameter
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      // Map URL params to service names
      const serviceMap = {
        'elearning': 'Custom eLearning',
        'software': 'Software Development',
        'ux-ui': 'UX/UI Design',
        'creative': 'Creative Services',
        'digital-marketing': 'Digital Marketing',
        'consulting': 'Consulting',
        'india-expansion': 'India Expansion (EOR/ODC/COE)',
        'eor': 'India Expansion (EOR/ODC/COE)',
        'odc': 'India Expansion (EOR/ODC/COE)',
        'coe': 'India Expansion (EOR/ODC/COE)'
      };
      
      const mappedService = serviceMap[serviceParam.toLowerCase()];
      if (mappedService) {
        setFormData(prev => ({ ...prev, service: mappedService }));
      } else {
        // Try to find a partial match in services list
        const found = services.find(s => 
          s.toLowerCase().includes(serviceParam.toLowerCase())
        );
        if (found) {
          setFormData(prev => ({ ...prev, service: found }));
        }
      }
    }
  }, [searchParams, services]);

  // Service links for the "Explore Our Services" section
  const serviceLinks = content?.serviceLinks || [
    { name: 'eLearning', link: '/services/elearning' },
    { name: 'Software & AI', link: '/services/software-development' },
    { name: 'UX/UI Design', link: '/services/ux-ui-design' },
    { name: 'Creative Services', link: '/services/creative' },
    { name: 'Digital Marketing', link: '/services/digital-marketing' },
    { name: 'Consulting', link: '/services/consulting' },
    { name: 'Expand to India', link: '/services/india-expansion' }
  ];

  const stepsItems = steps.items || [
    'We review your requirements',
    'Schedule a discovery call',
    'Provide a tailored proposal',
    'Start building together'
  ];

  const statsItems = contactStats.length > 0 ? contactStats : [
    { value: '24h', label: 'Response Time' },
    { value: '300+', label: 'Happy Clients' },
    { value: '32+', label: 'Countries' },
    { value: '13+', label: 'Years Experience' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await axios.post(`${API}/contact`, formData);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '', service: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const phoneNumber = info.phone || global?.phone || '+91 96005 36354';
  const emailAddress = info.email || global?.email || 'hello@lionforce.net';

  // SEO data from CMS
  const seo = content?.seo || {};

  return (
    <>
      <SEO 
        title={seo.title || "Contact Us | Lionforce - Let's Build Something Amazing"}
        description={seo.description || "Get in touch with Lionforce. We'd love to hear about your project and discuss how we can help transform your business."}
        keywords={seo.keywords || 'contact Lionforce, get quote, free consultation'}
        ogImage={seo.ogImage}
        ogTitle={seo.title || 'Contact Lionforce'}
        ogDescription={seo.description || "Get in touch with Lionforce"}
        canonicalUrl={seo.canonicalUrl}
      />

      <div className="pt-20 bg-white overflow-hidden">
        {/* Hero Section - Split design */}
        <section className="relative min-h-[60vh] flex items-center" data-testid="contact-hero">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-500 to-green-500"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {hero.title1 || "Let's Build"}<br />
                  <span className="text-white/80">{hero.title2 || 'Something Amazing'}</span>
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-lg">
                  {hero.subtitle || "Have a project in mind? We'd love to hear about it. Drop us a message and let's start the conversation."}
                </p>
                
                {/* Quick contact options */}
                <div className="space-y-4">
                  <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="flex items-center gap-4 text-white hover:translate-x-2 transition-transform group" data-testid="contact-phone">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Call us directly</p>
                      <p className="font-semibold">{phoneNumber}</p>
                    </div>
                  </a>
                  
                  <a href={`mailto:${emailAddress}`} className="flex items-center gap-4 text-white hover:translate-x-2 transition-transform group" data-testid="contact-email">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Email us</p>
                      <p className="font-semibold">{emailAddress}</p>
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* Stats cards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:grid grid-cols-2 gap-4"
              >
                {statsItems.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <p className="text-white/80">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-24 relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-100/50 to-green-100/50 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Left side info */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    {form.title || 'Ready to Start?'}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {form.subtitle || "Fill out the form and our team will get back to you within 24 hours. Or reach out directly - we're always happy to chat."}
                  </p>

                  {/* What to expect */}
                  <div className="space-y-4 mb-8">
                    <h3 className="font-semibold text-gray-900">{steps.title || 'What happens next?'}</h3>
                    {stepsItems.map((step, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-semibold text-sm">
                          {index + 1}
                        </div>
                        <span className="text-gray-600">{step}</span>
                      </div>
                    ))}
                  </div>

                  {/* Office locations */}
                  <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Our Office</h3>
                        <p className="text-gray-600 text-sm whitespace-pre-line">
                          {info.address || 'Lionforce Technologies Pvt Ltd\nChennai, India\nServing clients globally'}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-3"
              >
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                      data-testid="contact-success"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <p className="text-green-800 font-medium">{form.successMessage || "Message sent successfully! We'll be in touch soon."}</p>
                    </motion.div>
                  )}

                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <p className="text-red-800">{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{form.nameLabel || 'Your Name'} *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder={form.namePlaceholder || 'John Doe'}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                          data-testid="contact-name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{form.emailLabel || 'Email Address'} *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder={form.emailPlaceholder || 'john@company.com'}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                          data-testid="contact-email-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{form.serviceLabel || 'Service Interested In'}</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                        data-testid="contact-service"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{form.subjectLabel || 'Subject'}</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={form.subjectPlaceholder || 'How can we help?'}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                        data-testid="contact-subject"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{form.messageLabel || 'Your Message'} *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder={form.messagePlaceholder || 'Tell us about your project, goals, timeline...'}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none bg-gray-50 focus:bg-white"
                        data-testid="contact-message"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-teal-600 to-green-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 group"
                      data-testid="contact-submit"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          {form.submitText || 'Send Message'}
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900">Explore Our Services</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {serviceLinks.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link 
                    to={service.link}
                    className="px-6 py-3 bg-white rounded-full border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all cursor-pointer inline-block"
                    data-testid={`service-link-${index}`}
                  >
                    <span className="text-gray-700 font-medium">{service.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;

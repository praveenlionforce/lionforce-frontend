import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Globe, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const timezones = [
  { value: 'America/New_York', label: 'Eastern Time (ET) - New York' },
  { value: 'America/Chicago', label: 'Central Time (CT) - Chicago' },
  { value: 'America/Denver', label: 'Mountain Time (MT) - Denver' },
  { value: 'America/Los_Angeles', label: 'Pacific Time (PT) - Los Angeles' },
  { value: 'Europe/London', label: 'GMT - London' },
  { value: 'Europe/Paris', label: 'CET - Paris, Berlin' },
  { value: 'Europe/Moscow', label: 'MSK - Moscow' },
  { value: 'Asia/Dubai', label: 'GST - Dubai' },
  { value: 'Asia/Kolkata', label: 'IST - India' },
  { value: 'Asia/Singapore', label: 'SGT - Singapore' },
  { value: 'Asia/Tokyo', label: 'JST - Tokyo' },
  { value: 'Australia/Sydney', label: 'AEST - Sydney' },
];

// Hierarchical services with sub-services
const serviceCategories = {
  'eLearning': {
    label: 'Custom eLearning',
    subServices: [
      'Custom Course Development',
      'LMS Implementation & Customization',
      'Mobile Learning Apps',
      'Gamified Learning Solutions',
      'Assessment & Certification Systems',
      'Instructor-Led Training (ILT/VILT)',
      'Microlearning Modules',
      'Video-Based Learning',
      'Compliance Training',
      'Onboarding Programs'
    ]
  },
  'Software': {
    label: 'Software Development',
    subServices: [
      'Custom Web Applications',
      'Mobile App Development (iOS/Android)',
      'IoT & Smart Device Solutions',
      'Enterprise Software Solutions',
      'Cloud & SaaS Products',
      'API Development & Integration',
      'AI/ML Integration',
      'Database Design & Management',
      'Legacy System Modernization',
      'DevOps & CI/CD Setup'
    ]
  },
  'Design': {
    label: 'UX/UI Design',
    subServices: [
      'User Research & Testing',
      'UI/UX Audit',
      'Wireframing & Prototyping',
      'Visual Design',
      'Design Systems',
      'Responsive Web Design',
      'Mobile App Design',
      'Dashboard Design',
      'Accessibility (WCAG) Compliance',
      'Brand Identity Design'
    ]
  },
  'Creative': {
    label: 'Creative Services',
    subServices: [
      '3D Visualization & Animation',
      'Motion Graphics',
      'Explainer Videos',
      'Product Demo Videos',
      'Interactive Media',
      'AR/VR Experiences',
      'Infographics',
      'Presentation Design',
      'Marketing Collateral',
      'Brand Videos'
    ]
  },
  'Marketing': {
    label: 'Digital Marketing',
    subServices: [
      'SEO Strategy & Implementation',
      'Content Marketing',
      'Social Media Management',
      'PPC & Paid Advertising',
      'Email Marketing',
      'Marketing Automation',
      'Analytics & Reporting',
      'Conversion Optimization',
      'Influencer Marketing',
      'Brand Strategy'
    ]
  },
  'Consulting': {
    label: 'Consulting',
    subServices: [
      'Digital Transformation',
      'Technology Strategy',
      'Process Optimization',
      'Change Management',
      'IT Infrastructure Assessment',
      'Vendor Selection',
      'Project Management',
      'Training & Workshops',
      'Business Analysis',
      'Quality Assurance'
    ]
  },
  'IndiaExpansion': {
    label: 'India Expansion (EOR/ODC/COE)',
    subServices: [
      'Employer of Record (EOR)',
      'Offshore Development Center (ODC)',
      'Center of Excellence (COE)',
      'Remote Team Setup',
      'Compliance & Legal Support',
      'Payroll Management',
      'Talent Acquisition',
      'Office Space & Infrastructure',
      'Co-branded Operations',
      'HR & Admin Support'
    ]
  }
};

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'
];

function BookConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceCategory: '',
    selectedSubServices: [],
    preferredDate: '',
    preferredTime: '',
    timezone: 'Asia/Kolkata',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 60);
    return maxDate.toISOString().split('T')[0];
  };

  const handleServiceCategoryChange = (category) => {
    setFormData({
      ...formData,
      serviceCategory: category,
      selectedSubServices: []
    });
  };

  const handleSubServiceToggle = (subService) => {
    setFormData(prev => {
      const isSelected = prev.selectedSubServices.includes(subService);
      return {
        ...prev,
        selectedSubServices: isSelected
          ? prev.selectedSubServices.filter(s => s !== subService)
          : [...prev.selectedSubServices, subService]
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const serviceCategoryLabel = serviceCategories[formData.serviceCategory]?.label || formData.serviceCategory;

      const consultationData = {
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        phone: formData.phone || null,
        service_category: serviceCategoryLabel,
        sub_services: formData.selectedSubServices,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        timezone: formData.timezone,
        message: formData.message || null
      };

      await axios.post(`${API}/consultation`, consultationData);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        serviceCategory: '',
        selectedSubServices: [],
        preferredDate: '',
        preferredTime: '',
        timezone: 'Asia/Kolkata',
        message: ''
      });
    } catch (err) {
      setError('Failed to submit request. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
        <SEO 
          title="Consultation Booked - Lionforce"
          description="Thank you for booking a consultation with Lionforce."
        />
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-green-600" />
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Consultation Request Received!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for booking a consultation with us. Our team will review your request and 
            confirm the meeting details within 24 hours via email.
          </p>
          <div className="bg-teal-50 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-teal-800 mb-2">What happens next?</h3>
            <ul className="text-sm text-teal-700 space-y-2">
              <li>✓ You'll receive a confirmation email shortly</li>
              <li>✓ Our team will review your preferred time slot</li>
              <li>✓ We'll send a calendar invite with meeting link</li>
            </ul>
          </div>
          <a 
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Back to Home <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <SEO 
        title="Book a Free Consultation - Lionforce"
        description="Schedule a free consultation with Lionforce. Discuss your eLearning, software development, or India expansion needs with our experts."
        keywords="free consultation, book meeting, schedule call, Lionforce consultation"
      />

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
              Free 30-Minute Consultation
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Discuss Your <span className="text-teal-600">Project</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Schedule a free consultation with our experts. We'll discuss your requirements, 
              answer questions, and provide tailored recommendations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-teal-600 to-green-600 p-6 text-white">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Your Consultation
              </h2>
              <p className="text-white/80 text-sm mt-1">Fill in your details and preferred time</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company (Optional)</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone (Optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              {/* Service Category Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Category *</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {Object.entries(serviceCategories).map(([key, service]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handleServiceCategoryChange(key)}
                      className={`p-3 rounded-lg border-2 text-left transition-all ${
                        formData.serviceCategory === key
                          ? 'border-teal-500 bg-teal-50 text-teal-700'
                          : 'border-gray-200 hover:border-teal-300 text-gray-700'
                      }`}
                    >
                      <span className="text-sm font-medium">{service.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sub-services (shown when category is selected) */}
              {formData.serviceCategory && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-gray-50 rounded-xl p-4"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Specific Services (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                    {serviceCategories[formData.serviceCategory].subServices.map((subService) => (
                      <label
                        key={subService}
                        className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all ${
                          formData.selectedSubServices.includes(subService)
                            ? 'bg-teal-100 text-teal-800'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.selectedSubServices.includes(subService)}
                          onChange={() => handleSubServiceToggle(subService)}
                          className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                        />
                        <span className="text-sm">{subService}</span>
                      </label>
                    ))}
                  </div>
                  {formData.selectedSubServices.length > 0 && (
                    <p className="mt-3 text-xs text-teal-600">
                      {formData.selectedSubServices.length} service(s) selected
                    </p>
                  )}
                </motion.div>
              )}

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    min={getMinDate()}
                    max={getMaxDate()}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Preferred Time *
                  </label>
                  <select
                    required
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Globe className="w-4 h-4 inline mr-1" />
                    Your Timezone *
                  </label>
                  <select
                    required
                    value={formData.timezone}
                    onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    {timezones.map(tz => (
                      <option key={tz.value} value={tz.value}>{tz.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes (Optional)</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  placeholder="Tell us briefly about your project or questions..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || !formData.serviceCategory}
                className="w-full bg-gradient-to-r from-teal-600 to-green-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Booking...
                  </>
                ) : (
                  <>
                    Book Consultation <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By booking, you agree to our privacy policy. We'll send a confirmation email within 24 hours.
              </p>
            </form>
          </motion.div>

          {/* Additional Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: '🎯', title: 'Free & No Obligation', desc: 'Explore your options without commitment' },
              { icon: '⚡', title: 'Quick Response', desc: 'Confirmation within 24 hours' },
              { icon: '🤝', title: 'Expert Consultation', desc: 'Speak directly with our specialists' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="font-semibold text-gray-900 mt-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookConsultation;

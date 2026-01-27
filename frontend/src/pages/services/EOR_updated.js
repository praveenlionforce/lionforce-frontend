import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  ArrowRight, CheckCircle, Globe, Users, Shield, 
  FileText, Clock, DollarSign, TrendingUp, Zap,
  Award, Target, Building
} from 'lucide-react';

function EOR() {
  const packages = [
    {
      name: 'Core Setup & Compliance',
      price12: '$149',
      price24: '$139',
      minEmployees: '5',
      features: [
        'Payroll processing',
        'Statutory compliance',
        'HRMS setup',
        'Bank account & balance sheet management',
        'Co-branding (ClientName India | powered by Lionforce)',
        'Medical insurance coordination'
      ],
      popular: false
    },
    {
      name: 'Managed Operations',
      price12: '$199',
      price24: '$189',
      minEmployees: '10',
      features: [
        'Everything in Core Setup',
        'Vendor management (office, insurance, IT, systems)',
        'OPEX/CAPEX management (Lionforce engagement only)',
        'Invoice approvals',
        'Admin operations'
      ],
      popular: true
    },
    {
      name: 'Fully Managed / Scale',
      price12: '$249',
      price24: '$229',
      minEmployees: '20',
      features: [
        'Everything in Managed Operations',
        'Optional real estate/office setup',
        'Hiring coordination',
        'Asset lifecycle management',
        'Operations reporting',
        'Dedicated admin executive (teams 15+)'
      ],
      popular: false
    }
  ];

  const benefits = [
    'Launch your India team in 2-8 weeks',
    'White-label branding - ClientName India | powered by Lionforce',
    'Full legal risk transfer for operational & statutory compliance',
    'Dedicated admin executive for teams 15+',
    'Bank accounts, balance sheets, and full reporting',
    'Scalable from 5 to 50+ employees',
    'Save up to 60% vs Western European costs',
    'Security deposit held in dedicated client account'
  ];

  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'White-Label India Teams',
      description: 'Your team is branded as "ClientName India | powered by Lionforce" - fostering ownership and integration with your parent company culture.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Legal Risk Transfer',
      description: 'Lionforce assumes full operational and statutory compliance risk for employees, vendors, and infrastructure we manage.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Full HR Support',
      description: 'Complete onboarding, offboarding, payroll processing, and benefits administration handled for you.'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Optional Office Setup',
      description: 'Real estate management and office infrastructure setup available in the Fully Managed package.'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Vendor Management',
      description: 'Complete oversight of office space, IT systems, HRMS, and insurance providers.'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Dedicated Balance Sheets',
      description: 'Separate bank accounts and dedicated balance sheets for complete financial transparency.'
    }
  ];

  const comparison = [
    {
      feature: 'White-label / Co-branding',
      lionforce: true,
      india: false,
      poland: false
    },
    {
      feature: 'Vendor Management',
      lionforce: true,
      india: false,
      poland: false
    },
    {
      feature: 'Real Estate / Office Setup',
      lionforce: true,
      india: false,
      poland: false
    },
    {
      feature: 'Dedicated Admin Executive',
      lionforce: true,
      india: false,
      poland: false
    },
    {
      feature: 'OPEX/CAPEX Management',
      lionforce: true,
      india: false,
      poland: false
    },
    {
      feature: 'Bank Accounts & Balance Sheets',
      lionforce: true,
      india: false,
      poland: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>EOR Services India - Employer of Record | Lionforce</title>
        <meta name="description" content="Launch your white-label India team with Lionforce EOR services. Full compliance, payroll, HR, and operational support from $139/employee/month. 2-8 week setup." />
        <meta name="keywords" content="employer of record India, EOR services India, white label India team, India payroll outsourcing, hire employees India, India compliance" />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section
          className="relative py-32 bg-gradient-to-br from-teal-50 via-white to-green-50"
          data-testid="eor-hero"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <div className="inline-block px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-6">
                Global Workforce Solutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">EOR Services</span>
                <br />
                <span className="text-gray-900">Employer of Record India</span>
              </h1>
              <p className="text-2xl text-teal-600 font-semibold mb-6">
                Your India team — fully branded, fully supported, fully compliant — without setting up a legal entity.
              </p>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Launch your white-label India team in as little as 2-8 weeks. We handle all operational infrastructure, 
                HR, payroll, compliance, and administrative functions while you maintain full control of your core business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
                >
                  Get Started - From $139/month
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:+919600536354"
                  className="bg-white border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all duration-300 inline-flex items-center justify-center shadow-lg"
                >
                  Call +91 98840 52675
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white" data-testid="pricing-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Transparent Pricing</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the package that fits your needs. All prices in USD per employee per month.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative bg-white rounded-2xl border-2 p-8 ${
                    pkg.popular 
                      ? 'border-teal-600 shadow-2xl shadow-teal-500/20 scale-105' 
                      : 'border-gray-200 shadow-lg'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">Minimum {pkg.minEmployees} employees</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold gradient-text">{pkg.price24}</span>
                      <span className="text-gray-600">/employee/month</span>
                    </div>
                    <p className="text-sm text-gray-500">24-month contract (preferred)</p>
                    <p className="text-sm text-gray-500">{pkg.price12}/month for 12-month contract</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 rounded-full font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-teal-600 to-green-600 text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center text-sm text-gray-600">
              <p className="mb-2">💡 <strong>Large Teams (50+):</strong> Additional $10-$15/employee discount available</p>
              <p className="mb-2">🔒 <strong>Security Deposit:</strong> 3 months OPEX held in dedicated client account</p>
              <p>⚡ <strong>Setup Time:</strong> 2-8 weeks depending on scope and requirements</p>
            </div>
          </div>
        </section>

        {/* Features Section - Continues... */}

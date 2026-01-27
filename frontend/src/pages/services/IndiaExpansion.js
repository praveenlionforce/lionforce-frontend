import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { 
  ArrowRight, CheckCircle, Globe, Users, Shield, Building, Award, Target,
  FileText, Clock, DollarSign, TrendingUp, Zap, X, Briefcase, Code, Lightbulb
} from 'lucide-react';
import { useSiteContent } from '../../hooks/useSiteContent';

function IndiaExpansion() {
  const { content, global } = useSiteContent('indiaExpansion');
  const [activeTab, setActiveTab] = useState('eor');

  // Default packages - will be overridden by CMS if available
  const defaultPackages = [
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
        'Co-branding option available',
        'Medical insurance coordination'
      ]
    },
    {
      name: 'Managed Operations',
      price12: '$199',
      price24: '$189',
      minEmployees: '10',
      features: [
        'Everything in Core Setup',
        'Vendor management',
        'OPEX/CAPEX management',
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
        'Dedicated admin executive'
      ]
    }
  ];

  // Use CMS packages if available, otherwise use defaults
  const packages = content?.pricing?.packages || defaultPackages;
  const pricingTitle = content?.pricing?.title || 'EOR Pricing Packages';
  const pricingSubtitle = content?.pricing?.subtitle || 'Transparent pricing for Employer of Record services. No hidden fees.';
  const pricingNote = content?.pricing?.note || 'For ODC & COE pricing, please contact us for a customized quote.';

  const services = [
    {
      id: 'eor',
      title: 'EOR - Employer of Record',
      icon: <Briefcase className="w-12 h-12" />,
      tagline: 'Hire & Manage Teams',
      description: 'Launch your India team without setting up a legal entity. We handle payroll, compliance, HR, and all operational aspects.',
      benefits: [
        'No legal entity needed in India',
        'Full statutory compliance',
        'Payroll & benefits administration',
        'Co-branding available',
        'Launch in 2-8 weeks',
        'Easy exits'
      ]
    },
    {
      id: 'odc',
      title: 'ODC - Offshore Development Center',
      icon: <Code className="w-12 h-12" />,
      tagline: 'Dedicated Tech Teams',
      description: 'Your own development center in India with dedicated engineers, infrastructure, and complete operational support.',
      benefits: [
        'Dedicated development team',
        'Full infrastructure setup',
        'Complete operational control',
        'Scale from 5 to 50+ engineers',
        'Cost-effective expansion',
        'Flexible exit options'
      ]
    },
    {
      id: 'coe',
      title: 'COE - Center of Excellence',
      icon: <Lightbulb className="w-12 h-12" />,
      tagline: 'Innovation Hubs',
      description: 'Establish specialized teams focused on best practices, innovation, and driving operational excellence in India.',
      benefits: [
        'Specialized expertise centers',
        'Best practices implementation',
        'Innovation & R&D teams',
        'Knowledge transfer programs',
        'Strategic capability building',
        'Easy transition support'
      ]
    }
  ];

  const comparison = [
    { feature: 'Easy Exits', lionforce: true, competitors: false },
    { feature: 'Co-branding Available', lionforce: true, competitors: false },
    { feature: 'Vendor Management', lionforce: true, competitors: false },
    { feature: 'Real Estate / Office Setup', lionforce: true, competitors: false },
    { feature: 'Dedicated Admin Executive', lionforce: true, competitors: false },
    { feature: 'OPEX/CAPEX Management', lionforce: true, competitors: false },
    { feature: 'Bank Accounts & Balance Sheets', lionforce: true, competitors: false },
    { feature: 'Legal Risk Transfer', lionforce: true, competitors: true },
    { feature: 'Payroll Processing', lionforce: true, competitors: true },
    { feature: 'Statutory Compliance', lionforce: true, competitors: true }
  ];

  const whyIndia = [
    { title: '60% Cost Savings', description: 'Compared to Western markets', icon: <DollarSign className="w-8 h-8" /> },
    { title: 'Stable Environment', description: 'Predictable geopolitical stability', icon: <Shield className="w-8 h-8" /> },
    { title: 'Large Talent Pool', description: 'Millions of skilled English-speaking professionals', icon: <Users className="w-8 h-8" /> },
    { title: 'Tech Hubs', description: 'Bangalore, Hyderabad, Chennai - world-class cities', icon: <Award className="w-8 h-8" /> }
  ];

  // SEO data from CMS
  const seo = content?.seo || {};

  return (
    <>
      <Helmet>
        <title>{seo.title || 'India Expansion Services - EOR, ODC, COE | Lionforce'}</title>
        <meta name="description" content={seo.description || 'Launch your India team in 2-8 weeks. EOR, ODC, and COE services with co-branding. From $139/month. 60% cost savings.'} />
        <meta name="keywords" content={seo.keywords || 'India expansion, EOR, employer of record, ODC, offshore development center, COE, hire in India'} />
        {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}
        <meta property="og:title" content={seo.title || 'India Expansion - Lionforce'} />
        <meta property="og:description" content={seo.description || 'Launch your India team in 2-8 weeks'} />
        <meta property="og:type" content="website" />
        {seo.canonicalUrl && <link rel="canonical" href={seo.canonicalUrl} />}
      </Helmet>

      <div className="pt-20 bg-white">
        {/* Hero */}
        <section className="relative py-32 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold mb-6 border border-white/30">
                🇮🇳 Your Complete India Expansion Partner
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                Expand to India<br />With Confidence
              </h1>
              <p className="text-2xl text-white/90 font-semibold mb-4">
                EOR • ODC • COE - All-in-One Solution
              </p>
              <p className="text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                Launch your India operations in 2-8 weeks. <strong>Co-branding available. Easy exits.</strong> From hiring teams to setting up development centers and innovation hubs - we handle everything. Save 60% on costs while accessing world-class talent.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">Launch in 2-8 weeks</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">60% cost savings</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">Co-branding available</span>
                </div>
                <div className="flex items-center gap-2 bg-yellow-400/90 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-300">
                  <CheckCircle className="w-5 h-5 text-gray-900" />
                  <span className="text-gray-900 font-bold">Easy Exits</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center shadow-2xl">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a href="tel:+919600536354" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 inline-flex items-center justify-center">
                  Call +91 96005 36354
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3 Services Overview */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Three Ways</span> to Expand to India
              </h2>
              <p className="text-xl text-gray-600">Choose the model that fits your needs - or combine them</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-emerald-500 hover:shadow-2xl transition-all cursor-pointer"
                  onClick={() => setActiveTab(service.id)}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${
                    service.id === 'eor' ? 'from-emerald-500 to-teal-600' :
                    service.id === 'odc' ? 'from-blue-500 to-indigo-600' :
                    'from-orange-500 to-amber-600'
                  } rounded-full text-white mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-sm text-emerald-600 font-semibold mb-4 uppercase">{service.tagline}</p>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why India */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why <span className="gradient-text">India Now?</span>
              </h2>
              <p className="text-xl text-gray-600">In today's geopolitical climate, India is the smart choice</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyIndia.map((item, index) => {
                const colors = ['from-emerald-500 to-emerald-600', 'from-teal-500 to-teal-600', 'from-cyan-500 to-cyan-600', 'from-blue-500 to-blue-600'];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all"
                  >
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${colors[index]} rounded-full text-white mb-4`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">{pricingTitle}</span>
              </h2>
              <p className="text-xl text-gray-600">{pricingSubtitle}</p>
              <p className="text-sm text-gray-500 mt-2">{pricingNote} <Link to="/contact" className="text-emerald-600 font-semibold hover:underline">Contact us</Link></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative bg-white rounded-2xl border-2 p-8 ${pkg.popular ? 'border-emerald-500 shadow-2xl scale-105' : 'border-gray-200 shadow-lg'}`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">Min {pkg.minEmployees} employees</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-emerald-600">{pkg.price24}</span>
                      <span className="text-gray-600">/emp/mo</span>
                    </div>
                    <p className="text-sm text-emerald-600 font-semibold">24-month contract</p>
                    <p className="text-sm text-gray-500">{pkg.price12}/month for 12-month</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className={`block w-full text-center py-3 rounded-full font-semibold transition-all ${pkg.popular ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Note about other services */}
            <div className="bg-white rounded-xl p-6 border border-emerald-200 max-w-3xl mx-auto text-center">
              <h3 className="font-bold text-gray-900 mb-2">Need ODC or COE Setup?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Our Offshore Development Center (ODC) and Center of Excellence (COE) services are customized based on your specific requirements, team size, and infrastructure needs.
              </p>
              <Link to="/contact" className="inline-flex items-center text-emerald-600 font-semibold hover:underline">
                Request a Custom Quote <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Our Unique Advantage</span>
              </h2>
              <p className="text-xl text-gray-600">Co-branding and complete operational support - not just payroll</p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-center">
                      <div className="font-bold text-lg">Lionforce</div>
                    </th>
                    <th className="px-6 py-4 text-center">
                      <div className="font-bold">Other Providers</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {row.lionforce ? (
                          <CheckCircle className="w-6 h-6 text-emerald-600 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-gray-300 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.competitors ? (
                          <CheckCircle className="w-6 h-6 text-gray-400 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-gray-300 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Expand to India?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join global companies building their India presence. Complete support from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="tel:+919600536354" className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300">
                Call +91 96005 36354
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default IndiaExpansion;

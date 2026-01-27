import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  ArrowRight, CheckCircle, Globe, Users, Shield, 
  FileText, Clock, DollarSign, TrendingUp, Zap,
  Award, Target, Building, X
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

  const comparison = [
    { feature: 'White-label / Co-branding', lionforce: true, india: false, poland: false },
    { feature: 'Vendor Management', lionforce: true, india: false, poland: false },
    { feature: 'Real Estate / Office Setup', lionforce: true, india: false, poland: false },
    { feature: 'Dedicated Admin Executive', lionforce: true, india: false, poland: false },
    { feature: 'OPEX/CAPEX Management', lionforce: true, india: false, poland: false },
    { feature: 'Bank Accounts & Balance Sheets', lionforce: true, india: false, poland: false },
    { feature: 'Legal Risk Transfer', lionforce: true, india: true, poland: true },
    { feature: 'Payroll Processing', lionforce: true, india: true, poland: true },
    { feature: 'Statutory Compliance', lionforce: true, india: true, poland: true }
  ];

  const whyIndia = [
    {
      title: '60% Cost Savings',
      description: 'Compared to Western Europe and North America. Access world-class talent at fraction of the cost.',
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: 'Stable Geopolitical Environment',
      description: 'Unlike Eastern Europe, India offers long-term stability and predictable business environment.',
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'Largest English-Speaking Talent Pool',
      description: 'Access to millions of skilled professionals with excellent English communication.',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Proven Tech Ecosystem',
      description: '13+ years of experience. Bangalore, Hyderabad, Chennai - world-renowned tech hubs.',
      icon: <Award className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>EOR India - White-Label India Teams from $139/month | Lionforce</title>
        <meta name="description" content="Launch your white-label India team in 2-8 weeks. Full EOR services with co-branding, vendor management, and legal risk transfer. 60% cost savings vs Europe." />
      </Helmet>

      <div className="pt-20 bg-white">
        {/* Hero */}
        <section className="relative py-32 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold mb-6 border border-white/30">
                🇮🇳 India Expansion Made Easy
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                Your White-Label <br />India Team
              </h1>
              <p className="text-2xl text-white/90 font-semibold mb-4">
                Launch in 2-8 Weeks • No Legal Entity Needed • Full Compliance
              </p>
              <p className="text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                <strong>ClientName India | powered by Lionforce</strong> - We're the ONLY EOR in India offering white-label branding, complete vendor management, and optional office setup. Unlike generic EOR providers, we build YOUR India presence, not ours.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">From $139/employee/month</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">5 to 50+ employees</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">60% cost savings</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center shadow-2xl">
                  Get Pricing & Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a href="tel:+919600536354" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 inline-flex items-center justify-center">
                  Call +91 98840 52675
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why India */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why <span className="gradient-text">India Now?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In today's geopolitical climate, India offers unmatched stability, cost advantages, and talent depth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyIndia.map((item, index) => {
                const colors = ['from-emerald-500 to-emerald-600', 'from-teal-500 to-teal-600', 'from-cyan-500 to-cyan-600', 'from-blue-500 to-blue-600'];
                return (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all">
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
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Transparent</span> All-Inclusive Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                No hidden fees. All services included. Save 10-15% with 24-month commitment.
              </p>
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
                    <p className="text-sm text-emerald-600 font-semibold">24-month contract (preferred)</p>
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

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Quick Setup & Launch</h3>
                  <p className="text-gray-700 text-sm">⚡ <strong>Timeline:</strong> Launch your India team in just 2-8 weeks</p>
                  <p className="text-gray-600 text-sm mt-2">💼 <strong>Minimum team size:</strong> Start with just 5 employees and scale to 50+</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why We're <span className="gradient-text">Different</span>
              </h2>
              <p className="text-xl text-gray-600">
                The ONLY India EOR offering white-label branding and complete operational support
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-center">
                      <div className="font-bold text-lg">Lionforce</div>
                      <div className="text-xs opacity-90">India White-Label EOR</div>
                    </th>
                    <th className="px-6 py-4 text-center">
                      <div className="font-bold">Generic India EOR</div>
                    </th>
                    <th className="px-6 py-4 text-center">
                      <div className="font-bold">Poland/Europe EOR</div>
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
                        {row.india ? (
                          <CheckCircle className="w-6 h-6 text-gray-400 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-gray-300 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.poland ? (
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

            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                <strong className="text-emerald-600">Our Unique Value:</strong> We don't just handle payroll - we build YOUR India brand and infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your India Team?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join global companies expanding to India with confidence. 2-8 week setup. Zero legal hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="tel:+919600536354" className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300">
                Call +91 98840 52675
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default EOR;

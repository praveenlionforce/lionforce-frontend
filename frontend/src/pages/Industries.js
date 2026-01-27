import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Pill, GraduationCap, Building2, ShoppingCart, Factory, Plane,
  ArrowRight, CheckCircle
} from 'lucide-react';

function Industries() {
  const industries = [
    {
      icon: <Pill className="w-10 h-10" />,
      name: 'Pharmaceuticals & Healthcare',
      description: 'Compliance training, medical education, patient engagement solutions, and healthcare workforce development.',
      color: 'from-blue-500 to-cyan-500',
      clients: ['Cipla', 'Sun Pharma', 'Glenmark', 'Mankind'],
      stats: '100+ healthcare projects'
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      name: 'Education & EdTech',
      description: 'K-12 solutions, higher education platforms, corporate training, and skill development programs.',
      color: 'from-purple-500 to-indigo-500',
      clients: ['Universities', 'EdTech Startups', 'Training Institutes'],
      stats: '500K+ learners impacted'
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      name: 'Banking & Finance',
      description: 'Regulatory compliance, customer onboarding, employee training, and financial literacy programs.',
      color: 'from-emerald-500 to-teal-500',
      clients: ['Axis Bank', 'Financial Services'],
      stats: 'Regulatory compliant'
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      name: 'Retail & FMCG',
      description: 'Sales training, product knowledge, customer service excellence, and brand engagement.',
      color: 'from-orange-500 to-amber-500',
      clients: ['Coca-Cola', 'FMCG Leaders'],
      stats: 'Global retail reach'
    },
    {
      icon: <Factory className="w-10 h-10" />,
      name: 'Manufacturing & Industrial',
      description: 'Safety training, operational excellence, IoT integration, and workforce upskilling.',
      color: 'from-slate-500 to-zinc-600',
      clients: ['Industrial Leaders', 'Manufacturing Giants'],
      stats: 'IoT-enabled solutions'
    },
    {
      icon: <Plane className="w-10 h-10" />,
      name: 'Travel & Hospitality',
      description: 'Customer experience, booking systems, staff training, and digital transformation.',
      color: 'from-rose-500 to-pink-500',
      clients: ['Hotels', 'Travel Agencies'],
      stats: 'Global hospitality'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Industries We Serve | Lionforce - Pharma, EdTech, Banking & More</title>
        <meta name="description" content="Lionforce serves diverse industries including Pharmaceuticals, Healthcare, Education, Banking, Retail, and Manufacturing with custom eLearning and software solutions." />
      </Helmet>

      <div className="pt-20 bg-white overflow-hidden">
        {/* Hero */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-4">Industries</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Expertise Across
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400">Every Sector</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                From pharma giants to EdTech startups, we&apos;ve delivered 300+ projects across industries. 
                Our domain expertise means solutions that actually work for your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle className="w-5 h-5 text-teal-400" />
                  <span>Domain Experts</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle className="w-5 h-5 text-teal-400" />
                  <span>Compliance Ready</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle className="w-5 h-5 text-teal-400" />
                  <span>Scalable Solutions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid - Creative layout */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Hover gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                  
                  <div className="relative bg-white rounded-3xl border border-gray-200 p-8 hover:border-transparent hover:shadow-2xl transition-all duration-500 h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                      {industry.icon}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    {/* Stats badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-6">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                      {industry.stats}
                    </div>
                    
                    {/* Client logos hint */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Trusted by</p>
                      <p className="text-sm text-gray-600">{industry.clients.join(' • ')}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Industry Expertise Matters */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Why Industry
                  <span className="block gradient-text">Expertise Matters</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Generic solutions don&apos;t cut it. We bring deep domain knowledge 
                  to every project, ensuring your solution speaks your industry&apos;s language.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Regulatory compliance built-in',
                    'Industry-specific UX patterns',
                    'Faster time-to-market',
                    'Lower training overhead'
                  ].map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg text-gray-700">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Decorative cards - Clean grid layout */}
                <div className="grid grid-cols-2 gap-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-blue-500 to-cyan-500 p-6 rounded-2xl text-white shadow-lg"
                  >
                    <div className="text-4xl font-bold mb-2">100+</div>
                    <p className="text-white/80">Pharma Projects</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-purple-500 to-indigo-500 p-6 rounded-2xl text-white shadow-lg"
                  >
                    <div className="text-4xl font-bold mb-2">500K+</div>
                    <p className="text-white/80">Learners Trained</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-emerald-500 to-teal-500 p-6 rounded-2xl text-white shadow-lg"
                  >
                    <div className="text-4xl font-bold mb-2">32+</div>
                    <p className="text-white/80">Countries Served</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-orange-500 to-amber-500 p-6 rounded-2xl text-white shadow-lg"
                  >
                    <div className="text-4xl font-bold mb-2">13+</div>
                    <p className="text-white/80">Years Experience</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-teal-600 via-teal-500 to-green-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Don&apos;t See Your Industry?
              </h2>
              <p className="text-xl text-white/90 mb-10">
                We love new challenges. Let&apos;s discuss how we can apply our expertise to your sector.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-teal-600 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                Let&apos;s Talk
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Industries;

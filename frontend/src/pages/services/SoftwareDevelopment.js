import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import {
  ArrowRight,
  Code,
  Brain,
  Smartphone,
  Globe,
  Cpu,
  RefreshCw,
  CheckCircle,
  Phone,
  Layers,
  Shield,
  Zap
} from 'lucide-react';
import { useSiteContent } from '../../hooks/useSiteContent';

function SoftwareDevelopment() {
  const { content, global } = useSiteContent('software');
  
  const hero = content?.hero || {};
  const services = content?.services || [];
  const techStack = content?.techStack || [];
  const benefits = content?.benefits || [];
  
  // Hero boxes with defaults
  const heroBoxes = hero.heroBoxes || [
    { label: 'AI Solutions', value: 'Smart' },
    { label: 'Web & Mobile', value: 'Full Stack' },
    { label: 'IoT', value: 'Connected' },
    { label: 'Cloud', value: 'Scalable' }
  ];
  
  const highlightStat = hero.highlightStat || { value: '300+', label: 'Apps Built' };

  const serviceIcons = [Brain, Code, Cpu, Globe, Smartphone, RefreshCw];

  // SEO data from CMS
  const seo = content?.seo || {};

  return (
    <>
      <Helmet>
        <title>{seo.title || 'Software & AI Development | Custom Apps & ML Solutions | Lionforce'}</title>
        <meta name="description" content={seo.description || 'Custom software development, AI/ML solutions, web and mobile apps, IoT. MVP in 8-12 weeks. Save 50% on development costs.'} />
        <meta name="keywords" content={seo.keywords || 'software development, AI solutions, machine learning, web apps, mobile apps, IoT'} />
        {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}
        <meta property="og:title" content={seo.title || 'Software Development - Lionforce'} />
        <meta property="og:description" content={seo.description || 'Custom software development and AI solutions'} />
        <meta property="og:type" content="website" />
        {seo.canonicalUrl && <link rel="canonical" href={seo.canonicalUrl} />}
      </Helmet>

      <div className="overflow-hidden bg-white">
        {/* Hero Section */}
        <section className={`relative min-h-screen pt-20 bg-gradient-to-br ${hero.gradient || 'from-teal-600 via-cyan-600 to-blue-600'}`}>
          {/* Abstract shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-300/10 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* Left content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/30">
                  <span className="text-xl">{hero.badgeEmoji || '🤖'}</span>
                  <span className="text-sm font-medium text-white">{hero.badge || 'AI-Powered Development'}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" data-testid="software-title">
                  {hero.title || 'Software & AI That Actually Ships'}
                </h1>

                <p className="text-lg text-white/80 font-medium mb-4 tracking-wide">
                  {hero.tagline || 'Code Smart • Build Better • Scale Faster'}
                </p>

                <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-lg">
                  {hero.subtitle || "Got an idea? Let's turn it into a product that wows. AI solutions, web apps, mobile apps, IoT - MVP in 8-12 weeks."}
                </p>

                {/* Stats pills */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {(hero.stats || ['13+ years experience', '300+ apps built', '40% faster delivery']).map((stat, i) => (
                    <span key={i} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">
                      {stat}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    data-testid="software-cta-primary"
                  >
                    {hero.primaryCTA || 'Start Your Project'}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href={`tel:${(global?.phone || '+91 96005 36354').replace(/\s+/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border border-white/30 hover:bg-white/20 transition-all duration-300"
                    data-testid="software-cta-secondary"
                  >
                    <Phone className="w-5 h-5" />
                    {hero.secondaryCTA || `Call ${global?.phone || '+91 96005 36354'}`}
                  </a>
                </div>
              </motion.div>

              {/* Right - Floating cards */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative">
                  {/* Main card */}
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
                    <div className="grid grid-cols-2 gap-4">
                      {heroBoxes.map((item, i) => {
                        const icons = [Brain, Globe, Smartphone, Cpu];
                        const Icon = icons[i % icons.length];
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            className="bg-white/10 p-4 rounded-xl text-center"
                          >
                            <Icon className="w-8 h-8 text-white mx-auto mb-2" />
                            <p className="text-white/70 text-xs">{item.label}</p>
                            <p className="text-white font-bold text-sm">{item.value}</p>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{highlightStat.value}</div>
                        <div className="text-sm text-gray-500">{highlightStat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Build</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From AI-powered solutions to enterprise software - we build products that scale.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = serviceIcons[index % serviceIcons.length];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-teal-300 transition-all hover:shadow-xl h-full">
                      <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center text-white mb-6">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Stack</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                We use the latest technologies to build fast, scalable, and secure applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-teal-500/50 transition-all"
                >
                  <h3 className="text-lg font-bold text-teal-400 mb-2">{tech.category}</h3>
                  <p className="text-gray-300">{tech.techs}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Lionforce</span>?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  We don't just write code - we build products that solve real problems and scale with your business.
                </p>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">{benefit}</p>
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
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4">
                      <Zap className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-gray-900">40%</div>
                      <div className="text-sm text-gray-500">Faster Delivery</div>
                    </div>
                    <div className="text-center p-4">
                      <Layers className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-gray-900">50%</div>
                      <div className="text-sm text-gray-500">Cost Savings</div>
                    </div>
                    <div className="text-center p-4">
                      <Shield className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-gray-900">100%</div>
                      <div className="text-sm text-gray-500">Secure Code</div>
                    </div>
                    <div className="text-center p-4">
                      <RefreshCw className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-gray-900">24/7</div>
                      <div className="text-sm text-gray-500">Support</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-24 bg-gradient-to-r ${hero.gradient || 'from-teal-600 via-cyan-600 to-blue-600'} relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 30% 50%, white 2px, transparent 2px)', backgroundSize: '60px 60px'}}></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Let's turn your idea into a product. Start with a free consultation and get a detailed project estimate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                  data-testid="software-final-cta"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={`tel:${(global?.phone || '+91 96005 36354').replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold text-lg border border-white/30 hover:bg-white/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call {global?.phone || '+91 96005 36354'}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SoftwareDevelopment;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
  ArrowRight,
  BookOpen,
  Brain,
  Gamepad2,
  Layers,
  Target,
  Sparkles,
  CheckCircle,
  Phone,
  Zap,
  Users,
  BarChart3
} from 'lucide-react';
import { useSiteContent } from '../../hooks/useSiteContent';

function ELearning() {
  const { content, global } = useSiteContent('elearning');
  
  const hero = content?.hero || {};
  const solutions = content?.solutions || [];
  const benefits = content?.benefits || [];
  const industries = content?.industries || [];
  
  // Hero boxes with defaults
  const heroBoxes = hero.heroBoxes || [
    { label: 'AI-Powered', value: 'Learning' },
    { label: 'Gamified', value: '3x Engagement' },
    { label: 'Microlearning', value: '5-min Modules' },
    { label: 'Analytics', value: 'Real-time' }
  ];
  
  const highlightStat = hero.highlightStat || { value: '500K+', label: 'Learners Trained' };

  const solutionIcons = [Brain, BookOpen, Gamepad2, Layers, Target, Sparkles];

  return (
    <>
      <Helmet>
        <title>AI-Powered eLearning Solutions | Custom Training | Lionforce</title>
        <meta name="description" content="Transform your training with AI-powered eLearning. Gamification, microlearning, scenario-based learning. 300% higher completion rates." />
      </Helmet>

      <div className="overflow-hidden bg-white">
        {/* Hero Section */}
        <section className={`relative min-h-screen pt-20 bg-gradient-to-br ${hero.gradient || 'from-[#428697] via-[#356d7a] to-[#2d5a66]'}`}>
          {/* Abstract shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-300/10 rounded-full blur-2xl"></div>
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
                  <span className="text-xl">{hero.badgeEmoji || '🎓'}</span>
                  <span className="text-sm font-medium text-white">{hero.badge || 'AI-Powered Learning Solutions'}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" data-testid="elearning-title">
                  {hero.title || 'AI-Powered eLearning Your Teams Will Love'}
                </h1>

                <p className="text-lg text-white/80 font-medium mb-4 tracking-wide">
                  {hero.tagline || 'Think Forward • Learn Alive • Engage Always'}
                </p>

                <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-lg">
                  {hero.subtitle || 'Stop boring training. Start interactive, AI-enhanced, gamified learning that actually works. 300% higher completion rates.'}
                </p>

                {/* Stats pills */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {(hero.stats || ['13+ years experience', '300+ projects delivered', '25+ languages']).map((stat, i) => (
                    <span key={i} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">
                      {stat}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 bg-white text-[#428697] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    data-testid="elearning-cta-primary"
                  >
                    {hero.primaryCTA || 'Get Free Demo & Quote'}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href={`tel:${(global?.phone || '+91 96005 36354').replace(/\s+/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border border-white/30 hover:bg-white/20 transition-all duration-300"
                    data-testid="elearning-cta-secondary"
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
                        const icons = [Brain, Gamepad2, Zap, BarChart3];
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
                      <div className="w-12 h-12 bg-gradient-to-br from-[#428697] to-[#356d7a] rounded-full flex items-center justify-center text-white">
                        <Users className="w-6 h-6" />
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

        {/* Solutions Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#428697] to-[#356d7a]">Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From AI-powered personalization to gamification - we craft learning experiences that stick.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => {
                const Icon = solutionIcons[index % solutionIcons.length];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#428697]/20 to-teal-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#428697]/50 transition-all hover:shadow-xl h-full">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#428697] to-[#356d7a] rounded-xl flex items-center justify-center text-white mb-6">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                      <p className="text-gray-600">{solution.description}</p>
                    </div>
                  </motion.div>
                );
              })}
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
                  Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#428697] to-[#356d7a]">Lionforce</span> eLearning?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  We don't just create courses - we engineer learning experiences that transform behavior and drive results.
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
                      <div className="w-6 h-6 bg-gradient-to-br from-[#428697] to-[#356d7a] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#428697] to-[#356d7a] rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#428697] to-[#356d7a] mb-4">300%</div>
                    <p className="text-gray-600 text-lg mb-6">Higher Completion Rates with Gamification</p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">50%</div>
                        <div className="text-sm text-gray-500">Less Time</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">60%</div>
                        <div className="text-sm text-gray-500">Cost Savings</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">25+</div>
                        <div className="text-sm text-gray-500">Languages</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#428697] to-[#356d7a]">Serve</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Trusted by leading companies across industries for their learning needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#428697]/50 transition-all hover:shadow-lg"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-gray-600 text-sm">{industry.use}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-24 bg-gradient-to-r ${hero.gradient || 'from-[#428697] via-[#356d7a] to-[#2d5a66]'} relative overflow-hidden`}>
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
                Ready to Transform Your Training?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Let's create learning experiences your team will actually enjoy. Start with a free consultation and demo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#428697] px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                  data-testid="elearning-final-cta"
                >
                  Get Free Demo
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

export default ELearning;

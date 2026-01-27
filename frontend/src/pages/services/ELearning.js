import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  ArrowRight, CheckCircle, BookOpen, Gamepad, Zap, Users, Target, Globe,
  BarChart, Clock, Award, TrendingUp, Lightbulb, Video
} from 'lucide-react';

function ELearning() {
  const solutions = [
    { title: 'AI-Powered Learning Paths', description: 'Intelligent content recommendations powered by AI. Personalized learning journeys that adapt to each learner.' },
    { title: 'Customised eLearning', description: 'Personalized content that fits your unique organizational needs. Aligned with your brand, culture, and learning objectives.' },
    { title: 'Gamified Learning', description: 'Drive engagement through game mechanics, badges, leaderboards, and rewards. 3x higher completion rates.' },
    { title: 'Microlearning', description: 'Bite-sized learning modules (3-7 minutes) for quick, effective knowledge transfer. Perfect for busy professionals.' },
    { title: 'Scenario-based Learning', description: 'Real-world scenarios for practical skill development. Learn by doing, not just reading.' },
    { title: 'AI Content Generation', description: 'Leverage AI to create assessments, quizzes, and supplementary content faster than ever before.' },
    { title: 'Application Simulation', description: 'Hands-on software training through realistic simulations. Reduce training time by 50%.' },
    { title: 'Blended Learning', description: 'Perfect mix of instructor-led and digital learning experiences. Best of both worlds.' },
    { title: 'Just-in-time Learning (JIT)', description: 'Quick access to relevant learning content when needed. Performance support tools.' },
    { title: 'Translations & Localization', description: 'Content localized for global audiences. 25+ languages supported.' }
  ];

  const benefits = [
    'AI-powered personalization for each learner',
    'Boost completion rates by 300% with gamification',
    'Reduce training time by 50% with microlearning',
    'Save 60% vs traditional training methods',
    'Measure learning effectiveness with built-in analytics',
    'Scale training across global teams instantly',
    'Comply with industry regulations (GMP, GDP, HSE)',
    '24/7 access from any device, anywhere'
  ];

  const industries = [
    { name: 'Pharmaceuticals', use: 'GMP training, product knowledge, sales enablement' },
    { name: 'Healthcare', use: 'Medical protocols, patient safety, compliance' },
    { name: 'Manufacturing', use: 'Safety training, process optimization, quality control' },
    { name: 'Fintech', use: 'Compliance training, product training, customer service' },
    { name: 'IT/Technology', use: 'Technical training, soft skills, leadership development' }
  ];

  const process = [
    { step: '1', title: 'Discovery', description: 'Understand your goals, audience, and challenges', icon: <Target className="w-8 h-8" /> },
    { step: '2', title: 'Design', description: 'Create engaging storyboards and learning paths', icon: <Lightbulb className="w-8 h-8" /> },
    { step: '3', title: 'Develop', description: 'Build interactive, multimedia-rich content', icon: <Zap className="w-8 h-8" /> },
    { step: '4', title: 'Deploy', description: 'Launch on your LMS with full support', icon: <Globe className="w-8 h-8" /> },
    { step: '5', title: 'Measure', description: 'Track engagement, completion, and business impact', icon: <BarChart className="w-8 h-8" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI-Powered eLearning Solutions - Interactive Training That Converts | Lionforce</title>
        <meta name="description" content="Transform training with AI-powered custom eLearning. Gamification, microlearning, scenarios. 300% higher engagement. 13+ years experience. 300+ projects delivered." />
      </Helmet>

      <div className="pt-20 bg-white">
        {/* Hero */}
        <section className="relative py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold mb-6 border border-white/30">
                🎓 AI-Powered Learning Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                AI-Powered eLearning<br />Your Teams Will Love
              </h1>
              <p className="text-2xl text-white/90 font-semibold mb-4">
                Think Forward • Learn Alive • Engage Always
              </p>
              <p className="text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                Stop boring training. Start interactive, <strong>AI-enhanced</strong>, gamified learning that actually works. 
                <strong> 300% higher completion rates.</strong> Used by pharma, healthcare, fintech, and manufacturing leaders.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">13+ years experience</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">300+ projects delivered</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">25+ languages</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center shadow-2xl">
                  Get Free Demo & Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a href="tel:+919600536354" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 inline-flex items-center justify-center">
                  Call +91 96005 36354
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">10 eLearning Solutions</span> That Drive Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From gamification to microlearning - we create engaging content your employees actually complete
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => {
                const colors = [
                  'from-blue-500 to-blue-600',
                  'from-indigo-500 to-indigo-600',
                  'from-purple-500 to-purple-600',
                  'from-pink-500 to-pink-600',
                  'from-teal-500 to-teal-600',
                  'from-green-500 to-green-600',
                  'from-orange-500 to-orange-600',
                  'from-red-500 to-red-600',
                  'from-cyan-500 to-cyan-600',
                  'from-violet-500 to-violet-600'
                ];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${colors[index]} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{solution.title}</h3>
                    <p className="text-gray-600 text-sm">{solution.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="gradient-text">Proven Process</span>
              </h2>
              <p className="text-xl text-gray-600">From concept to completion in 4-8 weeks</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white mx-auto">
                      {item.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Industry Expertise</span>
              </h2>
              <p className="text-xl text-gray-600">Specialized solutions for your industry</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl border border-indigo-200 hover:shadow-xl transition-all"
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{industry.name}</h3>
                  <p className="text-gray-600 text-sm">{industry.use}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Measurable Impact</span>
              </h2>
              <p className="text-xl text-gray-600">Results our clients see within 3-6 months</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border border-indigo-200"
                >
                  <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/contact" className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Request Free Demo & Proposal
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Training?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 100+ companies who've revolutionized their learning programs. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="tel:+919600536354" className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Call +91 96005 36354
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ELearning;

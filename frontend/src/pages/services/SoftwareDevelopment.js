import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  ArrowRight, CheckCircle, Code, Rocket, Shield, Zap, RefreshCw, Users,
  Layers, Smartphone, Database, Cloud, Lock, TrendingUp
} from 'lucide-react';

function SoftwareDevelopment() {
  const services = [
    { title: 'Comprehensive Product Development', description: 'End-to-end product development from ideation to deployment. MVP in 8-12 weeks.', icon: <Rocket className="w-6 h-6" /> },
    { title: 'IT Consulting Services', description: 'Strategic technology guidance for complex IT challenges. Architecture, scaling, optimization.', icon: <Users className="w-6 h-6" /> },
    { title: 'Expert Software Design & Engineering', description: 'Clean code, scalable architecture, modern frameworks. React, Node.js, Python, Java.', icon: <Code className="w-6 h-6" /> },
    { title: 'Rapid MVP Launch', description: 'Quick market validation with Minimum Viable Product. Launch in 6-10 weeks.', icon: <Zap className="w-6 h-6" /> },
    { title: 'Legacy Software Modernization', description: 'Upgrade outdated systems. Cloud migration, API modernization, UI refresh.', icon: <RefreshCw className="w-6 h-6" /> },
    { title: 'Web Applications', description: 'Dynamic, responsive web apps. React, Vue, Angular. Progressive Web Apps (PWA).', icon: <Layers className="w-6 h-6" /> },
    { title: 'Mobile Apps', description: 'Native iOS/Android and React Native cross-platform apps. App Store optimization.', icon: <Smartphone className="w-6 h-6" /> },
    { title: 'API Development', description: 'RESTful APIs, GraphQL, microservices. Third-party integrations.', icon: <Database className="w-6 h-6" /> }
  ];

  const techStack = [
    { category: 'Frontend', techs: ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript'] },
    { category: 'Backend', techs: ['Node.js', 'Python', 'Java', 'PHP', '.NET'] },
    { category: 'Mobile', techs: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
    { category: 'Database', techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'] },
    { category: 'Cloud', techs: ['AWS', 'Azure', 'Google Cloud', 'Heroku'] },
    { category: 'DevOps', techs: ['Docker', 'Kubernetes', 'CI/CD', 'Jenkins'] }
  ];

  const benefits = [
    '40% faster time-to-market with agile methodology',
    'Save 50% on development costs vs in-house teams',
    'Scalable solutions that grow with your business',
    'Security-first approach with penetration testing',
    'Post-launch support and continuous updates',
    'Dedicated project manager for your project',
    'Transparent weekly progress reports',
    'Code ownership and complete documentation'
  ];

  const process = [
    { title: 'Discovery & Planning', description: '1-2 weeks', details: 'Requirements gathering, wireframes, tech stack selection' },
    { title: 'Design & Prototyping', description: '2-3 weeks', details: 'UI/UX design, interactive prototypes, user testing' },
    { title: 'Development', description: '8-16 weeks', details: 'Agile sprints, weekly demos, continuous feedback' },
    { title: 'Testing & QA', description: '2-3 weeks', details: 'Automated testing, manual QA, performance optimization' },
    { title: 'Deployment & Support', description: 'Ongoing', details: 'Cloud deployment, monitoring, maintenance, updates' }
  ];

  return (
    <>
      <Helmet>
        <title>Custom Software Development - Web & Mobile Apps | Lionforce</title>
        <meta name="description" content="Custom software development services. Web apps, mobile apps, APIs. React, Node.js, Python. 40% faster delivery. 13+ years experience." />
      </Helmet>

      <div className="pt-20 bg-white">
        {/* Hero */}
        <section className="relative py-32 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold mb-6 border border-white/30">
                💻 From Idea to Production-Ready App
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                Software Development<br />That Actually Ships
              </h1>
              <p className="text-2xl text-white/90 font-semibold mb-4">
                Code Smart • Build Better • Scale Faster
              </p>
              <p className="text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                Got an idea? Let's turn it into a product that wows. Web apps, mobile apps, APIs - we build smart, scalable solutions tailored to YOUR workflow. <strong>MVP in 8-12 weeks.</strong> Used by startups and enterprises across 32+ countries.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">13+ years experience</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">300+ apps built</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">40% faster delivery</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center shadow-2xl">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a href="tel:+919600536354" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-teal-600 transition-all duration-300 inline-flex items-center justify-center">
                  Call +91 96005 36354
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Full-Stack Development Services</span>
              </h2>
              <p className="text-xl text-gray-600">From MVP to enterprise-grade applications</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const colors = [
                  'from-teal-500 to-teal-600',
                  'from-cyan-500 to-cyan-600',
                  'from-blue-500 to-blue-600',
                  'from-indigo-500 to-indigo-600',
                  'from-purple-500 to-purple-600',
                  'from-pink-500 to-pink-600',
                  'from-green-500 to-green-600',
                  'from-emerald-500 to-emerald-600'
                ];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${colors[index]} rounded-lg flex items-center justify-center text-white mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Modern Tech Stack</span>
              </h2>
              <p className="text-xl text-gray-600">Industry-leading technologies for scalable solutions</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {techStack.map((stack, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-200"
                >
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">{stack.category}</h3>
                  <div className="space-y-2">
                    {stack.techs.map((tech, idx) => (
                      <div key={idx} className="text-gray-600 text-xs">{tech}</div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Our Agile Process</span>
              </h2>
              <p className="text-xl text-gray-600">From concept to launch in 12-20 weeks</p>
            </div>

            <div className="space-y-6">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-teal-200 flex items-center gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.details}</p>
                  </div>
                  <div className="flex-shrink-0 text-teal-600 font-semibold">
                    {step.description}
                  </div>
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
                <span className="gradient-text">Why Choose Us?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg border border-teal-200"
                >
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/contact" className="inline-flex items-center bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Discuss Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's turn your idea into reality. 300+ successful projects. 13+ years experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="tel:+919600536354" className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-teal-600 transition-all duration-300">
                Call +91 96005 36354
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SoftwareDevelopment;

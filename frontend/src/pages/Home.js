import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
  ArrowRight,
  BookOpen,
  Code,
  Palette,
  Video,
  TrendingUp,
  Users,
  CheckCircle,
  Award,
  Zap,
  Globe,
  Target
} from 'lucide-react';

function Home() {
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setStatsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Custom eLearning',
      description: 'Interactive, scenario-based, and gamified learning that clicks. Transform training into engagement.',
      link: '/services/elearning',
      tagline: 'Think Forward • Learn Alive'
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Software Development',
      description: 'Smart, scalable, user-friendly solutions tailored to your workflow, goals, and growth plans.',
      link: '/services/software-development',
      tagline: 'Code Smart • Build Better'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'UX/UI Design',
      description: 'Intuitive, elegant, conversion-boosting user journeys. Every interaction is intentional.',
      link: '/services/ux-ui-design',
      tagline: 'Feel Flow • Tap Happy'
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: 'Creative Services',
      description: '3D animations, explainers, presentations. Turn complex ideas into captivating visual stories.',
      link: '/services/creative',
      tagline: 'Lights • Camera • Creativity'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Digital Marketing',
      description: 'Magnetic campaigns powered by smart content, bold design, and data-backed targeting.',
      link: '/services/digital-marketing',
      tagline: 'Get Seen • Buzz Loud'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Consulting',
      description: 'Expert guidance that fuels transformation. Strategic insights for sustainable growth.',
      link: '/services/consulting',
      tagline: 'Expert Wisdom • Real Results'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'EOR Services',
      description: 'Expand to India with white-label teams. Full compliance, zero entity setup.',
      link: '/services/eor',
      tagline: 'India Entry Made Easy'
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'ODC Setup',
      description: 'Your dedicated India development center. Scale from 5 to 50+ engineers.',
      link: '/services/odc',
      tagline: 'Build in India • Scale Fast'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'COE Services',
      description: 'India Center of Excellence. Best practices, innovation, operational excellence.',
      link: '/services/coe',
      tagline: 'Excellence in India'
    }
  ];

  const clients = [
    { name: 'Glenmark', logo: 'https://i0.wp.com/lionforce.net/wp-content/uploads/2024/05/glenmark-1.png?fit=135%2C75&ssl=1' },
    { name: 'Medvet', logo: 'https://i0.wp.com/lionforce.net/wp-content/uploads/2024/05/medvet-1.png?fit=150%2C70&ssl=1' },
    { name: 'Mankind', logo: 'https://i0.wp.com/lionforce.net/wp-content/uploads/2024/05/mankind-2.png?fit=150%2C70&ssl=1' },
    { name: 'RCS', logo: 'https://i0.wp.com/lionforce.net/wp-content/uploads/2024/05/RCS-2.png?fit=150%2C70&ssl=1' },
    { name: 'Axis', logo: 'https://i0.wp.com/lionforce.net/wp-content/uploads/2025/06/axis-1.png?fit=150%2C70&ssl=1' },
    { name: 'Coca-Cola', logo: 'https://i0.wp.com/lionforce.net/wp-content/uploads/2024/05/coke-2.png?fit=150%2C70&ssl=1' },
    { name: 'Cipla', logo: 'https://i0.wp.com/lionforce.net/wp-content/uploads/2024/05/cipla-2.png?fit=150%2C70&ssl=1' },
    { name: 'OneHealth', logo: 'https://i0.wp.com/lionforce.net/wp-content/uploads/2024/05/onehealth1.png?fit=108%2C58&ssl=1' },
    { name: 'Sun Pharma', logo: 'https://i0.wp.com/lionforce.net/wp-content/uploads/2024/05/sun-pharma.png?fit=135%2C75&ssl=1' }
  ];

  const testimonials = [
    {
      quote: "I have great experience working with Praveen and Team Lionforce on multiple projects. They bring great subject matter expertise in LXD and willingness to always walk that extra mile for the customer.",
      author: "Head of Academy",
      company: "Leading Pharmaceutical Company, India"
    },
    {
      quote: "Praveen showed high professionalism and adaptability; his team met the deadlines strictly. Very pleased with the final result.",
      author: "CEO",
      company: "Language Training Company, Spain"
    },
    {
      quote: "I've worked with Praveen almost two years and have come to favour Lionforce over all offshore suppliers. The work is turned around quickly.",
      author: "General Manager",
      company: "EdTech Company, Australia"
    },
    {
      quote: "LionForce produced a website with a fully functional Order Entry program that exceeded our expectations.",
      author: "President",
      company: "Leading Fertiliser Company, USA"
    }
  ];

  const benefits = [
    {
      title: '100% Certified Talent',
      description: 'Work with meticulously vetted professionals ready to exceed your expectations.',
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'Team Scalability',
      description: 'Effortlessly adjust your team to align with your evolving roadmap.',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Save Up to 40%',
      description: 'Reduce costs significantly while maintaining quality.',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Start in 5 Days',
      description: 'Launch your team quickly. Proven processes ensure speed.',
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Lionforce - Custom eLearning & Software Development | EOR, ODC, COE Services India</title>
        <meta name="description" content="Transform your business with Lionforce's eLearning, software development, and India expansion services. White-label teams, EOR, ODC setup from $139/month." />
      </Helmet>
      
      <div className="overflow-hidden bg-white">
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-teal-50 via-white to-green-50">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568952433726-3896e3881c65?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Empowering Minds,</span>
                <br />
                <span className="text-gray-900">Transforming Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
                Game-changers in custom eLearning, software development, and India expansion services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/about" className="bg-white border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all duration-300 inline-flex items-center justify-center shadow-lg">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section id="stats-section" className="py-20 bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={statsVisible ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5 }}>
                <div className="text-5xl font-bold gradient-text mb-2">13+</div>
                <div className="text-gray-600 text-lg">Years of Experience</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={statsVisible ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className="text-5xl font-bold gradient-text mb-2">100+</div>
                <div className="text-gray-600 text-lg">Projects Delivered</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={statsVisible ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.4 }}>
                <div className="text-5xl font-bold gradient-text mb-2">32+</div>
                <div className="text-gray-600 text-lg">Countries Served</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-gradient-to-b from-white via-teal-50/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="gradient-text">Game-Changing</span> Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive services designed to transform your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={service.link} 
                    className="block h-full bg-white p-6 rounded-xl border border-gray-200 hover:border-teal-400 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="text-teal-600 mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-xs text-teal-600 mb-3 font-semibold uppercase tracking-wide">{service.tagline}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                    <div className="flex items-center text-teal-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by <span className="gradient-text">Industry Leaders</span>
              </h2>
            </div>
            <div className="relative overflow-hidden bg-white/50 backdrop-blur-sm py-8 rounded-2xl border border-gray-200">
              <div className="flex animate-scroll">
                {[...clients, ...clients].map((client, index) => (
                  <div key={index} className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300">
                    <img src={client.logo} alt={client.name} className="h-16 w-auto object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-br from-teal-50 via-green-50/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Client <span className="gradient-text">Success Stories</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 rounded-xl border-l-4 border-teal-500 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-teal-600 text-5xl mb-4 font-serif">"</div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">{testimonial.quote}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
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
                Why <span className="gradient-text">Choose Lionforce?</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-full text-white mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create something extraordinary together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="tel:+919884052675" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-teal-600 transition-all duration-300 inline-flex items-center justify-center">
                Call +91 98840 52675
              </a>
            </div>
          </div>
        </section>

        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </>
  );
}

export default Home;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
      tagline: 'Get Seen • Buzz Loud • Grow On'
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
      description: 'Employer of Record solutions for seamless global hiring and compliance management.',
      link: '/services/eor',
      tagline: 'Hire Global • Stay Compliant'
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'ODC Setup',
      description: 'Offshore Development Centers that extend your team capabilities globally.',
      link: '/services/odc',
      tagline: 'Scale Fast • Build Strong'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'COE Services',
      description: 'Center of Excellence for best practices, innovation, and operational excellence.',
      link: '/services/coe',
      tagline: 'Excellence • Innovation • Growth'
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
      quote: "I have great experience working with Praveen and Team Lionforce on multiple projects. They bring great subject matter expertise in LXD and willingness to always walk that extra mile for the customer. Together we could create some very exciting and best in class learning journeys.",
      author: "Head of Academy",
      company: "Leading Pharmaceutical Company, India"
    },
    {
      quote: "I hired Lionforce Technology for the development of our online English course. Praveen showed high professionalism and adaptability; his team met the deadlines strictly, providing all materials and contents on time.",
      author: "CEO",
      company: "Language Training Company, Spain"
    },
    {
      quote: "I've worked with Praveen almost two years and have come to favour Lionforce over all of our offshore suppliers. The work is turned around quickly, there is solid consultation and the proof reading is accurate.",
      author: "General Manager",
      company: "EdTech Company, Australia"
    },
    {
      quote: "LionForce has provided our companies with graphic, label, logo design and this year they have produced a website with a fully functional Order Entry program that has exceeded our expectations.",
      author: "President",
      company: "Leading Fertiliser Company, USA"
    }
  ];

  const benefits = [
    {
      title: '100% Certified Talent',
      description: 'Unlock Excellence with Our Top-Tier Developers! Experience the difference of working with meticulously vetted professionals.',
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'Team Scalability',
      description: 'Stay Agile and Adaptable! Effortlessly adjust your development team to align with your evolving roadmap.',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Save Up to 40%',
      description: 'Accelerate Your Project Launch—No Delays, Just Results! Say goodbye to lengthy hiring processes.',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Start in 5 Days',
      description: 'Launch your team quickly without the wait! Ditch the lengthy hiring hassles.',
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1568952433726-3896e3881c65?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
        data-testid="hero-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Empowering Minds,</span>
              <br />
              <span className="text-white">Transforming Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              We're not just innovators; we're game-changers in custom eLearning and software development, 
              delivering tailored solutions that turbocharge engagement and ignite operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
                data-testid="hero-cta-primary"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="bg-transparent border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center"
                data-testid="hero-cta-secondary"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 bg-gray-800" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={statsVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl font-bold gradient-text mb-2">10+</div>
              <div className="text-gray-400 text-lg">Years of Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={statsVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl font-bold gradient-text mb-2">100+</div>
              <div className="text-gray-400 text-lg">Projects Delivered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={statsVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-5xl font-bold gradient-text mb-2">32+</div>
              <div className="text-gray-400 text-lg">Countries Served</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Game-Changing</span> Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover the power of our comprehensive services designed to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-hover"
              >
                <Link
                  to={service.link}
                  className="block bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-300"
                  data-testid={`service-card-${index}`}
                >
                  <div className="text-yellow-500 mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-sm text-yellow-500 mb-3 font-semibold">{service.tagline}</p>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="flex items-center text-yellow-500 font-semibold">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105"
              data-testid="services-cta"
            >
              Talk to an Expert
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-900" data-testid="clients-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300"
                  data-testid={`client-logo-${index}`}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Don't Just Take <span className="gradient-text">Our Word</span>
            </h2>
            <p className="text-xl text-gray-400">Witness it first hand, directly from our lovely customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700"
                data-testid={`testimonial-${index}`}
              >
                <div className="text-yellow-500 text-5xl mb-4">"</div>
                <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900" data-testid="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span className="gradient-text">Choose Lionforce?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We turn ambitious visions into extraordinary realities that elevate your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
                data-testid={`benefit-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full text-gray-900 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600" data-testid="final-cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Let's create something extraordinary together. Get in touch with our experts today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              data-testid="final-cta-contact"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+919884052675"
              className="bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
              data-testid="final-cta-call"
            >
              Call +91 98840 52675
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default Home;

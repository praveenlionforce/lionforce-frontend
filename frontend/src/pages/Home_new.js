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
      description: 'White-label India teams. Full compliance, payroll, HR—without setting up a legal entity.',
      link: '/services/eor',
      tagline: 'Hire Global • Stay Compliant'
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'ODC Setup',
      description: 'Dedicated offshore development center. Scale your team from 5 to 50+ with full infrastructure.',
      link: '/services/odc',
      tagline: 'Scale Fast • Build Strong'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'COE Services',
      description: 'Center of Excellence for best practices, innovation, and operational excellence.',
      link: '/services/coe',
      tagline: 'Excellence • Innovation'
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
      quote: "Praveen showed high professionalism and adaptability; his team met the deadlines strictly, providing all materials and contents on time. Very pleased with the final result.",
      author: "CEO",
      company: "Language Training Company, Spain"
    },
    {
      quote: "I've worked with Praveen almost two years and have come to favour Lionforce over all of our offshore suppliers. The work is turned around quickly with solid consultation.",
      author: "General Manager",
      company: "EdTech Company, Australia"
    },
    {
      quote: "LionForce has produced a website with a fully functional Order Entry program that has exceeded our expectations. The work was hard and complex but they patiently addressed each issue.",
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
      description: 'Say goodbye to lengthy hiring processes and reduce costs significantly.',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Start in 5 Days',
      description: 'Launch your team quickly without the wait. Proven processes ensure speed.',
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Lionforce - Custom eLearning & Software Development | EOR, ODC, COE Services India</title>
        <meta name="description" content="Transform your business with Lionforce's custom eLearning, software development, UX/UI design, and global workforce solutions. White-label India teams, EOR services, offshore development centers." />
        <meta name="keywords" content="custom elearning India, software development India, employer of record India, offshore development center, white label India team, EOR services, ODC setup, COE consulting" />
      </Helmet>
      
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-teal-50 via-white to-green-50"
          data-testid="hero-section"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568952433726-3896e3881c65?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Empowering Minds,</span>
                <br />
                <span className="text-gray-900">Transforming Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
                Game-changers in custom eLearning and software development, delivering tailored solutions 
                that turbocharge engagement and ignite operational excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
                  data-testid="hero-cta-primary"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="bg-white border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all duration-300 inline-flex items-center justify-center shadow-lg"
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
            <div className="w-6 h-10 border-2 border-teal-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-teal-600 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section id="stats-section" className="py-20 bg-white border-y border-gray-200" data-testid="stats-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={statsVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="text-5xl font-bold gradient-text mb-2">10+</div>
                <div className="text-gray-600 text-lg">Years of Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={statsVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-5xl font-bold gradient-text mb-2">100+</div>
                <div className="text-gray-600 text-lg">Projects Delivered</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={statsVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-5xl font-bold gradient-text mb-2">32+</div>
                <div className="text-gray-600 text-lg">Countries Served</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section - Continues in next file due to length */}

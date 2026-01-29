import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import {
  ArrowRight,
  BookOpen,
  Code,
  Palette,
  Video,
  TrendingUp,
  Users,
  CheckCircle,
  Globe,
  Quote,
  Sparkles,
  Play,
  Briefcase,
  Lightbulb,
  Zap,
  Shield,
  Heart,
  Star,
  Target,
  Layers,
  Database,
  Cpu,
  Wifi,
  Monitor,
  Smartphone,
  Cloud,
  Server,
  Box,
  Mail,
  Phone,
  Calendar,
  Clock,
  Settings,
  Award,
  MessageSquare
} from 'lucide-react';
import { useSiteContent } from '../hooks/useSiteContent';

function Home() {
  const { content, loading, global } = useSiteContent('home');

  // Use CMS content with fallbacks
  const hero = content?.hero || {};
  const stats = content?.stats || {};
  const whyUs = content?.whyUs || {};
  const testimonials = content?.testimonials || {};
  const indiaExpansionCTA = content?.indiaExpansionCTA || {};
  const finalCTA = content?.finalCTA || {};
  const servicesSection = content?.services || {};
  
  // Services from CMS or defaults
  const services = servicesSection.items || [
    {
      icon: 'BookOpen',
      title: 'AI-Powered eLearning',
      description: 'Interactive, AI-enhanced learning that clicks.',
      link: '/services/elearning',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: 'Code',
      title: 'Software & AI',
      description: 'Smart, AI-driven solutions for growth.',
      link: '/services/software-development',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: 'Palette',
      title: 'UX/UI Design',
      description: 'Intuitive experiences that convert.',
      link: '/services/ux-ui-design',
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: 'Video',
      title: 'Creative Services',
      description: '3D, animations, visual storytelling.',
      link: '/services/creative',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: 'TrendingUp',
      title: 'Digital Marketing',
      description: 'Campaigns that get you noticed.',
      link: '/services/digital-marketing',
      color: 'from-rose-500 to-pink-600'
    },
    {
      icon: 'Globe',
      title: 'India Expansion',
      description: 'EOR, ODC, COE-your India team.',
      link: '/services/india-expansion',
      color: 'from-emerald-500 to-green-600'
    }
  ];

  // Icon mapping - all available icons
  const iconMap = {
    BookOpen, Code, Palette, Video, TrendingUp, Globe, Users, Briefcase,
    Lightbulb, Zap, Shield, Heart, Star, Target, Layers, Database, Cpu, Wifi,
    Monitor, Smartphone, Cloud, Server, Box, Mail, Phone, Calendar, Clock,
    Settings, Award, CheckCircle, MessageSquare
  };

  const clients = content?.clients?.logos || [
    { name: 'Glenmark', logo: 'https://i0.wp.com/lionforce.net/wp-content/uploads/2024/05/glenmark-1.png?fit=135%2C75&ssl=1' },
    { name: 'Mankind', logo: 'https://i0.wp.com/lionforce.net/wp-content/uploads/2024/05/mankind-2.png?fit=150%2C70&ssl=1' },
    { name: 'Coca-Cola', logo: 'https://i0.wp.com/lionforce.net/wp-content/uploads/2024/05/coke-2.png?fit=150%2C70&ssl=1' },
    { name: 'Cipla', logo: 'https://i0.wp.com/lionforce.net/wp-content/uploads/2024/05/cipla-2.png?fit=150%2C70&ssl=1' },
    { name: 'Sun Pharma', logo: 'https://i0.wp.com/lionforce.net/wp-content/uploads/2024/05/sun-pharma.png?fit=135%2C75&ssl=1' },
    { name: 'Axis', logo: 'https://i0.wp.com/lionforce.net/wp-content/uploads/2025/06/axis-1.png?fit=150%2C70&ssl=1' }
  ];
  
  // Hero boxes (4 service cards in hero)
  const heroBoxes = hero.heroBoxes || [
    { title: 'AI-Powered eLearning', description: 'Interactive, AI-enhanced learning that clicks.', link: '/services/elearning', color: 'from-indigo-500 to-purple-600' },
    { title: 'Software & AI', description: 'Smart, AI-driven solutions for growth.', link: '/services/software-development', color: 'from-teal-500 to-cyan-600' },
    { title: 'UX/UI Design', description: 'Intuitive experiences that convert.', link: '/services/ux-ui-design', color: 'from-violet-500 to-purple-600' },
    { title: 'Creative Services', description: '3D, animations, visual storytelling.', link: '/services/creative', color: 'from-orange-500 to-amber-500' }
  ];
  
  const highlightStat = hero.highlightStat || { value: '500K+', label: 'People Impacted' };

  const whyUsItems = whyUs.items || [
    { number: '01', title: '100% Certified Talent', desc: 'Experience the difference of working with professionals who are meticulously vetted and ready to exceed your expectations.' },
    { number: '02', title: 'Team Scalability', desc: 'Effortlessly adjust your development team to align with your evolving roadmap. Stay agile and adaptable.' },
    { number: '03', title: 'Save up to 40%', desc: 'Accelerate your project launch with premium quality at smart pricing. No delays, just results.' },
    { number: '04', title: 'Kick off in 5 Days', desc: 'Ditch the lengthy hiring hassles and launch your team quickly. Start your project without the wait.' },
    { number: '05', title: 'All Tech Under One Roof', desc: 'Our skilled team excels across major tech platforms, ready to tackle any challenge you throw our way.' },
    { number: '06', title: 'Lionforce Excellence', desc: 'Quality and high standards are in our DNA. We maximize ROI and ensure every project exceeds expectations.' }
  ];

  const testimonialItems = testimonials.items || [
    {
      quote: "They bring great subject matter expertise in LXD and willingness to always walk that extra mile for the customer.",
      author: "Head of Academy",
      company: "Leading Pharmaceutical, India"
    },
    {
      quote: "Praveen showed high professionalism and adaptability; his team met the deadlines strictly.",
      author: "CEO",
      company: "Language Training, Spain"
    },
    {
      quote: "I've come to favour Lionforce over all offshore suppliers. The work is turned around quickly.",
      author: "General Manager",
      company: "EdTech Company, Australia"
    }
  ];

  // India expansion CTA stats
  const indiaStats = indiaExpansionCTA.stats || [
    { label: 'Launch Time', value: '2-8 weeks' },
    { label: 'Cost Savings', value: 'Up to 60%' },
    { label: 'Team Types', value: 'EOR • ODC • COE' },
    { label: 'Support', value: '24/7 Ops' }
  ];

  // SEO data from CMS
  const seo = content?.seo || {};

  return (
    <>
      <SEO 
        title={seo.title || 'Lionforce - Custom eLearning & Software Development | India Expansion Services'}
        description={seo.description || "Transform your business with Lionforce's eLearning, software development, and India expansion services. 13+ years, 300+ projects, 32+ countries."}
        keywords={seo.keywords || 'eLearning, software development, AI solutions, India expansion, EOR, ODC'}
        ogImage={seo.ogImage}
        ogTitle={seo.title || 'Lionforce Technologies'}
        ogDescription={seo.description || "Transform your business with Lionforce"}
        canonicalUrl={seo.canonicalUrl}
      />
      
      <div className="overflow-hidden bg-white">
        {/* Hero - Split asymmetric design */}
        <section className="relative min-h-screen pt-20">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-teal-50"></div>
          <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-gradient-to-br from-teal-400/30 to-green-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* Left content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-8 border border-gray-100">
                  <Sparkles className="w-4 h-4 text-teal-600" />
                  <span className="text-sm font-medium text-gray-700">{hero.badge || 'Transforming Businesses Since 2012'}</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                  <span className="text-gray-900">{hero.title1 || 'Innovate.'}</span>
                  <br />
                  <span className="text-gray-900">{hero.title2 || 'Scale.'}</span>
                  <br />
                  <span className="gradient-text">{hero.title3 || 'Transform.'}</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-lg">
                  {hero.subtitle || "Custom eLearning that sticks. Software that scales. From concept to launch - we build what others can't."}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link 
                    to={hero.buttonLink || "/contact"} 
                    className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    data-testid="hero-cta-primary"
                  >
                    {hero.buttonText || 'Get Started'}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to={hero.secondaryButtonLink || "/about"} 
                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg border-2 border-gray-200 hover:border-teal-500 transition-all duration-300"
                    data-testid="hero-cta-secondary"
                  >
                    <Play className="w-5 h-5" />
                    {hero.secondaryButtonText || 'Our Story'}
                  </Link>
                </div>

                {/* Stats inline */}
                <div className="flex items-center gap-8">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">{stats.years || '13+'}</div>
                    <div className="text-sm text-gray-500">{stats.yearsLabel || 'Years'}</div>
                  </div>
                  <div className="w-px h-10 bg-gray-300"></div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">{stats.projects || '300+'}</div>
                    <div className="text-sm text-gray-500">{stats.projectsLabel || 'Projects'}</div>
                  </div>
                  <div className="w-px h-10 bg-gray-300"></div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">{stats.countries || '32+'}</div>
                    <div className="text-sm text-gray-500">{stats.countriesLabel || 'Countries'}</div>
                  </div>
                </div>
              </motion.div>

              {/* Right - Service cards stack */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="grid grid-cols-2 gap-4">
                  {heroBoxes.map((box, index) => {
                    const icons = [BookOpen, Code, Palette, Video];
                    const Icon = icons[index % icons.length];
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group"
                      >
                        <Link to={box.link || '/services'}>
                          <div className={`p-6 rounded-2xl bg-gradient-to-br ${box.color || 'from-teal-500 to-cyan-600'} text-white shadow-lg hover:shadow-2xl transition-all`}>
                            <Icon className="w-8 h-8" />
                            <h3 className="font-bold mt-4 mb-1">{box.title}</h3>
                            <p className="text-white/80 text-sm">{box.description}</p>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center text-white">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{highlightStat.value}</div>
                      <div className="text-sm text-gray-500">{highlightStat.label}</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </section>

        {/* Clients Marquee - Animated scrolling logos */}
        {clients.length > 0 && (
          <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-6">
              <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider">{content?.clients?.title || 'Trusted by industry leaders'}</p>
            </div>
            <div className="relative">
              {/* Gradient overlays for smooth fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
              
              {/* Scrolling container - infinite seamless loop */}
              <div className="flex overflow-hidden">
                <div className="flex animate-marquee-scroll">
                  {/* Triple the logos for smoother infinite effect */}
                  {[...clients, ...clients, ...clients].map((client, index) => (
                    <div key={`logo-${index}`} className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                      <img src={client.logo} alt={client.name} className="h-12 w-auto object-contain min-w-[100px]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Services - Bento grid style */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {content?.services?.title ? (
                  <>
                    {content.services.title.split(' ').slice(0, -1).join(' ')}{' '}
                    <span className="gradient-text">{content.services.title.split(' ').slice(-1)}</span>
                  </>
                ) : (
                  <>What We <span className="gradient-text">Build</span></>
                )}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {content?.services?.subtitle || 'From learning experiences to software solutions - we craft digital products that make a difference.'}
              </p>
            </motion.div>

            {/* Bento Grid - Balanced layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Render all 6 services dynamically */}
              {services.map((service, index) => {
                const IconComponent = iconMap[service.icon] || Globe;
                // First 3 are featured (large gradient cards)
                if (index < 3) {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="lg:col-span-1"
                    >
                      <Link to={service.link} className="block h-full" data-testid={`service-${index}`}>
                        <div className={`h-full min-h-[280px] p-8 rounded-3xl bg-gradient-to-br ${service.color || 'from-teal-500 to-cyan-600'} text-white relative overflow-hidden group hover:shadow-2xl transition-all`}>
                          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                          <div className="relative z-10">
                            <IconComponent className="w-10 h-10 mb-4" />
                            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                            <p className="text-white/80 text-sm mb-4">{service.description}</p>
                            <div className="inline-flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all">
                              Learn More <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                }
                // Remaining services as smaller cards
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index - 3) * 0.1 }}
                  >
                    <Link to={service.link} className="block h-full" data-testid={`service-${index}`}>
                      <div className="h-full p-6 rounded-2xl bg-white border border-gray-200 hover:border-transparent hover:shadow-xl transition-all group">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color || 'from-gray-500 to-gray-600'} flex items-center justify-center text-white mb-4`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-teal-600 transition-colors">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Lionforce - Horizontal scroll feel */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{whyUs.title || 'Why Teams Choose Us'}</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {whyUs.subtitle || "We don't just deliver projects - we build partnerships that last."}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyUsItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-green-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative p-6 rounded-2xl border border-gray-700 hover:border-teal-500/50 transition-colors bg-gray-800/50 backdrop-blur h-full">
                    <span className="text-4xl font-bold text-gray-700 group-hover:text-teal-500/50 transition-colors">{item.number}</span>
                    <h3 className="text-xl font-bold mt-4 mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials - Editorial style */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {testimonials.title ? (
                  <>
                    {testimonials.title.split(' ').slice(0, -1).join(' ')}{' '}
                    <span className="gradient-text">{testimonials.title.split(' ').slice(-1)}</span>
                  </>
                ) : (
                  <>Client <span className="gradient-text">Stories</span></>
                )}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonialItems.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <Quote className="absolute -top-4 -left-2 w-12 h-12 text-teal-100" />
                  <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 h-full">
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-10 bg-gradient-to-b from-teal-500 to-green-500 rounded-full"></div>
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* India Expansion CTA */}
        <section className="py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 30% 50%, white 2px, transparent 2px)', backgroundSize: '60px 60px'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-white/80 font-semibold text-sm uppercase tracking-widest mb-4">🇮🇳 {indiaExpansionCTA.badge || 'India Expansion'}</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {indiaExpansionCTA.title || 'Build Your India Team in Weeks, Not Months'}
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  {indiaExpansionCTA.subtitle || 'EOR, ODC, COE services with full operational support. Co-branding available. Save 60% while accessing world-class talent.'}
                </p>
                <Link
                  to={indiaExpansionCTA.buttonLink || "/services/india-expansion"}
                  className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                  data-testid="india-expansion-cta"
                >
                  {indiaExpansionCTA.buttonText || 'Explore India Services'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {indiaStats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                {finalCTA.title || 'Ready to Build Something Amazing?'}
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                {finalCTA.subtitle || "Let's turn your vision into reality. Start with a free consultation."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={finalCTA.buttonLink || "/contact"}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-green-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                  data-testid="final-cta-btn"
                >
                  {finalCTA.buttonText || 'Start Your Project'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={`tel:${(finalCTA.phone || global?.phone || '+91 96005 36354').replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-200 transition-all duration-300"
                  data-testid="phone-cta"
                >
                  Call {finalCTA.phone || global?.phone || '+91 96005 36354'}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;

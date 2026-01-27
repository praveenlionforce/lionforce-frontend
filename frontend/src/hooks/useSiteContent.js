import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_BACKEND_URL;

// Default content structure (fallback when CMS data is not available)
const defaultContent = {
  home: {
    seo: {
      title: 'Lionforce Technologies - AI-Powered eLearning & Software Development',
      description: 'Transform your business with custom eLearning solutions, AI-powered software development, and creative services. 13+ years of excellence, 300+ projects delivered globally.',
      keywords: 'eLearning, software development, AI solutions, custom training, corporate learning, India expansion, EOR, ODC, digital transformation',
      ogImage: '',
      canonicalUrl: ''
    },
    hero: {
      badge: 'Transforming Businesses Since 2012',
      title1: 'Innovate.',
      title2: 'Scale.',
      title3: 'Transform.',
      subtitle: "Custom eLearning that sticks. Software that scales. From concept to launch - we build what others can't.",
      buttonText: 'Get Started',
      buttonLink: '/contact',
      secondaryButtonText: 'Our Story',
      secondaryButtonLink: '/about',
      backgroundImage: '',
      heroBoxes: [
        { title: 'AI-Powered eLearning', description: 'Interactive, AI-enhanced learning that clicks.', link: '/services/elearning', color: 'from-indigo-500 to-purple-600' },
        { title: 'Software & AI', description: 'Smart, AI-driven solutions for growth.', link: '/services/software-development', color: 'from-teal-500 to-cyan-600' },
        { title: 'UX/UI Design', description: 'Intuitive experiences that convert.', link: '/services/ux-ui-design', color: 'from-violet-500 to-purple-600' },
        { title: 'Creative Services', description: '3D, animations, visual storytelling.', link: '/services/creative', color: 'from-orange-500 to-amber-500' }
      ],
      highlightStat: { value: '500K+', label: 'People Impacted' }
    },
    stats: {
      years: '13+',
      yearsLabel: 'Years',
      projects: '300+',
      projectsLabel: 'Projects',
      countries: '32+',
      countriesLabel: 'Countries'
    },
    services: {
      title: 'What We Build',
      subtitle: 'From learning experiences to software solutions - we craft digital products that make a difference.',
      items: [
        { title: 'AI-Powered eLearning', description: 'Interactive, AI-enhanced learning that transforms engagement.', link: '/services/elearning', color: 'indigo' },
        { title: 'Software & AI', description: 'Smart, AI-driven solutions from web apps to IoT integrations.', link: '/services/software-development', color: 'teal' },
        { title: 'India Expansion', description: 'EOR, ODC, COE services - build your India team in weeks.', link: '/services/india-expansion', color: 'emerald' }
      ]
    },
    whyUs: {
      title: 'Why Teams Choose Us',
      subtitle: "We don't just deliver projects - we build partnerships that last.",
      items: [
        { number: '01', title: '100% Certified Talent', desc: 'Experience the difference of working with professionals who are meticulously vetted and ready to exceed your expectations.' },
        { number: '02', title: 'Team Scalability', desc: 'Effortlessly adjust your development team to align with your evolving roadmap. Stay agile and adaptable.' },
        { number: '03', title: 'Save up to 40%', desc: 'Accelerate your project launch with premium quality at smart pricing. No delays, just results.' },
        { number: '04', title: 'Kick off in 5 Days', desc: 'Ditch the lengthy hiring hassles and launch your team quickly. Start your project without the wait.' },
        { number: '05', title: 'All Tech Under One Roof', desc: 'Our skilled team excels across major tech platforms, ready to tackle any challenge you throw our way.' },
        { number: '06', title: 'Lionforce Excellence', desc: 'Quality and high standards are in our DNA. We maximize ROI and ensure every project exceeds expectations.' }
      ]
    },
    testimonials: {
      title: 'Client Stories',
      items: [
        { quote: 'They bring great subject matter expertise in LXD and willingness to always walk that extra mile.', author: 'Head of Academy', company: 'Leading Pharmaceutical, India' },
        { quote: 'Praveen showed high professionalism and adaptability; his team met the deadlines strictly.', author: 'CEO', company: 'Language Training, Spain' },
        { quote: "I've come to favour Lionforce over all offshore suppliers. The work is turned around quickly.", author: 'General Manager', company: 'EdTech Company, Australia' }
      ]
    },
    clients: {
      title: 'Trusted by industry leaders',
      logos: []
    },
    indiaExpansionCTA: {
      badge: 'India Expansion',
      title: 'Build Your India Team in Weeks, Not Months',
      subtitle: 'EOR, ODC, COE services with full operational support. Co-branding available. Save 60% while accessing world-class talent.',
      buttonText: 'Explore India Services',
      buttonLink: '/services/india-expansion'
    },
    finalCTA: {
      title: 'Ready to Build Something Amazing?',
      subtitle: "Let's turn your vision into reality. Start with a free consultation.",
      buttonText: 'Start Your Project',
      buttonLink: '/contact',
      phone: '+91 96005 36354'
    }
  },
  about: {
    hero: {
      tagline: 'Our Story',
      title1: 'Fueling Success',
      title2: 'Through Innovation',
      subtitle: "Since 2012, we've been transforming how businesses learn, build, and grow. Not just another tech company - we're your partners in making the impossible possible.",
      backgroundImage: ''
    },
    seo: {
      title: 'About Lionforce Technologies - Our Story & Mission',
      description: 'Learn about Lionforce Technologies - 13+ years of transforming businesses through custom eLearning, software development, and creative services. Meet our team and discover our values.',
      keywords: 'about Lionforce, company history, team, values, mission, eLearning company, software development company, Chennai India',
      ogImage: '',
      canonicalUrl: ''
    },
    stats: {
      years: '13+',
      projects: '300+',
      countries: '32+'
    },
    story: {
      paragraph1: 'Founded by industry experts and design enthusiasts, Lionforce stands at the forefront of custom eLearning and software development.',
      paragraph2: 'We unite developers, designers, and visionaries to deliver exceptional experiences - whether for learners or software users. Every interaction is beautifully crafted and engaging.'
    },
    challenges: {
      title: "Challenges You'll Conquer",
      items: [
        { title: 'Build Your Dream Team', description: 'We quickly assemble dynamic teams of vetted specialists to accelerate your product journey.' },
        { title: 'Ignite Digital Transformation', description: 'Unlock new possibilities by embracing cutting-edge technology with innovative solutions.' },
        { title: 'End-to-End Solutions', description: 'Experience full-cycle innovation from first prototype to final deployment and ongoing support.' }
      ]
    },
    values: {
      title: 'What We Believe In',
      subtitle: "Our values aren't just words on a wall - they guide every decision we make.",
      items: ['Partnership', 'Transparency', 'Flexibility', 'Sincerity', 'Support']
    },
    ceo: {
      sectionTitle: 'From Our CEO',
      quote: 'The success of any project is rooted in the strength of its people. At Lionforce, we prioritize building a team of exceptional professionals who share our vision and values.',
      message: 'Our deliberate growth strategy allows us to handpick the right talent, fostering a vibrant culture and maintaining low attrition rates. Talented developers, skilled QAs, and innovative designers - all supported by proven processes - are the cornerstones of the outstanding results we deliver.',
      closing: "Together, we're not just creating solutions; we're building lasting partnerships.",
      name: 'Praveen Kamalan',
      role: 'Founder & CEO',
      image: ''
    },
    mission: {
      title: 'Our Mission',
      text: 'Empower organizations worldwide with innovative learning and software solutions that drive measurable outcomes.'
    },
    vision: {
      title: 'Our Vision',
      text: 'Be the global leader in AI-powered eLearning and software - and the trusted partner for businesses expanding to India.'
    },
    impactStats: {
      title: 'Based Globally, Serving the World',
      subtitle: 'Our impact in numbers',
      items: [
        { number: '13+', label: 'Years of Excellence' },
        { number: '300+', label: 'Projects Delivered' },
        { number: '32+', label: 'Countries Served' },
        { number: '500K+', label: 'People Impacted' }
      ]
    }
  },
  contact: {
    hero: {
      title1: "Let's Build",
      title2: 'Something Amazing',
      subtitle: "Have a project in mind? We'd love to hear about it. Drop us a message and let's start the conversation.",
      backgroundImage: ''
    },
    info: {
      phone: '+91 96005 36354',
      email: 'hello@lionforce.net',
      address: 'Lionforce Technologies Pvt Ltd\nChennai, India\nServing clients globally'
    },
    stats: [
      { value: '24h', label: 'Response Time' },
      { value: '300+', label: 'Happy Clients' },
      { value: '32+', label: 'Countries' },
      { value: '13+', label: 'Years Experience' }
    ],
    form: {
      title: 'Ready to Start?',
      subtitle: "Fill out the form and our team will get back to you within 24 hours.",
      nameLabel: 'Your Name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email Address',
      emailPlaceholder: 'john@company.com',
      serviceLabel: 'Service Interested In',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'How can we help?',
      messageLabel: 'Your Message',
      messagePlaceholder: 'Tell us about your project, goals, timeline...',
      submitText: 'Send Message',
      successMessage: "Message sent successfully! We'll be in touch soon.",
      services: [
        'Custom eLearning',
        'Software Development',
        'UX/UI Design',
        'Creative Services',
        'Digital Marketing',
        'Consulting',
        'India Expansion (EOR/ODC/COE)'
      ]
    },
    steps: {
      title: 'What happens next?',
      items: [
        'We review your requirements',
        'Schedule a discovery call',
        'Provide a tailored proposal',
        'Start building together'
      ]
    },
    serviceLinks: [
      { name: 'eLearning', link: '/services/elearning' },
      { name: 'Software & AI', link: '/services/software-development' },
      { name: 'UX/UI Design', link: '/services/ux-ui-design' },
      { name: 'Creative Services', link: '/services/creative' },
      { name: 'Digital Marketing', link: '/services/digital-marketing' },
      { name: 'Consulting', link: '/services/consulting' },
      { name: 'Expand to India', link: '/services/india-expansion' }
    ]
  },
  elearning: {
    hero: {
      badge: 'AI-Powered Learning Solutions',
      badgeEmoji: '🎓',
      title: 'AI-Powered eLearning Your Teams Will Love',
      tagline: 'Think Forward • Learn Alive • Engage Always',
      subtitle: 'Stop boring training. Start interactive, AI-enhanced, gamified learning that actually works. 300% higher completion rates.',
      stats: ['13+ years experience', '300+ projects delivered', '25+ languages'],
      primaryCTA: 'Get Free Demo & Quote',
      secondaryCTA: 'Call +91 96005 36354',
      gradient: 'from-[#428697] via-[#356d7a] to-[#2d5a66]',
      heroBoxes: [
        { label: 'AI-Powered', value: 'Learning' },
        { label: 'Gamified', value: '3x Engagement' },
        { label: 'Microlearning', value: '5-min Modules' },
        { label: 'Analytics', value: 'Real-time' }
      ],
      highlightStat: { value: '500K+', label: 'Learners Trained' }
    },
    solutions: [
      { title: 'AI-Powered Learning Paths', description: 'Intelligent content recommendations powered by AI. Personalized learning journeys.' },
      { title: 'Customised eLearning', description: 'Personalized content that fits your unique organizational needs.' },
      { title: 'Gamified Learning', description: 'Drive engagement through game mechanics, badges, leaderboards. 3x higher completion rates.' },
      { title: 'Microlearning', description: 'Bite-sized learning modules (3-7 minutes) for quick, effective knowledge transfer.' },
      { title: 'Scenario-based Learning', description: 'Real-world scenarios for practical skill development.' },
      { title: 'AI Content Generation', description: 'Leverage AI to create assessments, quizzes, and supplementary content faster.' }
    ],
    benefits: [
      'AI-powered personalization for each learner',
      'Boost completion rates by 300% with gamification',
      'Reduce training time by 50% with microlearning',
      'Save 60% vs traditional training methods',
      'Measure learning effectiveness with built-in analytics',
      'Scale training across global teams instantly'
    ],
    industries: [
      { name: 'Pharmaceuticals', use: 'GMP training, product knowledge, sales enablement' },
      { name: 'Healthcare', use: 'Medical protocols, patient safety, compliance' },
      { name: 'Manufacturing', use: 'Safety training, process optimization, quality control' },
      { name: 'Fintech', use: 'Compliance training, product training, customer service' }
    ]
  },
  software: {
    hero: {
      badge: 'AI-Powered Development',
      badgeEmoji: '🤖',
      title: 'Software & AI That Actually Ships',
      tagline: 'Code Smart • Build Better • Scale Faster',
      subtitle: "Got an idea? Let's turn it into a product that wows. AI solutions, web apps, mobile apps, IoT - MVP in 8-12 weeks.",
      stats: ['13+ years experience', '300+ apps built', '40% faster delivery'],
      primaryCTA: 'Start Your Project',
      secondaryCTA: 'Call +91 96005 36354',
      gradient: 'from-teal-600 via-cyan-600 to-blue-600',
      heroBoxes: [
        { label: 'AI Solutions', value: 'Smart' },
        { label: 'Web & Mobile', value: 'Full Stack' },
        { label: 'IoT', value: 'Connected' },
        { label: 'Cloud', value: 'Scalable' }
      ],
      highlightStat: { value: '300+', label: 'Apps Built' }
    },
    services: [
      { title: 'AI & Machine Learning', description: 'Custom AI solutions, ML models, intelligent automation, and predictive analytics.' },
      { title: 'Comprehensive Product Development', description: 'End-to-end product development from ideation to deployment. MVP in 8-12 weeks.' },
      { title: 'IoT & Embedded Solutions', description: 'Smart device integration, sensor networks, industrial IoT.' },
      { title: 'Web Applications', description: 'Dynamic, responsive web apps. React, Vue, Angular. Progressive Web Apps.' },
      { title: 'Mobile Apps', description: 'Native iOS/Android and React Native cross-platform apps.' },
      { title: 'Legacy Software Modernization', description: 'Upgrade outdated systems. Cloud migration, API modernization.' }
    ],
    techStack: [
      { category: 'AI/ML', techs: 'TensorFlow, PyTorch, OpenAI, LangChain' },
      { category: 'Frontend', techs: 'React, Vue.js, Angular, Next.js' },
      { category: 'Backend', techs: 'Node.js, Python, Java, .NET' },
      { category: 'Mobile', techs: 'React Native, Flutter, Swift, Kotlin' },
      { category: 'Cloud', techs: 'AWS, Azure, Google Cloud' },
      { category: 'IoT', techs: 'Arduino, Raspberry Pi, MQTT, AWS IoT' }
    ],
    benefits: [
      'AI-powered development for smarter solutions',
      '40% faster time-to-market with agile methodology',
      'Save 50% on development costs vs in-house teams',
      'Scalable solutions that grow with your business',
      'Security-first approach with penetration testing',
      'Post-launch support and continuous updates'
    ]
  },
  uxui: {
    hero: {
      badge: 'Design That Converts',
      badgeEmoji: '🎨',
      title: 'UX/UI Design That Users Love',
      tagline: 'Design Smart • Convert Better • Delight Always',
      subtitle: 'Beautiful, intuitive interfaces that drive engagement and conversions. User-centered design backed by research.',
      stats: ['300+ designs delivered', 'User-first approach', 'Increased conversions'],
      primaryCTA: 'Start Your Design Project',
      secondaryCTA: 'View Portfolio',
      gradient: 'from-[#6ab445] via-[#5a9e3d] to-[#4a8a35]',
      heroBoxes: [
        { label: 'UX Research', value: 'User-First' },
        { label: 'UI Design', value: 'Beautiful' },
        { label: 'Prototyping', value: 'Interactive' },
        { label: 'Design Systems', value: 'Scalable' }
      ],
      highlightStat: { value: '300+', label: 'Projects Delivered' }
    },
    services: [
      { title: 'UX Research & Strategy', description: 'User interviews, personas, journey mapping, and competitive analysis.' },
      { title: 'UI Design', description: 'Beautiful, on-brand interfaces with modern design systems.' },
      { title: 'Interaction Design', description: 'Micro-interactions, animations, and delightful user experiences.' },
      { title: 'Prototyping', description: 'Interactive prototypes for user testing and stakeholder buy-in.' },
      { title: 'Design Systems', description: 'Scalable component libraries for consistent brand experience.' },
      { title: 'Usability Testing', description: 'Real user feedback to validate and improve designs.' }
    ]
  },
  creative: {
    hero: {
      badge: 'Visual Storytelling',
      badgeEmoji: '🎬',
      title: 'Creative Services That Captivate',
      tagline: 'Create Bold • Tell Stories • Inspire Action',
      subtitle: '3D animations, explainer videos, motion graphics, and visual content that makes your brand unforgettable.',
      stats: ['500+ videos created', 'Award-winning team', 'Global clients'],
      primaryCTA: 'Get Creative Quote',
      secondaryCTA: 'View Showreel',
      gradient: 'from-[#2d4a5a] via-[#4a6670] to-[#8b7355]',
      heroBoxes: [
        { label: '3D Animation', value: 'Stunning' },
        { label: 'Explainers', value: 'Engaging' },
        { label: 'Motion', value: 'Dynamic' },
        { label: 'Infographics', value: 'Visual' }
      ],
      highlightStat: { value: '500+', label: 'Videos Created' }
    },
    services: [
      { title: '3D Animation', description: 'Stunning 3D visuals, product renders, and animated sequences.' },
      { title: 'Explainer Videos', description: 'Engaging videos that simplify complex concepts.' },
      { title: 'Motion Graphics', description: 'Dynamic animations for marketing and presentations.' },
      { title: 'Corporate Videos', description: 'Professional videos for training, events, and brand storytelling.' },
      { title: 'Interactive Presentations', description: 'Engaging presentations that leave lasting impressions.' },
      { title: 'Infographics', description: 'Data visualization that tells compelling stories.' }
    ]
  },
  digitalMarketing: {
    hero: {
      badge: 'Growth Marketing',
      badgeEmoji: '📈',
      title: 'Digital Marketing That Delivers ROI',
      tagline: 'Target Smart • Engage Deep • Grow Fast',
      subtitle: 'Data-driven marketing strategies that increase visibility, engagement, and conversions.',
      stats: ['500% average ROI', 'Full-funnel approach', 'Measurable results'],
      primaryCTA: 'Get Marketing Strategy',
      secondaryCTA: 'See Case Studies',
      gradient: 'from-emerald-600 via-green-600 to-teal-600',
      heroBoxes: [
        { label: 'SEO', value: 'Organic Growth' },
        { label: 'Social', value: 'Engagement' },
        { label: 'PPC', value: 'Targeted' },
        { label: 'Analytics', value: 'Data-Driven' }
      ],
      highlightStat: { value: '500%', label: 'Average ROI' }
    },
    services: [
      { title: 'SEO & Content Marketing', description: 'Rank higher, attract organic traffic, build authority.' },
      { title: 'Social Media Marketing', description: 'Engaging social presence across all platforms.' },
      { title: 'PPC & Paid Advertising', description: 'Targeted ads that maximize ROI on Google, Facebook, LinkedIn.' },
      { title: 'Email Marketing', description: 'Automated campaigns that nurture leads and drive conversions.' },
      { title: 'Analytics & Reporting', description: 'Data-driven insights to optimize performance.' },
      { title: 'Brand Strategy', description: 'Positioning, messaging, and visual identity development.' }
    ]
  },
  consulting: {
    hero: {
      badge: 'Expert Guidance',
      badgeEmoji: '💼',
      title: 'Consulting That Transforms',
      tagline: 'Strategize Smart • Execute Better • Succeed Always',
      subtitle: 'Strategic consulting to help you navigate digital transformation, technology decisions, and business growth.',
      stats: ['13+ years expertise', 'Cross-industry experience', 'Proven frameworks'],
      primaryCTA: 'Book Consultation',
      secondaryCTA: 'Learn More',
      gradient: 'from-slate-600 via-gray-600 to-zinc-600',
      heroBoxes: [
        { label: 'Strategy', value: 'Expert' },
        { label: 'Technology', value: 'Modern' },
        { label: 'Process', value: 'Optimized' },
        { label: 'Growth', value: 'Sustainable' }
      ],
      highlightStat: { value: '13+', label: 'Years Expertise' }
    },
    services: [
      { title: 'Digital Transformation', description: 'Roadmap for modernizing your business with technology.' },
      { title: 'Technology Strategy', description: 'Expert advice on tech stack, architecture, and tooling.' },
      { title: 'Process Optimization', description: 'Streamline workflows and improve operational efficiency.' },
      { title: 'Learning Strategy', description: 'Build effective L&D programs that drive performance.' },
      { title: 'Vendor Selection', description: 'Evaluate and select the right technology partners.' },
      { title: 'Change Management', description: 'Guide teams through digital adoption and transformation.' }
    ]
  },
  indiaExpansion: {
    pricing: {
      title: 'EOR Pricing Packages',
      subtitle: 'Transparent pricing for Employer of Record services. No hidden fees.',
      note: 'For ODC & COE pricing, please contact us for a customized quote.',
      packages: [
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
            'Co-branding option available',
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
            'Vendor management',
            'OPEX/CAPEX management',
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
            'Dedicated admin executive'
          ],
          popular: false
        }
      ]
    }
  },
  global: {
    companyName: 'Lionforce Technologies Pvt Ltd',
    phone: '+91 96005 36354',
    email: 'hello@lionforce.net',
    formSubmissionEmail: 'praveen@lionforce.net',
    location: 'Chennai, India',
    foundedYear: '2012',
    socialLinks: {
      linkedin: '',
      twitter: '',
      facebook: ''
    },
    footer: {
      tagline: 'Technologies Private Limited',
      description: 'Game-changers in custom eLearning and software development.',
      copyright: '2024 Lionforce. All rights reserved.'
    }
  }
};

// Deep merge helper
const deepMerge = (target, source) => {
  const result = { ...target };
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else if (source[key] !== undefined && source[key] !== null && source[key] !== '') {
      result[key] = source[key];
    }
  }
  return result;
};

export const useSiteContent = (pageName = null) => {
  const [content, setContent] = useState(defaultContent);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`${API_URL}/api/site-content`);
        if (response.ok) {
          const data = await response.json();
          if (data.content && Object.keys(data.content).length > 0) {
            setContent(deepMerge(defaultContent, data.content));
          }
        }
      } catch (err) {
        console.error('Failed to fetch site content:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  // Return specific page content or all content
  if (pageName) {
    return {
      content: content[pageName] || defaultContent[pageName] || {},
      loading,
      error,
      global: content.global || defaultContent.global
    };
  }

  return { content, loading, error };
};

export default useSiteContent;

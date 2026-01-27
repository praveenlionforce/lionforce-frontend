import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Lock, LogOut, FileText, Plus, Trash2, Edit, Save, X,
  Settings, LayoutDashboard, MessageSquare, Newspaper,
  Home, Info, Phone, Globe, Image, Upload, Eye,
  ChevronDown, ChevronRight, Briefcase, GripVertical,
  Palette, Type, Layout, FormInput, Users, Mail, CheckCircle, Link2, Award
} from 'lucide-react';

const API_URL = process.env.REACT_APP_BACKEND_URL;

function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [saveStatus, setSaveStatus] = useState('');
  
  // Data states
  const [submissions, setSubmissions] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [siteContent, setSiteContent] = useState({});
  const [images, setImages] = useState([]);
  const [selectedPage, setSelectedPage] = useState('home');
  const [expandedSections, setExpandedSections] = useState({});
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  // Comprehensive default content structure
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
        subtitle: 'Custom eLearning that sticks. Software that scales. From concept to launch - we build what others can\'t.',
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
        subtitle: 'We don\'t just deliver projects - we build partnerships that last.',
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
          { quote: 'I\'ve come to favour Lionforce over all offshore suppliers. The work is turned around quickly.', author: 'General Manager', company: 'EdTech Company, Australia' }
        ]
      },
      clients: {
        title: 'Trusted by industry leaders',
        logos: [
          { name: 'Glenmark', logo: 'https://i0.wp.com/lionforce.net/wp-content/uploads/2024/05/glenmark-1.png?fit=135%2C75&ssl=1' },
          { name: 'Mankind', logo: 'https://i0.wp.com/lionforce.net/wp-content/uploads/2024/05/mankind-2.png?fit=150%2C70&ssl=1' },
          { name: 'Coca-Cola', logo: 'https://i0.wp.com/lionforce.net/wp-content/uploads/2024/05/coke-2.png?fit=150%2C70&ssl=1' },
          { name: 'Cipla', logo: 'https://i0.wp.com/lionforce.net/wp-content/uploads/2024/05/cipla-2.png?fit=150%2C70&ssl=1' },
          { name: 'Sun Pharma', logo: 'https://i0.wp.com/lionforce.net/wp-content/uploads/2024/05/sun-pharma.png?fit=135%2C75&ssl=1' },
          { name: 'Axis', logo: 'https://i0.wp.com/lionforce.net/wp-content/uploads/2025/06/axis-1.png?fit=150%2C70&ssl=1' }
        ]
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
        subtitle: 'Let\'s turn your vision into reality. Start with a free consultation.',
        buttonText: 'Start Your Project',
        buttonLink: '/contact',
        phone: '+91 96005 36354'
      }
    },
    about: {
      seo: {
        title: 'About Lionforce Technologies - Our Story & Mission',
        description: 'Learn about Lionforce Technologies - 13+ years of transforming businesses through custom eLearning, software development, and creative services.',
        keywords: 'about Lionforce, company history, team, values, mission, eLearning company, software development company',
        ogImage: '',
        canonicalUrl: ''
      },
      hero: {
        tagline: 'Our Story',
        title1: 'Fueling Success',
        title2: 'Through Innovation',
        subtitle: 'Since 2012, we\'ve been transforming how businesses learn, build, and grow. Not just another tech company - we\'re your partners in making the impossible possible.',
        backgroundImage: ''
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
        title: 'Challenges You\'ll Conquer',
        subtitle: 'From dream teams to digital transformation, we make it happen.',
        items: [
          { title: 'Build Your Dream Team', description: 'We quickly assemble dynamic teams of vetted specialists to accelerate your product journey.', image: '' },
          { title: 'Ignite Digital Transformation', description: 'Unlock new possibilities by embracing cutting-edge technology with innovative solutions.', image: '' },
          { title: 'End-to-End Solutions', description: 'Experience full-cycle innovation from first prototype to final deployment and ongoing support.', image: '' }
        ]
      },
      values: {
        title: 'What We Believe In',
        subtitle: 'Our values aren\'t just words on a wall - they guide every decision we make.',
        items: ['Partnership', 'Transparency', 'Flexibility', 'Sincerity', 'Support']
      },
      ceo: {
        sectionTitle: 'From Our CEO',
        quote: 'The success of any project is rooted in the strength of its people. At Lionforce, we prioritize building a team of exceptional professionals who share our vision and values.',
        message: 'Our deliberate growth strategy allows us to handpick the right talent, fostering a vibrant culture and maintaining low attrition rates. Talented developers, skilled QAs, and innovative designers - all supported by proven processes - are the cornerstones of the outstanding results we deliver.',
        closing: 'Together, we\'re not just creating solutions; we\'re building lasting partnerships.',
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
      seo: {
        title: 'Contact Lionforce Technologies - Get in Touch',
        description: 'Contact Lionforce for custom eLearning, software development, or India expansion services. Get a free consultation within 24 hours.',
        keywords: 'contact Lionforce, get quote, free consultation, eLearning quote, software development inquiry',
        ogImage: '',
        canonicalUrl: ''
      },
      hero: {
        title1: 'Let\'s Build',
        title2: 'Something Amazing',
        subtitle: 'Have a project in mind? We\'d love to hear about it. Drop us a message and let\'s start the conversation.',
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
        subtitle: 'Fill out the form and our team will get back to you within 24 hours.',
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
        successMessage: 'Message sent successfully! We\'ll be in touch soon.',
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
    indiaExpansion: {
      hero: {
        badge: 'Your Complete India Expansion Partner',
        title1: 'Expand to India',
        title2: 'With Confidence',
        tagline: 'EOR - ODC - COE - All-in-One Solution',
        subtitle: 'Launch your India operations in 2-8 weeks. Co-branding available. Easy exits - no lock-in. From hiring teams to setting up development centers and innovation hubs - we handle everything. Save 60% on costs while accessing world-class talent.',
        badges: ['Launch in 2-8 weeks', '60% cost savings', 'Co-branding available', 'Easy Exits - No Lock-in'],
        buttonText: 'Get Free Consultation',
        phone: '+91 96005 36354'
      },
      services: [
        {
          id: 'eor',
          title: 'EOR - Employer of Record',
          tagline: 'Hire & Manage Teams',
          description: 'Launch your India team without setting up a legal entity. We handle payroll, compliance, HR, and all operational aspects.',
          benefits: ['No legal entity needed in India', 'Full statutory compliance', 'Payroll & benefits administration', 'Co-branding available', 'Launch in 2-8 weeks', 'Easy exits - no lock-in']
        },
        {
          id: 'odc',
          title: 'ODC - Offshore Development Center',
          tagline: 'Dedicated Tech Teams',
          description: 'Your own development center in India with dedicated engineers, infrastructure, and complete operational support.',
          benefits: ['Dedicated development team', 'Full infrastructure setup', 'Complete operational control', 'Scale from 5 to 50+ engineers', 'Cost-effective expansion', 'Flexible exit options']
        },
        {
          id: 'coe',
          title: 'COE - Center of Excellence',
          tagline: 'Innovation Hubs',
          description: 'Establish specialized teams focused on best practices, innovation, and driving operational excellence in India.',
          benefits: ['Specialized expertise centers', 'Best practices implementation', 'Innovation & R&D teams', 'Knowledge transfer programs', 'Strategic capability building', 'Easy transition support']
        }
      ],
      comparison: {
        title: 'Why Lionforce?',
        features: [
          { feature: 'Easy Exits - No Lock-in', lionforce: true, competitors: false },
          { feature: 'Co-branding Available', lionforce: true, competitors: false },
          { feature: 'Vendor Management', lionforce: true, competitors: false },
          { feature: 'Real Estate / Office Setup', lionforce: true, competitors: false },
          { feature: 'Dedicated Admin Executive', lionforce: true, competitors: false }
        ]
      },
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
    elearning: {
      seo: {
        title: 'Custom eLearning Development Services - AI-Powered Training Solutions',
        description: 'Transform corporate training with AI-powered eLearning. Interactive courses, gamification, microlearning, and analytics. 300% higher completion rates.',
        keywords: 'eLearning development, custom training, corporate learning, AI training, gamified learning, microlearning, LMS, SCORM',
        ogImage: '',
        canonicalUrl: ''
      },
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
      seo: {
        title: 'Software Development & AI Solutions - Custom Apps & Products',
        description: 'Custom software development, AI/ML solutions, web & mobile apps, IoT. MVP in 8-12 weeks. 300+ apps built.',
        keywords: 'software development, AI solutions, machine learning, web apps, mobile apps, IoT, custom software, MVP development',
        ogImage: '',
        canonicalUrl: ''
      },
      hero: {
        badge: 'AI-Powered Development',
        badgeEmoji: '🤖',
        title: 'Software & AI That Actually Ships',
        tagline: 'Code Smart • Build Better • Scale Faster',
        subtitle: 'Got an idea? Let\'s turn it into a product that wows. AI solutions, web apps, mobile apps, IoT - MVP in 8-12 weeks.',
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
      seo: {
        title: 'UX/UI Design Services - User-Centered Design That Converts',
        description: 'Professional UX/UI design services. User research, wireframing, prototyping, and beautiful interfaces that convert.',
        keywords: 'UX design, UI design, user experience, user interface, wireframing, prototyping, design systems, Figma',
        ogImage: '',
        canonicalUrl: ''
      },
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
      seo: {
        title: 'Creative Services - 3D Animation, Explainer Videos & Motion Graphics',
        description: '3D animations, explainer videos, motion graphics, and visual content that captivates. 500+ videos created.',
        keywords: '3D animation, explainer videos, motion graphics, corporate videos, infographics, video production',
        ogImage: '',
        canonicalUrl: ''
      },
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
      seo: {
        title: 'Digital Marketing Services - SEO, PPC, Social Media & Growth',
        description: 'Data-driven digital marketing with 500% average ROI. SEO, PPC, social media, email marketing, and analytics.',
        keywords: 'digital marketing, SEO, PPC, social media marketing, content marketing, email marketing, Google Ads',
        ogImage: '',
        canonicalUrl: ''
      },
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
      seo: {
        title: 'Business & Technology Consulting - Digital Transformation Experts',
        description: 'Strategic consulting for digital transformation, technology decisions, and business growth. 13+ years expertise.',
        keywords: 'business consulting, technology consulting, digital transformation, strategy, process optimization',
        ogImage: '',
        canonicalUrl: ''
      },
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
    industries: {
      seo: {
        title: 'Industries We Serve | Lionforce - Pharma, EdTech, Banking & More',
        description: 'Lionforce serves diverse industries including Pharmaceuticals, Healthcare, Education, Banking, Retail, and Manufacturing with custom eLearning and software solutions.',
        keywords: 'pharmaceuticals training, healthcare eLearning, education technology, banking compliance, retail training, manufacturing safety',
        ogImage: '',
        canonicalUrl: ''
      },
      hero: {
        title: 'Industries We Serve',
        subtitle: 'Transforming businesses across sectors with tailored learning and technology solutions.'
      },
      industries: [
        { name: 'Pharmaceuticals & Healthcare', description: 'Compliance training, medical education, patient engagement solutions.', stats: '100+ healthcare projects' },
        { name: 'Education & EdTech', description: 'K-12 solutions, higher education platforms, corporate training.', stats: '500K+ learners impacted' },
        { name: 'Banking & Finance', description: 'Regulatory compliance, customer onboarding, employee training.', stats: 'Regulatory compliant' },
        { name: 'Retail & FMCG', description: 'Sales training, product knowledge, customer service excellence.', stats: 'Global retail reach' },
        { name: 'Manufacturing & Industrial', description: 'Safety training, operational excellence, IoT integration.', stats: 'IoT-enabled solutions' },
        { name: 'Travel & Hospitality', description: 'Customer experience, booking systems, staff training.', stats: 'Global hospitality' }
      ]
    },
    global: {
      companyName: 'Lionforce Technologies Pvt Ltd',
      phone: '+91 96005 36354',
      email: 'hello@lionforce.net',
      formSubmissionEmail: 'praveen@lionforce.net',
      location: 'Chennai, India',
      foundedYear: '2012',
      headerLogo: 'https://customer-assets.emergentagent.com/job_elegant-refresh-3/artifacts/jeiik01t_Lionforce%20new%20logo%20set-crop.png',
      footerLogo: 'https://customer-assets.emergentagent.com/job_modern-lionforce/artifacts/tpwlbe6e_footerlogo.png',
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

  const pages = [
    { id: 'home', name: 'Home Page', icon: <Home className="w-4 h-4" />, category: 'main' },
    { id: 'about', name: 'About Page', icon: <Info className="w-4 h-4" />, category: 'main' },
    { id: 'contact', name: 'Contact Page', icon: <Phone className="w-4 h-4" />, category: 'main' },
    { id: 'industries', name: 'Industries', icon: <Briefcase className="w-4 h-4" />, category: 'main' },
    { id: 'elearning', name: 'eLearning', icon: <FileText className="w-4 h-4" />, category: 'services' },
    { id: 'software', name: 'Software Dev', icon: <FileText className="w-4 h-4" />, category: 'services' },
    { id: 'indiaExpansion', name: 'India Expansion', icon: <Globe className="w-4 h-4" />, category: 'services' },
    { id: 'uxui', name: 'UX/UI Design', icon: <Palette className="w-4 h-4" />, category: 'services' },
    { id: 'creative', name: 'Creative Services', icon: <Palette className="w-4 h-4" />, category: 'services' },
    { id: 'digitalMarketing', name: 'Digital Marketing', icon: <FileText className="w-4 h-4" />, category: 'services' },
    { id: 'consulting', name: 'Consulting', icon: <Briefcase className="w-4 h-4" />, category: 'services' },
    { id: 'global', name: 'Global Settings', icon: <Settings className="w-4 h-4" />, category: 'settings' }
  ];

  const getAuthHeader = () => {
    const auth = localStorage.getItem('adminAuth');
    return { 'Authorization': `Basic ${auth}` };
  };

  const fetchDashboardData = async (authToken) => {
    const headers = { 'Authorization': `Basic ${authToken}` };
    
    try {
      const [subResponse, newsResponse, contentResponse, imagesResponse] = await Promise.all([
        fetch(`${API_URL}/api/admin/submissions`, { headers }),
        fetch(`${API_URL}/api/admin/subscribers`, { headers }),
        fetch(`${API_URL}/api/admin/site-content`, { headers }),
        fetch(`${API_URL}/api/admin/images`, { headers })
      ]);
      
      if (subResponse.ok) setSubmissions(await subResponse.json());
      if (newsResponse.ok) setSubscribers(await newsResponse.json());
      if (contentResponse.ok) {
        const content = await contentResponse.json();
        // Deep merge with defaults
        setSiteContent(deepMerge(defaultContent, content.content || {}));
      } else {
        setSiteContent(defaultContent);
      }
      if (imagesResponse.ok) setImages(await imagesResponse.json());
    } catch (err) {
      console.error('Failed to fetch data:', err);
      setSiteContent(defaultContent);
    }
  };

  // Deep merge helper
  const deepMerge = (target, source) => {
    const result = { ...target };
    for (const key in source) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        result[key] = deepMerge(target[key] || {}, source[key]);
      } else {
        result[key] = source[key];
      }
    }
    return result;
  };

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (auth) {
      setIsAuthenticated(true);
      fetchDashboardData(auth);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const auth = btoa(`${username}:${password}`);
      const response = await fetch(`${API_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 'Authorization': `Basic ${auth}` }
      });
      
      if (response.ok) {
        localStorage.setItem('adminAuth', auth);
        setIsAuthenticated(true);
        fetchDashboardData(auth);
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
  };

  // Scroll position preservation ref
  const scrollContainerRef = useRef(null);
  const scrollPositionRef = useRef(0);

  // Save scroll position before state update
  const saveScrollPosition = () => {
    if (scrollContainerRef.current) {
      scrollPositionRef.current = scrollContainerRef.current.scrollTop;
    }
  };

  // Restore scroll position after render
  useEffect(() => {
    if (scrollContainerRef.current && scrollPositionRef.current > 0) {
      scrollContainerRef.current.scrollTop = scrollPositionRef.current;
    }
  });

  const updateContent = (path, value) => {
    saveScrollPosition();
    setSiteContent(prev => {
      const keys = path.split('.');
      const newContent = JSON.parse(JSON.stringify(prev));
      let current = newContent;
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newContent;
    });
  };

  const updateArrayItem = (path, index, field, value) => {
    saveScrollPosition();
    setSiteContent(prev => {
      const newContent = JSON.parse(JSON.stringify(prev));
      const keys = path.split('.');
      let current = newContent;
      for (const key of keys) {
        current = current[key];
      }
      if (Array.isArray(current) && current[index]) {
        current[index][field] = value;
      }
      return newContent;
    });
  };

  const addArrayItem = (path, template) => {
    saveScrollPosition();
    setSiteContent(prev => {
      const newContent = JSON.parse(JSON.stringify(prev));
      const keys = path.split('.');
      let current = newContent;
      for (const key of keys) {
        current = current[key];
      }
      if (Array.isArray(current)) {
        current.push(template);
      }
      return newContent;
    });
  };

  const removeArrayItem = (path, index) => {
    saveScrollPosition();
    setSiteContent(prev => {
      const newContent = JSON.parse(JSON.stringify(prev));
      const keys = path.split('.');
      let current = newContent;
      for (const key of keys) {
        current = current[key];
      }
      if (Array.isArray(current)) {
        current.splice(index, 1);
      }
      return newContent;
    });
  };

  const saveContent = async () => {
    setSaveStatus('saving');
    try {
      const response = await fetch(`${API_URL}/api/admin/site-content`, {
        method: 'POST',
        headers: { ...getAuthHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: siteContent })
      });
      
      if (response.ok) {
        setSaveStatus('saved');
        setTimeout(() => setSaveStatus(''), 3000);
      } else {
        setSaveStatus('error');
      }
    } catch (err) {
      setSaveStatus('error');
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const response = await fetch(`${API_URL}/api/admin/upload-image`, {
        method: 'POST',
        headers: getAuthHeader(),
        body: formData
      });
      
      if (response.ok) {
        const data = await response.json();
        setImages(prev => [...prev, { ...data, original_name: file.name, uploaded_at: new Date().toISOString() }]);
      }
    } catch (err) {
      console.error('Upload failed:', err);
    }
    setUploading(false);
  };

  const deleteImage = async (imageId) => {
    if (!window.confirm('Delete this image?')) return;
    
    try {
      await fetch(`${API_URL}/api/admin/images/${imageId}`, {
        method: 'DELETE',
        headers: getAuthHeader()
      });
      setImages(prev => prev.filter(img => img.id !== imageId));
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // UI Components
  const TextField = ({ label, value, onChange, multiline = false, placeholder = '' }) => {
    const handleChange = (e) => {
      e.stopPropagation();
      onChange(e.target.value);
    };
    
    return (
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        {multiline ? (
          <textarea
            defaultValue={value || ''}
            onBlur={(e) => onChange(e.target.value)}
            onChange={handleChange}
            placeholder={placeholder}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
          />
        ) : (
          <input
            type="text"
            defaultValue={value || ''}
            onBlur={(e) => onChange(e.target.value)}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        )}
      </div>
    );
  };

  const ImageField = ({ label, value, onChange }) => (
    <div className="mb-3">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="flex gap-2">
        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Image URL or select from library"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500"
        />
        <button
          onClick={() => { setActiveTab('images'); }}
          className="px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Image className="w-4 h-4" />
        </button>
      </div>
      {value && (
        <img src={value.startsWith('/') ? `${API_URL}${value}` : value} alt="Preview" className="mt-2 h-20 object-cover rounded" />
      )}
    </div>
  );

  const Section = ({ title, icon, children, sectionKey, defaultOpen = false }) => {
    const isOpen = expandedSections[sectionKey] ?? defaultOpen;
    return (
      <div className="bg-white rounded-xl border border-gray-200 mb-4 overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="w-full px-4 py-3 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors"
        >
          <div className="flex items-center gap-2">
            {icon}
            <span className="font-semibold text-gray-900">{title}</span>
          </div>
          {isOpen ? <ChevronDown className="w-5 h-5 text-gray-500" /> : <ChevronRight className="w-5 h-5 text-gray-500" />}
        </button>
        {isOpen && <div className="p-4 border-t border-gray-200 bg-gray-50/50">{children}</div>}
      </div>
    );
  };

  const ArrayEditor = ({ items, path, template, renderItem, addLabel = 'Add Item', maxItems = null }) => {
    const canAdd = maxItems === null || (items?.length || 0) < maxItems;
    
    return (
      <div className="space-y-3">
        {items?.map((item, index) => (
          <div key={index} className="p-4 bg-white rounded-lg border border-gray-200 relative group">
            <button
              onClick={() => removeArrayItem(path, index)}
              className="absolute top-2 right-2 p-1 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 rounded"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            {renderItem(item, index)}
          </div>
        ))}
        <button
          onClick={() => canAdd && addArrayItem(path, template)}
          disabled={!canAdd}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors w-full justify-center border border-dashed ${
            canAdd 
              ? 'text-teal-600 hover:bg-teal-50 border-teal-300' 
              : 'text-gray-400 bg-gray-50 border-gray-200 cursor-not-allowed'
          }`}
        >
          <Plus className="w-4 h-4" /> {addLabel}
        </button>
      </div>
    );
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <>
        <Helmet><title>Admin Login | Lionforce CMS</title></Helmet>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-600 to-green-600 px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-full mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Lionforce CMS</h1>
              <p className="text-gray-600 text-sm mt-2">Content Management System</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="admin" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="••••••••" required />
              </div>
              {error && <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm">{error}</div>}
              <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-teal-600 to-green-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50">
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
            <p className="text-center text-gray-400 text-xs mt-6">Default: admin / lionforce2024</p>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet><title>Lionforce CMS - Admin Dashboard</title></Helmet>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-green-500 rounded-lg flex items-center justify-center">
                <Layout className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-gray-900">Lionforce CMS</h1>
                <p className="text-xs text-gray-500">Full Content Management</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {saveStatus && (
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${saveStatus === 'saved' ? 'bg-green-100 text-green-600' : saveStatus === 'error' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}`}>
                  {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'saved' ? '✓ Saved!' : 'Error'}
                </span>
              )}
              <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-teal-600 hover:underline text-sm">
                <Eye className="w-4 h-4" /> View Site
              </a>
              <button onClick={handleLogout} className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'pages', label: 'Edit Pages', icon: FileText },
              { id: 'images', label: 'Images', icon: Image },
              { id: 'forms', label: 'Form Settings', icon: FormInput },
              { id: 'submissions', label: 'Submissions', icon: MessageSquare },
              { id: 'subscribers', label: 'Subscribers', icon: Newspaper }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${activeTab === tab.id ? 'bg-teal-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <tab.icon className="w-4 h-4" />{tab.label}
              </button>
            ))}
          </div>

          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Contact Forms', value: submissions.length, icon: MessageSquare, color: 'blue' },
                  { label: 'Subscribers', value: subscribers.length, icon: Newspaper, color: 'green' },
                  { label: 'Images', value: images.length, icon: Image, color: 'purple' },
                  { label: 'Pages', value: pages.length, icon: FileText, color: 'orange' }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                        <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-xs text-gray-500">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="font-bold text-gray-900 mb-4">Quick Edit</h2>
                
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Main Pages</h4>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {pages.filter(p => p.category === 'main').map(page => (
                    <button key={page.id} onClick={() => { setActiveTab('pages'); setSelectedPage(page.id); }} className="p-3 rounded-lg border border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition-all text-left">
                      <div className="text-teal-600 mb-1">{page.icon}</div>
                      <p className="font-medium text-gray-900 text-xs">{page.name}</p>
                    </button>
                  ))}
                </div>
                
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Service Pages</h4>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mb-4">
                  {pages.filter(p => p.category === 'services').map(page => (
                    <button key={page.id} onClick={() => { setActiveTab('pages'); setSelectedPage(page.id); }} className="p-3 rounded-lg border border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition-all text-left">
                      <div className="text-teal-600 mb-1">{page.icon}</div>
                      <p className="font-medium text-gray-900 text-xs">{page.name}</p>
                    </button>
                  ))}
                </div>
                
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Settings</h4>
                <div className="grid grid-cols-3 gap-2">
                  {pages.filter(p => p.category === 'settings').map(page => (
                    <button key={page.id} onClick={() => { setActiveTab('pages'); setSelectedPage(page.id); }} className="p-3 rounded-lg border border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition-all text-left">
                      <div className="text-teal-600 mb-1">{page.icon}</div>
                      <p className="font-medium text-gray-900 text-xs">{page.name}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Edit Pages */}
          {activeTab === 'pages' && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sticky top-20">
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm">Main Pages</h3>
                  <div className="space-y-1 mb-4">
                    {pages.filter(p => p.category === 'main').map(page => (
                      <button key={page.id} onClick={() => setSelectedPage(page.id)} className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-sm transition-all ${selectedPage === page.id ? 'bg-teal-600 text-white' : 'hover:bg-gray-100 text-gray-700'}`}>
                        {page.icon}<span>{page.name}</span>
                      </button>
                    ))}
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm">Service Pages</h3>
                  <div className="space-y-1 mb-4">
                    {pages.filter(p => p.category === 'services').map(page => (
                      <button key={page.id} onClick={() => setSelectedPage(page.id)} className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-sm transition-all ${selectedPage === page.id ? 'bg-teal-600 text-white' : 'hover:bg-gray-100 text-gray-700'}`}>
                        {page.icon}<span>{page.name}</span>
                      </button>
                    ))}
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm">Settings</h3>
                  <div className="space-y-1 mb-4">
                    {pages.filter(p => p.category === 'settings').map(page => (
                      <button key={page.id} onClick={() => setSelectedPage(page.id)} className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-sm transition-all ${selectedPage === page.id ? 'bg-teal-600 text-white' : 'hover:bg-gray-100 text-gray-700'}`}>
                        {page.icon}<span>{page.name}</span>
                      </button>
                    ))}
                  </div>
                  
                  <button onClick={saveContent} disabled={saveStatus === 'saving'} className="w-full bg-gradient-to-r from-teal-600 to-green-600 text-white py-2.5 rounded-lg font-semibold text-sm hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                    <Save className="w-4 h-4" />{saveStatus === 'saving' ? 'Saving...' : 'Save All'}
                  </button>
                </div>
              </div>

              <div ref={scrollContainerRef} className="lg:col-span-4 space-y-4" style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
                {/* HOME PAGE */}
                {selectedPage === 'home' && (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-bold text-gray-900">Home Page</h2>
                      <a href="/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline text-sm flex items-center gap-1"><Eye className="w-4 h-4" />Preview</a>
                    </div>

                    <Section title="SEO Settings" icon={<Globe className="w-4 h-4 text-teal-600" />} sectionKey="home-seo" defaultOpen={false}>
                      <TextField label="Page Title" value={siteContent.home?.seo?.title} onChange={(v) => updateContent('home.seo.title', v)} placeholder="Lionforce - Custom eLearning & Software" />
                      <TextField label="Meta Description" value={siteContent.home?.seo?.description} onChange={(v) => updateContent('home.seo.description', v)} multiline placeholder="Transform your business with..." />
                      <TextField label="Keywords (comma separated)" value={siteContent.home?.seo?.keywords} onChange={(v) => updateContent('home.seo.keywords', v)} multiline placeholder="eLearning, software development, AI..." />
                      <div className="grid grid-cols-2 gap-4">
                        <ImageField label="OG Image" value={siteContent.home?.seo?.ogImage} onChange={(v) => updateContent('home.seo.ogImage', v)} />
                        <TextField label="Canonical URL (optional)" value={siteContent.home?.seo?.canonicalUrl} onChange={(v) => updateContent('home.seo.canonicalUrl', v)} placeholder="https://lionforce.net/" />
                      </div>
                    </Section>

                    <Section title="Hero Section" icon={<Layout className="w-4 h-4 text-teal-600" />} sectionKey="home-hero" defaultOpen={true}>
                      <div className="grid grid-cols-3 gap-4">
                        <TextField label="Badge Text" value={siteContent.home?.hero?.badge} onChange={(v) => updateContent('home.hero.badge', v)} />
                        <TextField label="Badge Emoji" value={siteContent.home?.hero?.badgeEmoji} onChange={(v) => updateContent('home.hero.badgeEmoji', v)} placeholder="✨" />
                        <TextField label="Button Text" value={siteContent.home?.hero?.buttonText} onChange={(v) => updateContent('home.hero.buttonText', v)} />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <TextField label="Title Line 1" value={siteContent.home?.hero?.title1} onChange={(v) => updateContent('home.hero.title1', v)} />
                        <TextField label="Title Line 2" value={siteContent.home?.hero?.title2} onChange={(v) => updateContent('home.hero.title2', v)} />
                        <TextField label="Title Line 3 (Gradient)" value={siteContent.home?.hero?.title3} onChange={(v) => updateContent('home.hero.title3', v)} />
                      </div>
                      <TextField label="Subtitle" value={siteContent.home?.hero?.subtitle} onChange={(v) => updateContent('home.hero.subtitle', v)} multiline />
                      <ImageField label="Background Image (optional)" value={siteContent.home?.hero?.backgroundImage} onChange={(v) => updateContent('home.hero.backgroundImage', v)} />
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-700 mb-3">Hero Service Cards (4 boxes)</h4>
                        <div className="space-y-4">
                          {[0, 1, 2, 3].map(i => (
                            <div key={i} className="p-4 bg-gray-50 rounded-lg">
                              <p className="text-sm font-medium text-gray-600 mb-2">Card {i + 1}</p>
                              <div className="grid grid-cols-2 gap-3">
                                <TextField label="Title" value={siteContent.home?.hero?.heroBoxes?.[i]?.title || ''} onChange={(v) => {
                                  const boxes = [...(siteContent.home?.hero?.heroBoxes || [{}, {}, {}, {}])];
                                  boxes[i] = { ...boxes[i], title: v };
                                  updateContent('home.hero.heroBoxes', boxes);
                                }} />
                                <TextField label="Link" value={siteContent.home?.hero?.heroBoxes?.[i]?.link || ''} onChange={(v) => {
                                  const boxes = [...(siteContent.home?.hero?.heroBoxes || [{}, {}, {}, {}])];
                                  boxes[i] = { ...boxes[i], link: v };
                                  updateContent('home.hero.heroBoxes', boxes);
                                }} placeholder="/services/..." />
                              </div>
                              <TextField label="Description" value={siteContent.home?.hero?.heroBoxes?.[i]?.description || ''} onChange={(v) => {
                                const boxes = [...(siteContent.home?.hero?.heroBoxes || [{}, {}, {}, {}])];
                                boxes[i] = { ...boxes[i], description: v };
                                updateContent('home.hero.heroBoxes', boxes);
                              }} />
                              <TextField label="Color (Tailwind gradient)" value={siteContent.home?.hero?.heroBoxes?.[i]?.color || ''} onChange={(v) => {
                                const boxes = [...(siteContent.home?.hero?.heroBoxes || [{}, {}, {}, {}])];
                                boxes[i] = { ...boxes[i], color: v };
                                updateContent('home.hero.heroBoxes', boxes);
                              }} placeholder="from-teal-500 to-cyan-600" />
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-700 mb-3">Highlight Stat (floating badge)</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <TextField label="Value" value={siteContent.home?.hero?.highlightStat?.value || ''} onChange={(v) => updateContent('home.hero.highlightStat', { ...(siteContent.home?.hero?.highlightStat || {}), value: v })} placeholder="500K+" />
                          <TextField label="Label" value={siteContent.home?.hero?.highlightStat?.label || ''} onChange={(v) => updateContent('home.hero.highlightStat', { ...(siteContent.home?.hero?.highlightStat || {}), label: v })} placeholder="People Impacted" />
                        </div>
                      </div>
                    </Section>

                    <Section title="Stats" icon={<Type className="w-4 h-4 text-teal-600" />} sectionKey="home-stats">
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <TextField label="Years Number" value={siteContent.home?.stats?.years} onChange={(v) => updateContent('home.stats.years', v)} />
                          <TextField label="Years Label" value={siteContent.home?.stats?.yearsLabel} onChange={(v) => updateContent('home.stats.yearsLabel', v)} />
                        </div>
                        <div>
                          <TextField label="Projects Number" value={siteContent.home?.stats?.projects} onChange={(v) => updateContent('home.stats.projects', v)} />
                          <TextField label="Projects Label" value={siteContent.home?.stats?.projectsLabel} onChange={(v) => updateContent('home.stats.projectsLabel', v)} />
                        </div>
                        <div>
                          <TextField label="Countries Number" value={siteContent.home?.stats?.countries} onChange={(v) => updateContent('home.stats.countries', v)} />
                          <TextField label="Countries Label" value={siteContent.home?.stats?.countriesLabel} onChange={(v) => updateContent('home.stats.countriesLabel', v)} />
                        </div>
                      </div>
                    </Section>

                    <Section title="Services Section" icon={<Briefcase className="w-4 h-4 text-teal-600" />} sectionKey="home-services">
                      <TextField label="Section Title" value={siteContent.home?.services?.title} onChange={(v) => updateContent('home.services.title', v)} />
                      <TextField label="Section Subtitle" value={siteContent.home?.services?.subtitle} onChange={(v) => updateContent('home.services.subtitle', v)} multiline />
                      <p className="text-sm font-medium text-gray-700 mt-4 mb-2">Featured Services:</p>
                      <ArrayEditor
                        items={siteContent.home?.services?.items}
                        path="home.services.items"
                        template={{ title: 'New Service', description: 'Description here', link: '/services/', color: 'teal' }}
                        addLabel="Add Service"
                        renderItem={(item, index) => (
                          <div className="grid grid-cols-2 gap-3">
                            <TextField label="Title" value={item.title} onChange={(v) => updateArrayItem('home.services.items', index, 'title', v)} />
                            <TextField label="Link" value={item.link} onChange={(v) => updateArrayItem('home.services.items', index, 'link', v)} />
                            <div className="col-span-2">
                              <TextField label="Description" value={item.description} onChange={(v) => updateArrayItem('home.services.items', index, 'description', v)} />
                            </div>
                          </div>
                        )}
                      />
                    </Section>

                    <Section title="Why Teams Choose Us" icon={<Users className="w-4 h-4 text-teal-600" />} sectionKey="home-whyus">
                      <TextField label="Section Title" value={siteContent.home?.whyUs?.title} onChange={(v) => updateContent('home.whyUs.title', v)} />
                      <TextField label="Section Subtitle" value={siteContent.home?.whyUs?.subtitle} onChange={(v) => updateContent('home.whyUs.subtitle', v)} multiline />
                      <p className="text-sm font-medium text-gray-700 mt-4 mb-2">Items:</p>
                      <ArrayEditor
                        items={siteContent.home?.whyUs?.items}
                        path="home.whyUs.items"
                        template={{ number: '07', title: 'New Item', desc: 'Description' }}
                        addLabel="Add Item"
                        renderItem={(item, index) => (
                          <div className="grid grid-cols-4 gap-3">
                            <TextField label="Number" value={item.number} onChange={(v) => updateArrayItem('home.whyUs.items', index, 'number', v)} />
                            <div className="col-span-3">
                              <TextField label="Title" value={item.title} onChange={(v) => updateArrayItem('home.whyUs.items', index, 'title', v)} />
                            </div>
                            <div className="col-span-4">
                              <TextField label="Description" value={item.desc} onChange={(v) => updateArrayItem('home.whyUs.items', index, 'desc', v)} multiline />
                            </div>
                          </div>
                        )}
                      />
                    </Section>

                    <Section title="Testimonials" icon={<MessageSquare className="w-4 h-4 text-teal-600" />} sectionKey="home-testimonials">
                      <TextField label="Section Title" value={siteContent.home?.testimonials?.title} onChange={(v) => updateContent('home.testimonials.title', v)} />
                      <ArrayEditor
                        items={siteContent.home?.testimonials?.items}
                        path="home.testimonials.items"
                        template={{ quote: 'Customer quote here', author: 'Author Name', company: 'Company' }}
                        addLabel="Add Testimonial"
                        renderItem={(item, index) => (
                          <>
                            <TextField label="Quote" value={item.quote} onChange={(v) => updateArrayItem('home.testimonials.items', index, 'quote', v)} multiline />
                            <div className="grid grid-cols-2 gap-3">
                              <TextField label="Author" value={item.author} onChange={(v) => updateArrayItem('home.testimonials.items', index, 'author', v)} />
                              <TextField label="Company" value={item.company} onChange={(v) => updateArrayItem('home.testimonials.items', index, 'company', v)} />
                            </div>
                          </>
                        )}
                      />
                    </Section>

                    <Section title="Client Logos" icon={<Award className="w-4 h-4 text-teal-600" />} sectionKey="home-clients">
                      <TextField label="Section Title" value={siteContent.home?.clients?.title} onChange={(v) => updateContent('home.clients.title', v)} />
                      <div className="flex items-center justify-between mt-4 mb-2">
                        <p className="text-sm font-medium text-gray-700">Client Logos (scrolling marquee):</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${(siteContent.home?.clients?.logos?.length || 0) >= 10 ? 'bg-red-100 text-red-600' : 'bg-teal-100 text-teal-600'}`}>
                          {siteContent.home?.clients?.logos?.length || 0} / 10 logos
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">Logos will scroll right to left on the home page. Add 0-10 logos. Leave empty to hide the section.</p>
                      <ArrayEditor
                        items={siteContent.home?.clients?.logos}
                        path="home.clients.logos"
                        template={{ name: 'Client Name', logo: '' }}
                        addLabel={(siteContent.home?.clients?.logos?.length || 0) >= 10 ? "Maximum 10 logos reached" : "Add Client Logo"}
                        maxItems={10}
                        renderItem={(item, index) => (
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">#{index + 1}</span>
                              <TextField label="Client Name" value={item.name} onChange={(v) => updateArrayItem('home.clients.logos', index, 'name', v)} />
                            </div>
                            <ImageField label="Logo Image" value={item.logo} onChange={(v) => updateArrayItem('home.clients.logos', index, 'logo', v)} />
                            {item.logo && (
                              <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center">
                                <img src={item.logo} alt={item.name} className="h-12 object-contain" />
                              </div>
                            )}
                          </div>
                        )}
                      />
                    </Section>

                    <Section title="India Expansion CTA" icon={<Globe className="w-4 h-4 text-teal-600" />} sectionKey="home-india">
                      <TextField label="Badge" value={siteContent.home?.indiaExpansionCTA?.badge} onChange={(v) => updateContent('home.indiaExpansionCTA.badge', v)} />
                      <TextField label="Title" value={siteContent.home?.indiaExpansionCTA?.title} onChange={(v) => updateContent('home.indiaExpansionCTA.title', v)} />
                      <TextField label="Subtitle" value={siteContent.home?.indiaExpansionCTA?.subtitle} onChange={(v) => updateContent('home.indiaExpansionCTA.subtitle', v)} multiline />
                      <TextField label="Button Text" value={siteContent.home?.indiaExpansionCTA?.buttonText} onChange={(v) => updateContent('home.indiaExpansionCTA.buttonText', v)} />
                    </Section>

                    <Section title="Final CTA" icon={<Phone className="w-4 h-4 text-teal-600" />} sectionKey="home-cta">
                      <TextField label="Title" value={siteContent.home?.finalCTA?.title} onChange={(v) => updateContent('home.finalCTA.title', v)} />
                      <TextField label="Subtitle" value={siteContent.home?.finalCTA?.subtitle} onChange={(v) => updateContent('home.finalCTA.subtitle', v)} multiline />
                      <div className="grid grid-cols-2 gap-4">
                        <TextField label="Button Text" value={siteContent.home?.finalCTA?.buttonText} onChange={(v) => updateContent('home.finalCTA.buttonText', v)} />
                        <TextField label="Phone Number" value={siteContent.home?.finalCTA?.phone} onChange={(v) => updateContent('home.finalCTA.phone', v)} />
                      </div>
                    </Section>
                  </>
                )}

                {/* ABOUT PAGE */}
                {selectedPage === 'about' && (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-bold text-gray-900">About Page</h2>
                      <a href="/about" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline text-sm flex items-center gap-1"><Eye className="w-4 h-4" />Preview</a>
                    </div>

                    <Section title="SEO Settings" icon={<Globe className="w-4 h-4 text-teal-600" />} sectionKey="about-seo" defaultOpen={false}>
                      <TextField label="Page Title" value={siteContent.about?.seo?.title} onChange={(v) => updateContent('about.seo.title', v)} />
                      <TextField label="Meta Description" value={siteContent.about?.seo?.description} onChange={(v) => updateContent('about.seo.description', v)} multiline />
                      <TextField label="Keywords (comma separated)" value={siteContent.about?.seo?.keywords} onChange={(v) => updateContent('about.seo.keywords', v)} multiline />
                      <div className="grid grid-cols-2 gap-4">
                        <ImageField label="OG Image" value={siteContent.about?.seo?.ogImage} onChange={(v) => updateContent('about.seo.ogImage', v)} />
                        <TextField label="Canonical URL" value={siteContent.about?.seo?.canonicalUrl} onChange={(v) => updateContent('about.seo.canonicalUrl', v)} />
                      </div>
                    </Section>

                    <Section title="Hero Section" icon={<Layout className="w-4 h-4 text-teal-600" />} sectionKey="about-hero" defaultOpen={true}>
                      <div className="grid grid-cols-2 gap-4">
                        <TextField label="Tagline" value={siteContent.about?.hero?.tagline} onChange={(v) => updateContent('about.hero.tagline', v)} />
                        <TextField label="Tagline Emoji" value={siteContent.about?.hero?.taglineEmoji} onChange={(v) => updateContent('about.hero.taglineEmoji', v)} placeholder="📖" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <TextField label="Title Line 1" value={siteContent.about?.hero?.title1} onChange={(v) => updateContent('about.hero.title1', v)} />
                        <TextField label="Title Line 2" value={siteContent.about?.hero?.title2} onChange={(v) => updateContent('about.hero.title2', v)} />
                      </div>
                      <TextField label="Subtitle" value={siteContent.about?.hero?.subtitle} onChange={(v) => updateContent('about.hero.subtitle', v)} multiline />
                    </Section>

                    <Section title="Our Story" icon={<FileText className="w-4 h-4 text-teal-600" />} sectionKey="about-story">
                      <TextField label="Paragraph 1" value={siteContent.about?.story?.paragraph1} onChange={(v) => updateContent('about.story.paragraph1', v)} multiline />
                      <TextField label="Paragraph 2" value={siteContent.about?.story?.paragraph2} onChange={(v) => updateContent('about.story.paragraph2', v)} multiline />
                    </Section>

                    <Section title="Challenges Section" icon={<Briefcase className="w-4 h-4 text-teal-600" />} sectionKey="about-challenges">
                      <TextField label="Section Title" value={siteContent.about?.challenges?.title} onChange={(v) => updateContent('about.challenges.title', v)} />
                      <TextField label="Section Subtitle" value={siteContent.about?.challenges?.subtitle} onChange={(v) => updateContent('about.challenges.subtitle', v)} multiline />
                      <div className="flex items-center justify-between mt-4 mb-2">
                        <p className="text-sm font-medium text-gray-700">Challenge Items (with images):</p>
                        <span className="text-xs px-2 py-1 rounded-full bg-teal-100 text-teal-600">
                          {siteContent.about?.challenges?.items?.length || 0} items
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">Each challenge can have an optional image. Leave image empty to show default emoji.</p>
                      <ArrayEditor
                        items={siteContent.about?.challenges?.items}
                        path="about.challenges.items"
                        template={{ title: 'New Challenge', description: 'Description', image: '' }}
                        addLabel="Add Challenge"
                        renderItem={(item, index) => (
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">#{index + 1}</span>
                              <TextField label="Title" value={item.title} onChange={(v) => updateArrayItem('about.challenges.items', index, 'title', v)} />
                            </div>
                            <TextField label="Description" value={item.description} onChange={(v) => updateArrayItem('about.challenges.items', index, 'description', v)} multiline />
                            <ImageField label="Challenge Image (optional)" value={item.image} onChange={(v) => updateArrayItem('about.challenges.items', index, 'image', v)} />
                            {item.image && (
                              <div className="bg-gray-100 p-3 rounded-lg">
                                <img src={item.image} alt={item.title} className="h-32 w-full object-cover rounded-lg" />
                              </div>
                            )}
                          </div>
                        )}
                      />
                    </Section>

                    <Section title="Values" icon={<Users className="w-4 h-4 text-teal-600" />} sectionKey="about-values">
                      <TextField label="Section Title" value={siteContent.about?.values?.title} onChange={(v) => updateContent('about.values.title', v)} />
                      <TextField label="Section Subtitle" value={siteContent.about?.values?.subtitle} onChange={(v) => updateContent('about.values.subtitle', v)} multiline />
                      <p className="text-sm text-gray-600 mb-2">Values (comma-separated):</p>
                      <TextField label="Values List" value={siteContent.about?.values?.items?.join(', ')} onChange={(v) => updateContent('about.values.items', v.split(',').map(s => s.trim()))} />
                    </Section>

                    <Section title="CEO Message" icon={<MessageSquare className="w-4 h-4 text-teal-600" />} sectionKey="about-ceo">
                      <TextField label="Section Title" value={siteContent.about?.ceo?.sectionTitle} onChange={(v) => updateContent('about.ceo.sectionTitle', v)} />
                      <TextField label="Main Quote" value={siteContent.about?.ceo?.quote} onChange={(v) => updateContent('about.ceo.quote', v)} multiline />
                      <TextField label="Message" value={siteContent.about?.ceo?.message} onChange={(v) => updateContent('about.ceo.message', v)} multiline />
                      <TextField label="Closing Statement" value={siteContent.about?.ceo?.closing} onChange={(v) => updateContent('about.ceo.closing', v)} />
                      <div className="grid grid-cols-2 gap-4">
                        <TextField label="CEO Name" value={siteContent.about?.ceo?.name} onChange={(v) => updateContent('about.ceo.name', v)} />
                        <TextField label="CEO Role" value={siteContent.about?.ceo?.role} onChange={(v) => updateContent('about.ceo.role', v)} />
                      </div>
                      <ImageField label="CEO Photo" value={siteContent.about?.ceo?.image} onChange={(v) => updateContent('about.ceo.image', v)} />
                    </Section>

                    <Section title="Mission & Vision" icon={<Eye className="w-4 h-4 text-teal-600" />} sectionKey="about-mission">
                      <TextField label="Mission Title" value={siteContent.about?.mission?.title} onChange={(v) => updateContent('about.mission.title', v)} />
                      <TextField label="Mission Text" value={siteContent.about?.mission?.text} onChange={(v) => updateContent('about.mission.text', v)} multiline />
                      <TextField label="Vision Title" value={siteContent.about?.vision?.title} onChange={(v) => updateContent('about.vision.title', v)} />
                      <TextField label="Vision Text" value={siteContent.about?.vision?.text} onChange={(v) => updateContent('about.vision.text', v)} multiline />
                    </Section>

                    <Section title="Impact Stats" icon={<Type className="w-4 h-4 text-teal-600" />} sectionKey="about-impact">
                      <TextField label="Section Title" value={siteContent.about?.impactStats?.title} onChange={(v) => updateContent('about.impactStats.title', v)} />
                      <TextField label="Section Subtitle" value={siteContent.about?.impactStats?.subtitle} onChange={(v) => updateContent('about.impactStats.subtitle', v)} />
                      <ArrayEditor
                        items={siteContent.about?.impactStats?.items}
                        path="about.impactStats.items"
                        template={{ number: '100+', label: 'Label' }}
                        addLabel="Add Stat"
                        renderItem={(item, index) => (
                          <div className="grid grid-cols-2 gap-3">
                            <TextField label="Number" value={item.number} onChange={(v) => updateArrayItem('about.impactStats.items', index, 'number', v)} />
                            <TextField label="Label" value={item.label} onChange={(v) => updateArrayItem('about.impactStats.items', index, 'label', v)} />
                          </div>
                        )}
                      />
                    </Section>
                  </>
                )}

                {/* CONTACT PAGE */}
                {selectedPage === 'contact' && (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-bold text-gray-900">Contact Page</h2>
                      <a href="/contact" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline text-sm flex items-center gap-1"><Eye className="w-4 h-4" />Preview</a>
                    </div>

                    <Section title="SEO Settings" icon={<Globe className="w-4 h-4 text-teal-600" />} sectionKey="contact-seo" defaultOpen={false}>
                      <TextField label="Page Title" value={siteContent.contact?.seo?.title} onChange={(v) => updateContent('contact.seo.title', v)} />
                      <TextField label="Meta Description" value={siteContent.contact?.seo?.description} onChange={(v) => updateContent('contact.seo.description', v)} multiline />
                      <TextField label="Keywords (comma separated)" value={siteContent.contact?.seo?.keywords} onChange={(v) => updateContent('contact.seo.keywords', v)} multiline />
                      <div className="grid grid-cols-2 gap-4">
                        <ImageField label="OG Image" value={siteContent.contact?.seo?.ogImage} onChange={(v) => updateContent('contact.seo.ogImage', v)} />
                        <TextField label="Canonical URL" value={siteContent.contact?.seo?.canonicalUrl} onChange={(v) => updateContent('contact.seo.canonicalUrl', v)} />
                      </div>
                    </Section>

                    <Section title="Hero Section" icon={<Layout className="w-4 h-4 text-teal-600" />} sectionKey="contact-hero" defaultOpen={true}>
                      <div className="grid grid-cols-3 gap-4">
                        <TextField label="Title Line 1" value={siteContent.contact?.hero?.title1} onChange={(v) => updateContent('contact.hero.title1', v)} />
                        <TextField label="Title Line 2" value={siteContent.contact?.hero?.title2} onChange={(v) => updateContent('contact.hero.title2', v)} />
                        <TextField label="Title Emoji" value={siteContent.contact?.hero?.titleEmoji} onChange={(v) => updateContent('contact.hero.titleEmoji', v)} placeholder="💬" />
                      </div>
                      <TextField label="Subtitle" value={siteContent.contact?.hero?.subtitle} onChange={(v) => updateContent('contact.hero.subtitle', v)} multiline />
                    </Section>

                    <Section title="Contact Information" icon={<Phone className="w-4 h-4 text-teal-600" />} sectionKey="contact-info">
                      <div className="grid grid-cols-2 gap-4">
                        <TextField label="Phone Number" value={siteContent.contact?.info?.phone} onChange={(v) => updateContent('contact.info.phone', v)} />
                        <TextField label="Email Address" value={siteContent.contact?.info?.email} onChange={(v) => updateContent('contact.info.email', v)} />
                      </div>
                      <TextField label="Address" value={siteContent.contact?.info?.address} onChange={(v) => updateContent('contact.info.address', v)} multiline />
                    </Section>

                    <Section title="Stats Boxes" icon={<Type className="w-4 h-4 text-teal-600" />} sectionKey="contact-stats">
                      <ArrayEditor
                        items={siteContent.contact?.stats}
                        path="contact.stats"
                        template={{ value: '100+', label: 'Label' }}
                        addLabel="Add Stat"
                        renderItem={(item, index) => (
                          <div className="grid grid-cols-2 gap-3">
                            <TextField label="Value" value={item.value} onChange={(v) => updateArrayItem('contact.stats', index, 'value', v)} />
                            <TextField label="Label" value={item.label} onChange={(v) => updateArrayItem('contact.stats', index, 'label', v)} />
                          </div>
                        )}
                      />
                    </Section>

                    <Section title="Form Steps" icon={<FormInput className="w-4 h-4 text-teal-600" />} sectionKey="contact-steps">
                      <TextField label="Steps Title" value={siteContent.contact?.steps?.title} onChange={(v) => updateContent('contact.steps.title', v)} />
                      <p className="text-sm text-gray-600 mb-2">Steps (one per line):</p>
                      <TextField label="Steps" value={siteContent.contact?.steps?.items?.join('\n')} onChange={(v) => updateContent('contact.steps.items', v.split('\n').filter(s => s.trim()))} multiline />
                    </Section>

                    <Section title="Service Links (Explore Our Services)" icon={<Link2 className="w-4 h-4 text-teal-600" />} sectionKey="contact-service-links">
                      <p className="text-sm text-gray-500 mb-4">These buttons appear at the bottom of the Contact page and link to service pages.</p>
                      <ArrayEditor
                        items={siteContent.contact?.serviceLinks}
                        path="contact.serviceLinks"
                        template={{ name: 'New Service', link: '/services/' }}
                        addLabel="Add Service Link"
                        renderItem={(item, index) => (
                          <div className="grid grid-cols-2 gap-3">
                            <TextField label="Button Name" value={item.name} onChange={(v) => updateArrayItem('contact.serviceLinks', index, 'name', v)} />
                            <TextField label="Link URL" value={item.link} onChange={(v) => updateArrayItem('contact.serviceLinks', index, 'link', v)} placeholder="/services/..." />
                          </div>
                        )}
                      />
                    </Section>
                  </>
                )}

                {/* INDUSTRIES PAGE */}
                {selectedPage === 'industries' && (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-bold text-gray-900">Industries Page</h2>
                      <a href="/industries" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline text-sm flex items-center gap-1"><Eye className="w-4 h-4" />Preview</a>
                    </div>

                    <Section title="SEO Settings" icon={<Globe className="w-4 h-4 text-teal-600" />} sectionKey="industries-seo" defaultOpen={false}>
                      <TextField label="Page Title" value={siteContent.industries?.seo?.title} onChange={(v) => updateContent('industries.seo.title', v)} />
                      <TextField label="Meta Description" value={siteContent.industries?.seo?.description} onChange={(v) => updateContent('industries.seo.description', v)} multiline />
                      <TextField label="Keywords (comma separated)" value={siteContent.industries?.seo?.keywords} onChange={(v) => updateContent('industries.seo.keywords', v)} multiline />
                      <div className="grid grid-cols-2 gap-4">
                        <ImageField label="OG Image" value={siteContent.industries?.seo?.ogImage} onChange={(v) => updateContent('industries.seo.ogImage', v)} />
                        <TextField label="Canonical URL" value={siteContent.industries?.seo?.canonicalUrl} onChange={(v) => updateContent('industries.seo.canonicalUrl', v)} />
                      </div>
                    </Section>

                    <Section title="Hero Section" icon={<Layout className="w-4 h-4 text-teal-600" />} sectionKey="industries-hero" defaultOpen={true}>
                      <TextField label="Title" value={siteContent.industries?.hero?.title} onChange={(v) => updateContent('industries.hero.title', v)} />
                      <TextField label="Subtitle" value={siteContent.industries?.hero?.subtitle} onChange={(v) => updateContent('industries.hero.subtitle', v)} multiline />
                    </Section>

                    <Section title="Industries List" icon={<Briefcase className="w-4 h-4 text-teal-600" />} sectionKey="industries-list">
                      <ArrayEditor
                        items={siteContent.industries?.industries}
                        path="industries.industries"
                        template={{ name: 'New Industry', description: 'Description', stats: 'Key stat' }}
                        addLabel="Add Industry"
                        renderItem={(item, index) => (
                          <>
                            <TextField label="Industry Name" value={item.name} onChange={(v) => updateArrayItem('industries.industries', index, 'name', v)} />
                            <TextField label="Description" value={item.description} onChange={(v) => updateArrayItem('industries.industries', index, 'description', v)} multiline />
                            <TextField label="Key Stat" value={item.stats} onChange={(v) => updateArrayItem('industries.industries', index, 'stats', v)} />
                          </>
                        )}
                      />
                    </Section>
                  </>
                )}

                {/* INDIA EXPANSION PAGE */}
                {selectedPage === 'indiaExpansion' && (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-bold text-gray-900">India Expansion Page</h2>
                      <a href="/services/india-expansion" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline text-sm flex items-center gap-1"><Eye className="w-4 h-4" />Preview</a>
                    </div>

                    <Section title="SEO Settings" icon={<Globe className="w-4 h-4 text-teal-600" />} sectionKey="india-seo" defaultOpen={false}>
                      <TextField label="Page Title" value={siteContent.indiaExpansion?.seo?.title} onChange={(v) => updateContent('indiaExpansion.seo.title', v)} />
                      <TextField label="Meta Description" value={siteContent.indiaExpansion?.seo?.description} onChange={(v) => updateContent('indiaExpansion.seo.description', v)} multiline />
                      <TextField label="Keywords (comma separated)" value={siteContent.indiaExpansion?.seo?.keywords} onChange={(v) => updateContent('indiaExpansion.seo.keywords', v)} multiline />
                      <div className="grid grid-cols-2 gap-4">
                        <ImageField label="OG Image" value={siteContent.indiaExpansion?.seo?.ogImage} onChange={(v) => updateContent('indiaExpansion.seo.ogImage', v)} />
                        <TextField label="Canonical URL" value={siteContent.indiaExpansion?.seo?.canonicalUrl} onChange={(v) => updateContent('indiaExpansion.seo.canonicalUrl', v)} />
                      </div>
                    </Section>

                    <Section title="Hero Section" icon={<Layout className="w-4 h-4 text-teal-600" />} sectionKey="india-hero" defaultOpen={true}>
                      <TextField label="Badge" value={siteContent.indiaExpansion?.hero?.badge} onChange={(v) => updateContent('indiaExpansion.hero.badge', v)} />
                      <div className="grid grid-cols-2 gap-4">
                        <TextField label="Title Line 1" value={siteContent.indiaExpansion?.hero?.title1} onChange={(v) => updateContent('indiaExpansion.hero.title1', v)} />
                        <TextField label="Title Line 2" value={siteContent.indiaExpansion?.hero?.title2} onChange={(v) => updateContent('indiaExpansion.hero.title2', v)} />
                      </div>
                      <TextField label="Tagline" value={siteContent.indiaExpansion?.hero?.tagline} onChange={(v) => updateContent('indiaExpansion.hero.tagline', v)} />
                      <TextField label="Subtitle" value={siteContent.indiaExpansion?.hero?.subtitle} onChange={(v) => updateContent('indiaExpansion.hero.subtitle', v)} multiline />
                      <TextField label="Button Text" value={siteContent.indiaExpansion?.hero?.buttonText} onChange={(v) => updateContent('indiaExpansion.hero.buttonText', v)} />
                      <TextField label="Phone Number" value={siteContent.indiaExpansion?.hero?.phone} onChange={(v) => updateContent('indiaExpansion.hero.phone', v)} />
                    </Section>

                    <Section title="Services (EOR/ODC/COE)" icon={<Briefcase className="w-4 h-4 text-teal-600" />} sectionKey="india-services">
                      <ArrayEditor
                        items={siteContent.indiaExpansion?.services}
                        path="indiaExpansion.services"
                        template={{ id: 'new', title: 'New Service', tagline: 'Tagline', description: 'Description', benefits: [] }}
                        addLabel="Add Service"
                        renderItem={(item, index) => (
                          <>
                            <div className="grid grid-cols-2 gap-3">
                              <TextField label="Title" value={item.title} onChange={(v) => updateArrayItem('indiaExpansion.services', index, 'title', v)} />
                              <TextField label="Tagline" value={item.tagline} onChange={(v) => updateArrayItem('indiaExpansion.services', index, 'tagline', v)} />
                            </div>
                            <TextField label="Description" value={item.description} onChange={(v) => updateArrayItem('indiaExpansion.services', index, 'description', v)} multiline />
                            <TextField label="Benefits (comma-separated)" value={item.benefits?.join(', ')} onChange={(v) => updateArrayItem('indiaExpansion.services', index, 'benefits', v.split(',').map(s => s.trim()))} multiline />
                          </>
                        )}
                      />
                    </Section>

                    <Section title="Pricing Section" icon={<Type className="w-4 h-4 text-teal-600" />} sectionKey="india-pricing">
                      <TextField label="Section Title" value={siteContent.indiaExpansion?.pricing?.title} onChange={(v) => updateContent('indiaExpansion.pricing.title', v)} />
                      <TextField label="Section Subtitle" value={siteContent.indiaExpansion?.pricing?.subtitle} onChange={(v) => updateContent('indiaExpansion.pricing.subtitle', v)} />
                      <TextField label="Note for ODC/COE" value={siteContent.indiaExpansion?.pricing?.note} onChange={(v) => updateContent('indiaExpansion.pricing.note', v)} multiline />
                      
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-4">Pricing Packages</h4>
                        <ArrayEditor
                          items={siteContent.indiaExpansion?.pricing?.packages}
                          path="indiaExpansion.pricing.packages"
                          template={{ name: 'New Package', price12: '$0', price24: '$0', minEmployees: '1', features: ['Feature 1'], popular: false }}
                          addLabel="Add Package"
                          renderItem={(item, index) => (
                            <div className="space-y-3">
                              <div className="grid grid-cols-2 gap-3">
                                <TextField label="Package Name" value={item.name} onChange={(v) => updateArrayItem('indiaExpansion.pricing.packages', index, 'name', v)} />
                                <TextField label="Min Employees" value={item.minEmployees} onChange={(v) => updateArrayItem('indiaExpansion.pricing.packages', index, 'minEmployees', v)} />
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                <TextField label="Price (12 mo)" value={item.price12} onChange={(v) => updateArrayItem('indiaExpansion.pricing.packages', index, 'price12', v)} />
                                <TextField label="Price (24 mo)" value={item.price24} onChange={(v) => updateArrayItem('indiaExpansion.pricing.packages', index, 'price24', v)} />
                              </div>
                              <div className="flex items-center gap-2">
                                <input 
                                  type="checkbox" 
                                  checked={item.popular || false} 
                                  onChange={(e) => updateArrayItem('indiaExpansion.pricing.packages', index, 'popular', e.target.checked)}
                                  className="w-4 h-4 text-teal-600 rounded"
                                />
                                <label className="text-sm text-gray-700">Mark as Popular</label>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Features (one per line)</label>
                                <textarea
                                  value={(item.features || []).join('\n')}
                                  onChange={(e) => updateArrayItem('indiaExpansion.pricing.packages', index, 'features', e.target.value.split('\n').filter(f => f.trim()))}
                                  rows={4}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                  placeholder="Payroll processing&#10;Statutory compliance&#10;HRMS setup"
                                />
                              </div>
                            </div>
                          )}
                        />
                      </div>
                    </Section>
                  </>
                )}

                {/* ELEARNING PAGE */}
                {selectedPage === 'elearning' && (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-bold text-gray-900">eLearning Page</h2>
                      <a href="/services/elearning" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline text-sm flex items-center gap-1"><Eye className="w-4 h-4" />Preview</a>
                    </div>

                    <Section title="SEO Settings" icon={<Globe className="w-4 h-4 text-teal-600" />} sectionKey="elearning-seo" defaultOpen={false}>
                      <TextField label="Page Title" value={siteContent.elearning?.seo?.title} onChange={(v) => updateContent('elearning.seo.title', v)} />
                      <TextField label="Meta Description" value={siteContent.elearning?.seo?.description} onChange={(v) => updateContent('elearning.seo.description', v)} multiline />
                      <TextField label="Keywords (comma separated)" value={siteContent.elearning?.seo?.keywords} onChange={(v) => updateContent('elearning.seo.keywords', v)} multiline />
                      <div className="grid grid-cols-2 gap-4">
                        <ImageField label="OG Image" value={siteContent.elearning?.seo?.ogImage} onChange={(v) => updateContent('elearning.seo.ogImage', v)} />
                        <TextField label="Canonical URL" value={siteContent.elearning?.seo?.canonicalUrl} onChange={(v) => updateContent('elearning.seo.canonicalUrl', v)} />
                      </div>
                    </Section>

                    <Section title="Hero Section" icon={<Layout className="w-4 h-4 text-teal-600" />} sectionKey="elearning-hero" defaultOpen={true}>
                      <div className="grid grid-cols-2 gap-4">
                        <TextField label="Badge Text" value={siteContent.elearning?.hero?.badge} onChange={(v) => updateContent('elearning.hero.badge', v)} />
                        <TextField label="Badge Emoji" value={siteContent.elearning?.hero?.badgeEmoji} onChange={(v) => updateContent('elearning.hero.badgeEmoji', v)} />
                      </div>
                      <TextField label="Title" value={siteContent.elearning?.hero?.title} onChange={(v) => updateContent('elearning.hero.title', v)} />
                      <TextField label="Tagline" value={siteContent.elearning?.hero?.tagline} onChange={(v) => updateContent('elearning.hero.tagline', v)} />
                      <TextField label="Subtitle" value={siteContent.elearning?.hero?.subtitle} onChange={(v) => updateContent('elearning.hero.subtitle', v)} multiline />
                      <div className="grid grid-cols-2 gap-4">
                        <TextField label="Primary CTA" value={siteContent.elearning?.hero?.primaryCTA} onChange={(v) => updateContent('elearning.hero.primaryCTA', v)} />
                        <TextField label="Secondary CTA" value={siteContent.elearning?.hero?.secondaryCTA} onChange={(v) => updateContent('elearning.hero.secondaryCTA', v)} />
                      </div>
                      <TextField label="Gradient (Tailwind classes)" value={siteContent.elearning?.hero?.gradient} onChange={(v) => updateContent('elearning.hero.gradient', v)} placeholder="from-blue-600 via-indigo-600 to-purple-600" />
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-700 mb-3">Hero Boxes (4 feature cards)</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {[0, 1, 2, 3].map(i => (
                            <div key={i} className="p-3 bg-gray-50 rounded-lg">
                              <p className="text-xs text-gray-500 mb-2">Box {i + 1}</p>
                              <TextField label="Label" value={siteContent.elearning?.hero?.heroBoxes?.[i]?.label || ''} onChange={(v) => {
                                const boxes = [...(siteContent.elearning?.hero?.heroBoxes || [{}, {}, {}, {}])];
                                boxes[i] = { ...boxes[i], label: v };
                                updateContent('elearning.hero.heroBoxes', boxes);
                              }} />
                              <TextField label="Value" value={siteContent.elearning?.hero?.heroBoxes?.[i]?.value || ''} onChange={(v) => {
                                const boxes = [...(siteContent.elearning?.hero?.heroBoxes || [{}, {}, {}, {}])];
                                boxes[i] = { ...boxes[i], value: v };
                                updateContent('elearning.hero.heroBoxes', boxes);
                              }} />
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-700 mb-3">Highlight Stat (floating badge)</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <TextField label="Value" value={siteContent.elearning?.hero?.highlightStat?.value || ''} onChange={(v) => updateContent('elearning.hero.highlightStat', { ...(siteContent.elearning?.hero?.highlightStat || {}), value: v })} placeholder="500K+" />
                          <TextField label="Label" value={siteContent.elearning?.hero?.highlightStat?.label || ''} onChange={(v) => updateContent('elearning.hero.highlightStat', { ...(siteContent.elearning?.hero?.highlightStat || {}), label: v })} placeholder="Learners Trained" />
                        </div>
                      </div>
                    </Section>

                    <Section title="Solutions" icon={<Briefcase className="w-4 h-4 text-teal-600" />} sectionKey="elearning-solutions">
                      <ArrayEditor
                        items={siteContent.elearning?.solutions}
                        path="elearning.solutions"
                        template={{ title: 'New Solution', description: 'Description' }}
                        addLabel="Add Solution"
                        renderItem={(item, index) => (
                          <>
                            <TextField label="Title" value={item.title} onChange={(v) => updateArrayItem('elearning.solutions', index, 'title', v)} />
                            <TextField label="Description" value={item.description} onChange={(v) => updateArrayItem('elearning.solutions', index, 'description', v)} multiline />
                          </>
                        )}
                      />
                    </Section>

                    <Section title="Benefits" icon={<CheckCircle className="w-4 h-4 text-teal-600" />} sectionKey="elearning-benefits">
                      <p className="text-sm text-gray-600 mb-2">Benefits (one per line):</p>
                      <TextField label="Benefits List" value={siteContent.elearning?.benefits?.join('\n')} onChange={(v) => updateContent('elearning.benefits', v.split('\n').filter(s => s.trim()))} multiline />
                    </Section>

                    <Section title="Industries" icon={<Globe className="w-4 h-4 text-teal-600" />} sectionKey="elearning-industries">
                      <ArrayEditor
                        items={siteContent.elearning?.industries}
                        path="elearning.industries"
                        template={{ name: 'Industry', use: 'Use cases' }}
                        addLabel="Add Industry"
                        renderItem={(item, index) => (
                          <div className="grid grid-cols-2 gap-3">
                            <TextField label="Industry Name" value={item.name} onChange={(v) => updateArrayItem('elearning.industries', index, 'name', v)} />
                            <TextField label="Use Cases" value={item.use} onChange={(v) => updateArrayItem('elearning.industries', index, 'use', v)} />
                          </div>
                        )}
                      />
                    </Section>
                  </>
                )}

                {/* SOFTWARE DEVELOPMENT PAGE */}
                {selectedPage === 'software' && (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-bold text-gray-900">Software Development Page</h2>
                      <a href="/services/software-development" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline text-sm flex items-center gap-1"><Eye className="w-4 h-4" />Preview</a>
                    </div>

                    <Section title="SEO Settings" icon={<Globe className="w-4 h-4 text-teal-600" />} sectionKey="software-seo" defaultOpen={false}>
                      <TextField label="Page Title" value={siteContent.software?.seo?.title} onChange={(v) => updateContent('software.seo.title', v)} />
                      <TextField label="Meta Description" value={siteContent.software?.seo?.description} onChange={(v) => updateContent('software.seo.description', v)} multiline />
                      <TextField label="Keywords (comma separated)" value={siteContent.software?.seo?.keywords} onChange={(v) => updateContent('software.seo.keywords', v)} multiline />
                      <div className="grid grid-cols-2 gap-4">
                        <ImageField label="OG Image" value={siteContent.software?.seo?.ogImage} onChange={(v) => updateContent('software.seo.ogImage', v)} />
                        <TextField label="Canonical URL" value={siteContent.software?.seo?.canonicalUrl} onChange={(v) => updateContent('software.seo.canonicalUrl', v)} />
                      </div>
                    </Section>

                    <Section title="Hero Section" icon={<Layout className="w-4 h-4 text-teal-600" />} sectionKey="software-hero" defaultOpen={true}>
                      <div className="grid grid-cols-2 gap-4">
                        <TextField label="Badge Text" value={siteContent.software?.hero?.badge} onChange={(v) => updateContent('software.hero.badge', v)} />
                        <TextField label="Badge Emoji" value={siteContent.software?.hero?.badgeEmoji} onChange={(v) => updateContent('software.hero.badgeEmoji', v)} />
                      </div>
                      <TextField label="Title" value={siteContent.software?.hero?.title} onChange={(v) => updateContent('software.hero.title', v)} />
                      <TextField label="Tagline" value={siteContent.software?.hero?.tagline} onChange={(v) => updateContent('software.hero.tagline', v)} />
                      <TextField label="Subtitle" value={siteContent.software?.hero?.subtitle} onChange={(v) => updateContent('software.hero.subtitle', v)} multiline />
                      <div className="grid grid-cols-2 gap-4">
                        <TextField label="Primary CTA" value={siteContent.software?.hero?.primaryCTA} onChange={(v) => updateContent('software.hero.primaryCTA', v)} />
                        <TextField label="Secondary CTA" value={siteContent.software?.hero?.secondaryCTA} onChange={(v) => updateContent('software.hero.secondaryCTA', v)} />
                      </div>
                      <TextField label="Gradient" value={siteContent.software?.hero?.gradient} onChange={(v) => updateContent('software.hero.gradient', v)} />
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-700 mb-3">Hero Boxes (4 feature cards)</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {[0, 1, 2, 3].map(i => (
                            <div key={i} className="p-3 bg-gray-50 rounded-lg">
                              <p className="text-xs text-gray-500 mb-2">Box {i + 1}</p>
                              <TextField label="Label" value={siteContent.software?.hero?.heroBoxes?.[i]?.label || ''} onChange={(v) => {
                                const boxes = [...(siteContent.software?.hero?.heroBoxes || [{}, {}, {}, {}])];
                                boxes[i] = { ...boxes[i], label: v };
                                updateContent('software.hero.heroBoxes', boxes);
                              }} />
                              <TextField label="Value" value={siteContent.software?.hero?.heroBoxes?.[i]?.value || ''} onChange={(v) => {
                                const boxes = [...(siteContent.software?.hero?.heroBoxes || [{}, {}, {}, {}])];
                                boxes[i] = { ...boxes[i], value: v };
                                updateContent('software.hero.heroBoxes', boxes);
                              }} />
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-700 mb-3">Highlight Stat (floating badge)</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <TextField label="Value" value={siteContent.software?.hero?.highlightStat?.value || ''} onChange={(v) => updateContent('software.hero.highlightStat', { ...(siteContent.software?.hero?.highlightStat || {}), value: v })} placeholder="300+" />
                          <TextField label="Label" value={siteContent.software?.hero?.highlightStat?.label || ''} onChange={(v) => updateContent('software.hero.highlightStat', { ...(siteContent.software?.hero?.highlightStat || {}), label: v })} placeholder="Apps Built" />
                        </div>
                      </div>
                    </Section>

                    <Section title="Services" icon={<Briefcase className="w-4 h-4 text-teal-600" />} sectionKey="software-services">
                      <ArrayEditor
                        items={siteContent.software?.services}
                        path="software.services"
                        template={{ title: 'New Service', description: 'Description' }}
                        addLabel="Add Service"
                        renderItem={(item, index) => (
                          <>
                            <TextField label="Title" value={item.title} onChange={(v) => updateArrayItem('software.services', index, 'title', v)} />
                            <TextField label="Description" value={item.description} onChange={(v) => updateArrayItem('software.services', index, 'description', v)} multiline />
                          </>
                        )}
                      />
                    </Section>

                    <Section title="Tech Stack" icon={<Type className="w-4 h-4 text-teal-600" />} sectionKey="software-tech">
                      <ArrayEditor
                        items={siteContent.software?.techStack}
                        path="software.techStack"
                        template={{ category: 'Category', techs: 'Tech1, Tech2' }}
                        addLabel="Add Tech Category"
                        renderItem={(item, index) => (
                          <div className="grid grid-cols-2 gap-3">
                            <TextField label="Category" value={item.category} onChange={(v) => updateArrayItem('software.techStack', index, 'category', v)} />
                            <TextField label="Technologies" value={item.techs} onChange={(v) => updateArrayItem('software.techStack', index, 'techs', v)} />
                          </div>
                        )}
                      />
                    </Section>

                    <Section title="Benefits" icon={<CheckCircle className="w-4 h-4 text-teal-600" />} sectionKey="software-benefits">
                      <p className="text-sm text-gray-600 mb-2">Benefits (one per line):</p>
                      <TextField label="Benefits List" value={siteContent.software?.benefits?.join('\n')} onChange={(v) => updateContent('software.benefits', v.split('\n').filter(s => s.trim()))} multiline />
                    </Section>
                  </>
                )}

                {/* UX/UI DESIGN PAGE */}
                {selectedPage === 'uxui' && (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-bold text-gray-900">UX/UI Design Page</h2>
                      <a href="/services/ux-ui-design" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline text-sm flex items-center gap-1"><Eye className="w-4 h-4" />Preview</a>
                    </div>

                    <Section title="SEO Settings" icon={<Globe className="w-4 h-4 text-teal-600" />} sectionKey="uxui-seo" defaultOpen={false}>
                      <TextField label="Page Title" value={siteContent.uxui?.seo?.title} onChange={(v) => updateContent('uxui.seo.title', v)} />
                      <TextField label="Meta Description" value={siteContent.uxui?.seo?.description} onChange={(v) => updateContent('uxui.seo.description', v)} multiline />
                      <TextField label="Keywords (comma separated)" value={siteContent.uxui?.seo?.keywords} onChange={(v) => updateContent('uxui.seo.keywords', v)} multiline />
                      <div className="grid grid-cols-2 gap-4">
                        <ImageField label="OG Image" value={siteContent.uxui?.seo?.ogImage} onChange={(v) => updateContent('uxui.seo.ogImage', v)} />
                        <TextField label="Canonical URL" value={siteContent.uxui?.seo?.canonicalUrl} onChange={(v) => updateContent('uxui.seo.canonicalUrl', v)} />
                      </div>
                    </Section>

                    <Section title="Hero Section" icon={<Layout className="w-4 h-4 text-teal-600" />} sectionKey="uxui-hero" defaultOpen={true}>
                      <div className="grid grid-cols-2 gap-4">
                        <TextField label="Badge Text" value={siteContent.uxui?.hero?.badge} onChange={(v) => updateContent('uxui.hero.badge', v)} />
                        <TextField label="Badge Emoji" value={siteContent.uxui?.hero?.badgeEmoji} onChange={(v) => updateContent('uxui.hero.badgeEmoji', v)} />
                      </div>
                      <TextField label="Title" value={siteContent.uxui?.hero?.title} onChange={(v) => updateContent('uxui.hero.title', v)} />
                      <TextField label="Tagline" value={siteContent.uxui?.hero?.tagline} onChange={(v) => updateContent('uxui.hero.tagline', v)} />
                      <TextField label="Subtitle" value={siteContent.uxui?.hero?.subtitle} onChange={(v) => updateContent('uxui.hero.subtitle', v)} multiline />
                      <div className="grid grid-cols-2 gap-4">
                        <TextField label="Primary CTA" value={siteContent.uxui?.hero?.primaryCTA} onChange={(v) => updateContent('uxui.hero.primaryCTA', v)} />
                        <TextField label="Secondary CTA" value={siteContent.uxui?.hero?.secondaryCTA} onChange={(v) => updateContent('uxui.hero.secondaryCTA', v)} />
                      </div>
                      <TextField label="Gradient" value={siteContent.uxui?.hero?.gradient} onChange={(v) => updateContent('uxui.hero.gradient', v)} />
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-700 mb-3">Hero Boxes (4 feature cards)</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {[0, 1, 2, 3].map(i => (
                            <div key={i} className="p-3 bg-gray-50 rounded-lg">
                              <p className="text-xs text-gray-500 mb-2">Box {i + 1}</p>
                              <TextField label="Label" value={siteContent.uxui?.hero?.heroBoxes?.[i]?.label || ''} onChange={(v) => {
                                const boxes = [...(siteContent.uxui?.hero?.heroBoxes || [{}, {}, {}, {}])];
                                boxes[i] = { ...boxes[i], label: v };
                                updateContent('uxui.hero.heroBoxes', boxes);
                              }} />
                              <TextField label="Value" value={siteContent.uxui?.hero?.heroBoxes?.[i]?.value || ''} onChange={(v) => {
                                const boxes = [...(siteContent.uxui?.hero?.heroBoxes || [{}, {}, {}, {}])];
                                boxes[i] = { ...boxes[i], value: v };
                                updateContent('uxui.hero.heroBoxes', boxes);
                              }} />
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-700 mb-3">Highlight Stat (floating badge)</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <TextField label="Value" value={siteContent.uxui?.hero?.highlightStat?.value || ''} onChange={(v) => updateContent('uxui.hero.highlightStat', { ...(siteContent.uxui?.hero?.highlightStat || {}), value: v })} placeholder="300+" />
                          <TextField label="Label" value={siteContent.uxui?.hero?.highlightStat?.label || ''} onChange={(v) => updateContent('uxui.hero.highlightStat', { ...(siteContent.uxui?.hero?.highlightStat || {}), label: v })} placeholder="Projects Delivered" />
                        </div>
                      </div>
                    </Section>

                    <Section title="Services" icon={<Briefcase className="w-4 h-4 text-teal-600" />} sectionKey="uxui-services">
                      <ArrayEditor
                        items={siteContent.uxui?.services}
                        path="uxui.services"
                        template={{ title: 'New Service', description: 'Description' }}
                        addLabel="Add Service"
                        renderItem={(item, index) => (
                          <>
                            <TextField label="Title" value={item.title} onChange={(v) => updateArrayItem('uxui.services', index, 'title', v)} />
                            <TextField label="Description" value={item.description} onChange={(v) => updateArrayItem('uxui.services', index, 'description', v)} multiline />
                          </>
                        )}
                      />
                    </Section>
                  </>
                )}

                {/* CREATIVE SERVICES PAGE */}
                {selectedPage === 'creative' && (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-bold text-gray-900">Creative Services Page</h2>
                      <a href="/services/creative" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline text-sm flex items-center gap-1"><Eye className="w-4 h-4" />Preview</a>
                    </div>

                    <Section title="SEO Settings" icon={<Globe className="w-4 h-4 text-teal-600" />} sectionKey="creative-seo" defaultOpen={false}>
                      <TextField label="Page Title" value={siteContent.creative?.seo?.title} onChange={(v) => updateContent('creative.seo.title', v)} />
                      <TextField label="Meta Description" value={siteContent.creative?.seo?.description} onChange={(v) => updateContent('creative.seo.description', v)} multiline />
                      <TextField label="Keywords (comma separated)" value={siteContent.creative?.seo?.keywords} onChange={(v) => updateContent('creative.seo.keywords', v)} multiline />
                      <div className="grid grid-cols-2 gap-4">
                        <ImageField label="OG Image" value={siteContent.creative?.seo?.ogImage} onChange={(v) => updateContent('creative.seo.ogImage', v)} />
                        <TextField label="Canonical URL" value={siteContent.creative?.seo?.canonicalUrl} onChange={(v) => updateContent('creative.seo.canonicalUrl', v)} />
                      </div>
                    </Section>

                    <Section title="Hero Section" icon={<Layout className="w-4 h-4 text-teal-600" />} sectionKey="creative-hero" defaultOpen={true}>
                      <div className="grid grid-cols-2 gap-4">
                        <TextField label="Badge Text" value={siteContent.creative?.hero?.badge} onChange={(v) => updateContent('creative.hero.badge', v)} />
                        <TextField label="Badge Emoji" value={siteContent.creative?.hero?.badgeEmoji} onChange={(v) => updateContent('creative.hero.badgeEmoji', v)} />
                      </div>
                      <TextField label="Title" value={siteContent.creative?.hero?.title} onChange={(v) => updateContent('creative.hero.title', v)} />
                      <TextField label="Tagline" value={siteContent.creative?.hero?.tagline} onChange={(v) => updateContent('creative.hero.tagline', v)} />
                      <TextField label="Subtitle" value={siteContent.creative?.hero?.subtitle} onChange={(v) => updateContent('creative.hero.subtitle', v)} multiline />
                      <div className="grid grid-cols-2 gap-4">
                        <TextField label="Primary CTA" value={siteContent.creative?.hero?.primaryCTA} onChange={(v) => updateContent('creative.hero.primaryCTA', v)} />
                        <TextField label="Secondary CTA" value={siteContent.creative?.hero?.secondaryCTA} onChange={(v) => updateContent('creative.hero.secondaryCTA', v)} />
                      </div>
                      <TextField label="Gradient" value={siteContent.creative?.hero?.gradient} onChange={(v) => updateContent('creative.hero.gradient', v)} />
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-700 mb-3">Hero Boxes (4 feature cards)</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {[0, 1, 2, 3].map(i => (
                            <div key={i} className="p-3 bg-gray-50 rounded-lg">
                              <p className="text-xs text-gray-500 mb-2">Box {i + 1}</p>
                              <TextField label="Label" value={siteContent.creative?.hero?.heroBoxes?.[i]?.label || ''} onChange={(v) => {
                                const boxes = [...(siteContent.creative?.hero?.heroBoxes || [{}, {}, {}, {}])];
                                boxes[i] = { ...boxes[i], label: v };
                                updateContent('creative.hero.heroBoxes', boxes);
                              }} />
                              <TextField label="Value" value={siteContent.creative?.hero?.heroBoxes?.[i]?.value || ''} onChange={(v) => {
                                const boxes = [...(siteContent.creative?.hero?.heroBoxes || [{}, {}, {}, {}])];
                                boxes[i] = { ...boxes[i], value: v };
                                updateContent('creative.hero.heroBoxes', boxes);
                              }} />
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-700 mb-3">Highlight Stat (floating badge)</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <TextField label="Value" value={siteContent.creative?.hero?.highlightStat?.value || ''} onChange={(v) => updateContent('creative.hero.highlightStat', { ...(siteContent.creative?.hero?.highlightStat || {}), value: v })} placeholder="500+" />
                          <TextField label="Label" value={siteContent.creative?.hero?.highlightStat?.label || ''} onChange={(v) => updateContent('creative.hero.highlightStat', { ...(siteContent.creative?.hero?.highlightStat || {}), label: v })} placeholder="Videos Created" />
                        </div>
                      </div>
                    </Section>

                    <Section title="Services" icon={<Briefcase className="w-4 h-4 text-teal-600" />} sectionKey="creative-services">
                      <ArrayEditor
                        items={siteContent.creative?.services}
                        path="creative.services"
                        template={{ title: 'New Service', description: 'Description' }}
                        addLabel="Add Service"
                        renderItem={(item, index) => (
                          <>
                            <TextField label="Title" value={item.title} onChange={(v) => updateArrayItem('creative.services', index, 'title', v)} />
                            <TextField label="Description" value={item.description} onChange={(v) => updateArrayItem('creative.services', index, 'description', v)} multiline />
                          </>
                        )}
                      />
                    </Section>
                  </>
                )}

                {/* DIGITAL MARKETING PAGE */}
                {selectedPage === 'digitalMarketing' && (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-bold text-gray-900">Digital Marketing Page</h2>
                      <a href="/services/digital-marketing" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline text-sm flex items-center gap-1"><Eye className="w-4 h-4" />Preview</a>
                    </div>

                    <Section title="SEO Settings" icon={<Globe className="w-4 h-4 text-teal-600" />} sectionKey="marketing-seo" defaultOpen={false}>
                      <TextField label="Page Title" value={siteContent.digitalMarketing?.seo?.title} onChange={(v) => updateContent('digitalMarketing.seo.title', v)} />
                      <TextField label="Meta Description" value={siteContent.digitalMarketing?.seo?.description} onChange={(v) => updateContent('digitalMarketing.seo.description', v)} multiline />
                      <TextField label="Keywords (comma separated)" value={siteContent.digitalMarketing?.seo?.keywords} onChange={(v) => updateContent('digitalMarketing.seo.keywords', v)} multiline />
                      <div className="grid grid-cols-2 gap-4">
                        <ImageField label="OG Image" value={siteContent.digitalMarketing?.seo?.ogImage} onChange={(v) => updateContent('digitalMarketing.seo.ogImage', v)} />
                        <TextField label="Canonical URL" value={siteContent.digitalMarketing?.seo?.canonicalUrl} onChange={(v) => updateContent('digitalMarketing.seo.canonicalUrl', v)} />
                      </div>
                    </Section>

                    <Section title="Hero Section" icon={<Layout className="w-4 h-4 text-teal-600" />} sectionKey="marketing-hero" defaultOpen={true}>
                      <div className="grid grid-cols-2 gap-4">
                        <TextField label="Badge Text" value={siteContent.digitalMarketing?.hero?.badge} onChange={(v) => updateContent('digitalMarketing.hero.badge', v)} />
                        <TextField label="Badge Emoji" value={siteContent.digitalMarketing?.hero?.badgeEmoji} onChange={(v) => updateContent('digitalMarketing.hero.badgeEmoji', v)} />
                      </div>
                      <TextField label="Title" value={siteContent.digitalMarketing?.hero?.title} onChange={(v) => updateContent('digitalMarketing.hero.title', v)} />
                      <TextField label="Tagline" value={siteContent.digitalMarketing?.hero?.tagline} onChange={(v) => updateContent('digitalMarketing.hero.tagline', v)} />
                      <TextField label="Subtitle" value={siteContent.digitalMarketing?.hero?.subtitle} onChange={(v) => updateContent('digitalMarketing.hero.subtitle', v)} multiline />
                      <div className="grid grid-cols-2 gap-4">
                        <TextField label="Primary CTA" value={siteContent.digitalMarketing?.hero?.primaryCTA} onChange={(v) => updateContent('digitalMarketing.hero.primaryCTA', v)} />
                        <TextField label="Secondary CTA" value={siteContent.digitalMarketing?.hero?.secondaryCTA} onChange={(v) => updateContent('digitalMarketing.hero.secondaryCTA', v)} />
                      </div>
                      <TextField label="Gradient" value={siteContent.digitalMarketing?.hero?.gradient} onChange={(v) => updateContent('digitalMarketing.hero.gradient', v)} />
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-700 mb-3">Hero Boxes (4 feature cards)</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {[0, 1, 2, 3].map(i => (
                            <div key={i} className="p-3 bg-gray-50 rounded-lg">
                              <p className="text-xs text-gray-500 mb-2">Box {i + 1}</p>
                              <TextField label="Label" value={siteContent.digitalMarketing?.hero?.heroBoxes?.[i]?.label || ''} onChange={(v) => {
                                const boxes = [...(siteContent.digitalMarketing?.hero?.heroBoxes || [{}, {}, {}, {}])];
                                boxes[i] = { ...boxes[i], label: v };
                                updateContent('digitalMarketing.hero.heroBoxes', boxes);
                              }} />
                              <TextField label="Value" value={siteContent.digitalMarketing?.hero?.heroBoxes?.[i]?.value || ''} onChange={(v) => {
                                const boxes = [...(siteContent.digitalMarketing?.hero?.heroBoxes || [{}, {}, {}, {}])];
                                boxes[i] = { ...boxes[i], value: v };
                                updateContent('digitalMarketing.hero.heroBoxes', boxes);
                              }} />
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-700 mb-3">Highlight Stat (floating badge)</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <TextField label="Value" value={siteContent.digitalMarketing?.hero?.highlightStat?.value || ''} onChange={(v) => updateContent('digitalMarketing.hero.highlightStat', { ...(siteContent.digitalMarketing?.hero?.highlightStat || {}), value: v })} placeholder="500%" />
                          <TextField label="Label" value={siteContent.digitalMarketing?.hero?.highlightStat?.label || ''} onChange={(v) => updateContent('digitalMarketing.hero.highlightStat', { ...(siteContent.digitalMarketing?.hero?.highlightStat || {}), label: v })} placeholder="Average ROI" />
                        </div>
                      </div>
                    </Section>

                    <Section title="Services" icon={<Briefcase className="w-4 h-4 text-teal-600" />} sectionKey="marketing-services">
                      <ArrayEditor
                        items={siteContent.digitalMarketing?.services}
                        path="digitalMarketing.services"
                        template={{ title: 'New Service', description: 'Description' }}
                        addLabel="Add Service"
                        renderItem={(item, index) => (
                          <>
                            <TextField label="Title" value={item.title} onChange={(v) => updateArrayItem('digitalMarketing.services', index, 'title', v)} />
                            <TextField label="Description" value={item.description} onChange={(v) => updateArrayItem('digitalMarketing.services', index, 'description', v)} multiline />
                          </>
                        )}
                      />
                    </Section>
                  </>
                )}

                {/* CONSULTING PAGE */}
                {selectedPage === 'consulting' && (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-bold text-gray-900">Consulting Page</h2>
                      <a href="/services/consulting" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline text-sm flex items-center gap-1"><Eye className="w-4 h-4" />Preview</a>
                    </div>

                    <Section title="SEO Settings" icon={<Globe className="w-4 h-4 text-teal-600" />} sectionKey="consulting-seo" defaultOpen={false}>
                      <TextField label="Page Title" value={siteContent.consulting?.seo?.title} onChange={(v) => updateContent('consulting.seo.title', v)} />
                      <TextField label="Meta Description" value={siteContent.consulting?.seo?.description} onChange={(v) => updateContent('consulting.seo.description', v)} multiline />
                      <TextField label="Keywords (comma separated)" value={siteContent.consulting?.seo?.keywords} onChange={(v) => updateContent('consulting.seo.keywords', v)} multiline />
                      <div className="grid grid-cols-2 gap-4">
                        <ImageField label="OG Image" value={siteContent.consulting?.seo?.ogImage} onChange={(v) => updateContent('consulting.seo.ogImage', v)} />
                        <TextField label="Canonical URL" value={siteContent.consulting?.seo?.canonicalUrl} onChange={(v) => updateContent('consulting.seo.canonicalUrl', v)} />
                      </div>
                    </Section>

                    <Section title="Hero Section" icon={<Layout className="w-4 h-4 text-teal-600" />} sectionKey="consulting-hero" defaultOpen={true}>
                      <div className="grid grid-cols-2 gap-4">
                        <TextField label="Badge Text" value={siteContent.consulting?.hero?.badge} onChange={(v) => updateContent('consulting.hero.badge', v)} />
                        <TextField label="Badge Emoji" value={siteContent.consulting?.hero?.badgeEmoji} onChange={(v) => updateContent('consulting.hero.badgeEmoji', v)} />
                      </div>
                      <TextField label="Title" value={siteContent.consulting?.hero?.title} onChange={(v) => updateContent('consulting.hero.title', v)} />
                      <TextField label="Tagline" value={siteContent.consulting?.hero?.tagline} onChange={(v) => updateContent('consulting.hero.tagline', v)} />
                      <TextField label="Subtitle" value={siteContent.consulting?.hero?.subtitle} onChange={(v) => updateContent('consulting.hero.subtitle', v)} multiline />
                      <div className="grid grid-cols-2 gap-4">
                        <TextField label="Primary CTA" value={siteContent.consulting?.hero?.primaryCTA} onChange={(v) => updateContent('consulting.hero.primaryCTA', v)} />
                        <TextField label="Secondary CTA" value={siteContent.consulting?.hero?.secondaryCTA} onChange={(v) => updateContent('consulting.hero.secondaryCTA', v)} />
                      </div>
                      <TextField label="Gradient" value={siteContent.consulting?.hero?.gradient} onChange={(v) => updateContent('consulting.hero.gradient', v)} />
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-700 mb-3">Hero Boxes (4 feature cards)</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {[0, 1, 2, 3].map(i => (
                            <div key={i} className="p-3 bg-gray-50 rounded-lg">
                              <p className="text-xs text-gray-500 mb-2">Box {i + 1}</p>
                              <TextField label="Label" value={siteContent.consulting?.hero?.heroBoxes?.[i]?.label || ''} onChange={(v) => {
                                const boxes = [...(siteContent.consulting?.hero?.heroBoxes || [{}, {}, {}, {}])];
                                boxes[i] = { ...boxes[i], label: v };
                                updateContent('consulting.hero.heroBoxes', boxes);
                              }} />
                              <TextField label="Value" value={siteContent.consulting?.hero?.heroBoxes?.[i]?.value || ''} onChange={(v) => {
                                const boxes = [...(siteContent.consulting?.hero?.heroBoxes || [{}, {}, {}, {}])];
                                boxes[i] = { ...boxes[i], value: v };
                                updateContent('consulting.hero.heroBoxes', boxes);
                              }} />
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-700 mb-3">Highlight Stat (floating badge)</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <TextField label="Value" value={siteContent.consulting?.hero?.highlightStat?.value || ''} onChange={(v) => updateContent('consulting.hero.highlightStat', { ...(siteContent.consulting?.hero?.highlightStat || {}), value: v })} placeholder="13+" />
                          <TextField label="Label" value={siteContent.consulting?.hero?.highlightStat?.label || ''} onChange={(v) => updateContent('consulting.hero.highlightStat', { ...(siteContent.consulting?.hero?.highlightStat || {}), label: v })} placeholder="Years Expertise" />
                        </div>
                      </div>
                    </Section>

                    <Section title="Services" icon={<Briefcase className="w-4 h-4 text-teal-600" />} sectionKey="consulting-services">
                      <ArrayEditor
                        items={siteContent.consulting?.services}
                        path="consulting.services"
                        template={{ title: 'New Service', description: 'Description' }}
                        addLabel="Add Service"
                        renderItem={(item, index) => (
                          <>
                            <TextField label="Title" value={item.title} onChange={(v) => updateArrayItem('consulting.services', index, 'title', v)} />
                            <TextField label="Description" value={item.description} onChange={(v) => updateArrayItem('consulting.services', index, 'description', v)} multiline />
                          </>
                        )}
                      />
                    </Section>
                  </>
                )}

                {/* GLOBAL SETTINGS */}
                {selectedPage === 'global' && (
                  <>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Global Settings</h2>

                    <Section title="Site Logos" icon={<Image className="w-4 h-4 text-teal-600" />} sectionKey="global-logos" defaultOpen={true}>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <ImageField label="Header Logo" value={siteContent.global?.headerLogo} onChange={(v) => updateContent('global.headerLogo', v)} />
                          {siteContent.global?.headerLogo && (
                            <div className="bg-gray-100 p-3 rounded-lg mt-2 flex items-center justify-center">
                              <img src={siteContent.global?.headerLogo} alt="Header Logo Preview" className="h-10 object-contain" />
                            </div>
                          )}
                        </div>
                        <div>
                          <ImageField label="Footer Logo" value={siteContent.global?.footerLogo} onChange={(v) => updateContent('global.footerLogo', v)} />
                          {siteContent.global?.footerLogo && (
                            <div className="bg-gray-800 p-3 rounded-lg mt-2 flex items-center justify-center">
                              <img src={siteContent.global?.footerLogo} alt="Footer Logo Preview" className="h-10 object-contain" />
                            </div>
                          )}
                        </div>
                      </div>
                    </Section>

                    <Section title="Company Information" icon={<Settings className="w-4 h-4 text-teal-600" />} sectionKey="global-company" defaultOpen={true}>
                      <TextField label="Company Name" value={siteContent.global?.companyName} onChange={(v) => updateContent('global.companyName', v)} />
                      <div className="grid grid-cols-2 gap-4">
                        <TextField label="Phone Number" value={siteContent.global?.phone} onChange={(v) => updateContent('global.phone', v)} />
                        <TextField label="Email Address (Display)" value={siteContent.global?.email} onChange={(v) => updateContent('global.email', v)} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <TextField label="Location" value={siteContent.global?.location} onChange={(v) => updateContent('global.location', v)} />
                        <TextField label="Founded Year" value={siteContent.global?.foundedYear} onChange={(v) => updateContent('global.foundedYear', v)} />
                      </div>
                    </Section>

                    <Section title="Form Submission Settings" icon={<Mail className="w-4 h-4 text-teal-600" />} sectionKey="global-forms" defaultOpen={true}>
                      <TextField label="Form Submission Email" value={siteContent.global?.formSubmissionEmail} onChange={(v) => updateContent('global.formSubmissionEmail', v)} placeholder="praveen@lionforce.net" />
                      <p className="text-xs text-gray-500 mt-1">This is the email address where form submissions will be forwarded from the admin panel.</p>
                    </Section>

                    <Section title="Social Links" icon={<Globe className="w-4 h-4 text-teal-600" />} sectionKey="global-social">
                      <TextField label="LinkedIn URL" value={siteContent.global?.socialLinks?.linkedin} onChange={(v) => updateContent('global.socialLinks.linkedin', v)} />
                      <TextField label="Twitter URL" value={siteContent.global?.socialLinks?.twitter} onChange={(v) => updateContent('global.socialLinks.twitter', v)} />
                      <TextField label="Facebook URL" value={siteContent.global?.socialLinks?.facebook} onChange={(v) => updateContent('global.socialLinks.facebook', v)} />
                    </Section>

                    <Section title="Footer" icon={<Layout className="w-4 h-4 text-teal-600" />} sectionKey="global-footer">
                      <TextField label="Tagline" value={siteContent.global?.footer?.tagline} onChange={(v) => updateContent('global.footer.tagline', v)} />
                      <TextField label="Description" value={siteContent.global?.footer?.description} onChange={(v) => updateContent('global.footer.description', v)} multiline />
                      <TextField label="Copyright Text" value={siteContent.global?.footer?.copyright} onChange={(v) => updateContent('global.footer.copyright', v)} />
                    </Section>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Images Tab */}
          {activeTab === 'images' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Image Library</h2>
                <div>
                  <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" className="hidden" />
                  <button onClick={() => fileInputRef.current?.click()} disabled={uploading} className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 disabled:opacity-50">
                    <Upload className="w-4 h-4" />{uploading ? 'Uploading...' : 'Upload Image'}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {images.map(img => (
                  <div key={img.id} className="relative group bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <img src={img.url?.startsWith('/') ? `${API_URL}${img.url}` : img.url} alt={img.original_name} className="w-full h-32 object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button onClick={() => { navigator.clipboard.writeText(img.url); }} className="p-2 bg-white rounded-full hover:bg-gray-100" title="Copy URL">
                        <FileText className="w-4 h-4" />
                      </button>
                      <button onClick={() => deleteImage(img.id)} className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-2">
                      <p className="text-xs text-gray-600 truncate">{img.original_name}</p>
                    </div>
                  </div>
                ))}
                {images.length === 0 && (
                  <div className="col-span-full text-center py-12 text-gray-500">
                    No images uploaded yet. Click "Upload Image" to add images.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Form Settings Tab */}
          {activeTab === 'forms' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Contact Form Settings</h2>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Form Labels & Placeholders</h3>
                <div className="grid grid-cols-2 gap-4">
                  <TextField label="Name Field Label" value={siteContent.contact?.form?.nameLabel} onChange={(v) => updateContent('contact.form.nameLabel', v)} />
                  <TextField label="Name Placeholder" value={siteContent.contact?.form?.namePlaceholder} onChange={(v) => updateContent('contact.form.namePlaceholder', v)} />
                  <TextField label="Email Field Label" value={siteContent.contact?.form?.emailLabel} onChange={(v) => updateContent('contact.form.emailLabel', v)} />
                  <TextField label="Email Placeholder" value={siteContent.contact?.form?.emailPlaceholder} onChange={(v) => updateContent('contact.form.emailPlaceholder', v)} />
                  <TextField label="Service Field Label" value={siteContent.contact?.form?.serviceLabel} onChange={(v) => updateContent('contact.form.serviceLabel', v)} />
                  <TextField label="Subject Field Label" value={siteContent.contact?.form?.subjectLabel} onChange={(v) => updateContent('contact.form.subjectLabel', v)} />
                  <TextField label="Message Field Label" value={siteContent.contact?.form?.messageLabel} onChange={(v) => updateContent('contact.form.messageLabel', v)} />
                  <TextField label="Submit Button Text" value={siteContent.contact?.form?.submitText} onChange={(v) => updateContent('contact.form.submitText', v)} />
                </div>
                <TextField label="Success Message" value={siteContent.contact?.form?.successMessage} onChange={(v) => updateContent('contact.form.successMessage', v)} multiline />
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Service Options (Dropdown)</h3>
                <p className="text-sm text-gray-600 mb-2">One service per line:</p>
                <TextField label="Services List" value={siteContent.contact?.form?.services?.join('\n')} onChange={(v) => updateContent('contact.form.services', v.split('\n').filter(s => s.trim()))} multiline />
              </div>

              <button onClick={saveContent} className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg flex items-center gap-2">
                <Save className="w-4 h-4" /> Save Form Settings
              </button>
            </div>
          )}

          {/* Submissions Tab */}
          {activeTab === 'submissions' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="font-bold text-gray-900">Contact Form Submissions ({submissions.length})</h2>
                <div className="text-sm text-gray-500">
                  Forward to: <span className="font-medium text-gray-700">{siteContent?.global?.formSubmissionEmail || 'praveen@lionforce.net'}</span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Email</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Service</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Message</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {submissions.map((sub, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{sub.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{sub.email}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{sub.service || '-'}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 max-w-xs truncate" title={sub.message}>{sub.message || '-'}</td>
                        <td className="px-4 py-3 text-sm text-gray-500">{new Date(sub.timestamp).toLocaleDateString()}</td>
                        <td className="px-4 py-3">
                          <a
                            href={`mailto:${siteContent?.global?.formSubmissionEmail || 'praveen@lionforce.net'}?subject=Fwd: Contact Form - ${sub.name}&body=${encodeURIComponent(`--- Forwarded Contact Form Submission ---\n\nName: ${sub.name}\nEmail: ${sub.email}\nService: ${sub.service || 'Not specified'}\nDate: ${new Date(sub.timestamp).toLocaleString()}\n\nMessage:\n${sub.message || 'No message'}\n\n--- Reply to: ${sub.email} ---`)}`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition-colors text-sm font-medium"
                            title="Forward to email"
                          >
                            <Mail className="w-4 h-4" />
                            Forward
                          </a>
                        </td>
                      </tr>
                    ))}
                    {submissions.length === 0 && <tr><td colSpan="6" className="px-4 py-8 text-center text-gray-500">No submissions yet</td></tr>}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Subscribers Tab */}
          {activeTab === 'subscribers' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-bold text-gray-900">Newsletter Subscribers ({subscribers.length})</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Email</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Subscribed On</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {subscribers.map((sub, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">{sub.email}</td>
                        <td className="px-4 py-3 text-sm text-gray-500">{new Date(sub.timestamp).toLocaleDateString()}</td>
                      </tr>
                    ))}
                    {subscribers.length === 0 && <tr><td colSpan="2" className="px-4 py-8 text-center text-gray-500">No subscribers yet</td></tr>}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Admin;

import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_BACKEND_URL;

// Default content structure (fallback when CMS data is not available)
const defaultContent = {
  home: {
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
      backgroundImage: ''
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
    }
  },
  global: {
    companyName: 'Lionforce Technologies Pvt Ltd',
    phone: '+91 96005 36354',
    email: 'hello@lionforce.net',
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

import React from 'react';
import ServiceTemplate from '@/components/ServiceTemplate';
import { BookOpen, Gamepad, Zap, Users, Target, Globe } from 'lucide-react';

function ELearning() {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Custom Content',
      description: 'Tailored eLearning solutions designed specifically for your organizational needs and learning objectives.'
    },
    {
      icon: <Gamepad className="w-8 h-8" />,
      title: 'Gamification',
      description: 'Engaging game mechanics that motivate learners and improve knowledge retention.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Interactive Learning',
      description: 'Scenario-based and interactive modules that promote active learning and deep engagement.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Learner-Centric',
      description: 'Designed with the learner journey in mind, ensuring optimal learning outcomes.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Measurable Results',
      description: 'Track learning effectiveness with built-in analytics and assessment tools.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Multi-Platform',
      description: 'Access learning content anytime, anywhere, on any device.'
    }
  ];

  const subServices = [
    { title: 'Customised eLearning', description: 'Personalized content that fits your unique organizational needs.' },
    { title: 'Gamified Learning', description: 'Drive engagement through game mechanics, badges, and leaderboards.' },
    { title: 'Microlearning', description: 'Bite-sized learning modules for quick, effective knowledge transfer.' },
    { title: 'Scenario-based Learning', description: 'Real-world scenarios for practical skill development.' },
    { title: 'Application Simulation', description: 'Hands-on software training through realistic simulations.' },
    { title: 'Blended Learning', description: 'Perfect mix of instructor-led and digital learning experiences.' },
    { title: 'Just-in-time Learning', description: 'Quick access to relevant learning content when needed.' },
    { title: 'Digital Creatives', description: 'Engaging infographics and videos tailored to your brand.' },
    { title: 'Translations & Localization', description: 'Content localized for global audiences.' },
    { title: 'Content Development Strategy', description: 'Strategic planning for comprehensive learning programs.' }
  ];

  const benefits = [
    'Understand the learner\'s journey and establish tangible outcomes',
    'Develop tools based on Neurolearning™ and cognitive psychology',
    'Use interactivity to promote deep engagement and retention',
    'Provide realistic feedback and on-demand performance support',
    'Measure learning effectiveness with comprehensive analytics',
    'Boost employee performance and operational excellence',
    'Reduce training costs while improving learning outcomes',
    'Scale learning programs across your entire organization'
  ];

  return (
    <ServiceTemplate
      title="Custom eLearning Solutions"
      tagline="Think Forward • Learn Alive"
      description="Learning that feels like play, works like magic. We design eLearning that clicks—interactive, scenario-based, and gamified to boost performance and engagement. Whether it's compliance, onboarding, or leadership development, we turn training into a tool your teams love to use."
      heroImage="https://images.unsplash.com/photo-1587037325379-0b8807b41f23?auto=format&fit=crop&w=1920&q=80"
      features={features}
      subServices={subServices}
      benefits={benefits}
      ctaText="Transform Your Learning"
    />
  );
}

export default ELearning;

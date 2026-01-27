import React from 'react';
import ServiceTemplate from '@/components/ServiceTemplate';
import { Code, Rocket, Shield, Zap, RefreshCw, Users } from 'lucide-react';

function SoftwareDevelopment() {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Custom Solutions',
      description: 'Tailored software designed specifically for your unique business requirements and workflows.'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Rapid Development',
      description: 'Agile methodology ensures fast delivery without compromising on quality.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Scalable',
      description: 'Built with security best practices and designed to scale with your growth.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'High Performance',
      description: 'Optimized code and architecture for maximum speed and efficiency.'
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: 'Continuous Support',
      description: 'Ongoing maintenance and updates to keep your software running smoothly.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Team',
      description: 'Experienced developers, QA specialists, and designers working together.'
    }
  ];

  const subServices = [
    { title: 'Product Development', description: 'End-to-end product development from ideation to deployment.' },
    { title: 'IT Consulting', description: 'Strategic technology guidance for complex IT challenges.' },
    { title: 'Software Design & Engineering', description: 'Expert design and development of custom software solutions.' },
    { title: 'MVP Launch', description: 'Quick market validation with Minimum Viable Product development.' },
    { title: 'Legacy Modernization', description: 'Upgrade outdated systems for better performance and security.' },
    { title: 'Web Applications', description: 'Dynamic, responsive web applications for modern businesses.' },
    { title: 'Mobile Apps', description: 'Native and cross-platform mobile applications.' },
    { title: 'API Development', description: 'Robust APIs for seamless system integration.' }
  ];

  const benefits = [
    'Custom software designed for your unique business needs',
    'Scalable solutions that grow with your business',
    'Comprehensive security to protect data and transactions',
    'Exceptional development that optimizes your ROI',
    'Agile methodology keeps you engaged at every stage',
    'Post-launch support and continuous updates',
    'Experienced team with proven track record',
    'On-time delivery with transparent communication'
  ];

  return (
    <ServiceTemplate
      title="Software Development"
      tagline="Code Smart • Build Better"
      description="Got an idea? Let's turn it into an app that wows. From dynamic web portals to mobile-first applications, we build smart, scalable, user-friendly solutions tailored to your workflow, goals, and growth plans. We don't just code—we co-create digital experiences that deliver."
      heroImage="https://images.unsplash.com/photo-1672385252168-041b18d5ad37?auto=format&fit=crop&w=1920&q=80"
      heroGradient="from-teal-600 via-cyan-600 to-blue-600"
      features={features}
      subServices={subServices}
      benefits={benefits}
      ctaText="Start Your Project"
    />
  );
}

export default SoftwareDevelopment;

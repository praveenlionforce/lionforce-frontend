import React from 'react';
import ServiceTemplate from '@/components/ServiceTemplate';
import { TrendingUp, Target, BarChart, MessageSquare, Search, Mail } from 'lucide-react';

function DigitalMarketing() {
  return (
    <ServiceTemplate
      title="Digital Marketing Services"
      tagline="Get Seen • Buzz Loud • Grow On • Click Spark"
      description="Marketing that speaks, sells, and scales. Let's make your brand impossible to ignore. We create magnetic campaigns powered by smart content, bold design, and data-backed targeting. Whether you're building awareness, generating leads, or launching something new-we help you grow with clarity and confidence."
      heroGradient="from-rose-500 via-pink-500 to-fuchsia-600"
      features={[
        { icon: <TrendingUp className="w-8 h-8" />, title: 'Growth Marketing', description: 'Data-driven strategies that accelerate business growth.' },
        { icon: <Target className="w-8 h-8" />, title: 'Targeted Campaigns', description: 'Precision targeting to reach your ideal audience.' },
        { icon: <BarChart className="w-8 h-8" />, title: 'Analytics & Insights', description: 'Comprehensive tracking and performance optimization.' },
        { icon: <MessageSquare className="w-8 h-8" />, title: 'Content Marketing', description: 'Compelling content that engages and converts.' },
        { icon: <Search className="w-8 h-8" />, title: 'SEO & SEM', description: 'Increase visibility and drive qualified traffic.' },
        { icon: <Mail className="w-8 h-8" />, title: 'Email Marketing', description: 'Personalized campaigns that nurture and convert leads.' }
      ]}
      benefits={[
        'Increase brand awareness and visibility',
        'Generate high-quality leads consistently',
        'Improve conversion rates and ROI',
        'Build engaged community around your brand',
        'Data-backed decisions for optimal results',
        'Scalable campaigns that grow with your business'
      ]}
      ctaText="Grow Your Brand"
    />
  );
}

export default DigitalMarketing;

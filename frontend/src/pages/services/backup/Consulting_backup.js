import React from 'react';
import ServiceTemplate from '@/components/ServiceTemplate';
import { Lightbulb, Target, TrendingUp, Users, Shield, Zap } from 'lucide-react';

function Consulting() {
  return (
    <ServiceTemplate
      title="Consulting Services"
      tagline="Expert Wisdom • Real Results"
      description="Where Expertise Fuels Transformation! Our consulting services provide strategic guidance, technical expertise, and actionable insights to help you navigate complex challenges, optimize operations, and achieve sustainable growth."
      heroGradient="from-slate-700 via-slate-600 to-zinc-700"
      features={[
        { icon: <Lightbulb className="w-8 h-8" />, title: 'Strategic Planning', description: 'Develop comprehensive strategies aligned with your business goals.' },
        { icon: <Target className="w-8 h-8" />, title: 'Digital Transformation', description: 'Navigate digital transformation with confidence and clarity.' },
        { icon: <TrendingUp className="w-8 h-8" />, title: 'Process Optimization', description: 'Streamline operations for maximum efficiency and impact.' },
        { icon: <Users className="w-8 h-8" />, title: 'Change Management', description: 'Successfully implement and adopt new systems and processes.' },
        { icon: <Shield className="w-8 h-8" />, title: 'Risk Assessment', description: 'Identify and mitigate potential risks proactively.' },
        { icon: <Zap className="w-8 h-8" />, title: 'Technology Advisory', description: 'Expert guidance on technology selection and implementation.' }
      ]}
      benefits={[
        'Access to seasoned industry experts',
        'Objective, unbiased recommendations',
        'Accelerated decision-making process',
        'Reduced risk and increased ROI',
        'Knowledge transfer to your team',
        'Sustainable, long-term solutions'
      ]}
      ctaText="Get Expert Guidance"
    />
  );
}

export default Consulting;

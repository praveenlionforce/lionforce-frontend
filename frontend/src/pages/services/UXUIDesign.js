import React from 'react';
import ServiceTemplate from '@/components/ServiceTemplate';
import { Palette, MousePointer, Eye, Layers, Smartphone, TrendingUp } from 'lucide-react';

function UXUIDesign() {
  return (
    <ServiceTemplate
      title="UX/UI Design Services"
      tagline="Feel Flow • Tap Happy • Think Simple • User First"
      description="Designs That Feel Effortless. We blend design thinking with human empathy to craft intuitive, elegant, and conversion-boosting user journeys. Every button, swipe, and screen is intentional—built to make your users feel at home and keep coming back."
      heroImage="https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=1920&q=80"
      heroGradient="from-purple-600 via-pink-600 to-rose-600"
      features={[
        { icon: <Palette className="w-8 h-8" />, title: 'Visual Design', description: 'Beautiful, modern interfaces that reflect your brand identity.' },
        { icon: <MousePointer className="w-8 h-8" />, title: 'User Experience', description: 'Intuitive workflows that delight and convert users.' },
        { icon: <Eye className="w-8 h-8" />, title: 'User Research', description: 'Data-driven insights to inform design decisions.' },
        { icon: <Layers className="w-8 h-8" />, title: 'Prototyping', description: 'Interactive prototypes for testing and validation.' },
        { icon: <Smartphone className="w-8 h-8" />, title: 'Responsive Design', description: 'Seamless experience across all devices and screen sizes.' },
        { icon: <TrendingUp className="w-8 h-8" />, title: 'Conversion Optimization', description: 'Design patterns that drive engagement and conversions.' }
      ]}
      benefits={[
        'Human-centered design approach',
        'Increased user engagement and satisfaction',
        'Higher conversion rates and ROI',
        'Consistent brand experience across touchpoints',
        'Reduced development costs through early validation',
        'Accessible designs that work for everyone'
      ]}
      ctaText="Elevate Your Design"
    />
  );
}

export default UXUIDesign;

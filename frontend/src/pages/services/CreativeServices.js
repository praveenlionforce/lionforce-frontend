import React from 'react';
import ServiceTemplate from '@/components/ServiceTemplate';
import { Video, Layers, Sparkles, Image, Film, Presentation } from 'lucide-react';

function CreativeServices() {
  return (
    <ServiceTemplate
      title="Design & Creative Services"
      tagline="Lights • Camera • Creativity"
      description="Where Creativity Meets Innovation! From stunning 3D animations to sharp explainers and pitch-perfect presentations, our creative team helps you inform, impress, and inspire. We turn complex ideas into clear, captivating visual stories."
      heroImage="https://images.unsplash.com/photo-1621111848501-8d3634f82336?auto=format&fit=crop&w=1920&q=80"
      features={[
        { icon: <Video className="w-8 h-8" />, title: '3D Animation', description: 'Stunning 3D animations that bring your ideas to life.' },
        { icon: <Film className="w-8 h-8" />, title: 'Explainer Videos', description: 'Clear, engaging videos that simplify complex concepts.' },
        { icon: <Presentation className="w-8 h-8" />, title: 'Presentations', description: 'Professional presentations that captivate your audience.' },
        { icon: <Image className="w-8 h-8" />, title: 'Infographics', description: 'Visual content that makes data digestible and memorable.' },
        { icon: <Layers className="w-8 h-8" />, title: 'Motion Graphics', description: 'Dynamic graphics that add impact to your messaging.' },
        { icon: <Sparkles className="w-8 h-8" />, title: 'Brand Content', description: 'Creative assets that showcase your brand uniqueness.' }
      ]}
      benefits={[
        'Professional-grade animations and graphics',
        'Clear communication of complex ideas',
        'Increased engagement and retention',
        'Consistent brand storytelling',
        'Multi-platform content optimization',
        'Fast turnaround without compromising quality'
      ]}
      ctaText="Create With Us"
    />
  );
}

export default CreativeServices;

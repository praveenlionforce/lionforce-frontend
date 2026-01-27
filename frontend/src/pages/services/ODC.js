import React from 'react';
import ServiceTemplate from '@/components/ServiceTemplate';
import { Building, Users, Zap, Target, Shield, TrendingUp } from 'lucide-react';

function ODC() {
  return (
    <ServiceTemplate
      title="ODC (Offshore Development Center)"
      tagline="Build Your India Tech Team • Scale 5 to 50+"
      description="Extend your development capabilities with a dedicated offshore team in India. Our ODC services provide you with a fully-equipped development center, skilled professionals, and proven processes—all operating as an extension of your in-house team. Leverage India's stable ecosystem and world-class talent."
      heroImage="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1920"
      heroGradient="from-blue-600 via-indigo-600 to-violet-600"
      features={[
        { icon: <Building className="w-8 h-8" />, title: 'Dedicated Center', description: 'Your own offshore development center with dedicated infrastructure.' },
        { icon: <Users className="w-8 h-8" />, title: 'Skilled Team', description: 'Handpicked professionals aligned with your technology stack.' },
        { icon: <Zap className="w-8 h-8" />, title: 'Rapid Scaling', description: 'Scale your team up or down based on project needs.' },
        { icon: <Target className="w-8 h-8" />, title: 'Cost Efficiency', description: 'Save up to 60% on development costs without compromising quality.' },
        { icon: <Shield className="w-8 h-8" />, title: 'Full Control', description: 'Direct oversight and management of your offshore team.' },
        { icon: <TrendingUp className="w-8 h-8" />, title: 'Proven Processes', description: 'Established development methodologies and best practices.' }
      ]}
      benefits={[
        'Access to top-tier global talent',
        'Significant cost savings (up to 60%)',
        'Faster time-to-market for your products',
        'Complete operational control',
        'Seamless integration with your in-house team',
        'Flexible engagement models',
        'State-of-the-art infrastructure',
        '24/7 development capability with timezone advantages'
      ]}
      ctaText="Setup Your India ODC"
    />
  );
}

export default ODC;

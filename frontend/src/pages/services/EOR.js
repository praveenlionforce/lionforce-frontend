import React from 'react';
import ServiceTemplate from '@/components/ServiceTemplate';
import { Globe, Users, Shield, FileText, Clock, DollarSign } from 'lucide-react';

function EOR() {
  return (
    <ServiceTemplate
      title="EOR (Employer of Record)"
      tagline="Hire Global • Stay Compliant"
      description="Expand your team globally without the hassle. Our Employer of Record services handle all legal, HR, and payroll complexities, allowing you to hire talent anywhere in the world while staying fully compliant with local regulations."
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
      features={[
        { icon: <Globe className="w-8 h-8" />, title: 'Global Reach', description: 'Hire talent in 150+ countries without establishing local entities.' },
        { icon: <Shield className="w-8 h-8" />, title: 'Full Compliance', description: 'Stay compliant with local employment laws and regulations.' },
        { icon: <Users className="w-8 h-8" />, title: 'HR Management', description: 'Complete HR administration including contracts and benefits.' },
        { icon: <DollarSign className="w-8 h-8" />, title: 'Payroll Processing', description: 'Accurate, on-time payroll in local currency.' },
        { icon: <FileText className="w-8 h-8" />, title: 'Legal Protection', description: 'Mitigate employment risks and legal liabilities.' },
        { icon: <Clock className="w-8 h-8" />, title: 'Quick Onboarding', description: 'Hire in days, not months.' }
      ]}
      benefits={[
        'Expand globally without setting up local entities',
        'Reduce hiring time from months to days',
        'Ensure 100% compliance with local labor laws',
        'Focus on core business while we handle HR complexities',
        'Cost-effective alternative to establishing subsidiaries',
        'Access global talent pool without borders',
        'Minimize legal and financial risks',
        'Professional HR support in local languages'
      ]}
      ctaText="Hire Globally Today"
    />
  );
}

export default EOR;

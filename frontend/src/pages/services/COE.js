import React from 'react';
import ServiceTemplate from '@/components/ServiceTemplate';
import { Award, Lightbulb, BookOpen, Users, Target, TrendingUp } from 'lucide-react';

function COE() {
  return (
    <ServiceTemplate
      title="COE (Center of Excellence)"
      tagline="Excellence • Innovation • Growth"
      description="Establish a Center of Excellence to drive innovation, standardize best practices, and accelerate organizational transformation. Our COE services help you build specialized teams focused on continuous improvement and knowledge leadership."
      heroImage="https://images.pexels.com/photos/8292854/pexels-photo-8292854.jpeg?auto=compress&cs=tinysrgb&w=1920"
      features={[
        { icon: <Award className="w-8 h-8" />, title: 'Best Practices', description: 'Establish and propagate industry best practices across your organization.' },
        { icon: <Lightbulb className="w-8 h-8" />, title: 'Innovation Hub', description: 'Foster innovation and experimentation with emerging technologies.' },
        { icon: <BookOpen className="w-8 h-8" />, title: 'Knowledge Center', description: 'Centralize expertise and create knowledge repositories.' },
        { icon: <Users className="w-8 h-8" />, title: 'Skill Development', description: 'Continuous learning and upskilling programs.' },
        { icon: <Target className="w-8 h-8" />, title: 'Strategic Alignment', description: 'Align technology initiatives with business objectives.' },
        { icon: <TrendingUp className="w-8 h-8" />, title: 'Performance Optimization', description: 'Drive operational excellence and efficiency.' }
      ]}
      benefits={[
        'Standardized processes and methodologies',
        'Improved quality and consistency',
        'Faster adoption of new technologies',
        'Reduced redundancy and increased efficiency',
        'Enhanced collaboration across teams',
        'Accelerated digital transformation',
        'Competitive advantage through innovation',
        'Measurable ROI and business impact'
      ]}
      ctaText="Build Your COE"
    />
  );
}

export default COE;

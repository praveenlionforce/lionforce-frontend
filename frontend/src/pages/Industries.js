import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Pill, DollarSign, Heart, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Industries() {
  const industries = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Government',
      description: 'In an era where efficiency is paramount, outdated systems and lack of training impede progress. Lionforce empowers government agencies with tailored software, web development, and engaging eLearning content to enhance public services and build trust.',
      benefits: ['Digital Transformation', 'Citizen Services', 'Compliance Training'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Pill className="w-12 h-12" />,
      title: 'Pharmaceuticals',
      description: 'In a field where knowledge is critical, are you prepared for rapid changes in regulations and market demands? Lionforce delivers tailored eLearning and software solutions that ensure your workforce stays compliant, informed, and ready to tackle challenges.',
      benefits: ['Regulatory Compliance', 'Sales Training', 'Product Knowledge'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: 'Fintech',
      description: 'The fintech landscape is continuously evolving, and adaptability is crucial. Lionforce offers cutting-edge software and app development combined with impactful eLearning solutions to foster growth, enhance security, and redefine user experiences.',
      benefits: ['Digital Banking', 'Security Training', 'Customer Experience'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Healthcare',
      description: 'The healthcare sector faces challenges in training, compliance, and patient management. Lionforce provides bespoke eLearning and software solutions that empower healthcare professionals with the knowledge and tools they need to deliver top-notch patient care.',
      benefits: ['Medical Training', 'Patient Management', 'Compliance'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Factory className="w-12 h-12" />,
      title: 'Manufacturing',
      description: 'As manufacturing faces increasing pressure for efficiency and flexibility, poor training and outdated systems can hinder performance. Lionforce specializes in creating innovative software and engaging eLearning solutions that optimize operations.',
      benefits: ['Process Optimization', 'Safety Training', 'Quality Control'],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Industries We Serve - Government, Pharma, Fintech, Healthcare | Lionforce</title>
        <meta name="description" content="Lionforce delivers specialized eLearning and software solutions for Government, Pharmaceuticals, Fintech, Healthcare, and Manufacturing industries." />
      </Helmet>
      
      <div className="pt-20 bg-white">
        <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Industry Expertise</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deep tech expertise and domain knowledge with a business-oriented approach 
                to development resulting in effective digital solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:border-teal-400 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${industry.color} rounded-full text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{industry.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-teal-600">Key Solutions:</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border border-gray-200"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how our solutions can address your industry-specific challenges
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Industries;
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Heart, Rocket, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

function About() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Client-First Approach',
      description: 'Your success is our priority. We build lasting partnerships based on trust and results.'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Innovation Driven',
      description: 'We stay ahead of the curve, leveraging cutting-edge technologies and methodologies.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Excellence is in our DNA. Every project undergoes rigorous quality checks.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Team',
      description: '100% certified professionals with diverse skills and proven expertise.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-gray-50" data-testid="about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">About Lionforce</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your Partner in Transformative Learning and Software Solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At Lionforce, we're not just innovators; we're game-changers in custom eLearning and 
              software development, delivering tailored solutions that turbocharge engagement, 
              accelerate progress, and ignite operational excellence!
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With over a decade of experience and 100+ successful projects across 32+ countries, 
              we've established ourselves as a trusted partner for businesses seeking transformation 
              through technology and learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white" data-testid="values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white backdrop-blur-sm p-8 rounded-2xl border border-gray-200 text-center"
                data-testid={`value-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-600 to-green-600 rounded-full text-gray-900 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-20 bg-gray-50" data-testid="ceo-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-teal-600 to-green-600 p-1 rounded-2xl">
                <div className="bg-white p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold mb-4 gradient-text">From our CEO</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The success of any project is rooted in the strength of its people. At Lionforce, 
                    we prioritize building a team of exceptional professionals who share our vision and values.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our deliberate growth strategy allows us to handpick the right talent, fostering a 
                    vibrant culture and maintaining low attrition rates. Talented developers, skilled QAs, 
                    and innovative designers, all supported by proven processes, are the cornerstones of 
                    the outstanding results we deliver to our clients.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Together, we're not just creating solutions; we're building lasting partnerships.
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-900 font-bold">Praveen Kamalan</p>
                    <p className="text-gray-600">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white backdrop-blur-sm p-8 rounded-2xl border border-gray-200">
                <Target className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Our Mission</h3>
                <p className="text-gray-600">
                  To empower organizations worldwide with innovative learning solutions and 
                  transformative software that drive measurable business outcomes and sustainable growth.
                </p>
              </div>

              <div className="bg-white backdrop-blur-sm p-8 rounded-2xl border border-gray-200">
                <Award className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Our Vision</h3>
                <p className="text-gray-600">
                  To be the global leader in custom eLearning and software development, recognized 
                  for excellence, innovation, and the lasting impact we create for our clients.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white" data-testid="about-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">13+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">100+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">32+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600" data-testid="about-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Join hundreds of satisfied clients who have transformed their businesses with Lionforce
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            data-testid="about-cta-button"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;

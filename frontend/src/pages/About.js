import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Heart, Rocket, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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
    <>
      <Helmet>
        <title>About Lionforce - 13+ Years of Excellence | Custom eLearning & Software Development</title>
        <meta name="description" content="Learn about Lionforce's 13+ year journey in delivering custom eLearning, software development, and India expansion services to 100+ clients across 32+ countries." />
      </Helmet>
      
      <div className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-green-50">
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
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                We don't just build — we transform. Whether it's immersive eLearning, scalable software, 
                or helping global companies set up high-performing teams in India, 
                <span className="text-teal-600 font-bold"> Lionforce delivers results that move the needle.</span>
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With <strong className="text-gray-900">13+ years</strong> of proven expertise and 
                <strong className="text-gray-900"> 300+ successful projects</strong> across 
                <strong className="text-gray-900"> 32+ countries</strong>, we've earned our reputation 
                as the partner of choice for businesses ready to innovate, scale, and lead.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="gradient-text">Core Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const colors = [
                  'from-teal-500 to-teal-600',
                  'from-green-500 to-green-600',
                  'from-blue-500 to-blue-600',
                  'from-purple-500 to-purple-600'
                ];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow text-center"
                  >
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${colors[index]} rounded-full text-white mb-4`}>
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CEO Message Section */}
        <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-8 rounded-2xl border border-teal-200 shadow-lg">
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                  <Target className="w-12 h-12 text-teal-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower organizations worldwide with innovative learning solutions and 
                    transformative software that drive measurable business outcomes and sustainable growth.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                  <Award className="w-12 h-12 text-green-600 mb-4" />
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
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-white rounded-xl border border-teal-200">
                <div className="text-5xl font-bold gradient-text mb-2">13+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-200">
                <div className="text-5xl font-bold gradient-text mb-2">300+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200">
                <div className="text-5xl font-bold gradient-text mb-2">32+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-200">
                <div className="text-5xl font-bold gradient-text mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of satisfied clients who have transformed their businesses with Lionforce
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Get Started Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Heart, Rocket, Shield, Eye, Handshake, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function About() {
  const values = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Partnership',
      description: 'Prioritizing your needs and building lasting relationships based on trust.'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Transparency',
      description: 'Giving stakeholders complete process visibility at every step.'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Flexibility',
      description: 'Empowering you to adapt and evolve as your needs change.'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Sincerity',
      description: 'Clear, direct communication without jargon or hidden agendas.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Support',
      description: 'Nurturing our talent and developing their future skills continuously.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Lionforce - 13+ Years of Excellence | Custom eLearning & Software Development</title>
        <meta name="description" content="Learn about Lionforce's 13+ year journey in delivering custom eLearning, software development, and India expansion services to 300+ clients across 32+ countries." />
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
              <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-4">About us</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                We Believe in Fueling Success with <span className="gradient-text">Creativity & Innovation</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center font-medium">
                At Lionforce, we know that a culture of continuous learning drives success. Our cutting-edge eLearning 
                and software solutions are designed to elevate your business and fuel its growth.
              </p>
              
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Founded in 2013 by a team of industry experts and design enthusiasts, Lionforce is at the forefront of 
                  custom eLearning solutions and cutting-edge software development. Our mission is to empower companies 
                  to excel in today&apos;s competitive digital landscape.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  With a seasoned team of developers, designers, and visionaries, we unite years of experience to deliver 
                  both innovative learning solutions and specialized engineering services. We are passionate about creating 
                  exceptional user experiences, ensuring that every interaction—whether for learners or software users—is 
                  beautifully crafted and engaging.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  At Lionforce, we combine the latest technologies with effective and transparent processes to foster 
                  continuous growth. By integrating learning and innovation into ongoing workflows, we help businesses 
                  achieve lasting success and navigate the challenges that often hinder progress.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Challenges You&apos;ll <span className="gradient-text">Conquer With Us!</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl border border-teal-200"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900">Craft Your Dream Team for Unstoppable Success!</h3>
                <p className="text-gray-600">
                  We&apos;ll quickly assemble a dynamic team of vetted specialists to accelerate your product journey, 
                  providing you with complete visibility and flexibility at every turn.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-200"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900">Ignite Your Digital Transformation!</h3>
                <p className="text-gray-600">
                  Unlock new possibilities and elevate your business by embracing the power of cutting-edge technology 
                  with innovative solutions tailored to your needs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-200"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900">Complete Solution Development, Start to Finish</h3>
                <p className="text-gray-600">
                  Experience full-cycle innovation with our comprehensive eLearning and software engineering services. 
                  From the first prototype to final deployment, scaling, and ongoing support.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What We <span className="gradient-text">Believe In</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {values.map((value, index) => {
                const colors = [
                  'from-teal-500 to-teal-600',
                  'from-green-500 to-green-600',
                  'from-blue-500 to-blue-600',
                  'from-purple-500 to-purple-600',
                  'from-orange-500 to-orange-600'
                ];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow text-center"
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
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-2xl border border-teal-200">
                  <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-4">From our CEO</p>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    The success of any project is rooted in the strength of its people. At Lionforce, 
                    we prioritize building a team of exceptional professionals who share our vision and values.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our deliberate growth strategy allows us to handpick the right talent, fostering a 
                    vibrant culture and maintaining low attrition rates. Talented developers, skilled QAs, 
                    and innovative designers, all supported by proven processes, are the cornerstones of 
                    the outstanding results we deliver to our clients.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6 font-medium text-teal-700">
                    Together, we&apos;re not just creating solutions; we&apos;re building lasting partnerships.
                  </p>
                  <div className="border-t border-teal-200 pt-4">
                    <p className="text-gray-900 font-bold text-lg">Praveen Kamalan</p>
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
        <section className="py-20 bg-gradient-to-br from-teal-600 to-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Based Globally, Serving the World
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-5xl font-bold text-white mb-2">13+</div>
                <div className="text-white/90">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-5xl font-bold text-white mb-2">300+</div>
                <div className="text-white/90">Projects Delivered</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-5xl font-bold text-white mb-2">32+</div>
                <div className="text-white/90">Countries</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-5xl font-bold text-white mb-2">500K+</div>
                <div className="text-white/90">People Impacted</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Discover the Power of <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Unlock years of learning and software excellence with Lionforce. Request your free consultation 
              today and start transforming your vision into reality!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-teal-600 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Free Consultation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
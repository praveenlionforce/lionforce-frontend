import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <>
      <Helmet>
        <title>About Lionforce - 13+ Years of Excellence | Custom eLearning & Software Development</title>
        <meta name="description" content="Learn about Lionforce's 13+ year journey in delivering custom eLearning, software development, and India expansion services to 300+ clients across 32+ countries." />
      </Helmet>
      
      <div className="pt-20 bg-white overflow-hidden">
        {/* Hero Section - Full width with asymmetric design */}
        <section className="relative min-h-[70vh] flex items-center">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-6">Our Story</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  Fueling Success
                  <span className="block gradient-text">Through Innovation</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Since 2012, we&apos;ve been transforming how businesses learn, build, and grow. 
                  Not just another tech company-we&apos;re your partners in making the impossible possible.
                </p>
                <div className="flex items-center gap-8">
                  <div>
                    <div className="text-4xl font-bold gradient-text">13+</div>
                    <div className="text-gray-500 text-sm">Years</div>
                  </div>
                  <div className="w-px h-12 bg-gray-300"></div>
                  <div>
                    <div className="text-4xl font-bold gradient-text">300+</div>
                    <div className="text-gray-500 text-sm">Projects</div>
                  </div>
                  <div className="w-px h-12 bg-gray-300"></div>
                  <div>
                    <div className="text-4xl font-bold gradient-text">32+</div>
                    <div className="text-gray-500 text-sm">Countries</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative">
                  {/* Stacked cards effect */}
                  <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-teal-500 to-green-500 rounded-3xl transform rotate-3"></div>
                  <div className="relative bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      Founded by industry experts and design enthusiasts, Lionforce stands at the forefront of 
                      custom eLearning and software development.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      We unite developers, designers, and visionaries to deliver exceptional experiences-whether 
                      for learners or software users. Every interaction is beautifully crafted and engaging.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Do - Flowing section */}
        <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Challenges You&apos;ll <span className="gradient-text">Conquer</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From dream teams to digital transformation, we make it happen.
              </p>
            </motion.div>

            {/* Flowing cards with alternating layout */}
            <div className="space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row items-center gap-12"
              >
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl text-white text-2xl font-bold mb-6">01</div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">Build Your Dream Team</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We quickly assemble dynamic teams of vetted specialists to accelerate your product journey, 
                    providing complete visibility and flexibility at every turn. Your success is our blueprint.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <div className="h-64 bg-gradient-to-br from-teal-100 to-green-100 rounded-3xl flex items-center justify-center">
                    <div className="text-6xl">👥</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row-reverse items-center gap-12"
              >
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl text-white text-2xl font-bold mb-6">02</div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">Ignite Digital Transformation</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Unlock new possibilities and elevate your business by embracing cutting-edge technology. 
                    We craft innovative solutions tailored to your unique needs-no cookie-cutter approaches here.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <div className="h-64 bg-gradient-to-br from-green-100 to-teal-100 rounded-3xl flex items-center justify-center">
                    <div className="text-6xl">🚀</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row items-center gap-12"
              >
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl text-white text-2xl font-bold mb-6">03</div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">End-to-End Solutions</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Experience full-cycle innovation with comprehensive eLearning and software engineering. 
                    From first prototype to final deployment, scaling, and ongoing support-we&apos;ve got you covered.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <div className="h-64 bg-gradient-to-br from-teal-100 to-green-100 rounded-3xl flex items-center justify-center">
                    <div className="text-6xl">⚡</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values - Modern pill design */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Believe In</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our values aren&apos;t just words on a wall-they guide every decision we make.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { title: 'Partnership', desc: 'Building lasting relationships based on trust' },
                { title: 'Transparency', desc: 'Complete visibility at every step' },
                { title: 'Flexibility', desc: 'Adapting as your needs evolve' },
                { title: 'Sincerity', desc: 'Clear communication, no jargon' },
                { title: 'Support', desc: 'Nurturing talent continuously' }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-green-500 rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-gray-800 px-8 py-4 rounded-full border border-gray-700 hover:border-teal-500 transition-colors cursor-default">
                    <span className="font-semibold text-lg">{value.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CEO Message - Editorial style */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Large quote mark */}
              <Quote className="absolute -top-8 -left-4 w-24 h-24 text-teal-100" />
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-6">From Our CEO</p>
                  <p className="text-3xl md:text-4xl font-light text-gray-800 leading-relaxed mb-8">
                    &ldquo;The success of any project is rooted in the strength of its people. At Lionforce, 
                    we prioritize building a team of exceptional professionals who share our vision and values.&rdquo;
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Our deliberate growth strategy allows us to handpick the right talent, fostering a 
                    vibrant culture and maintaining low attrition rates. Talented developers, skilled QAs, 
                    and innovative designers-all supported by proven processes-are the cornerstones of 
                    the outstanding results we deliver.
                  </p>
                  <p className="text-xl font-semibold text-teal-600 mb-6">
                    Together, we&apos;re not just creating solutions; we&apos;re building lasting partnerships.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-1 h-12 bg-gradient-to-b from-teal-500 to-green-500 rounded-full"></div>
                    <div>
                      <p className="font-bold text-xl text-gray-900">Praveen Kamalan</p>
                      <p className="text-gray-500">Founder & CEO</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-green-50 border-l-4 border-teal-500"
                  >
                    <Target className="w-10 h-10 text-teal-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Our Mission</h3>
                    <p className="text-gray-600">
                      Empower organizations worldwide with innovative learning and software solutions 
                      that drive measurable outcomes.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 border-l-4 border-green-500"
                  >
                    <Award className="w-10 h-10 text-green-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Our Vision</h3>
                    <p className="text-gray-600">
                      Be the global leader in AI-powered eLearning and software-and the trusted partner 
                      for businesses expanding to India.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Impact Numbers - Large typography */}
        <section className="py-24 bg-gradient-to-r from-teal-600 via-teal-500 to-green-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Based Globally, Serving the World
              </h2>
              <p className="text-white/80 text-lg">Our impact in numbers</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '13+', label: 'Years of Excellence' },
                { number: '300+', label: 'Projects Delivered' },
                { number: '32+', label: 'Countries Served' },
                { number: '500K+', label: 'People Impacted' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-5xl md:text-7xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Ready to Transform Your Vision?
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Let&apos;s unlock years of learning and software excellence together. 
                Your free consultation is just a click away.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-green-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;

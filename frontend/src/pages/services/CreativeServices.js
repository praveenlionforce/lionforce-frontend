import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
  ArrowRight,
  Video,
  Clapperboard,
  Sparkles,
  Presentation,
  Image,
  BarChart3,
  CheckCircle,
  Phone,
  Play
} from 'lucide-react';
import { useSiteContent } from '../../hooks/useSiteContent';

function CreativeServices() {
  const { content, global } = useSiteContent('creative');
  
  const hero = content?.hero || {};
  const services = content?.services || [];

  const serviceIcons = [Clapperboard, Video, Sparkles, Play, Presentation, BarChart3];

  return (
    <>
      <Helmet>
        <title>Creative Services | 3D Animation, Video Production | Lionforce</title>
        <meta name="description" content="3D animations, explainer videos, motion graphics, and visual content that makes your brand unforgettable." />
      </Helmet>

      <div className="overflow-hidden bg-white">
        {/* Hero Section */}
        <section className={`relative min-h-screen pt-20 bg-gradient-to-br ${hero.gradient || 'from-rose-400 via-pink-500 to-rose-600'}`}>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/30">
                  <span className="text-xl">{hero.badgeEmoji || '🎬'}</span>
                  <span className="text-sm font-medium text-white">{hero.badge || 'Visual Storytelling'}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" data-testid="creative-title">
                  {hero.title || 'Creative Services That Captivate'}
                </h1>

                <p className="text-lg text-white/80 font-medium mb-4 tracking-wide">
                  {hero.tagline || 'Create Bold • Tell Stories • Inspire Action'}
                </p>

                <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-lg">
                  {hero.subtitle || '3D animations, explainer videos, motion graphics, and visual content that makes your brand unforgettable.'}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {(hero.stats || ['500+ videos created', 'Award-winning team', 'Global clients']).map((stat, i) => (
                    <span key={i} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">
                      {stat}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 bg-white text-rose-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    data-testid="creative-cta-primary"
                  >
                    {hero.primaryCTA || 'Get Creative Quote'}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href={`tel:${(global?.phone || '+91 96005 36354').replace(/\s+/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border border-white/30 hover:bg-white/20 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    Call {global?.phone || '+91 96005 36354'}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Clapperboard, label: '3D Animation', value: 'Stunning' },
                      { icon: Video, label: 'Explainers', value: 'Engaging' },
                      { icon: Sparkles, label: 'Motion', value: 'Dynamic' },
                      { icon: Image, label: 'Infographics', value: 'Visual' }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="bg-white/10 p-4 rounded-xl text-center"
                      >
                        <item.icon className="w-8 h-8 text-white mx-auto mb-2" />
                        <p className="text-white/70 text-xs">{item.label}</p>
                        <p className="text-white font-bold text-sm">{item.value}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white">
                      <Play className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">500+</div>
                      <div className="text-sm text-gray-500">Videos Created</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From 3D animations to corporate videos - we bring your vision to life.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = serviceIcons[index % serviceIcons.length];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-orange-300 transition-all hover:shadow-xl h-full">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white mb-6">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-24 bg-gradient-to-r ${hero.gradient || 'from-rose-400 via-pink-500 to-rose-600'} relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 30% 50%, white 2px, transparent 2px)', backgroundSize: '60px 60px'}}></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Tell Your Story?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Let's create visual content that captivates your audience. Get a free creative consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                >
                  Get Creative Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={`tel:${(global?.phone || '+91 96005 36354').replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold text-lg border border-white/30 hover:bg-white/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call {global?.phone || '+91 96005 36354'}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CreativeServices;

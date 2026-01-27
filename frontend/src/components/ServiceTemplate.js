import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

function ServiceTemplate({ 
  title, 
  tagline, 
  description, 
  heroImage, 
  features, 
  benefits, 
  subServices,
  ctaText = "Get Started Today"
}) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
        style={{
          backgroundImage: heroImage ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('${heroImage}')` : '',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        data-testid="service-hero"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">{title}</span>
            </h1>
            {tagline && (
              <p className="text-2xl text-yellow-500 font-semibold mb-6">{tagline}</p>
            )}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">{description}</p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105"
              data-testid="service-hero-cta"
            >
              {ctaText}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      {features && features.length > 0 && (
        <section className="py-20 bg-gray-900" data-testid="service-features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Key <span className="gradient-text">Features</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700"
                  data-testid={`feature-${index}`}
                >
                  <div className="text-yellow-500 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sub-Services Section */}
      {subServices && subServices.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900" data-testid="service-sub-services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="gradient-text">Solutions</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-300"
                  data-testid={`sub-service-${index}`}
                >
                  {service.icon && <div className="text-yellow-500 mb-4">{service.icon}</div>}
                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {benefits && benefits.length > 0 && (
        <section className="py-20 bg-gray-900" data-testid="service-benefits">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Choose <span className="gradient-text">Us?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                  data-testid={`benefit-${index}`}
                >
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600" data-testid="service-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Let's discuss how we can help transform your business with our {title.toLowerCase()} services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              data-testid="service-cta-contact"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+919884052675"
              className="inline-flex items-center bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
              data-testid="service-cta-call"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceTemplate;

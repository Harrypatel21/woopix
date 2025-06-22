
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Video, Palette, Share2, PenTool, Users, TrendingUp } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, once: true });

  const services = [
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video production and post-production services that captivate your audience.',
      features: ['Motion Graphics', 'Color Grading', 'Audio Enhancement']
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Eye-catching visuals that communicate your brand message effectively.',
      features: ['Brand Identity', 'Print Design', 'Digital Assets']
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Strategic social media campaigns that build community and drive engagement.',
      features: ['Content Strategy', 'Community Management', 'Analytics']
    },
    {
      icon: PenTool,
      title: 'Content Writing',
      description: 'Compelling copy that converts visitors into customers and builds brand loyalty.',
      features: ['Blog Writing', 'Web Copy', 'Email Campaigns']
    },
    {
      icon: Users,
      title: 'Influencer Marketing',
      description: 'Connect with the right influencers to amplify your brand reach and credibility.',
      features: ['Influencer Outreach', 'Campaign Management', 'Performance Tracking']
    },
    {
      icon: TrendingUp,
      title: 'Growth Strategy',
      description: 'Data-driven strategies that accelerate your business growth and market presence.',
      features: ['Market Analysis', 'Growth Hacking', 'Performance Optimization']
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -30 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            Our <span className="text-brand-orange">Services</span>
          </h2>
          <p className="text-xl text-brand-slate max-w-2xl mx-auto">
            Comprehensive creative solutions designed to elevate your brand and drive measurable results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 group"
            >
              {/* Icon */}
              <motion.div 
                className="w-16 h-16 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-6"
                whileHover={{ 
                  backgroundColor: "rgba(248, 143, 36, 0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                <service.icon className="w-8 h-8 text-brand-orange" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-brand-charcoal mb-4">
                {service.title}
              </h3>
              <p className="text-brand-slate mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-brand-slate">
                    <div className="w-2 h-2 bg-brand-orange rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <motion.button 
                  className="text-brand-orange font-semibold transition-colors duration-300 relative group"
                  whileHover={{ color: "#e67e22" }}
                >
                  Learn More →
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-brand-orange"
                    initial={{ width: 0 }}
                    whileHover={{ 
                      width: "100%",
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

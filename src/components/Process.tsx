
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Target, Rocket, CheckCircle, BarChart } from 'lucide-react';

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, once: true });

  const steps = [
    {
      icon: Search,
      title: 'Discover',
      description: 'We dive deep into your brand, audience, and goals to understand your unique story.',
      details: ['Brand audit', 'Market research', 'Competitor analysis', 'Goal setting']
    },
    {
      icon: Target,
      title: 'Strategy',
      description: 'We develop a comprehensive strategy tailored to your specific objectives.',
      details: ['Creative strategy', 'Content planning', 'Timeline creation', 'Resource allocation']
    },
    {
      icon: Rocket,
      title: 'Create',
      description: 'Our expert team brings your vision to life with stunning creative work.',
      details: ['Content creation', 'Design execution', 'Video production', 'Copy writing']
    },
    {
      icon: CheckCircle,
      title: 'Optimize',
      description: 'We refine and perfect every element to ensure maximum impact.',
      details: ['Quality review', 'Client feedback', 'Revisions', 'Final approval']
    },
    {
      icon: BarChart,
      title: 'Measure',
      description: 'We track performance and provide insights to drive continuous improvement.',
      details: ['Performance tracking', 'Analytics reporting', 'Optimization recommendations', 'Ongoing support']
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180
    },
    visible: { 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }
    }
  };

  return (
    <section id="process" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            Our <span className="text-brand-orange">Process</span>
          </h2>
          <p className="text-xl text-brand-slate max-w-2xl mx-auto">
            A proven methodology that ensures every project delivers exceptional results.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <motion.div 
            className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-brand-orange/30"
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={stepVariants}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 lg:block hidden">
                  <motion.div 
                    className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm z-10 relative"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20, 
                      delay: index * 0.1 + 0.8 
                    }}
                  >
                    {index + 1}
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div 
                  className="bg-white rounded-xl p-6 shadow-lg h-full"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Icon */}
                  <motion.div 
                    className="w-16 h-16 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-6 mx-auto"
                    variants={iconVariants}
                    whileHover={{ 
                      backgroundColor: "rgba(248, 143, 36, 0.2)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <step.icon className="w-8 h-8 text-brand-orange" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-brand-charcoal mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-brand-slate mb-4 text-center">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <motion.li 
                        key={detail} 
                        className="flex items-center text-sm text-brand-slate"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1 + detailIndex * 0.1 + 0.5 
                        }}
                      >
                        <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.8 }}
        >
          <div className="bg-brand-teal rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our proven process can help bring your vision to life 
              and achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="btn-secondary border-white text-white hover:bg-white hover:text-brand-teal"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.button>
              <motion.button 
                className="bg-brand-orange hover:bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(248, 143, 36, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;

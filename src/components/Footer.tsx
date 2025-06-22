
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, once: true });

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Video Editing',
    'Graphic Design',
    'Social Media Management',
    'Content Writing',
    'Influencer Marketing'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-brand-charcoal text-white" ref={ref}>
      {/* Newsletter Section */}
      <motion.div 
        className="bg-brand-teal py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with Our Latest Work
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Get creative insights, industry trends, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white text-brand-charcoal"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-brand-orange hover:bg-orange-500 text-white px-8">
                  Subscribe
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Company Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">
                Creative<span className="text-brand-orange">Agency</span>
              </h3>
              <p className="text-white/80 mb-6">
                We're a creative agency passionate about helping brands tell their stories 
                through compelling video content, stunning design, and strategic social media.
              </p>
              <motion.div 
                className="flex space-x-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    variants={socialVariants}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "#F88F24",
                      transition: { duration: 0.3 }
                    }}
                    className="w-10 h-10 bg-brand-orange/20 rounded-lg flex items-center justify-center transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-white/80 transition-colors duration-300 relative"
                      whileHover={{ color: "#F88F24" }}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li 
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.7 }}
                  >
                    <span className="text-white/80">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                >
                  <MapPin className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" />
                  <span className="text-white/80">
                    123 Creative Street<br />
                    Design City, DC 12345
                  </span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: 1.0 }}
                >
                  <Phone className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" />
                  <span className="text-white/80">+1 (555) 123-4567</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: 1.1 }}
                >
                  <Mail className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" />
                  <span className="text-white/80">hello@creativeagency.com</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-white/10 py-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 1.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 Creative Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <motion.a 
                href="#" 
                className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                whileHover={{ color: "#F88F24" }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                whileHover={{ color: "#F88F24" }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                whileHover={{ color: "#F88F24" }}
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

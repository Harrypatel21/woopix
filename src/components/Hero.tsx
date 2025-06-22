
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  const headlineWords = ['Elevate', 'Your'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const wordVariants = {
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

  const subheadlineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.6 // 0.1s * 4 words + 0.2s extra
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.9
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(248, 143, 36, 0.3)",
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const trustIndicatorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 1.2
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-20 left-20 w-72 h-72 bg-brand-orange rounded-full blur-3xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-brand-orange rounded-full blur-3xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {headlineWords.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-4 md:mr-6"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              variants={wordVariants}
              className="text-gradient block mt-2"
            >
              Brand Impact
            </motion.span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
            variants={subheadlineVariants}
            initial="hidden"
            animate="visible"
          >
            Transform your vision into compelling video content, stunning designs, and engaging social media that drives real results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button className="btn-primary text-lg px-8 py-4">
                Get Your Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(248, 143, 36, 1)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="btn-secondary text-lg px-8 py-4">
                <Play className="mr-2" size={20} />
                Watch Our Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={trustIndicatorVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-white/70 mb-4">Trusted by 200+ brands worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="bg-white/20 px-6 py-2 rounded-lg">Brand 1</div>
              <div className="bg-white/20 px-6 py-2 rounded-lg">Brand 2</div>
              <div className="bg-white/20 px-6 py-2 rounded-lg">Brand 3</div>
              <div className="bg-white/20 px-6 py-2 rounded-lg">Brand 4</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

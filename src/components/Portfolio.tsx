import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, once: true });

  const projects = [
    {
      id: 1,
      title: 'Tech Startup Campaign',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      description: 'Complete video marketing campaign that increased user engagement by 300%',
      client: 'TechFlow Inc.',
      result: '+300% Engagement'
    },
    {
      id: 2,
      title: 'Fashion Brand Identity',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      description: 'Modern brand identity design for luxury fashion retailer',
      client: 'Luxe Fashion',
      result: '+150% Brand Recognition'
    },
    {
      id: 3,
      title: 'Social Media Revolution',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop',
      description: 'Social media strategy that built a community of 100K+ followers',
      client: 'Urban Lifestyle',
      result: '100K+ Followers'
    },
    {
      id: 4,
      title: 'E-commerce Growth',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
      description: 'Product video series that boosted sales by 250%',
      client: 'EcoStore',
      result: '+250% Sales'
    },
    {
      id: 5,
      title: 'Corporate Rebranding',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
      description: 'Complete corporate identity overhaul for fintech company',
      client: 'FinanceForward',
      result: '+200% Lead Generation'
    },
    {
      id: 6,
      title: 'Influencer Campaign',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      description: 'Multi-platform influencer campaign reaching 2M+ people',
      client: 'HealthFirst',
      result: '2M+ Reach'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechFlow Inc.',
      text: 'The video campaign exceeded all our expectations. The creative team truly understood our vision.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Luxe Fashion',
      text: 'Outstanding design work that perfectly captured our brand essence. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Urban Lifestyle',
      text: 'Their social media strategy transformed our online presence. Amazing results!',
      rating: 5
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'video', name: 'Video' },
    { id: 'design', name: 'Design' },
    { id: 'social', name: 'Social Media' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
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

  const testimonialVariants = {
    hidden: { 
      opacity: 0, 
      x: 30 
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

  return (
    <section id="portfolio" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            Our <span className="text-brand-orange">Portfolio</span>
          </h2>
          <p className="text-xl text-brand-slate max-w-2xl mx-auto mb-8">
            Discover how we've helped brands tell their stories and achieve remarkable results.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-brand-orange text-white'
                    : 'bg-gray-100 text-brand-slate hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-brand-teal/80 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-center text-white"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Play className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-semibold">View Project</p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-charcoal mb-2">
                  {project.title}
                </h3>
                <p className="text-brand-slate mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-brand-slate">{project.client}</span>
                  <span className="text-sm font-semibold text-brand-orange">{project.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-brand-charcoal text-center mb-12">
            What Our Clients Say
          </h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={testimonialVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-brand-orange text-xl">★</span>
                  ))}
                </div>
                <p className="text-brand-slate mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-brand-charcoal">{testimonial.name}</p>
                  <p className="text-sm text-brand-slate">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

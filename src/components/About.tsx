
import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const stats = [
    { number: '200+', label: 'Happy Clients', icon: Users },
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '98%', label: 'Client Satisfaction', icon: Target },
    { number: '5+', label: 'Years Experience', icon: Heart }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We stay ahead of trends and embrace cutting-edge technologies to deliver exceptional results.'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients, treating every project as a true partnership.'
    },
    {
      title: 'Excellence',
      description: 'We are committed to delivering work that exceeds expectations and drives real results.'
    },
    {
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and consistent communication.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-brand-teal">
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              We're More Than Just a
              <span className="text-brand-orange block">Creative Agency</span>
            </h2>
            <p className="text-xl text-white/90 mb-6">
              We're your strategic partners in building brands that matter. With a passion for 
              storytelling and a data-driven approach, we help businesses connect with their 
              audience in meaningful ways.
            </p>
            <p className="text-lg text-white/80 mb-8">
              Founded on the belief that great creative work should drive real business results, 
              we combine artistic vision with strategic thinking to deliver campaigns that not 
              only look amazing but perform exceptionally.
            </p>
            <Button className="btn-secondary border-white text-white hover:bg-white hover:text-brand-teal">
              Learn More About Us
            </Button>
          </div>

          {/* Right Image */}
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Our Team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-orange rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">5+</div>
                  <div className="text-white/90 text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-brand-orange" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center animate-fade-in"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <h4 className="text-xl font-bold text-brand-orange mb-4">
                  {value.title}
                </h4>
                <p className="text-white/80">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import React from 'react';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '1,999',
      period: 'per project',
      description: 'Perfect for small businesses and startups looking to establish their brand presence.',
      features: [
        'Brand strategy consultation',
        'Logo design + 2 revisions',
        'Basic social media templates',
        'Email support',
        '2-week delivery'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '4,999',
      period: 'per month',
      description: 'Ideal for growing businesses that need consistent, high-quality creative content.',
      features: [
        'Everything in Starter',
        'Monthly video content (2-3 videos)',
        'Social media management',
        'Content calendar',
        'Analytics reporting',
        'Priority support',
        '1-week delivery'
      ],
      cta: 'Most Popular',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Comprehensive creative partnership for established brands with complex needs.',
      features: [
        'Everything in Professional',
        'Unlimited revisions',
        'Dedicated account manager',
        'Multi-platform campaigns',
        'Advanced analytics',
        '24/7 support',
        'Same-day delivery'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const addOns = [
    { name: 'Rush Delivery (48h)', price: '$500' },
    { name: 'Additional Revisions', price: '$200' },
    { name: 'Extra Video Content', price: '$1,200' },
    { name: 'Influencer Collaboration', price: '$800' }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            Simple, Transparent <span className="text-brand-orange">Pricing</span>
          </h2>
          <p className="text-xl text-brand-slate max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include our signature quality and dedicated support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 shadow-lg transition-all duration-300 hover:transform hover:scale-105 animate-fade-in ${
                plan.popular
                  ? 'bg-brand-teal text-white border-2 border-brand-orange'
                  : 'bg-white border border-gray-200'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-brand-orange text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-brand-charcoal'}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-brand-orange' : 'text-brand-charcoal'}`}>
                    ${plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-white/80' : 'text-brand-slate'}`}>
                    /{plan.period}
                  </span>
                </div>
                <p className={`${plan.popular ? 'text-white/90' : 'text-brand-slate'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-brand-orange' : 'text-brand-orange'
                    }`} />
                    <span className={`${plan.popular ? 'text-white' : 'text-brand-slate'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button className={`w-full ${
                plan.popular
                  ? 'bg-brand-orange hover:bg-orange-500 text-white'
                  : 'btn-primary'
              }`}>
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-brand-charcoal text-center mb-8">
            Popular Add-ons
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={addon.name}
                className="bg-white rounded-lg p-6 text-center shadow-md animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <h4 className="font-semibold text-brand-charcoal mb-2">{addon.name}</h4>
                <p className="text-2xl font-bold text-brand-orange">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-brand-charcoal mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-brand-slate mb-8 max-w-2xl mx-auto">
            We understand that every business is unique. Let's discuss your specific needs 
            and create a custom package that fits your goals and budget.
          </p>
          <Button className="btn-secondary">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

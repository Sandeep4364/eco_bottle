import React from 'react';
import { Snowflake, Leaf, Bell, Sparkles } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Snowflake,
      title: "24-Hour Cold Water",
      description: "Advanced double-wall vacuum insulation keeps your drinks ice-cold for up to 24 hours, even in hot weather.",
      color: "blue"
    },
    {
      icon: Leaf,
      title: "100% Eco-Friendly",
      description: "Made from recycled stainless steel and biodegradable materials. Every purchase plants a tree.",
      color: "green"
    },
    {
      icon: Bell,
      title: "Smart Hydration Reminder",
      description: "Built-in LED indicator gently reminds you to stay hydrated throughout the day with customizable intervals.",
      color: "purple"
    },
    {
      icon: Sparkles,
      title: "Sleek Modern Design",
      description: "Minimalist aesthetic meets functionality. Available in 5 stunning colors to match your lifestyle.",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-500',
          text: 'text-blue-600',
          border: 'border-blue-200',
          hover: 'hover:border-blue-300'
        };
      case 'green':
        return {
          bg: 'bg-green-500',
          text: 'text-green-600',
          border: 'border-green-200',
          hover: 'hover:border-green-300'
        };
      case 'purple':
        return {
          bg: 'bg-purple-500',
          text: 'text-purple-600',
          border: 'border-purple-200',
          hover: 'hover:border-purple-300'
        };
      case 'orange':
        return {
          bg: 'bg-orange-500',
          text: 'text-orange-600',
          border: 'border-orange-200',
          hover: 'hover:border-orange-300'
        };
      default:
        return {
          bg: 'bg-gray-500',
          text: 'text-gray-600',
          border: 'border-gray-200',
          hover: 'hover:border-gray-300'
        };
    }
  };

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            Why Choose EcoBottle?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premium Features for a{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Better Tomorrow
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every detail of EcoBottle has been carefully crafted to provide the ultimate hydration experience 
            while caring for our planet.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className={`group bg-white p-8 rounded-2xl shadow-lg border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105`}
              >
                <div className={`${colors.bg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className={`text-xl font-bold ${colors.text} mb-4 group-hover:text-gray-900 transition-colors duration-300`}>
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                50K+
              </div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                1M+
              </div>
              <div className="text-gray-600 font-medium">Trees Planted</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                99%
              </div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
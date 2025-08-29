import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBuyNow = () => {
    if (user) {
      navigate('/products');
    } else {
      navigate('/login');
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-green-100"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Now Available - Limited Edition
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                EcoBottle
              </span>
              <br />
              Stay Hydrated,{' '}
              <span className="text-green-600">Stay Sustainable</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The world's most advanced eco-friendly water bottle. Keeps your drinks cold for 24 hours 
              while protecting our planet with 100% sustainable materials.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleBuyNow}
                className="group bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center"
              >
                {user ? 'Shop Now' : 'Buy Now - $49.99'}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button
                onClick={scrollToFeatures}
                className="group bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 border-2 border-gray-200 hover:border-green-300 transition-all duration-300 flex items-center justify-center"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                Learn More
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">24hrs</div>
                <div className="text-sm text-gray-600">Cold Water</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Eco-Friendly</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">Smart</div>
                <div className="text-sm text-gray-600">Reminders</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Product Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="EcoBottle - Premium Eco-Friendly Water Bottle"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl transform hover:rotate-3 transition-transform duration-500"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
              BPA Free
            </div>
            <div className="absolute -bottom-4 -left-8 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              Recyclable
            </div>
            
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-200 to-blue-200 rounded-full opacity-20 -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
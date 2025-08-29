import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Best bottle I've ever used! Keeps my water ice-cold during intense workouts and the smart reminder feature keeps me perfectly hydrated.",
      highlight: "Perfect for workouts"
    },
    {
      name: "Michael Chen",
      role: "Environmental Scientist",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Stylish, durable, and truly eco-friendly. Finally found a bottle that aligns with my values while delivering exceptional performance.",
      highlight: "Eco-conscious choice"
    },
    {
      name: "Emma Rodriguez",
      role: "Busy Professional",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "The design is absolutely stunning and it fits perfectly in my lifestyle. Love how it reminds me to drink water during busy days at work.",
      highlight: "Sleek & functional"
    },
    {
      name: "David Kim",
      role: "Outdoor Explorer",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Took this on a 3-day hiking trip and it exceeded all expectations. Durable construction and the temperature retention is incredible.",
      highlight: "Adventure-ready"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Customer Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Loved by{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Thousands
            </span>{' '}
            Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See what our customers have to say about their EcoBottle experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-green-500 opacity-50" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Highlight Badge */}
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {testimonial.highlight}
                </span>
              </div>

              {/* Customer Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9/5.0</div>
              <div className="text-green-100">Average Rating</div>
              <div className="flex justify-center mt-2">
                {renderStars(5)}
              </div>
            </div>
            
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50,000+</div>
              <div className="text-blue-100">Happy Customers</div>
              <div className="text-sm text-blue-100 mt-1">and counting...</div>
            </div>
            
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">30-Day</div>
              <div className="text-green-100">Money-Back Guarantee</div>
              <div className="text-sm text-green-100 mt-1">100% satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
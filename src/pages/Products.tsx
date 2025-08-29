import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Star, Filter, Grid, List } from 'lucide-react';
import { useCart, Product } from '../contexts/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Products: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');
  const [filterColor, setFilterColor] = useState('all');
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const products: Product[] = [
    {
      id: '1',
      name: 'EcoBottle Classic',
      price: 49.99,
      image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The original EcoBottle with 24-hour insulation and smart hydration reminders.',
      features: ['24-hour cold retention', 'Smart LED reminder', 'BPA-free materials', '500ml capacity'],
      color: 'Ocean Blue'
    },
    {
      id: '2',
      name: 'EcoBottle Pro',
      price: 69.99,
      image: 'https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium version with advanced temperature control and mobile app integration.',
      features: ['36-hour temperature retention', 'Mobile app sync', 'Premium steel finish', '750ml capacity'],
      color: 'Forest Green'
    },
    {
      id: '3',
      name: 'EcoBottle Mini',
      price: 34.99,
      image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Compact size perfect for kids and short trips while maintaining all core features.',
      features: ['18-hour cold retention', 'Kid-friendly design', 'Leak-proof cap', '350ml capacity'],
      color: 'Sunset Orange'
    },
    {
      id: '4',
      name: 'EcoBottle Sport',
      price: 59.99,
      image: 'https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Designed for athletes with enhanced grip and rapid-flow technology.',
      features: ['24-hour cold retention', 'Anti-slip grip', 'Quick-flow spout', '600ml capacity'],
      color: 'Midnight Black'
    },
    {
      id: '5',
      name: 'EcoBottle Luxury',
      price: 89.99,
      image: 'https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium luxury edition with gold accents and personalization options.',
      features: ['48-hour temperature retention', 'Gold-plated accents', 'Custom engraving', '500ml capacity'],
      color: 'Rose Gold'
    },
    {
      id: '6',
      name: 'EcoBottle Travel',
      price: 54.99,
      image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Perfect travel companion with collapsible design and TSA-friendly features.',
      features: ['Collapsible design', 'TSA approved', '20-hour insulation', '400ml capacity'],
      color: 'Arctic White'
    }
  ];

  const filteredProducts = products
    .filter(product => filterColor === 'all' || product.color.toLowerCase().includes(filterColor))
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    // Show a brief success message or animation here
  };

  const handleBuyNow = (product: Product) => {
    addToCart(product);
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Product Collection
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Discover the perfect EcoBottle for your lifestyle. Each bottle is crafted with 
              sustainable materials and cutting-edge technology.
            </p>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <select
                  value={filterColor}
                  onChange={(e) => setFilterColor(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="all">All Colors</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="orange">Orange</option>
                  <option value="black">Black</option>
                  <option value="gold">Gold</option>
                  <option value="white">White</option>
                </select>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-8 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                <div className={`${viewMode === 'list' ? 'w-1/3' : 'w-full'}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                      viewMode === 'list' ? 'h-full' : 'h-64'
                    }`}
                  />
                </div>
                
                <div className={`p-6 ${viewMode === 'list' ? 'w-2/3 flex flex-col justify-between' : ''}`}>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                        {product.name}
                      </h3>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="mb-4">
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
                        {product.color}
                      </span>
                    </div>
                    
                    <ul className="space-y-1 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </button>
                      
                      <button
                        onClick={() => handleBuyNow(product)}
                        className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;
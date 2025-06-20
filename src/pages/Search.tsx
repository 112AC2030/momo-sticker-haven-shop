
import React, { useState, useMemo } from 'react';
import { Search as SearchIcon, Filter, X } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import { products, categories } from '../data/mockData';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10 });
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, priceRange]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setPriceRange({ min: 0, max: 10 });
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-display font-bold text-gray-800 mb-4">
            Find Your Perfect Stickers 🔍
          </h1>
          <p className="text-gray-600 text-lg">
            Search through our collection of adorable digital stickers
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for kawaii cats, dreamy clouds, sweet treats..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-peach-400 focus:border-transparent text-lg"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg"
            >
              <Filter size={20} />
              <span>Filters</span>
            </button>

            {/* Filters Container */}
            <div className={`lg:flex lg:flex-wrap gap-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              {/* Category Filter */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg mb-4 lg:mb-0">
                <h3 className="font-semibold text-gray-800 mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-peach-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg mb-4 lg:mb-0">
                <h3 className="font-semibold text-gray-800 mb-3">Price Range</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <label className="text-sm text-gray-600">Min: ${priceRange.min}</label>
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.50"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange(prev => ({ ...prev, min: parseFloat(e.target.value) }))}
                        className="w-full"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm text-gray-600">Max: ${priceRange.max}</label>
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.50"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange(prev => ({ ...prev, max: parseFloat(e.target.value) }))}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="text-center text-sm text-gray-600">
                    ${priceRange.min} - ${priceRange.max}
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              {(searchTerm || selectedCategory !== 'All' || priceRange.min > 0 || priceRange.max < 10) && (
                <button
                  onClick={clearFilters}
                  className="flex items-center space-x-2 bg-blush-100 text-blush-700 px-4 py-2 rounded-xl hover:bg-blush-200 transition-colors"
                >
                  <X size={16} />
                  <span>Clear Filters</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 sm:mb-0">
              {filteredProducts.length === 0 
                ? 'No stickers found' 
                : `${filteredProducts.length} sticker${filteredProducts.length !== 1 ? 's' : ''} found`
              }
            </h2>
            {searchTerm && (
              <div className="text-gray-600">
                Showing results for "<span className="font-medium text-peach-600">{searchTerm}</span>"
              </div>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid products={filteredProducts} />

        {/* Popular Searches */}
        {!searchTerm && (
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-display font-bold text-gray-800 mb-6">
              ✨ Popular Searches
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['kawaii', 'cats', 'flowers', 'sweet', 'dreamy', 'magical', 'ocean', 'coffee'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchTerm(tag)}
                  className="bg-gradient-to-r from-peach-100 to-blush-100 text-peach-700 px-4 py-2 rounded-full hover:from-peach-200 hover:to-blush-200 transition-colors"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

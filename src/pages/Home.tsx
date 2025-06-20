
import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { products, shopInfo } from '../data/mockData';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pastel-bg py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="text-8xl mb-4 animate-bounce-gentle">{shopInfo.logo}</div>
            <h1 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-6">
              {shopInfo.name}
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              {shopInfo.bio}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/search" 
              className="cute-button text-lg px-8 py-4"
            >
              Shop Now ✨
            </Link>
            <div className="text-sm text-gray-600">
              Over 100+ adorable stickers available!
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-800 mb-4">
              ✨ Featured Stickers ✨
            </h2>
            <p className="text-gray-600 text-lg">
              Our most beloved sticker collections that will make you smile!
            </p>
          </div>
          
          <ProductGrid products={featuredProducts} />
          
          <div className="text-center mt-12">
            <Link 
              to="/search" 
              className="inline-block bg-gradient-to-r from-blush-400 to-blush-500 text-white font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              View All Stickers 🌈
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-gray-800 mb-6">
              About {shopInfo.owner} 💕
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <div className="text-6xl mb-4">🎨</div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hello lovely humans! I'm {shopInfo.owner}, the creator behind this magical sticker wonderland. 
                I believe that every message deserves a sprinkle of cuteness, and that's why I pour my heart 
                into designing these adorable digital stickers. Each sticker is crafted with love, giggles, 
                and a whole lot of kawaii magic! ✨
              </p>
              <p className="text-gray-600">
                Thank you for supporting small creative businesses and spreading joy, one sticker at a time! 🌟
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-peach-100 to-blush-100 py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-gray-800 mb-4">
              Join the Cuteness Club! 🎉
            </h2>
            <p className="text-gray-600 mb-8">
              Get notified when new adorable stickers arrive and receive exclusive kawaii content!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your-email@cute.com"
                className="flex-1 px-4 py-3 rounded-full border border-peach-200 focus:outline-none focus:ring-2 focus:ring-peach-400"
              />
              <button className="cute-button whitespace-nowrap">
                Subscribe 💌
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react';
import { products } from '../data/mockData';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../hooks/use-toast';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😢</div>
          <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">
            Oops! Sticker not found
          </h2>
          <button
            onClick={() => navigate('/')}
            className="cute-button"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart! 🎉",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const relatedProducts = products.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-peach-600 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-6">
            <div className="sticker-card overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-cream-200 text-cream-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {product.category}
              </span>
              <h1 className="text-4xl font-display font-bold text-gray-800 mb-4">
                {product.name}
              </h1>
              <div className="text-3xl font-bold text-peach-600 mb-6">
                ${product.price}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blush-100 text-blush-700 px-3 py-2 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={handleAddToCart}
                className="cute-button flex items-center justify-center space-x-2 flex-1"
              >
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </button>
              <button className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-blush-300 text-blush-600 rounded-full hover:bg-blush-50 transition-colors">
                <Heart size={20} />
                <span>Wishlist</span>
              </button>
            </div>

            <div className="bg-gradient-to-r from-peach-50 to-blush-50 rounded-2xl p-6 mt-8">
              <h3 className="font-semibold text-gray-800 mb-2">✨ What you'll get:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• High-quality digital stickers</li>
                <li>• Multiple formats (PNG, WebP)</li>
                <li>• Instant download</li>
                <li>• Personal and commercial use</li>
                <li>• Lifetime access</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-display font-bold text-center text-gray-800 mb-12">
              You might also love 💕
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="sticker-card overflow-hidden">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full aspect-square object-cover cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => navigate(`/product/${relatedProduct.id}`)}
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{relatedProduct.name}</h3>
                    <div className="text-xl font-bold text-peach-600">${relatedProduct.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;

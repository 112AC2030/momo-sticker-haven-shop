
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "Added to cart! 🎉",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="sticker-card overflow-hidden group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="font-display font-semibold text-lg text-gray-800 mb-2 group-hover:text-peach-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold text-peach-600">
              ${product.price}
            </span>
            <span className="text-xs bg-cream-200 text-cream-800 px-2 py-1 rounded-full">
              {product.category}
            </span>
          </div>
          <div className="mb-3 flex flex-wrap gap-1">
            {product.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-blush-100 text-blush-700 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <button
          onClick={handleAddToCart}
          className="w-full cute-button text-sm py-2 flex items-center justify-center space-x-2"
        >
          <ShoppingCart size={16} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

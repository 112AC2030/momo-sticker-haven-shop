
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="block group">
      <div className="sticker-card overflow-hidden">
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
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-peach-600">
              ${product.price}
            </span>
            <span className="text-xs bg-cream-200 text-cream-800 px-2 py-1 rounded-full">
              {product.category}
            </span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
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
      </div>
    </Link>
  );
};

export default ProductCard;

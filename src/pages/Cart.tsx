
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!user) {
      navigate('/login?redirect=cart');
      return;
    }
    
    // Mock checkout process
    alert(`Checkout complete! Total: $${getTotalPrice().toFixed(2)} 🎉\n\nThank you for your purchase! Your stickers will be available for download in your account.`);
    clearCart();
    navigate('/');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="text-8xl mb-6">🛒</div>
            <h1 className="text-4xl font-display font-bold text-gray-800 mb-4">
              Your cart is empty
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Time to fill it with some adorable stickers! ✨
            </p>
            <Link to="/" className="cute-button">
              Start Shopping 🌈
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold text-gray-800 mb-2">
            Shopping Cart 🛍️
          </h1>
          <p className="text-gray-600">
            {cart.length} item{cart.length !== 1 ? 's' : ''} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.product.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex flex-col sm:flex-row gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full sm:w-24 h-24 object-cover rounded-xl"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg text-gray-800 mb-2">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {item.product.description}
                    </p>
                    <div className="text-xl font-bold text-peach-600">
                      ${item.product.price}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end justify-between">
                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3 mb-4">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-semibold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-500 hover:text-red-700 transition-colors flex items-center space-x-1"
                    >
                      <Trash2 size={16} />
                      <span className="text-sm">Remove</span>
                    </button>
                  </div>
                </div>

                {/* Item Total */}
                <div className="mt-4 pt-4 border-t border-gray-200 text-right">
                  <span className="text-lg font-semibold text-gray-800">
                    Subtotal: ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg sticky top-24">
              <h2 className="text-xl font-display font-bold text-gray-800 mb-6">
                Order Summary ✨
              </h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Digital Delivery</span>
                  <span className="text-green-600 font-medium">FREE</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-800">
                    <span>Total</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {!user && (
                <div className="mb-4 p-4 bg-blush-50 rounded-xl">
                  <p className="text-sm text-blush-700 text-center">
                    Please login to proceed with checkout
                  </p>
                </div>
              )}

              <button
                onClick={handleCheckout}
                className="w-full cute-button flex items-center justify-center space-x-2"
              >
                <ShoppingBag size={20} />
                <span>{user ? 'Checkout' : 'Login to Checkout'}</span>
              </button>

              <div className="mt-6 text-center">
                <Link 
                  to="/" 
                  className="text-peach-600 hover:text-peach-700 transition-colors"
                >
                  ← Continue Shopping
                </Link>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-peach-50 to-blush-50 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-2">🎁 What's included:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Instant download</li>
                  <li>• High-res files</li>
                  <li>• Multiple formats</li>
                  <li>• Lifetime access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

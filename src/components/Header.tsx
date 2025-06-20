
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { shopInfo } from '../data/mockData';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const { getItemCount } = useCart();
  const location = useLocation();
  const itemCount = getItemCount();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Search', path: '/search' },
    { name: 'Cart', path: '/cart' }
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-peach-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <span className="text-4xl">{shopInfo.logo}</span>
            <div>
              <h1 className="text-2xl font-display font-bold gradient-text">
                {shopInfo.name}
              </h1>
              <p className="text-sm text-peach-600">Cute Digital Stickers</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-peach-600 border-b-2 border-peach-400'
                    : 'text-gray-700 hover:text-peach-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon (Mobile) */}
            <Link to="/search" className="md:hidden text-gray-700 hover:text-peach-600">
              <Search size={24} />
            </Link>

            {/* Cart */}
            <Link 
              to="/cart" 
              className="relative text-gray-700 hover:text-peach-600 transition-colors"
            >
              <ShoppingCart size={24} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blush-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* User Actions */}
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{user.avatar}</span>
                  <span className="hidden sm:block font-medium text-gray-700">{user.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="text-gray-500 hover:text-red-500 transition-colors"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-2 text-gray-700 hover:text-peach-600 transition-colors"
              >
                <User size={24} />
                <span className="hidden sm:block">Login</span>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden mt-4 flex justify-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-medium transition-colors ${
                location.pathname === item.path
                  ? 'text-peach-600 border-b-2 border-peach-400 pb-1'
                  : 'text-gray-700 hover:text-peach-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

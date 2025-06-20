
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { User, Lock, LogIn } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/use-toast';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    id: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  
  const redirectPath = searchParams.get('redirect') || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login delay
    setTimeout(() => {
      const success = login(formData.id, formData.password);
      
      if (success) {
        toast({
          title: "Welcome back! 🎉",
          description: "You have been successfully logged in.",
        });
        navigate(redirectPath === 'cart' ? '/cart' : '/');
      } else {
        toast({
          title: "Login failed 😔",
          description: "Invalid credentials. Try: ID: guest, Password: guest",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const fillGuestCredentials = () => {
    setFormData({
      id: 'guest',
      password: 'guest'
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🔐</div>
          <h1 className="text-3xl font-display font-bold text-gray-800 mb-2">
            Welcome Back!
          </h1>
          <p className="text-gray-600">
            Login to access your sticker collection and checkout
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                User ID
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peach-400 focus:border-transparent"
                  placeholder="Enter your ID"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peach-400 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full cute-button flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <LogIn size={20} />
              <span>{isLoading ? 'Logging in...' : 'Login'}</span>
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-gradient-to-r from-cream-50 to-peach-50 rounded-xl">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">
              🎮 Demo Credentials:
            </h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>ID:</strong> guest</p>
              <p><strong>Password:</strong> guest</p>
            </div>
            <button
              type="button"
              onClick={fillGuestCredentials}
              className="mt-3 w-full bg-white border border-peach-200 text-peach-600 py-2 px-4 rounded-lg hover:bg-peach-50 transition-colors text-sm"
            >
              Use Demo Credentials
            </button>
          </div>

          {/* Back to Shop */}
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-peach-600 hover:text-peach-700 transition-colors"
            >
              ← Back to Shop
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 bg-white/50 backdrop-blur-sm rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            ✨ Member Benefits
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center space-x-3">
              <span className="text-green-500">✓</span>
              <span>Secure checkout process</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-500">✓</span>
              <span>Download history access</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-500">✓</span>
              <span>Exclusive member stickers</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-500">✓</span>
              <span>Wishlist and favorites</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;

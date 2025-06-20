
import { Product, Shop } from '../types';

export const shopInfo: Shop = {
  name: "Momo's Sticker Shop",
  logo: "🍑",
  bio: "Welcome to Momo's magical world of adorable stickers! ✨ We create the cutest digital stickers that will make your messages sparkle with joy. From kawaii animals to dreamy clouds, every sticker is designed with love and sprinkled with happiness! 🌈💕",
  owner: "Momo"
};

export const products: Product[] = [
  {
    id: "1",
    name: "Kawaii Cat Collection",
    description: "Adorable collection of 12 kawaii cat stickers with different expressions. Perfect for showing your mood! Each cat has its own personality and cute accessories. 🐱✨",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop&crop=face",
    category: "Animals",
    tags: ["kawaii", "cats", "cute", "emotions", "collection"]
  },
  {
    id: "2",
    name: "Dreamy Cloud Pack",
    description: "Fluffy cloud stickers in pastel colors. Includes rainbows, stars, and sleepy clouds. Perfect for creating dreamy atmospheres! 🌙☁️",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop",
    category: "Nature",
    tags: ["clouds", "dreamy", "pastel", "sky", "peaceful"]
  },
  {
    id: "3",
    name: "Floral Bliss Set",
    description: "Beautiful watercolor flower stickers in soft peach and pink tones. Includes roses, daisies, and cherry blossoms. Add elegance to your messages! 🌸🌺",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
    category: "Flowers",
    tags: ["flowers", "watercolor", "elegant", "spring", "botanical"]
  },
  {
    id: "4",
    name: "Sweet Treats Bundle",
    description: "Delicious collection of dessert stickers! Cupcakes, donuts, ice cream, and candy in kawaii style. Perfect for foodies! 🧁🍭",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
    category: "Food",
    tags: ["desserts", "sweet", "kawaii", "food", "treats"]
  },
  {
    id: "5",
    name: "Magical Unicorn Set",
    description: "Enchanting unicorn stickers with rainbow manes and sparkles. Includes baby unicorns and magical accessories. Spread the magic! 🦄✨",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop&crop=center",
    category: "Fantasy",
    tags: ["unicorn", "magical", "rainbow", "fantasy", "sparkles"]
  },
  {
    id: "6",
    name: "Ocean Friends Pack",
    description: "Cute sea creatures including dolphins, whales, starfish, and jellyfish. All in soft blue and turquoise tones. Dive into cuteness! 🐋🌊",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop&crop=top",
    category: "Animals",
    tags: ["ocean", "sea", "marine", "cute", "blue"]
  },
  {
    id: "7",
    name: "Cozy Coffee Collection",
    description: "Perfect for coffee lovers! Includes cute coffee cups, beans, and cozy café scenes. Start your day with cuteness! ☕💕",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&crop=left",
    category: "Food",
    tags: ["coffee", "cozy", "morning", "café", "warm"]
  },
  {
    id: "8",
    name: "Space Adventure Set",
    description: "Explore the cosmos with adorable space stickers! Rockets, planets, astronaut animals, and twinkling stars. Blast off to fun! 🚀🌟",
    price: 5.49,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop&crop=bottom",
    category: "Fantasy",
    tags: ["space", "adventure", "planets", "stars", "cosmic"]
  }
];

export const categories = ["All", "Animals", "Nature", "Flowers", "Food", "Fantasy"];

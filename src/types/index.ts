
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  isLoggedIn: boolean;
}

export interface Shop {
  name: string;
  logo: string;
  bio: string;
  owner: string;
}

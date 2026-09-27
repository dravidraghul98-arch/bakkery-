export type CategoryType = 'all' | 'bread' | 'cakes' | 'specialty' | 'pastry' | 'cookies' | 'savory';

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryType;
  price: number;
  priceDisplay: string;
  description: string;
  isEggless: boolean;
  isBestseller?: boolean;
  rating: number;
  reviewsCount: number;
  image: string;
  weightOptions?: string[];
}

export interface CartItem {
  product: MenuItem;
  quantity: number;
  selectedWeight?: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
  verified: boolean;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  likes: string;
  comments: string;
  caption: string;
  tag: string;
}

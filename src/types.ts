export type CategoryType =
  | 'all'
  | 'fresh-cream'
  | 'choco-treats'
  | 'fresh-cream-premium'
  | 'mousse'
  | 'special-gateaux'
  | 'fusion-special'
  | 'cheesecake'
  | 'special-flavours';

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryType;
  price: number;
  priceHalfKg: number;
  priceOneKg: number;
  priceDisplay: string;
  description: string;
  isEggless: boolean;
  isBestseller?: boolean;
  requiresAdvanceOrder?: boolean;
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

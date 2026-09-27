import type { MenuItem, Review, InstagramPost } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Royal Blue Tiered Wedding Gateau',
    category: 'specialty',
    price: 3200,
    priceDisplay: 'From ₹3,200',
    description: '4-tier luxury custom wedding cake with white buttercream lace & handcrafted royal blue edible roses.',
    isEggless: true,
    isBestseller: true,
    rating: 5.0,
    reviewsCount: 128,
    image: '/images/wedding_cake.png',
    weightOptions: ['2 kg', '3 kg', '5 kg', '10 kg Tier']
  },
  {
    id: '2',
    name: 'Sapphire Blueberry Chantilly Cake',
    category: 'cakes',
    price: 450,
    priceDisplay: '₹450 / 500g',
    description: 'Fresh Chennai blueberries layered with light white chantilly cream & moist velvet sponge.',
    isEggless: true,
    isBestseller: true,
    rating: 4.9,
    reviewsCount: 94,
    image: '/images/berry_gateau.png',
    weightOptions: ['500g', '1 kg', '2 kg']
  },
  {
    id: '3',
    name: 'Royal Blue & White Macaron Tower',
    category: 'pastry',
    price: 850,
    priceDisplay: '₹850 (12 Pcs)',
    description: 'Authentic French macarons in royal blue, ice blue & vanilla white with white chocolate ganache.',
    isEggless: true,
    isBestseller: true,
    rating: 4.8,
    reviewsCount: 76,
    image: '/images/macarons.png',
    weightOptions: ['6 Pcs Box', '12 Pcs Tower', '24 Pcs Party Box']
  },
  {
    id: '4',
    name: 'Artisan Roasted Pista Butter Cookies',
    category: 'cookies',
    price: 220,
    priceDisplay: '₹220 (250g)',
    description: 'Slow-baked rich butter cookies loaded with roasted Iranian pistachios & white chocolate drizzle.',
    isEggless: true,
    isBestseller: false,
    rating: 4.7,
    reviewsCount: 52,
    image: '/images/pista_cookies.png',
    weightOptions: ['250g Box', '500g Tin', '1 kg Gift Box']
  },
  {
    id: '5',
    name: 'Gourmet Mozzarella & Pesto Panini',
    category: 'savory',
    price: 180,
    priceDisplay: '₹180',
    description: 'Artisan grilled sourdough packed with garden-fresh veggies, melted mozzarella & basil pesto.',
    isEggless: true,
    isBestseller: true,
    rating: 4.9,
    reviewsCount: 110,
    image: '/images/veggie_panini.png',
  },
  {
    id: '6',
    name: 'Elite Blue Crown Celebration Cake',
    category: 'cakes',
    price: 1200,
    priceDisplay: 'From ₹1,200',
    description: 'Exquisite white chocolate crown cake with royal blue glaze & edible silver pearls.',
    isEggless: true,
    isBestseller: true,
    rating: 5.0,
    reviewsCount: 88,
    image: '/images/hero.png',
    weightOptions: ['1 kg', '2 kg', '3 kg']
  },
  {
    id: '7',
    name: 'Artisan Sourdough Loaf (Ice Blue Flour)',
    category: 'bread',
    price: 140,
    priceDisplay: '₹140',
    description: 'Naturally fermented 36-hour sourdough with crispy crust & fluffy white crumb.',
    isEggless: true,
    isBestseller: false,
    rating: 4.8,
    reviewsCount: 41,
    image: '/images/hero.png',
  },
  {
    id: '8',
    name: 'Navy Chocolate Dipped Cannoli',
    category: 'pastry',
    price: 240,
    priceDisplay: '₹240 (3 Pcs)',
    description: 'Crispy Sicilian pastry shell filled with sweet ricotta cream & dipped in dark navy chocolate.',
    isEggless: false,
    isBestseller: false,
    rating: 4.9,
    reviewsCount: 65,
    image: '/images/hero.png',
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Arjun Ramachandran',
    location: 'Ekkaduthangal, Chennai',
    rating: 5,
    date: '2 days ago',
    comment: 'Bakkings Elite crafted an absolute showstopper 3-tier blue and white cake for my daughter\'s 1st birthday! Not only was the visual design stunning, but the blueberry chantilly flavor was divine.',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
    verified: true
  },
  {
    id: '2',
    author: 'Priya Lakshmi',
    location: 'Guindy, Chennai',
    rating: 5,
    date: '1 week ago',
    comment: 'Ordered via Instagram DM (@bakkingselite) and received quick responses! The Fresh Veggie Panini and Pista Cookies are my go-to evening snack. The blue-and-white store vibe is so luxurious!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    verified: true
  },
  {
    id: '3',
    author: 'Dr. Suresh Kumar',
    location: 'Velachery, Chennai',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Hands down the best custom cake studio in Chennai. We got a 4-tier wedding cake with royal blue sugar lace. Every guest was mesmerized. 100% recommended!',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=150',
    verified: true
  },
  {
    id: '4',
    author: 'Kavitha Sundaram',
    location: 'T. Nagar, Chennai',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Eggless bakes here taste unbelievable! You cannot even tell it is eggless. Smooth ordering process on Swiggy and Instagram.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    verified: true
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: '1',
    imageUrl: '/images/wedding_cake.png',
    likes: '2.4k',
    comments: '184',
    caption: 'Royal blue sugar flowers on 4-tier pure white vanilla velvet. 💙 Head to DM to book your custom wedding cake!',
    tag: '#BakkingsElite'
  },
  {
    id: '2',
    imageUrl: '/images/berry_gateau.png',
    likes: '1.9k',
    comments: '92',
    caption: 'Fresh Chennai blueberries + Chantilly cream = Weekend perfection! 🫐 Available for instant Swiggy order.',
    tag: '#ChennaiBakery'
  },
  {
    id: '3',
    imageUrl: '/images/macarons.png',
    likes: '3.1k',
    comments: '240',
    caption: 'French macaron towers in sapphire & snow white. Order your party boxes directly via Instagram DM! 📲',
    tag: '#CustomCakesChennai'
  },
  {
    id: '4',
    imageUrl: '/images/pista_cookies.png',
    likes: '1.5k',
    comments: '75',
    caption: 'Slow-baked butter cookies with roasted pistachios & white chocolate. Perfect tea time treat! ☕🍪',
    tag: '#Ekkaduthangal'
  }
];

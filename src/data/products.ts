export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  badge?: string;
  description: string;
  weight: string;
}

export const CATEGORIES = [
{ id: 'all', label: 'All Snacks', emoji: '🛒' },
{ id: 'chips', label: 'Chips & Crisps', emoji: '🥔' },
{ id: 'drinks', label: 'Drinks', emoji: '🥤' },
{ id: 'kunafa', label: 'Kunafa & Sweets', emoji: '🍮' },
{ id: 'candy', label: 'Candy & Gummies', emoji: '🍬' },
{ id: 'cookies', label: 'Cookies & Biscuits', emoji: '🍪' },
{ id: 'jerky', label: 'Jerky & Meat', emoji: '🥩' },
{ id: 'popcorn', label: 'Popcorn', emoji: '🍿' }];


export const PRODUCTS: Product[] = [
{
  id: 1,
  name: 'Sea Salt Kettle Chips',
  brand: 'CrunchCo',
  price: 3.49,
  originalPrice: 4.29,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10a5ba293-1772728166720.png",
  category: 'chips',
  rating: 4.8,
  reviewCount: 342,
  badge: 'Best Seller',
  description: 'Thick-cut kettle chips with a satisfying crunch and light sea salt finish.',
  weight: '8 oz'
},
{
  id: 2,
  name: 'Mango Habanero Chips',
  brand: 'FlameBite',
  price: 4.19,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_193c18994-1781559643230.png",
  category: 'chips',
  rating: 4.6,
  reviewCount: 218,
  badge: 'New',
  description: 'Tropical mango sweetness meets fiery habanero heat in every chip.',
  weight: '6 oz'
},
{
  id: 3,
  name: 'Sparkling Lemon Mist',
  brand: 'Bubblr',
  price: 2.29,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_164f03967-1779138588783.png",
  category: 'drinks',
  rating: 4.5,
  reviewCount: 156,
  description: 'Crisp sparkling water with natural lemon zest. Zero sugar, all refreshment.',
  weight: '12 fl oz'
},
{
  id: 4,
  name: 'Classic Kunafa Box',
  brand: 'SweetNest',
  price: 11.99,
  originalPrice: 14.99,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b2960fc8-1769407824239.png",
  category: 'kunafa',
  rating: 4.9,
  reviewCount: 487,
  badge: 'Fan Favorite',
  description: 'Authentic shredded kunafa soaked in rose water syrup, topped with crushed pistachios.',
  weight: '16 oz'
},
{
  id: 5,
  name: 'Sour Watermelon Belts',
  brand: 'GummyLab',
  price: 3.79,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15b6df7c8-1783928545553.png",
  category: 'candy',
  rating: 4.7,
  reviewCount: 293,
  badge: 'Top Rated',
  description: 'Extra-long sour belts with real watermelon flavor and a tangy sugar coating.',
  weight: '5 oz'
},
{
  id: 6,
  name: 'Honey Roasted Cashews',
  brand: 'NutHouse',
  price: 7.49,
  image: "https://images.unsplash.com/photo-1621110702330-eac7f38580be",
  category: 'nuts',
  rating: 4.8,
  reviewCount: 201,
  description: 'Premium whole cashews slow-roasted with wildflower honey and a hint of sea salt.',
  weight: '10 oz'
},
{
  id: 7,
  name: 'Choco Hazelnut Cookies',
  brand: 'BakeCraft',
  price: 5.29,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e8fc0be2-1767087154351.png",
  category: 'cookies',
  rating: 4.6,
  reviewCount: 178,
  badge: 'New',
  description: 'Buttery shortbread cookies filled with hazelnut chocolate cream.',
  weight: '7 oz'
},
{
  id: 8,
  name: 'Teriyaki Beef Jerky',
  brand: 'RanchStrip',
  price: 8.99,
  originalPrice: 10.49,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10c0638ed-1783928545180.png",
  category: 'jerky',
  rating: 4.7,
  reviewCount: 134,
  description: 'Tender strips of beef marinated in sweet teriyaki sauce and slow-dried.',
  weight: '4 oz'
},
{
  id: 9,
  name: 'Cheddar Cheese Popcorn',
  brand: 'PopKing',
  price: 4.49,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_131c95ebf-1767986799912.png",
  category: 'popcorn',
  rating: 4.5,
  reviewCount: 267,
  badge: 'Best Seller',
  description: 'Air-popped kernels coated in real aged cheddar powder — snack-sized perfection.',
  weight: '6 oz'
},
{
  id: 10,
  name: 'Strawberry Burst Soda',
  brand: 'FizzCo',
  price: 1.99,
  image: "https://images.unsplash.com/photo-1661695818867-026558b6559f",
  category: 'drinks',
  rating: 4.3,
  reviewCount: 89,
  description: 'Bright strawberry soda made with real fruit extracts. Perfectly fizzy.',
  weight: '12 fl oz'
},
{
  id: 11,
  name: 'Pistachio Kunafa Rolls',
  brand: 'SweetNest',
  price: 9.49,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1871a6c13-1774806671419.png",
  category: 'kunafa',
  rating: 4.8,
  reviewCount: 312,
  badge: 'New',
  description: 'Hand-rolled kunafa pastry filled with pistachio cream and dipped in light syrup.',
  weight: '12 oz'
},
{
  id: 12,
  name: 'BBQ Corn Twists',
  brand: 'CrunchCo',
  price: 3.29,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18f53b75d-1783928544834.png",
  category: 'chips',
  rating: 4.4,
  reviewCount: 145,
  description: 'Crispy corn twists with smoky BBQ seasoning. Great for sharing.',
  weight: '7 oz'
},
{
  id: 13,
  name: 'Matcha Latte Can',
  brand: 'BrewBox',
  price: 3.99,
  originalPrice: 4.79,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10e75155a-1773197551776.png",
  category: 'drinks',
  rating: 4.6,
  reviewCount: 203,
  badge: 'Popular',
  description: 'Smooth ceremonial grade matcha blended with oat milk. Ready to sip.',
  weight: '8.4 fl oz'
},
{
  id: 14,
  name: 'Mixed Berry Gummies',
  brand: 'GummyLab',
  price: 3.49,
  image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f",
  category: 'candy',
  rating: 4.5,
  reviewCount: 167,
  description: 'Soft gummy bears in raspberry, blueberry, and strawberry flavors.',
  weight: '4 oz'
},
{
  id: 15,
  name: 'Spiced Almonds Mix',
  brand: 'NutHouse',
  price: 6.99,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a6b74887-1783438642837.png",
  category: 'nuts',
  rating: 4.7,
  reviewCount: 189,
  description: 'Whole almonds roasted with cumin, paprika, and a touch of cayenne.',
  weight: '9 oz'
},
{
  id: 16,
  name: 'Lemon Butter Biscuits',
  brand: 'BakeCraft',
  price: 4.79,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f3d4f324-1772779824845.png",
  category: 'cookies',
  rating: 4.4,
  reviewCount: 112,
  description: 'Delicate butter biscuits with a bright lemon glaze and crisp texture.',
  weight: '6 oz'
},
{
  id: 17,
  name: 'Jalapeño Turkey Jerky',
  brand: 'RanchStrip',
  price: 7.99,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f9b7d736-1783928545816.png",
  category: 'jerky',
  rating: 4.6,
  reviewCount: 98,
  badge: 'Hot Pick',
  description: 'Lean turkey strips with jalapeño heat and smoky mesquite flavor.',
  weight: '3.5 oz'
},
{
  id: 18,
  name: 'Caramel Kettle Corn',
  brand: 'PopKing',
  price: 5.49,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_178fa4d0a-1768173841903.png",
  category: 'popcorn',
  rating: 4.8,
  reviewCount: 321,
  badge: 'Fan Favorite',
  description: 'Classic kettle corn drizzled with golden caramel and a pinch of sea salt.',
  weight: '8 oz'
},
{
  id: 19,
  name: 'Coconut Water Pack',
  brand: 'IslandDrop',
  price: 5.99,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_145353b7c-1783928544941.png",
  category: 'drinks',
  rating: 4.7,
  reviewCount: 244,
  description: 'Pure young coconut water — no added sugar, no preservatives. Pack of 4.',
  weight: '4 × 11 fl oz'
},
{
  id: 20,
  name: 'Chocolate Fudge Brownie Bites',
  brand: 'BakeCraft',
  price: 6.49,
  originalPrice: 7.99,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f2e27086-1765207037202.png",
  category: 'cookies',
  rating: 4.9,
  reviewCount: 412,
  badge: 'Best Seller',
  description: 'Rich, fudgy brownie bites with a crinkle top. Individually wrapped.',
  weight: '8 oz'
},
{
  id: 21,
  name: 'Truffle Cheese Crackers',
  brand: 'CrunchCo',
  price: 5.79,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_170e4b53d-1765178305465.png",
  category: 'chips',
  rating: 4.5,
  reviewCount: 176,
  badge: 'Premium',
  description: 'Thin wheat crackers infused with black truffle and aged parmesan.',
  weight: '5 oz'
},
{
  id: 22,
  name: 'Hibiscus Iced Tea',
  brand: 'FizzCo',
  price: 2.79,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1550df732-1771884520668.png",
  category: 'drinks',
  rating: 4.4,
  reviewCount: 118,
  description: 'Brewed hibiscus tea lightly sweetened with cane sugar. Served cold.',
  weight: '16 fl oz'
},
{
  id: 23,
  name: 'Dark Chocolate Almonds',
  brand: 'NutHouse',
  price: 8.49,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_175536530-1772362746773.png",
  category: 'nuts',
  rating: 4.8,
  reviewCount: 267,
  badge: 'Top Rated',
  description: 'Whole roasted almonds enrobed in 72% dark chocolate.',
  weight: '9 oz'
},
{
  id: 24,
  name: 'Cheese & Herb Popcorn',
  brand: 'PopKing',
  price: 4.99,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ecc2485e-1772221499913.png",
  category: 'popcorn',
  rating: 4.6,
  reviewCount: 198,
  description: 'Fluffy popcorn seasoned with parmesan, rosemary, and garlic.',
  weight: '6 oz'
}];


export const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.badge).slice(0, 8);

export const TESTIMONIALS = [
{
  id: 1,
  name: 'Jordan Mitchell',
  role: 'Snack Enthusiast',
  location: 'Austin, TX',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1d5eea8dc-1775485948711.png",
  quote: 'SnackHaven is the only place I order snacks now. The kunafa is absolutely insane — tastes like it was made fresh.',
  rating: 5
},
{
  id: 2,
  name: 'Priya Nair',
  role: 'Office Manager',
  location: 'San Jose, CA',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_14d8a3889-1770881542627.png",
  quote: 'I stock the whole office from SnackHaven. Huge variety, fast delivery, and the packaging always arrives perfect.',
  rating: 5
},
{
  id: 3,
  name: 'Marcus Webb',
  role: 'Remote Developer',
  location: 'Brooklyn, NY',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1fd5bfc3c-1776345018738.png",
  quote: 'The matcha latte cans and kettle chips are my WFH essentials. Checkout takes under 2 minutes. Love it.',
  rating: 5
},
{
  id: 4,
  name: 'Sofia Reyes',
  role: 'Nutritionist',
  location: 'Miami, FL',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1dbb42404-1772210066868.png",
  quote: 'Finally a snack store with real variety. The nuts and seeds section alone is worth the bookmark.',
  rating: 4
},
{
  id: 5,
  name: 'Derek Huang',
  role: 'College Student',
  location: 'Seattle, WA',
  avatar: "https://images.unsplash.com/photo-1729592545718-1f1f7f45c9f6",
  quote: 'Sour watermelon belts, caramel popcorn, and a Bubblr in one order. My dorm is fully stocked.',
  rating: 5
}];
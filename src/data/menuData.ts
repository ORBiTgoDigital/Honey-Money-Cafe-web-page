export type MenuOption = { label: string; price: number };

export type MenuItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  options?: MenuOption[];
  image: string;
  featured?: boolean;
};

export const CATEGORIES = ["All", "Pizzas", "Combos", "Burgers", "Momos", "Chinese", "Breads", "Sandwiches", "Pasta", "Rolls", "Shakes", "Chai & Coffee"];

export const MENU: MenuItem[] = [
  { id: "special", name: "Honey Money Special", category: "Pizzas", description: "Chef special loaded with paneer, corn, olives and a golden cheese pull.", price: 239, options: [{ label: "Small", price: 239 }, { label: "Medium", price: 439 }, { label: "Large", price: 649 }], image: "🍕", featured: true },
  { id: "farmfresh", name: "Farmfresh Pizza", category: "Pizzas", description: "Cheese, onion, capsicum, tomato and mushroom.", price: 159, options: [{ label: "Small", price: 159 }, { label: "Medium", price: 299 }, { label: "Large", price: 449 }], image: "🍕" },
  { id: "loaded", name: "Loaded Pizza", category: "Pizzas", description: "Jalapeno, corn, mushroom and tomato with extra cheese.", price: 159, options: [{ label: "Small", price: 159 }, { label: "Medium", price: 319 }, { label: "Large", price: 529 }], image: "🍕", featured: true },
  { id: "combo1", name: "Combo 1", category: "Combos", description: "Double topping pizza, cheese slice burger and 250ml cold drink.", price: 219, image: "🍱", featured: true },
  { id: "combo2", name: "Combo 2", category: "Combos", description: "Stuffed garlic bread, cheese dip and choco lava cake.", price: 219, image: "🥖" },
  { id: "maharaja", name: "Maharaja Burger", category: "Burgers", description: "A tall, indulgent veg burger stacked for serious hunger.", price: 109, image: "🍔", featured: true },
  { id: "paneerburger", name: "Paneer Cheese Slice Burger", category: "Burgers", description: "Crispy paneer, cheese slice and house sauce.", price: 89, image: "🍔" },
  { id: "momos", name: "Tandoori Cheese Momos", category: "Momos", description: "Smoky, juicy veg momos finished with cheese.", price: 69, options: [{ label: "Half", price: 69 }, { label: "Full", price: 129 }], image: "🥟" },
  { id: "noodles", name: "Hakka Noodle", category: "Chinese", description: "Wok-tossed noodles with crunchy vegetables.", price: 79, options: [{ label: "Half", price: 79 }, { label: "Full", price: 129 }], image: "🍜" },
  { id: "garlic", name: "Stuffed Garlic Bread", category: "Breads", description: "Warm, buttery bread packed with cheese.", price: 129, image: "🥖" },
  { id: "pasta", name: "White Sauce Pasta", category: "Pasta", description: "Creamy, herby pasta made fresh to order.", price: 119, image: "🍝" },
  { id: "sandwich", name: "Paneer Sandwich", category: "Sandwiches", description: "Toasted bread, seasoned paneer and fresh vegetables.", price: 99, image: "🥪" },
  { id: "roll", name: "Paneer Roll", category: "Rolls", description: "Soft wrap filled with spicy paneer and crunchy salad.", price: 90, image: "🌯" },
  { id: "calzone", name: "Stuffed Veg Calzone", category: "Breads", description: "A sealed golden pocket of cheesy vegetables.", price: 129, image: "🥐" },
  { id: "friedrice", name: "Paneer Fried Rice", category: "Chinese", description: "Wok-fried rice with paneer and garden vegetables.", price: 69, options: [{ label: "Half", price: 69 }, { label: "Full", price: 129 }], image: "🍚" },
  { id: "chillipotato", name: "Honey Chilli Potato", category: "Chinese", description: "Crispy potato tossed in sweet, sticky chilli sauce.", price: 89, options: [{ label: "Half", price: 89 }, { label: "Full", price: 119 }], image: "🍟" },
  { id: "chocolate", name: "Chocolava Cake", category: "Shakes", description: "Warm chocolate cake with a molten centre.", price: 85, image: "🍫" },
  { id: "shake", name: "Oreo Shake", category: "Shakes", description: "Cold, creamy and generously loaded with Oreo.", price: 69, image: "🥤" },
  { id: "strawberry", name: "Strawberry Shake", category: "Shakes", description: "A bright, creamy strawberry classic.", price: 79, image: "🍓" },
  { id: "coffee", name: "Cold Coffee", category: "Chai & Coffee", description: "Chilled, smooth coffee for a long night.", price: 60, image: "🧋" },
  { id: "chai", name: "Chai", category: "Chai & Coffee", description: "A comforting cup for late-night study sessions.", price: 20, image: "☕" },
];

export const FOOD_IMAGES: Record<string, string> = {
  special: "/image-1790414487858.png",
  farmfresh: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=85",
  loaded: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=85",
  combo1: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85",
  combo2: "/public/combo-2.jpg",
  maharaja: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=85",
  paneerburger: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=700&q=85",
  momos: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=700&q=85",
  noodles: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=700&q=85",
  garlic: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=85",
  pasta: "/image-1790413643759.png",
  sandwich: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=85",
  roll: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=85",
  calzone: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=700&q=85",
  friedrice: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=85",
  chillipotato: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=85",
  chocolate: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=85",
  shake: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=85",
  strawberry: "/image-1790413711971.png",
  coffee: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=85",
  chai: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=700&q=85",
};

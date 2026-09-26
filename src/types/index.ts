export type PriceOption = 
  | { type: 'single'; price: number }
  | { type: 'sizes'; small: number; medium: number; large: number }
  | { type: 'portions'; half: number; full: number }
  | { type: 'pieces'; p2?: number; p3?: number; p4?: number };

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  priceType: 'single' | 'sizes' | 'portions' | 'pieces';
  prices: {
    single?: number;
    small?: number;
    medium?: number;
    large?: number;
    half?: number;
    full?: number;
    p2?: number;
    p3?: number;
    p4?: number;
  };
  image: string;
  isVeg: boolean;
  isBestseller?: boolean;
  isSpicy?: boolean;
  includedItems?: string[];
}

export interface CartItem {
  id: string;
  menuItemId: string;
  name: string;
  category: string;
  selectedOption: string; // e.g. 'Regular', 'Small (S)', 'Medium (M)', 'Large (L)', 'Half (H)', 'Full (F)', '2 Pcs'
  price: number;
  quantity: number;
  image: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  address: string;
  landmark: string;
  city: string;
  operatingHours: string;
  deliveryAreas: string[];
  googleMapsUrl: string;
}

export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  imageUrl: string;
  price: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: 'Pool' | 'Utensils' | 'Coffee' | 'Moon' | 'Sparkles' | 'Camera';
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
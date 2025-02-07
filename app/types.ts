// types.ts or interfaces.ts
export interface Helicopter {
  _id: string;  // Only _id as the unique identifier
  name: string;
  model: string;
  speed: number;
  capacity: number;
  price: number;
  description: string;
  image: { asset: { url: string } };
  features: string[];
  category: string;
  stockLevel: number;
  isFeatured: boolean;
  details:[object];
}

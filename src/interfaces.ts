type tSection = 'food' | 'cleaning';
type tCalories = number | null | undefined;

interface Product {
  id: number;
  name: string;
  price: number;
  weight: number;
  calories: tCalories;
  section: tSection;
  expirationDate: Date;
}

export { Product };

export type Category = 'All' | 'Pizza' | 'Burgers' | 'Sushi' | 'Desserts';

export interface Dish {
  id: string;
  name: string;
  category: Category;
  price: number;
  rating: number;
  time: string;
  image: string;
  desc: string;
  featured?: boolean;
}

export const CATEGORIES: Category[] = ['All','Pizza','Burgers','Sushi','Desserts'];

export const DISHES: Dish[] = [
  { id: '1', name: 'Truffle Margherita', category: 'Pizza', price: 18.5, rating: 4.9, time: '18-22m', image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=500&q=80', desc: 'San Marzano tomatoes, fresh mozzarella, black truffle oil', featured: true },
  { id: '2', name: 'Smash Double', category: 'Burgers', price: 14.0, rating: 4.8, time: '12-15m', image: 'https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=500&q=80', desc: 'Double angus patty, aged cheddar, secret sauce', featured: true },
  { id: '3', name: 'Salmon Nigiri Set', category: 'Sushi', price: 24.0, rating: 4.9, time: '15-20m', image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&q=80', desc: '8 pcs fresh salmon nigiri, wasabi, pickled ginger', featured: true },
  { id: '4', name: 'Pepperoni Inferno', category: 'Pizza', price: 16.0, rating: 4.7, time: '18-22m', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80', desc: 'Spicy soppressata, hot honey, mozzarella' },
  { id: '5', name: 'Miso Black Cod', category: 'Sushi', price: 28.0, rating: 4.9, time: '20-25m', image: 'https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=500&q=80', desc: '48h marinated cod, bok choy, sesame' },
  { id: '6', name: 'Tiramisu Cup', category: 'Desserts', price: 8.5, rating: 4.8, time: '5m', image: 'https://images.unsplash.com/photo-1571877222312-a941315ccdd7?w=500&q=80', desc: 'Espresso soaked ladyfingers, mascarpone cream', featured: true },
  { id: '7', name: 'Shroom Burger', category: 'Burgers', price: 13.5, rating: 4.6, time: '12-15m', image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500&q=80', desc: 'Portobello, swiss, truffle aioli' },
  { id: '8', name: 'Matcha Lava', category: 'Desserts', price: 9.0, rating: 4.9, time: '8m', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&q=80', desc: 'White chocolate core, matcha sponge' },
];

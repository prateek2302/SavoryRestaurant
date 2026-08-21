import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Dish } from '../data/mockData';

type CartItem = Dish & { qty: number };

type CartContextType = {
  items: CartItem[];
  addItem: (dish: Dish) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  total: number;
  count: number;
  clear: () => void;
};

const CartContext = createContext<CartContextType>(null!);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (dish: Dish) => {
    setItems(prev => {
      const found = prev.find(i => i.id === dish.id);
      if (found)
        return prev.map(i => (i.id === dish.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { ...dish, qty: 1 }];
    });
  };

  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) return removeItem(id);
    setItems(p => p.map(i => (i.id === id ? { ...i, qty } : i)));
  };

  const removeItem = (id: string) => setItems(p => p.filter(i => i.id !== id));
  const clear = () => setItems([]);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQty, total, count, clear }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';

type DishCartItem = {
  id: string;
  name: string;
  price: any;
  description: string;
  photo_url: string;
  quantity: number;
};



type CartContextType = {
  cartItems: DishCartItem[];
  addToCart: (item: DishCartItem) => void;
  removeFromCart: (itemId: any) => void;
};

const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9);
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Record<string, DishCartItem>>({});

  useEffect(() => {
    // Cargar datos del localStorage al inicializarse
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);


  const addToCart = (item: DishCartItem) => {
    setCartItems((prevItems) => {
      const itemId = item.id;

      if (prevItems[itemId]) {
        // Si el producto ya está en el carrito, actualiza la cantidad
        return { ...prevItems, [itemId]: { ...prevItems[itemId], quantity: prevItems[itemId].quantity + 1 } };
      }

      // Si el producto no está en el carrito, agrégalo
      return { ...prevItems, [itemId]: { ...item, quantity: 1 } };
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };

      if (updatedItems[itemId]) {
        // Si el producto está en el carrito, reduce la cantidad
        updatedItems[itemId].quantity -= 1;

        // Si la cantidad llega a cero, elimina el producto del carrito
        if (updatedItems[itemId].quantity <= 0) {
          delete updatedItems[itemId];
        }
      }

      return updatedItems;
    });
  };

  useEffect(() => {
    // Guardar datos en el localStorage cada vez que cambie el carrito
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems: Object.values(cartItems), addToCart, removeFromCart }}>
    {children}
  </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

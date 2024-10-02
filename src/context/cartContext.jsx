import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    if (item.quantity < 1) {
      console.error('La cantidad no puede ser menor a 1.');
      return;
    }

    const existingItem = cartItems.find(currentItem => currentItem.id === item.id);

    if (existingItem) {
      const updatedItems = cartItems.map(currentItem =>
        currentItem.id === existingItem.id
          ? {
              ...currentItem,
              quantity: Math.min(currentItem.quantity + item.quantity, item.stock),
            }
          : currentItem
      );
      setCartItems(updatedItems);
    } else {
      const quantity = Math.min(item.quantity, item.stock);
      setCartItems([...cartItems, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(currentItem => currentItem.id !== id));
  };

  const updateItemQuantity = (id, quantity) => {
    if (quantity < 1) {
      console.error('La cantidad no puede ser menor a 1.');
      return;
    }

    setCartItems(cartItems.map(currentItem =>
      currentItem.id === id ? { ...currentItem, quantity: Math.min(quantity, currentItem.stock) } : currentItem
    ));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, removeItem, updateItemQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};



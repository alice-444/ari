import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartBooks, setCartBooks] = useState([]);

  useEffect(() => {
    if (cartBooks?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartBooks));
    }
  }, [cartBooks]);

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartBooks(JSON.parse(ls.getItem("cart")));
    }
  }, []);

  const addBook = (bookId) => {
    setCartBooks((prev) => [...prev, bookId]);
  };

  const removeBook = (bookId) => {
    setCartBooks((prev) => {
      const position = prev.indexOf(bookId);

      if (position !== -1) {
        return prev.filter((value, index) => index !== position);
      }
      return prev;
    });
  };

  const clearCart = () => {
    if (ls) {
      ls.removeItem("cart");
    }
    setCartBooks([]);
  };
  return (
    <div>
      <CartContext.Provider
        value={{ cartBooks, setCartBooks, addBook, removeBook, clearCart }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};
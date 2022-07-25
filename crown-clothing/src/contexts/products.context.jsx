import { createContext, useState, useEffect } from "react";
import PRODUCTS from '../shopdata.json';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  // useEffect(() => {
  //   const unSubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
  //     setCurrentProducts(user);
  //   });

  //   return unSubscribe; // Returns only when the component unmounts
  // }, []);

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
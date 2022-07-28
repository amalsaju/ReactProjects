import { createContext, useEffect, useState } from "react";
import SHOP_DATA from '../shopdata.js';

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log("Done!");
      setCategoriesMap(categoryMap);
    }

    getCategoriesMap();
  }, [])

  const value = { categoriesMap: categoriesMap };

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}
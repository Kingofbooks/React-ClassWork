import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);

  // Fetch categories and products from a mock API
  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = ['Electronics', 'Clothing', 'Accessories', 'Home Appliances'];
      setCategories(categoriesData);
    };
    
    const fetchProducts = async () => {
      const productsData = [
        { id: 1, name: 'Laptop', category: 'Electronics', price: 900 },
        { id: 2, name: 'Shirt', category: 'Clothing', price: 30 },
        { id: 3, name: 'Headphones', category: 'Accessories', price: 100 },
        { id: 4, name: 'Microwave', category: 'Home Appliances', price: 150 }
      ];
      setProducts(productsData);
    };

    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{
      categories,
      products,
      selectedCategory,
      setSelectedCategory,
      priceRange,
      setPriceRange
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

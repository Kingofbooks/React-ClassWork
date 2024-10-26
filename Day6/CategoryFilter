// src/components/CategoryFilter.js
import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';

const CategoryFilter = () => {
  const { categories, setSelectedCategory } = useContext(ProductContext);

  return (
    <div>
      <h3>Filter by Category</h3>
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;

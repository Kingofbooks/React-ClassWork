// src/components/PriceFilter.js
import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';

const PriceFilter = () => {
  const { priceRange, setPriceRange } = useContext(ProductContext);

  return (
    <div>
      <h3>Filter by Price</h3>
      <input
        type="range"
        min="0"
        max="1000"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([0, Number(e.target.value)])}
      />
      <p>Up to ${priceRange[1]}</p>
    </div>
  );
};

export default PriceFilter;

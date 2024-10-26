// src/components/ProductList.js
import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';

const ProductList = () => {
  const { products, selectedCategory, priceRange } = useContext(ProductContext);

  const filteredProducts = products.filter(product => {
    return (
      (selectedCategory === '' || product.category === selectedCategory) &&
      product.price <= priceRange[1]
    );
  });

  return (
    <div>
      <h3>Product List</h3>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name} - {product.category} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

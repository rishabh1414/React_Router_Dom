import React from "react";
import "./ProductsNotFound.css"; // Import your CSS file for styling

const ProductsNotFound: React.FC = () => {
  return (
    <div className="products-not-found">
      <h1>Products Not Found</h1>
      <p>We're sorry, but the requested products could not be found.</p>
    </div>
  );
};

export default ProductsNotFound;

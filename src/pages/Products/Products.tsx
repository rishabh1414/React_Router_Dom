import axios from "axios";
import React, { useEffect, useState } from "react";
import OneProduct from "./OneProduct";
import "./products.css";
import { RotatingLines } from "react-loader-spinner";

export interface ProductInterface {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
}

function Products() {
  let [allProducts, setAllProducts] = useState<ProductInterface[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  let fetchAllProducts = async () => {
    let { data } = await axios("http://localhost:5000/products");
    console.log(data);
    setAllProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchAllProducts();
    }, 400);
  }, []);
  return (
    <div id="ProductContainer">
      {allProducts && isLoading ? (
        <RotatingLines
          visible={true}
          width="40"
          strokeColor="#b4b4b4"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      ) : (
        allProducts.map((data) => <OneProduct key={data.id} data={data} />)
      )}
    </div>
  );
}

export default Products;

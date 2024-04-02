import React from "react";
import { Link } from "react-router-dom";
export let img =
  "https://assets.ajio.com/medias/sys_master/root/20240314/rsG4/65f3213a05ac7d77bbb7fd2c/-473Wx593H-469290316-lightolive-MODEL.jpg";
function OneProduct(props: any) {
  let { data: product } = props;
  return (
    <Link to={`./${product.id}`} className="product">
      <img src={img} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <p>Sizes: {product.sizes}</p>
      <p>Colors: {product.colors}</p> */}
    </Link>
  );
}

export default OneProduct;

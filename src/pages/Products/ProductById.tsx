import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ProductInterface } from "./Products";
import { img } from "./OneProduct";
import "./products.css";
import { RotatingLines } from "react-loader-spinner";

function ProductById() {
  const { id } = useParams();
  let navigate = useNavigate();
  const [singleproduct, setSingleProduct] = useState<ProductInterface>();
  const [isLoading, setLoading] = useState<boolean>(true);

  const fetchProductById = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/products/${id}`);
      setSingleProduct(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setTimeout(() => {
        navigate("/product404");
        console.log("hiiii");
      }, 5000);
    }
  };

  useEffect(() => {
    let tm = setTimeout(() => {
      fetchProductById();
    }, 400);
    return () => {
      setTimeout(() => {
        clearTimeout(tm);
      }, 5000);
      console.log("first");
    };
  }, [id]);

  return (
    <div className="product id">
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate("/")}>Home</button>
      <hr />
      {isLoading ? (
        <>
          <RotatingLines
            visible={true}
            width="40"
            strokeWidth="5"
            strokeColor="#b4b4b4"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
          />
        </>
      ) : (
        <>
          <img src={img} alt={singleproduct?.name} />
          <h2>{singleproduct?.name}</h2>
          <p>{singleproduct?.description}</p>
          <p>Price: ${singleproduct?.price}</p>
          <p>Brand: {singleproduct?.brand}</p>
          <p>Category: {singleproduct?.category}</p>
          <p>Sizes: {singleproduct?.sizes?.join(", ")}</p>
          <p>Colors: {singleproduct?.colors?.join(", ")}</p>
        </>
      )}
    </div>
  );
}

export default ProductById;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { publicRequest } from "../requestMethod";
import ProductList from "./ProdcutList";
function Shop({ item }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProducts = () => {
      publicRequest
        .get("http://localhost:5006/api/products/")
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => console.log(err));
    };
    getProducts();
  }, []);
  return (
    <>
      <ProductList />
    </>
  );
}

export default Shop;

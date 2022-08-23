import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import { popularProducts } from "../data";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5007/api/products?category=${cat}`
            : `http://localhost:5007/api/products/`
        );
        setProducts(res.data);
        console.log("data", res.data);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProduct(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  return (
    <Container>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {cat
          ? filteredProduct.map((item) => <Product item={item} key={item.id} />)
          : products
              .slice(0, 4)
              .map((product) => <Product item={product} key={product.id} />)}
      </div>
    </Container>
  );
};

export default Products;

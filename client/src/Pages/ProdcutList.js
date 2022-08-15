import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

import Footer from "../components/Footer";
import Promotion from "../components/Promotion";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const location = useLocation();

  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({});

  const Container = styled.div``;
  const handleFilters = (e) => {
    const value = e.target.value;
    console.log(value);
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Promotion tile="bénéficier d'une reduction de 20 %" />

      <Products cat={cat} filters={filters} sort={sort} />
      <Footer />
    </Container>
  );
};

export default ProductList;

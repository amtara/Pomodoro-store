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

  return (
    <div>
      <Navbar />
      <Promotion tile="bénéficier d'une reduction de 20 %" />

      <Products cat={cat} filters={filters} />
      <Footer />
    </div>
  );
};

export default ProductList;

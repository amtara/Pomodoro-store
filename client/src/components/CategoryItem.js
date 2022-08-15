import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 100vh;
  position: relative;
  &:hover {
    color: #999;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  color: white;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Link
            to="/shop"
            className="inline-block text-center bg-black rounded py-3 px-8 font-medium text-white hover:bg-red-700"
          >
            Pomodoro Collection
          </Link>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;

const Desc = styled.p`
  font-weight: 200;
`;

function Promotion() {
  return (
    <Container>
      <Desc className="">Bénéficier d'une réduction de 20%</Desc>{" "}
    </Container>
  );
}

export default Promotion;

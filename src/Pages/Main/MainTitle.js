import React from "react";
import styled from "styled-components";

function MainTitle(h2) {
  return (
    <Title>
      <h2>{h2.h2}</h2>
      <span>{h2.span}</span>
    </Title>
  );
}

export default MainTitle;

const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 30px;

  h2 {
    font-size: 18px;
    font-weight: 600;
  }
`;

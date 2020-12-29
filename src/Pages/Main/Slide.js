import React from "react";
import styled from "styled-components";

export default function Slide({ img }) {
  return <IIMG src={img} />;
}

const IIMG = styled.img`
  width: 100%;
  height: ${props => props.height};
`;

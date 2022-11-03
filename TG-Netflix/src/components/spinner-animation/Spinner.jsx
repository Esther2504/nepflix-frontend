import React from "react";
import styled, { keyframes } from "styled-components";

const Spinner = () => {
  return <Loading />;
};

export default Spinner;

const spinner = keyframes`
 to {
  transform: rotate(360deg);
 } 
`;

const Loading = styled.div`
  width: 4rem;
  height: 4rem;
  border: solid 4px #141414;
  border-top-color: #db0000;
  border-left-color: #db0000;
  border-bottom-color: #db0000;
  border-radius: 50%;
  animation: ${spinner} 1s linear infinite;
`;

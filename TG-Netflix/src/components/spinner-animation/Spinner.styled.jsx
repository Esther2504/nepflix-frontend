import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
 0% {
        transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
         transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
`;

export const Spinning = styled.div`
  position: relative;
  opacity: 1;
  transition: opacity linear 0.1s; 
  /* border: 1px solid black; */
  height: 5rem;

  &::before {
    animation: ${rotate} 2s linear infinite;
    border: solid 3px #eee;
    border-bottom-color: #db0000;
    border-radius: 50%;
    content: "";
    height: 40px;
    left: 50%;
    top: 50%; 
    opacity: inherit;
    position: absolute;
    transform: translate3d(-50%, -50%, 0);
    transform-origin: center;
    width: 40px;
    will-change: transform;
  }
`;
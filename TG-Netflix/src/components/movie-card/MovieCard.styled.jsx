import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;

  span {
    position: absolute;
    width: 100%;
    padding: 0 5px;
    bottom: 7px;
    font-family: Manrope;
    text-align: center;
    line-height: 0.9;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 2px rgb(0, 0, 0, 0.75);

    @media (min-width: 600px) {
      font-size: 1.4rem;
    }
    @media (min-width: 700px) {
      font-size: 1.5rem;
    }
    @media (min-width: 800px) {
      font-size: 1.6rem;
    }
    @media (min-width: 900px) {
      font-size: 1.7rem;
    }
    @media (min-width: 1000px) {
      font-size: 1.8rem;
    }
    @media (min-width: 1100px) {
      font-size: 2rem;
    }
  }

  img:nth-of-type(2) {
    position: absolute;
    top: 8px;
    left: 3px;
    width: 1.3vw;
  }
`;

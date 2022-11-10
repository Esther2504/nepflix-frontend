import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;

  span {
    position: absolute;
    width: 100%;
    padding: 0 10px;
    bottom: 7px;

    font-family: manrope;
    line-height: 0.9;
    font-size: 1.6rem;
    font-weight: 600;
    color: white;
    font-weight: 550;
    line-height: 1;
    text-shadow: 1px 1px 1px rgb(20, 20, 20);

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

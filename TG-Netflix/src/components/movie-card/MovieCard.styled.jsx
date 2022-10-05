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
    padding: 0 5px;
    bottom: 7px;

    font-family: Futura;
    text-align: center;
    line-height: 0.9;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 2px rgb(0, 0, 0, 0.75);

    @media (min-width: 1000px) {
      font-size: 1.75rem;
    }

    @media (min-width: 1100px) {
      font-size: 2rem;
    }

    @media (min-width: 1200px) {
      font-size: 2.25rem;
    }

    @media (min-width: 1300px) {
      font-size: 2.5rem;
    }

    @media (min-width: 1400px) {
      font-size: 2.75rem;
    }
  }

  img:nth-of-type(2) {
    position: absolute;
    top: 8px;
    left: 3px;
    width: 15px;

    @media (min-width: 600px) {
      width: 16px;
    }

    @media (min-width: 700px) {
      width: 17px;
    }

    @media (min-width: 800px) {
      width: 18px;
    }

    @media (min-width: 900px) {
      width: 19px;
    }

    @media (min-width: 1000px) {
      width: 20px;
    }

    @media (min-width: 1100px) {
      width: 21px;
    }

    @media (min-width: 1200px) {
      width: 22px;
    }

    @media (min-width: 1300px) {
      width: 23px;
    }
    
    @media (min-width: 1400px) {
      width: 25px;
    }
  }
`;

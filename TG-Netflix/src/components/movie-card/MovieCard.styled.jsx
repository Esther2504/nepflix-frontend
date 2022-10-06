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
    font-size: 1.5vw;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 2px rgb(0, 0, 0, 0.75);
  }

  img:nth-of-type(2) {
    position: absolute;
    top: 8px;
    left: 3px;
    width: 1.3vw;
  }
`;

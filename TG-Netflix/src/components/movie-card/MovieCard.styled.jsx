import styled from 'styled-components';

export const Carousel = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100vw;
  padding-left: 1rem;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 0.3rem;
  padding: 0.3rem;
  text-align: center;
  font-size: 1.6rem;
  font-family: Futura;
  line-height: 0.9;
  overflow: hidden;
  border-radius: 15px;

  span {
    position: absolute;
    bottom: 5px;
    right: 10px;
    font-size: 3rem;
    font-weight: bold;
    color: white;
    -webkit-text-stroke: 1px black;
    text-shadow: none;
  }
`;

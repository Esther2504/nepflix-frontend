import styled from 'styled-components';
import image from '../../assets/spider-man.jpg';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-end;
  width: 34.1rem;
  height: 19.2rem;
  padding: .3rem;
  font-size: 1.6rem;
  font-family: Futura;
  line-height: 0.9;
  background-color: grey;
  background-image: url(${image});

  h1 {
    color: transparent;
    -webkit-text-stroke: 1px white;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.6);
  }
`;

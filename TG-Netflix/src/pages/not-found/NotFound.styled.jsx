import styled from 'styled-components';
import bg from '../../assets/not-found-images/bg-lost-in-space.png';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 6.8rem 8fr 10rem 4rem;
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
`;

export const Navbar = styled.nav`
  grid-row-start: 1;
  display: flex;
  align-items: center;
  padding-left: 30px;
  background-color: rgba(0, 0, 0, 0.97);

  img {
    width: 115px;
  }
`;

export const Message = styled.div`
  grid-row-start: 2;
  color: white;
  border: 1px solid red;

  h1 {
    font-size: 5vw;
    text-shadow: 1px 1px 1px black;
  }
`;

export const Error = styled.div`
  grid-row-start: 3;
  border: 1px solid red;
`;
export const Credit = styled.div`
  grid-row-start: 4;
  float: right;
  border: 1px solid red;
`;

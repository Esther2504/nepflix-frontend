import styled from 'styled-components';
import bg from '../../assets/not-found-images/bg-lost-in-space.png';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 6.8rem 10fr 4fr 4rem;
  height: 100vh;
  color: white;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(
    40% 40% at center,
    rgba(0, 0, 0, 0.5),
    transparent
  );

  h1 {
    font-size: 5rem;
    text-shadow: 1px 1px 1px black;
  }

  p {
    font-size: 1.5rem;
  }

  button {
    margin-top: 2rem;
    width: 15rem;
    height: 4rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
    background-color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #e3e3e3;
    }
  }
`;

export const Error = styled.div`
  grid-row-start: 3;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 2rem;

  div {
    width: 25rem;
    height: 4rem;
    border-left: 2px solid red;

    span {
      font-weight: bold;
    }
  }
`;

export const Credit = styled.div`
  grid-row-start: 4;
  padding-right: 2rem;

  span {
    float: right;
    font-weight: bold;
  }
`;

import styled from 'styled-components';
import bg from '../../assets/not-found-images/bg-lost-in-space.png';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 6.8rem 7fr 4fr 6rem;
  height: 100vh;
  color: white;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
`;

export const Navbar = styled.header`
  grid-row-start: 1;
  display: flex;
  align-items: center;
  padding-left: 30px;
  background-color: var(--black);

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
  padding: 0 5rem;
  background-image: radial-gradient(
    40% 40% at center,
    rgba(0, 0, 0, 0.5),
    transparent
  );

  h1 {
    margin-bottom: 2rem;
    font-size: 5rem;
  }

  p {
    font-size: 2rem;
  }

  button {
    width: 15rem;
    height: 4rem;
    margin-top: 2rem;
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
  padding-right: 5rem;

  span {
    float: right;
    font-size: 1.3rem;
    font-weight: bold;
    color: #bababa;
  }
`;

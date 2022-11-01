import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  height: 5rem;
  padding: 0;
  color: white;
  z-index: 10;
  background-color: var(--black);

  @media (min-width: 740px) {
    height: 6.8rem;
    padding: 0 70px 0 35px;
  }

  img:nth-of-type(1) {
    width: 120px;
  }
`;

export const Menu = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;

  img:nth-of-type(1) {
    width: 50px;

    @media (min-width: 740px) {
      width: 32px;
      height: 32px;
      border-radius: 4px;
    }
  }

  img:nth-of-type(2) {
    position: absolute;
    display: none;
    top: 30px;
    left: 45px;
    width: 10px;
    transition: 400ms;

    @media (min-width: 740px) {
      display: block;
    }
  }

  ul {
    position: absolute;
    display: none;
    flex-direction: column;
    top: 5.2rem;
    width: 19rem;
    right: 0px;
    padding: 10px 0;
    border-radius: 2px;
    background-color: rgba(0, 0, 0, 0.97);

    @media (min-width: 740px) {
      top: 7.2rem;
      left: -90px;
    }

    li {
      display: flex;
      font-size: 1.3rem;

      &:hover {
        background-color: rgba(20, 20, 20, 0.5);
      }

      a {
        width: 100%;
        padding: 10px 0;
        color: white;
        text-align: center;
        text-decoration: none;
      }
    }

    .arrow-up {
      position: absolute;
      display: none;
      top: -13px;
      left: 100px;
      width: 18px;
      height: 15px;

      @media (min-width: 740px) {
        display: block;
      }
    }
  }

  &:hover {
    ul {
      display: flex;
    }
  }
`;

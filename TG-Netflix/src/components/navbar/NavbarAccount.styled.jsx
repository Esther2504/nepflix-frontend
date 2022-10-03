import styled, { css } from 'styled-components';

// utility classes

const dropdown = css`
  display: flex;
  position: relative;
  align-items: center;

  ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 7.2rem;
    padding: 15px 0;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 2px;

    li {
      display: flex;
      margin-left: 20px;
      padding: 10px 0;
      font-size: 1.3rem;
      cursor: pointer;
    }
  }

  &:hover {
    ul {
      display: flex;
    }
  }
`;

// styled components

export const Container = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7rem;
  padding: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.97);

  @media (min-width: 740px) {
    padding: 0 70px 0 30px;
  }

  img:nth-of-type(1) {
    width: 150px;
  }
`;

export const Menu = styled.div`
  ${dropdown}
  height: 100%;
  cursor: pointer;

  img:first-of-type {
    width: 70px;

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
    width: 12px;
    transition: 400ms;

    @media (min-width: 740px) {
      display: block;
    }
  }

  ul {
    right: 0px;
    width: 20rem;
    align-items: flex-start;

    @media (min-width: 740px) {
      left: -150px;
    }

    img:nth-of-type(1) {
      display: none;
      position: absolute;
      top: -13px;
      left: 160px;
      width: 15px;
      height: 15px;
      transform: rotate(180deg);

      @media (min-width: 740px) {
        display: block;
      }
    }

    hr {
      width: 100%;
      margin: 1rem 0;
    }

    li {
      a {
        padding-left: 1rem;
        color: white;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  &:hover {
    img:nth-of-type(2) {
      transform: rotate(180deg);
      transition: transform 300ms;
    }
  }
`;
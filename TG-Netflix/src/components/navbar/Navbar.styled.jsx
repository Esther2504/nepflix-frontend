import styled, { css } from 'styled-components';

// utility classes

const dropdown = css`
  position: relative;
  display: flex;
  padding: 21px 0;
  z-index: 10;

  ul {
    position: absolute;
    display: none;
    flex-direction: column;
    top: 7.2rem;
    background-color: rgba(0, 0, 0, 0.95);
    border-radius: 2px;
    border-top: 2px solid white;

    li {
      display: flex;
      border-bottom: 1px solid transparent;

      &:hover {
        background-color: rgba(30, 30, 30, 0.5);
      }

      @media (max-width: 950px) {
        font-size: 1.3rem;
      }

      a {
        width: 100%;
        padding: 15px 0;
        text-align: center;
      }
    }
  }

  &:hover {
    ul {
      display: flex;
    }
  }
`;

// styled components

export const Nav = styled.header`
  position: ${(props) => (props.staticNavbar ? 'static ' : 'fixed')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4.1rem;
  margin-bottom: ${(props) => (props.staticNavbar ? '-4.1rem ' : 'none')};
  padding: 0 10px 0 10px;
  font-size: 1.1rem;
  z-index: 99;
  color: white;
  background-image: ${(props) =>
    props.gradientNavbar
      ? 'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))'
      : 'none'};
  transition: background-color 1000ms; // return transition
  transition: ${(props) =>
    props.blackNavbar ? 'background-color 1000ms;' : ''};
  background-color: ${(props) => (props.blackNavbar ? 'var(--black)' : '')};

  @media (min-width: 950px) {
    height: 6.8rem;
    padding: 0 70px 0 35px;
    font-size: 1.3rem;
    margin-bottom: ${(props) => (props.staticNavbar ? '-6.8rem ' : 'none')};
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;

    li {
      margin-left: 1rem;

      @media (min-width: 950px) {
        margin-left: 2.5rem;
      }

      a {
        text-decoration: none;
        color: white;

        :hover {
          color: #dcdcdc;
        }
      }
    }
  }
`;

export const PrimaryNav = styled.nav`
  ${dropdown}
  display: flex;
  align-items: center;

  img {
    width: 80px;
    margin-right: 0px;

    @media (min-width: 950px) {
      width: 120px;
    }
  }

  ul {
    width: 20rem;
    top: 7rem;
    left: 48px;

    img {
      position: absolute;
      top: -12px;
      left: 90px;
      width: 15px;
    }

    li {
      justify-content: center;
      white-space: nowrap;
      width: 100%;

      @media (max-width: 950px) {
        margin-left: 0;
      }
    }

    @media (min-width: 950px) {
      position: static;
      display: flex;
      flex-direction: row;
      background-color: transparent;
      border-top: none;
      width: auto;

      img {
        display: none;
      }

      li {
        &:hover {
          background-color: transparent;
        }
      }
    }
  }
`;

export const Browse = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  margin-left: 1.5rem;

  img {
    position: absolute;
    top: 4px;
    left: 45px;
    width: 10px;
  }

  @media (min-width: 950px) {
    display: none;
  }
`;

export const SecondaryNav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Account = styled.div`
  ${dropdown}

  img:nth-of-type(1) {
    width: 32px;
    border-radius: 3px;
  }

  img:nth-of-type(2) {
    position: absolute;
    display: none;
    top: 30px;
    left: 40px;
    width: 12px;
    transition: 400ms;

    @media (min-width: 950px) {
      display: block;
    }
  }

  &:hover {
    img:nth-of-type(2) {
      transform: rotate(180deg);
      transition: transform 300ms;
    }
  }

  ul {
    left: -130px;
    width: 19rem;

    li {
      display: flex;
      align-items: center;
      width: 100%;
      margin-left: 0rem;
    }

    .arrow-up {
      width: 15px;
      position: absolute;
      top: -12px;
      left: 140px;
    }
  }
`;

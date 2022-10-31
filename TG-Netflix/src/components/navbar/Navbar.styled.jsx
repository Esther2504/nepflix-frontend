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
    padding: 1rem 0;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 2px;

    li {
      display: flex;
      margin-left: 20px;
      padding: 10px 0;
      cursor: pointer;

      @media (max-width: 884px) {
        font-size: 1.3rem;
      }
    }
  }

  &:hover {
    ul {
      display: flex;
    }
  }

  .dropdown-text {
    font-size: 1.3rem;
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
  padding: 0 46px 0 25px;
  font-size: 1rem;
  z-index: 99;
  color: white;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.6)
  );
  transition: background-color 1000ms; // return transition
  transition: ${(props) =>
    props.blackNavbar ? 'background-color 1000ms;' : ''};
  background-color: ${(props) => (props.blackNavbar ? 'rgb(20,20,20) ' : '')};

  @media (min-width: 950px) {
    height: 6.8rem;
    padding: 0 70px 0 35px;
    margin-bottom: ${(props) => (props.staticNavbar ? '-6.8rem ' : 'none')};
  }

  @media (min-width: 1035px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.3rem;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;

    li {
      margin-left: 1.5rem;

      a {
        text-decoration: none;
        color: white;
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
    left: 46px;
    border-top: 2px solid white;

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

      @media (max-width: 884px) {
        margin-left: 0;
      }

      &:hover {
        background-color: rgba(20, 20, 20, 0.5);
      }
      a {
        &:hover {
          color: #b8b8b8;
          transition: 300ms;
        }
      }
    }

    @media (min-width: 885px) {
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
  margin-left: 2rem;

  img {
    position: absolute;
    top: 3px;
    left: 38px;
    width: 10px;
  }

  @media (min-width: 885px) {
    display: none;
  }
`;

export const SecondaryNav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Account = styled.div`
  ${dropdown}
  cursor: pointer;

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
    left: -150px;
    width: 20rem;
    align-items: flex-start;

    li {
      display: flex;
      align-items: center;

      a {
        padding-left: 1rem;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .arrow-up {
      width: 15px;
      position: absolute;
      top: -12px;
      left: 160px;
    }
  }
`;

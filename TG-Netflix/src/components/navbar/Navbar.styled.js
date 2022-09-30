import styled, { css } from 'styled-components';

// utility classes

const dropdown = css`
  display: flex;
  position: relative;
  height: 100%;
  padding: 2.1rem 0;

  ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 70px;
    padding: 1rem 0;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 2px;
    border-top: 5rem;

    li {
      display: flex;
      margin-left: 2rem;
      padding: 1.1rem 0;
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

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 68px;
  padding: 0 4.6rem;
  color: white;
  z-index: 1;
  transition: background-color 1000ms;
  transition: ${(props) =>
    props.isScrolled ? 'background-color 1000ms;' : ''};
  background-color: ${(props) => (props.isScrolled ? 'rgb(20,20,20) ' : '')};
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.4)
  );

  ul {
    display: flex;
    align-items: center;
    list-style: none;

    li {
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: white;

        &:hover {
          color: grey;
          transition: 500ms;
        }
      }
    }
  }

  @media (min-width: 950px) {
    padding: 0 7rem 0 4.6rem;
    }

  @media (min-width: 1200px) {
    font-size: 1.4rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const PrimaryNav = styled.div`
  ${dropdown}
  display: flex;
  align-items: center;
  height: 100%;
  padding: 3rem 0;

  img {
    width: 12rem;
    margin-right: 1rem;
  }

  ul {
    width: 20rem;
    left: 103px;
    border-top: 2px solid white;

    img {
      position: absolute;
      top: -13px;
      left: 90px;
      width: 15px;
      transform: rotate(180deg);
    }

    li {
      justify-content: center;
      width: 100%;
      font-size: 1.4rem;

      &:hover {
        background-color: rgba(20, 20, 20, 0.5);
      }

      @media (max-width: 885px) {
        margin-left: 0;
      }
    }

    @media (min-width: 885px) {
      display: flex;
      flex-direction: row;
      position: static;
      background-color: transparent;
      border-top: none;
      width: auto;

      img {
        display: none
      }

      li {
        font-size: 1.2rem;

        &:hover {
          background-color: transparent;
        }
      }
    }
    @media (min-width: 1200px) {
      li {
        font-size: 1.4rem;
      }
    }
  }
`;

export const Browse = styled.div`
  display: flex;
  position: relative;
  margin-left: 2rem;

  img {
    position: absolute;
    top: 2px;
    left: 45px;
    width: 10px;
  }

  @media (min-width: 885px) {
    display: none;
  }
  
`;

export const SecondaryNav = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Notifications = styled.div`
  ${dropdown};
  cursor: pointer;

  ul {
    left: -270px;
    width: 30rem;
    height: 10rem;
    text-align: center;
    border-top: 2px solid white;

    img {
      position: absolute;
      top: -13px;
      left: 278px;
      width: 15px;
      transform: rotate(180deg);
    }

    li {
      margin: auto;
      color: grey;
    }
  }
`;

export const Account = styled.div`
  ${dropdown}
  cursor: pointer;

  img {
    width: 3rem;
    border-radius: 5px;
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

  ul {
    left: -150px;
    width: 20rem;
    align-items: flex-start;

    img {
      position: absolute;
      top: -13px;
      left: 160px;
      width: 15px;
      transform: rotate(180deg);
    }

    hr {
      width: 100%;
      margin: 1rem 0;
    }

    li {
      p {
        padding-left: 1rem;

        &:hover {
          text-decoration: underline;
        }
      }

      &:nth-of-type(4) {
        align-self: center;
        margin-left: 0rem;
        padding-left: 0;
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

export const VerticalSpacer = styled.div`
  height: 2000px;
`;

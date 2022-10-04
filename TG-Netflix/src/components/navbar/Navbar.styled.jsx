import styled, { css } from 'styled-components';

// utility classes

const dropdown = css`
  display: flex;
  position: relative;
  padding: 21px 0;

  ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 7.2rem;
    padding: 1rem 0;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 2px;

    li {
      display: flex;
      margin-left: 20px;
      padding: 10px 0;
      cursor: pointer;

      @media (max-width: 885px) {
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

export const Nav = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  height: 4.1rem;
  padding: 0 46px 0 25px;
  font-size: 0.8rem;
  color: white;
  z-index: 1;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.4)
  );
  background-color: ${(props) => (props.isScrolled ? 'rgb(20,20,20) ' : '')};
  transition: ${(props) =>
    props.isScrolled ? 'background-color 1000ms;' : ''};
  transition: background-color 1000ms; // return transition

  @media (min-width: 950px) {
    height: 6.8rem;
    padding: 0 70px 0 35px;
    font-size: 0.9rem;
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

        &:hover {
          color: #b8b8b8;
          transition: 300ms;
        }
      }
    }
  }
`;

export const PrimaryNav = styled.div`
  ${dropdown}
  display: flex;
  align-items: center;

  img {
    width: 70px;
    margin-right: 0px;

    @media (min-width: 950px) {
      width: 120px;
    }

    @media (min-width: 1150px) {
      margin-right: 8px;
    }
  }

  ul {
    width: 20rem;
    top: 7rem;
    left: 34px;
    border-top: 2px solid white;

    img {
      position: absolute;
      top: -13px;
      left: 90px;
      width: 15px;
    }

    li {
      justify-content: center;
      white-space: nowrap;
      width: 100%;

      @media (max-width: 885px) {
        margin-left: 0;
      }

      &:hover {
        background-color: rgba(20, 20, 20, 0.5);
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
  display: flex;
  position: relative;
  height: 100%;
  margin-left: 2rem;

  img {
    position: absolute;
    top: 1px;
    left: 35px;
    width: 10px;
  }

  @media (min-width: 885px) {
    display: none;
  }
`;

export const SecondaryNav = styled.div`
  display: flex;
  align-items: center;
`;

export const Children = styled.li`
  display: none;

  @media (min-width: 1100px) {
    display: block;
  }
`;

export const Notifications = styled.div`
  ${dropdown};
  cursor: pointer;

  ul {
    left: -317px;
    width: 35rem;
    height: 10rem;
    text-align: center;
    border-top: 2px solid white;

    &:hover {
      background-color: rgb(20, 20, 20);
    }

    li {
      margin: auto;
      color: #b8b8b8;
    }

    img {
      position: absolute;
      top: -13px;
      left: 325px;
      width: 13px;
    }
  }
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

    .arrow-up {
      width: 15px;
      position: absolute;
      top: -13px;
      left: 160px;
    }

    li {
      display: flex;
      align-items: center;

      a {
        padding-left: 1rem;

        &:hover {
          text-decoration: underline;
        }
      }

      &:nth-of-type(5) {
        align-self: center;
        margin-left: 0;
        padding-left: 0;
      }
    }

    hr {
      width: 100%;
    }
  }
`;

export function BellIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="Hawkins-Icon Hawkins-Icon-Standard"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z"
        fill="white"
      ></path>
    </svg>
  );
}

export const VerticalSpacer = styled.div`
  height: 2000px;
`;

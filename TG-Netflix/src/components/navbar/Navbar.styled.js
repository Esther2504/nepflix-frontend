import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 6.8rem;
  padding: 0 4.6rem;
  font-size: 1rem;
  color: white;
  z-index: 1;

  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.4)
  );

  ul {
    display: flex;    align-items: center;
    list-style: none;

    /* @media (min-width: 885px) {
    show desktop nav, small font
  } */

    li {
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: white;

        &:hover {
          color: grey;
          transition: 800ms;
        }
      }
    }
  }

  /* @media (min-width: 950px) {
   expand navbar size
  } */

  @media (min-width: 1200px) {
    font-size: 1.4rem;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  /* border: 1px solid red; */
`;
export const PrimaryNav = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  /* border: 1px solid yellow; */

  img {
    width: 12rem;
    margin-right: 1rem;
  }
`;
export const SecondaryNav = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  /* border: 1px solid yellow; */



  /* @media (min-width: 400px) {
    show search function
  } */

  /* @media (min-width: 1100px) {
    show 'Kids' link
  } */
`;
export const Profile = styled.div`
  display: flex;
  position: relative;
  height: 100%;

  img {
    width: 3rem;
    border-radius: 5px;
  }

  ul {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 50px;
    left: -150px;
    width: 20rem;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 5px;

    li {
      display: flex;
      padding: 1.1rem 0;

      &:nth-of-type(4) {
        align-self: center;
        margin-left: 0rem;
      }
    }

    hr {
      width: 100%;
    }
  }

  &:hover {
    ul {
      display: flex;
    }
  }

  /* &:hover{

    ul{
      display: flex;
      flex-direction: ;
    }
  } */
`;
export const Spacer = styled.div`
  height: 2000px;
`;

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/netflix_logo.png';
import profile from '../../assets/profile-icon.png';
import { AiFillCaretDown } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { TbSearch } from 'react-icons/tb';
import { RiPencilFill } from 'react-icons/ri';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BiHelpCircle } from 'react-icons/bi';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll === null;
  };

  return (
    <>
      <Nav role="navigation">
        <Container>
          <PrimaryNav>
            <img src={logo} alt="Netflix logo" />

            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Films</a>
              </li>
            </ul>
          </PrimaryNav>
          <SecondaryNav>
            <ul>
              <li>
                <TbSearch size={30} />
              </li>
              <li>
                <IoMdNotifications size={30} />
              </li>
              <li>
                {' '}
                <Profile>
                  <img src={profile} alt="Profile icon" />
                  <AiFillCaretDown size={15} />
                  <ul>
                    <li>
                      <RiPencilFill size={20} /> Manage Profiles
                    </li>
                    <li>
                      <MdOutlineAccountCircle size={20} />
                      Account
                    </li>
                    <li>
                      <BiHelpCircle size={20} />
                      Help Centre
                    </li>
                    <hr />
                    <li>Sign out of Netflix</li>
                  </ul>
                </Profile>
              </li>
            </ul>
          </SecondaryNav>
        </Container>
      </Nav>
      <Spacer></Spacer>
    </>
  );
}

const Nav = styled.nav`
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
    display: flex;
    align-items: center;
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

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  /* border: 1px solid red; */
`;

const PrimaryNav = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  /* border: 1px solid yellow; */

  img {
    width: 12rem;
    margin-right: 1rem;
  }
`;

const SecondaryNav = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  /* border: 1px solid yellow; */

  img {
    width: 2.5rem;
  }

  /* @media (min-width: 400px) {
    show search function
  } */

  /* @media (min-width: 1100px) {
    show 'Kids' link
  } */
`;

const Profile = styled.div`
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
      padding: 1rem 0;

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

const Spacer = styled.div`
  height: 2000px;
`;

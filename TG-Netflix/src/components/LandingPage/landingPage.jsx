import React from "react";
// import { IconName } from "react-icons/vsc";
// import { IconName } from "react-icons/fa";
import {
  Container,
  LandingCard,
  Nav,
  Footer,
  Icon,
  LoginCard,
  LoginForm,
  SeperationLine,
} from "./style";

const CompLandingPage = () => {
  // IoIosArrowForward

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("I'm rendering")
  }
  return (
    <>
      <Nav>I am a placeholder Navbar</Nav>
      <Container>
        <LandingCard>
          <h1>Welcome to our CloneFlix.</h1>
          <h2>Watch whenever and whereever.</h2>

          {/* Login with just button  */}
          {/* <LoginCard>
            <h3>Continue watching!</h3>
            <button>
              Login
              <Icon>Icon</Icon>
            </button>
          </LoginCard> */}

          {/* Login with Form with filled in email */}
          <LoginForm  onSubmit={handleSubmit}>
            <h3>Ready to continue watching? Login!</h3>
            <input type="email" placeholder="Email adres" value="test@email.com" />
            <button type="submit" >
              Login
              <Icon>Icon</Icon>
            </button>
          </LoginForm>

        </LandingCard>
      </Container>
      <SeperationLine />
      <Footer>I am a placeholder footer</Footer>
    </>
  );
};

export default CompLandingPage;

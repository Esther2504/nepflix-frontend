import React from "react";
import SignIn from "../components/landing-page/SignIn";
import { Background, Nav, Footer } from "../components/landing-page/style";

const LandingPage = () => {


  
  return (
    <Background>
      <Nav>I am a placeholder Navbar</Nav>
      <SignIn />
      <Footer>I am a placeholder footer</Footer>
    </Background>
  );
};

export default LandingPage;

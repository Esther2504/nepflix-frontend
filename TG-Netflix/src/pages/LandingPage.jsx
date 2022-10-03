import React from "react";
import SignIn from "../components/landing-page/SignIn";
import { Background, Footer } from "../components/landing-page/style";

const LandingPage = () => {
  return (
    <>
      <Background>
        <SignIn />
        <Footer>I am a placeholder footer</Footer>
      </Background>
    </>
  );
};

export default LandingPage;

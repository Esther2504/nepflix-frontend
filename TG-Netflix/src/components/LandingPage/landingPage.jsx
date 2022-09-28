import React from "react";

import {
  Container,
  Nav,
  Footer,
  Form,
  Input,
  LoginCard,
  SubForm,
  ExtraInfo,
  SeperationLine,
} from "./style";

const CompLandingPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("I'm not rendering");
  };
  return (
    <>
      <Nav>I am a placeholder Navbar</Nav>
      <Container>
        <LoginCard>
          <h1>Welcome.</h1>
          <h2>Log in and keep watching</h2>
          <Form onSubmit={handleSubmit}>
            <Input>
              <label>
                Email:
                <input
                  type="email"
                  id="email"
                  placeholder="test@hotmail.com"
                ></input>
              </label>

              <label>
                Password:
                <input
                  type="password"
                  id="password"
                  placeholder="test123"
                ></input>
              </label>
            </Input>
            <button type="submit">Login</button>
            <SubForm>
              <label>
                <input type="checkbox" id="checkbox"></input>
                Remember me
              </label>
              <a href="#">Need Help?</a>
            </SubForm>
          </Form>
          <ExtraInfo>
            <p>
              New to CloneFlix? <a href="#">Sign up now</a>
            </p>
            <br />
            <p>
              This product is not the real thing. It is a project made by a roup
              of developers. <a href="#">Learn more</a>
            </p>
          </ExtraInfo>
        </LoginCard>
      </Container>
      <SeperationLine />
      <Footer>I am a placeholder footer</Footer>
    </>
  );
};

export default CompLandingPage;

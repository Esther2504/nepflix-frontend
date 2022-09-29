import React from "react";
import { useNavigate } from 'react-router-dom';

import { Container, Form, Input, LoginCard, SubForm, ExtraInfo } from "./style";

const SignIn = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("I'm not rendering");
  };

  const navigate = useNavigate();

  return (
    <>
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
            {/* Path to Discover page needs ot be place in navigate  */}
            <button type="submit" onClick={() => navigate("To discovre page")}>Login</button>
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
              This product is not the real thing. It is a project made by a
              group of developers. <a href="#">Learn more</a>
            </p>
          </ExtraInfo>
        </LoginCard>
      </Container>
    </>
  );
};

export default SignIn;

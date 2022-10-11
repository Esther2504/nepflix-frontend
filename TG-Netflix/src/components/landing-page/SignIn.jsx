import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginCard,
  Form,
  Input,
  Subform,
  ExtraInfo,
} from "./style";

const SignIn = () => {
  const navigate = useNavigate();

  //Navigate would have to be changed to proper path to Discover page
  const handleSubmit = (e) => {
    e.preventDefault(),
      setTimeout(() => {
        navigate("/browse");
      }, 500)
  };

  return (
    <>
          <LoginCard>
            <h1>Welcome.</h1>
            <Form onSubmit={handleSubmit}>
              <Input>
                <label>
                  Email:
                  <input type="email" placeholder="test@hotmail.com" />
                </label>
                <label>
                  Password:
                  <input type="password" placeholder="test123" />
                </label>
                <button type="submit">Login</button>
              </Input>

              <Subform>
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#">Need Help?</a>
              </Subform>
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
    </>
  );
};

export default SignIn;

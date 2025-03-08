import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginCard,
  // Form,
  // Input,
  // Subform,
  ExtraInfo,
  WelcomeButton
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
            <h1>Welcome</h1>
            <WelcomeButton>
              {/* <Input> */}
                {/* <label>
                  Email:
                  <input type="email" placeholder="test@hotmail.com" />
                </label>
                <label>
                  Password:
                  <input type="password" placeholder="test123" />
                </label> */}
                <button onClick={handleSubmit}>Enter Nepflix</button>
              {/* </Input> */}

              {/* <Subform>
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#">Need Help?</a>
              </Subform> */}
            </WelcomeButton>
            <ExtraInfo>
              {/* <p>
                New to NepFlix? <a href="#" className="landingpage-link">Sign up now</a>
              </p>
              <br /> */}
              <p>
                <em>Disclaimer: this site is not the real thing. It is a project made by a group of developers to practice their React skills.</em>
                {/* <a href="#" className="landingpage-link">Learn more</a> */}
              </p>
            </ExtraInfo>
          </LoginCard>
    </>
  );
};

export default SignIn;

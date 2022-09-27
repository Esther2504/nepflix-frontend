import React from "react";
import { Wrapper } from "./AccountPage.styled";

export default function AccountPage() {
  return (
    <Wrapper>
      <nav>Navigatie placeholder</nav>
      <div className="account-container">
        <div className="heading">
        <h1>Account</h1>
        <img src="https://assets.nflxext.com/ffe/siteui/account/svg/membersince.svg"></img>
        <p>Member since September 2022</p>
        </div>
        <div className="account-section membership">
          <div className="left-side">
            <h2>MEMBERSHIP & BILLING</h2>
            <button>Cancel Membership</button>
          </div>
          <div className="subsections-container">
            <div className="account-subsection">
              <div>
                <p>johndoe@gmail.com</p>
                <p>Password: *******</p>
              </div>

              <div className="links">
                <ul>
                  <li>
                    <a href="">Change email</a>
                  </li>
                  <li>
                    <a href="">Change password</a>
                  </li>
                  <li>
                    <a href="">Add phone number</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="line" />
            <div className="account-subsection">
              <div>
                <p>Random Bank</p>
                <p>Your next billing date is 13 October 2022.</p>
              </div>

              <div className="links">
                <ul>
                  <li>
                    <a href="">Manage payment info</a>
                  </li>
                  <li>
                    <a href="">Add backup payment method</a>
                  </li>
                  <li>
                    <a href="">Billing details</a>
                  </li>
                  <li>
                    <a href="">Change billing day</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="line" />
            <div className="account-subsection">
              <div></div>

              <div className="links">
                <ul>
                  <li>
                    <a href="">Redeem gift card or promo code</a>
                  </li>
                  <li>
                    <a href="">Where to buy gift cards</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="account-section plan">
          <div>
            <h2>PLAN DETAILS</h2>
          </div>
          <div className="subsections-container">
            <div className="account-subsection">
              <div>
                <p>Basic</p>
              </div>

              <div className="links">
                <ul>
                  <li>
                    <a href="">Change plan</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="account-section profile">
          <div>
            <h2>PROFILE & PARENTAL CONTROLS</h2>
          </div>
          {/* Map accounts? */}
        </div>
        <div className="account-section settings">
          <h2>SETTINGS</h2>
        
        <div className="account-subsection settings">
        <div className="links">
                <ul>
                  <li>
                    <a href="">Change email</a>
                  </li>
                  <li>
                    <a href="">Change password</a>
                  </li>
                  <li>
                    <a href="">Add phone number</a>
                  </li>
                </ul>
              </div>
              </div>
              
      </div>
      </div>
      {/* <footer>Footer placeholder</footer> */}
    </Wrapper>
  );
}

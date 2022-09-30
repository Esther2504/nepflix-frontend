import React from "react";
import { data } from "../../pages/account/account";
import {
  AccountSection,
  AccountSubSection,
} from "../../pages/account/AccountPage.styled";
import { BsChevronRight } from "react-icons/bs";

export default function MembershipSection() {
  
  // Berekent een nieuwe billing date nadat de vorige billing date is gepasseerd
  let currentDate = new Date();
  let billingDate = new Date();
  billingDate.setDate(`${data.register_day}`);

  if (currentDate.getDate() >= billingDate.getDate()) {
    billingDate = new Date();
    billingDate.setDate(`${data.register_day}`);
    billingDate.setMonth(currentDate.getMonth() + 1);
  } else if (
    currentDate.getDate() >= billingDate.getDate() &&
    currentDate.getMonth === 11
  ) {
    billingDate = new Date();
    billingDate.setDate(`${data.register_day}`);
    billingDate.setMonth(0);
    billingDate.setMonth(currentDate.getFullYear() + 1);
  }
  const options = { year: "numeric", month: "long", day: "numeric" };
  let billdate = billingDate.toLocaleDateString("en-NL", options);

  return (
    <AccountSection>
      <div className="account-section-header">
        <h2>MEMBERSHIP & BILLING</h2>
        <button className="cancel-btn">Cancel Membership</button>
      </div>
      <div className="subsections-container">
        <AccountSubSection>
          <div>
            <p>{data.email}</p>
            <p>Password: *******</p>
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="">
                  Change email{" "}
                  <div className="arrow-mobile">
                    <BsChevronRight size={"2.2rem"} />
                  </div>
                </a>
              </li>
              <li>
                <a href="">
                  Change password{" "}
                  <div className="arrow-mobile">
                    <BsChevronRight size={"2.2rem"} />
                  </div>
                </a>
              </li>
              <li>
                <a href="">
                  Add phone number{" "}
                  <div className="arrow-mobile">
                    <BsChevronRight size={"2.2rem"} />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </AccountSubSection>
        <hr className="membership-section-divider" />
        <AccountSubSection>
          <div>
            <div className="payment-method">
              <img src={data.payment_logo} />
              <p>{data.payment_method}</p>
            </div>
            <p>Your next billing date is {billdate}.</p>
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="">
                  Manage payment info{" "}
                  <div className="arrow-mobile">
                    <BsChevronRight size={"2.2rem"} />
                  </div>
                </a>
              </li>
              <li>
                <a href="">
                  Add backup payment method{" "}
                  <div className="arrow-mobile">
                    <BsChevronRight size={"2.2rem"} />
                  </div>
                </a>
              </li>
              <li>
                <a href="">
                  Billing details{" "}
                  <div className="arrow-mobile">
                    <BsChevronRight size={"2.2rem"} />
                  </div>
                </a>
              </li>
              <li>
                <a href="">
                  Change billing day{" "}
                  <div className="arrow-mobile">
                    <BsChevronRight size={"2.2rem"} />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </AccountSubSection>
        <hr className="membership-section-divider" />
        <AccountSubSection>
          <div></div>
          <div className="links gift-cards-section">
            <ul>
              <li>
                <a href="">
                  Redeem gift card or promo code{" "}
                  <div className="arrow-mobile">
                    <BsChevronRight size={"2.2rem"} />
                  </div>
                </a>
              </li>
              <li>
                <a href="">
                  Where to buy gift cards{" "}
                  <div className="arrow-mobile">
                    <BsChevronRight size={"2.2rem"} />
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <button className="cancel-btn-mobile">Cancel Membership</button>
        </AccountSubSection>
      </div>
    </AccountSection>
  );
}

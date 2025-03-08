import React from "react";
import { data } from "../../pages/account/account";
import {
  AccountSection,
  AccountSubSection,
} from "../../pages/account/AccountPage.styled";
import { BsChevronRight } from "react-icons/bs";

export default function PlanSection() {
  return (
    <AccountSection>
      <div className="account-section-header">
        <h2>PLAN DETAILS</h2>
      </div>
      <div className="subsections-container">
        <AccountSubSection>
          <div>
            <p>{data.plan}</p>
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="">
                  Change plan{" "}
                  <div className="arrow-mobile">
                    <BsChevronRight size={"2.2rem"} />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </AccountSubSection>
      </div>
    </AccountSection>
  );
}

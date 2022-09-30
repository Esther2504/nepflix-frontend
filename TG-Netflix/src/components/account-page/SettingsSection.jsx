import React from "react";
import { AccountSection } from "../../pages/account/AccountPage.styled";
import { BsChevronRight } from "react-icons/bs";

export default function SettingsSection() {
  return (
    <AccountSection>
      <div className="account-section-header">
        <h2>SETTINGS</h2>
      </div>
      <div className="account-subsection settings-section">
        <div className="links">
          <ul>
            <li>
              <a href="">
                Test participation{" "}
                <div className="arrow-mobile">
                  <BsChevronRight size={"2.2rem"} />
                </div>
              </a>
            </li>
            <li>
              <a href="">
                Manage download devices{" "}
                <div className="arrow-mobile">
                  <BsChevronRight size={"2.2rem"} />
                </div>
              </a>
            </li>
            <li>
              <a href="">
                Recent device streaming activity{" "}
                <div className="arrow-mobile">
                  <BsChevronRight size={"2.2rem"} />
                </div>
              </a>
            </li>
            <li>
              <a href="">
                Sign out of all devices{" "}
                <div className="arrow-mobile">
                  <BsChevronRight size={"2.2rem"} />
                </div>
              </a>
            </li>
            <li>
              <a href="">
                Download your personal information{" "}
                <div className="arrow-mobile">
                  <BsChevronRight size={"2.2rem"} />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </AccountSection>
  );
}

import React from "react";
import { data } from "../../pages/account/account";
import { Header } from "../../pages/account/AccountPage.styled";
import membersince from "../../assets/account-images/membersince.svg";

export default function HeaderSection() {
  return (
    <Header>
      <h1>Account</h1>
      <div className="member-date">
        <img src={`${membersince}`} />
        <p>
          Member since {data.register_month} {data.register_year}
        </p>
      </div>
    </Header>
  );
}

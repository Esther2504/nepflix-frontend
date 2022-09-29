import React from "react";
import { Wrapper } from "./AccountPage.styled";

// Components imports
import MembershipSection from "../../components/account-page/MembershipSection";
import PlanSection from "../../components/account-page/PlanSection";
import ProfileSection from "../../components/account-page/ProfileSection";
import SettingsSection from "../../components/account-page/SettingsSection";
import HeaderSection from "../../components/account-page/HeaderSection";

export default function AccountPage() {
  return (
    <Wrapper>
      <nav>Navigatie placeholder</nav>
      <div className="account-container">
        <HeaderSection />
        <MembershipSection />
        <PlanSection />
        <ProfileSection />
        <SettingsSection />
      </div>
      {/* <footer>Footer placeholder</footer> */}
    </Wrapper>
  );
}

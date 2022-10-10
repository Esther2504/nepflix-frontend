import React from "react";
import { Wrapper, ProfileStyling } from "./AccountPage.styled";

// Componenten imports
import MembershipSection from "../../components/account-page/MembershipSection";
import PlanSection from "../../components/account-page/PlanSection";
import ProfileSection from "../../components/account-page/ProfileSection";
import SettingsSection from "../../components/account-page/SettingsSection";
import HeaderSection from "../../components/account-page/HeaderSection";
import AccountFooter from "../../components/footer/AccountFooter";
import NavbarAccount from "../../components/navbar/NavbarAccount";

export default function AccountPage() {
  return (
    <Wrapper>
      <NavbarAccount/>
      <div className="account-container">
        <HeaderSection />
        <MembershipSection />
        <PlanSection />
        <ProfileStyling>
          <ProfileSection />
        </ProfileStyling>
        <SettingsSection />
      </div>
      <AccountFooter/>
    </Wrapper>
   
  );
}

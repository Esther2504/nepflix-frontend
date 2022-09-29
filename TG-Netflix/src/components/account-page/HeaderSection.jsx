import React from 'react'
import { data } from "../../pages/account/account";

import membersince from "../../assets/account-images/membersince.svg";

export default function HeaderSection() {
  return (
    <div className="header">
    <h1>Account</h1>
    <img src={`${membersince}`} />
    <p>
      Member since {data.register_month} {data.register_year}
    </p>
  </div>
  )
}

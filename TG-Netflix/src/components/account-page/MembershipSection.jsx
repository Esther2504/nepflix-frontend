import React from 'react'
import { data } from "../../pages/account/account";

export default function MembershipSection() {
    let currentDate = new Date()
    let billingDate = new Date(`${data.register_date}`)
    
    if ((currentDate.getDate() === billingDate.getDate()) && (currentDate.getMonth() === billingDate.getMonth())) {
      billingDate = currentDate.setMonth(currentDate.getMonth() + 1)
      billingDate = new Date(billingDate)
    }
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    let datet = billingDate.toLocaleDateString('en-NL', options)

  return (
    <div className="account-section membership">
    <div className="left-side">
      <h2>MEMBERSHIP & BILLING</h2>
      <button>Cancel Membership</button>
    </div>
    <div className="subsections-container">
      <div className="account-subsection">
        <div>
          <p>{data.email}</p>
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
          <div className="payment-method">
            <img src={data.payment_logo} />
            <p>{data.payment_method}</p>
          </div>
          <p>Your next billing date is {datet}.</p>
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
  )
}

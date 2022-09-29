import React from 'react'
import { data } from "../../pages/account/account";

export default function PlanSection() {
  return (
    <div className="account-section plan">
          <div className="left-side">
            <h2>PLAN DETAILS</h2>
          </div>
          <div className="subsections-container">
            <div className="account-subsection">
              <div>
                <p>{data.plan}</p>
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
  )
}

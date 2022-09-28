import React, { useState } from "react";
import { Wrapper } from "./AccountPage.styled";
import data from "./account.json";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

export default function AccountPage() {
const [collapse, setCollapse] = useState(false)

function handleClick(param) {
  console.log(param)
  if (collapse != param) {
  setCollapse(param)
  } else {
    setCollapse(false)
  }
}

console.log(collapse)

  return (
    <Wrapper>
      <nav>Navigatie placeholder</nav>
      <div className="account-container">
        <div className="heading">
          <h1>Account</h1>
          <img src="https://assets.nflxext.com/ffe/siteui/account/svg/membersince.svg"></img>
          <p>
            Member since {data.register_month} {data.register_year}
          </p>
        </div>
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
                  <img src={data.payment_logo}></img>{" "}
                  <p>{data.payment_method}</p>
                </div>
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
        <div className="account-section">
          <div className="left-side">
            <h2>PROFILE & PARENTAL CONTROLS</h2>
          </div>
          <div className="subsections-container">
            {data.profiles.map((profile) => (
              <>
                <div className="profile-section" onClick={() => handleClick(`${profile.id}`)}>
                  <div className="left">
                    <img src={profile.avatar} />
                    <div className="name-rating">
                      <p>{profile.name}</p>
                      <p>{profile.rating}</p>
                    </div>
                  </div>
                  <BsChevronUp />
                </div>
                <hr className="big-line" />
                {collapse === `${profile.id}` ? 
                <>
                <div className="profile-subsection">
                  <div>
                  <p>Language</p>
                  <p>{profile.language}</p>
                  </div>
                  <a href="">Change</a>
                  </div>
                  <hr className="small-line" />
                <div className="profile-subsection">
                  <div>
                  <p>Viewing Restrictions</p>
                  <p>{profile.restrictions}</p>
                  </div>
                  <a href="">Change</a>
                  
                </div>
                <hr className="small-line" />
                <div className="profile-subsection">
                  <div>
                  <p>Profile Lock</p>
                  <p>{profile.profile_lock}</p>
                  </div>
                  <a href="">Change</a>
                  
                </div>
                <hr className="small-line" />
                <div className="profile-subsection">
                
                  <p>Viewing activity</p>
                  <a href="">View</a>
                 
                 
                </div>
                <hr className="small-line" />
                <div className="profile-subsection">
                  
                  <p>Ratings</p>
                  <a href="">View</a>
                  
              
                </div>
                <hr className="small-line" />
                <div className="profile-subsection">
                
                  <p>Subtitle appearance</p>
                  <a href="">Change</a>
                 
                 
                </div>
                <hr className="small-line" />
                <div className="profile-subsection">
                  <div>
                  <p>Playback settings</p>
                  <p>{profile.playback_settings}</p>
                  </div>
                  <a href="">Change</a>
                 
                </div>
                <hr className="small-line" />
                <div className="profile-subsection">
                  <p>Communication settings</p>
                  <a href="">Change</a>
                 
                </div>
                <hr className="small-line" />
                <div className="profile-subsection">
                  <p>Marketing communications</p>
                  <a href="">Change</a>
                </div>
                
                <hr className="big-line" />
                </>
             :
                null
}
              </>
            ))}
          </div>
        </div>
        <div className="account-section">
          <h2>SETTINGS</h2>
          <div className="account-subsection settings">
            <div className="links">
              <ul>
                <li>
                  <a href="">Test participation</a>
                </li>
                <li>
                  <a href="">Manage download devices</a>
                </li>
                <li>
                  <a href="">Recent device streaming activity</a>
                </li>
                <li>
                  <a href="">Sign out of all devices</a>
                </li>
                <li>
                  <a href="">Download your personal information</a>
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

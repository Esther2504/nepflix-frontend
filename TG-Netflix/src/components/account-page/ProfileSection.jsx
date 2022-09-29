import React, { useState } from 'react'
import { data } from "../../pages/account/account";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

export default function ProfileSection() {
    const [collapse, setCollapse] = useState([]);

    function handleClick(param) {
      console.log(param);
      if (!collapse.includes(param)) {
        setCollapse([...collapse, param]);
      } else {
        let itemToRemove = collapse.find((item) => item === param);
        if (itemToRemove) {
          setCollapse(collapse.filter((item, index) => item !== itemToRemove));
        }
      }
    }
  
    console.log(collapse);

  return (
    <div className="account-section">
          <div className="left-side">
            <h2>PROFILE & PARENTAL CONTROLS</h2>
          </div>
          <div className="subsections-container">
            {data.profiles.map((profile) => (
              <>
                <div
                  className="profile-section"
                  onClick={() => handleClick(`${profile.id}`)}
                >
                  <div className="left">
                    <img src={profile.avatar} />
                    <div className="name-rating">
                      <p>{profile.name}</p>
                      <p>{profile.rating}</p>
                    </div>
                  </div>
                  {collapse === `${profile.id}` ? (
                    <BsChevronUp />
                  ) : (
                    <BsChevronDown />
                  )}
                </div>
                {profile.id + 1 <= Object.keys(data.profiles).length ? (
                  <hr className="big-line" />
                ) : null}
                {collapse.includes(`${profile.id}`) ? (
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
                ) : null}
              </>
            ))}
          </div>
        </div>
  )
}

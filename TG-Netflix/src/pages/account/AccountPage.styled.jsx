import styled from "styled-components";

export const Wrapper = styled.div`
// nav en footer placeholders
nav {
  width: 100%;
  height: 7rem;
  background-color: black;
  color: white;
  font-size: 3rem;
  position: fixed;
  top: 0;
  text-align: center;
}

footer {
  width: 100%;
  height: 28rem;
  font-size: 3rem;
  border-top: 1px solid #ccc;
  background-color: #f3f3f3;
  text-align: center;
}

// Account page styling
background-color: #f3f3f3;
color: #333333;
width: 100%;
min-height: 100vh;

a {
  text-decoration: none;
  color: #0073e6;
  font-weight: 500;
}

a:hover {
  text-decoration: underline;
}

.account-container {
  width: 80%;
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 7rem;
}

@media screen and (max-width: 500px) {
  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
  }

  .account-container {
    width: 90%;
  }
}
`;

export const Header = styled.div`
display: flex;
align-items: center;
margin-bottom: 1.4rem;

h1 {
font-size: 3.44rem;
font-weight: 500;
}

p {
font-weight: 500;
text-shadow: 1px 0 #888888;
letter-spacing: 1px;
font-size: 1.28rem;
padding: 0 0 0 0.5rem;
}

.member-date {
display: flex;
height: 2.6rem;
margin-left: 2rem;
align-items: center;
}

@media screen and (max-width: 740px) {
h1 {
  font-size: 2.2rem;
}
}

@media screen and (max-width: 500px) {
flex-direction: column;
align-items: flex-start;

.member-date {
  margin-left: 0;
}
}
`;

export const AccountSection = styled.div`
border-top: 1px solid #999;
display: flex;
justify-content: space-between;
font-size: 1.58rem;
padding-bottom: 1.2rem;
min-height: 8rem;

h2 {
  color: #737373;
  font-size: 1.8rem;
  font-weight: 500;
}

p {
  margin-bottom: 0.8rem;
}

p:first-child {
  font-weight: bold;
}

.account-section-header {
  padding-top: 1.2rem;
  width: 23%;
  font-weight: 500;
  color: #737373;
}

.subsections-container {
  display: flex;
  flex-direction: column;
  width: 74%;
}

.account-subsection {
  padding-top: 1.2rem;

  ul {
    list-style: none;
  }
}

.arrow-mobile {
  display: none;
}

.membership-section-divider {
  opacity: 0.2;
}

.payment-method {
  display: flex;
  font-weight: bold;
  width: 8rem;
  justify-content: space-between;

  img {
    width: 2.2rem;
    height: 2.5rem;
  }
}

.cancel-btn {
  width: 19.5rem;
  height: 3.8rem;
  padding: 1rem;
  font-size: 1.3rem;
  font-weight: 500;
  border: none;
  background-color: #e6e6e6;
  background-image: linear-gradient(180deg, #e6e6e6, #ddd);
  box-shadow: 0 1px 0 rgb(0 0 0 / 20%);
  margin-top: 0.8rem;
  cursor: pointer;
}

.cancel-btn:hover {
  background: #eaeaea;
}

.cancel-btn-mobile {
  display: none;
  width: 95%;
  margin: 1rem auto;
  height: 5rem;
  padding: 1rem;
  font-size: 1.8rem;
  font-weight: 500;
  border: none;
  background-color: #e6e6e6;
  background-image: linear-gradient(180deg, #e6e6e6, #ddd);
  box-shadow: 0 1px 0 rgb(0 0 0 / 20%);
  margin-top: 0.8rem;
  cursor: pointer;
}

.cancel-btn-mobile:hover {
  background: #eaeaea;
}

.settings-section {
  width: 74%;
  align-self: flex-start;

  li {
    text-align: left;
    padding-bottom: 1rem;
  }
}

@media screen and (max-width: 820px) {
  .subsections-container {
    width: 60%;
  }

  .settings-section {
    width: 60%;
  }
}

@media screen and (max-width: 740px) {
    flex-direction: column;

    .account-section-header {
      width: 100%;
    }

    .subsections-container {
      width: 100%;
    }
}

@media screen and (max-width: 500px) {
background-color: #FFF;
border: 1px solid #999;
flex-direction: column;
padding: 1rem;
margin-bottom: 0.7rem;

a {
  display: flex;
  justify-content: space-between;
}

.arrow-mobile {
 color: #999;
 height: 2.5rem;
 display: flex;
 align-items: center;
}

.account-section-header {
  width: 100%;
    }
  
    .subsections-container {
      width: 100%;
    }

.membership-section-divider {
  opacity: 0.8;
}

.cancel-btn {
  display: none;
}

.cancel-btn-mobile {
  display: block;
}

.settings-section {
  width: 100%;

  li {
      text-align: left;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
         border-top: 1px solid #ccc;
  }
}
}
`;

export const AccountSubSection = styled.div`
display: flex;
justify-content: space-between;
padding-top: 1.2rem;

.links {
  ul {
    list-style: none;
    text-align: right;

    li {
      margin: 0 0 6px 0;
    }
  }
  }
}

.password {
  color: #737373;
}

@media screen and (max-width: 500px) {
  flex-direction: column;
  margin-top: 0.8rem;

  a {
    display: flex;
    justify-content: space-between;
  }

  .arrow-mobile {
   color: #999;
   height: 2.5rem;
   display: flex;
   align-items: center;
  }

  .links {
    ul {
      list-style: none;
      text-align: left;
  
      li {
       padding-top: 1.5rem;
       padding-bottom: 1rem;
        border-top: 1px solid #ccc;
      }
    }
  }

  .gift-cards-section {
    margin-top: -2rem;
  
  li {
    border-top: 0 !important;  
  }
}
  }
`;

export const ProfileStyling = styled.div`
.profile-container {
  display: flex;
  flex-direction: column;
}

.profile-section {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 2rem 0 2rem;
  align-items: center;
  cursor: pointer;

  .profile-section-person {
    display: flex;
  }

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 0.5rem;
  }

  .name-rating {
    align-self: center;

    p {
      margin: 0 0 0 1.8rem;
    }

    p:nth-child(2) {
      font-size: 1.3rem;
      color: #787878;
    }
  }
}

.profile-subsection {
  width: 89%;
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0 2rem 0;
  margin-right: 0;
  align-items: center;
  font-size: 1.3rem;
  cursor: pointer;
  min-height: 5rem;

  p:first-child {
    font-size: 1.45rem;
    font-weight: 500;
    margin-bottom: 0;
  }

  p:nth-child(2) {
    color: #787878;
  }
}

.profile-divider {
  width: 100%;
  border-top: 1px solid #ccc;
}

.profile-section-divider {
  width: 89%;
  align-self: flex-end;
  border-top: 1px solid #ccc;
}

.profile-section-person:nth-child(3) {
  .profile-divider {
    display: none;
  }
}

@media screen and (max-width: 500px) {
a {
color: #0073e6;
  }

.profile-subsection {
width: 75%;
  }

.profile-section-divider {
  width: 75%;
  }
}
`;

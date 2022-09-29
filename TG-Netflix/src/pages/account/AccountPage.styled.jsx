import styled from "styled-components";

export const Wrapper = styled.div`
background-color: #f3f3f3;
color: #333333;
width: 100%
position: relative;
min-height: 100vh;

a {
  text-decoration: none;
  color: #0073e6;
  font-weight: 500;
}

a:hover {
  text-decoration: underline;
}


.left-side {
  padding-top: 1.2rem;
  width: 23%;
  font-weight: 500;
  color: #737373;
}

.heading {
  display: flex;
  align-items: center;
  margin-bottom: 1.4rem;

  h1 {
    margin-right: 1.5rem;
    font-size: 3.3rem;
    font-weight: 500;
  }

  p {
    font-weight: 500;
    text-shadow: 1px 0 #888888;
    letter-spacing:1px;
    font-size: 1.2rem;
    margin-left: 0.4rem;
  }


}

.left:nth-child(3) {
  .big-line {
    display: none;
  }
}

  nav {
    width: 100%;
    height: 7rem;
    background-color: black;
    color: white;
    font-size: 3rem;
    position: fixed;
    top: 0;
  }

  .account-container {
    width: 81%;
    margin: 4rem auto auto;
    padding-top: 7rem;
    padding-bottom: 7rem;

    button {
      width: 19.5rem;
      height: 3.8rem;
      padding: 1rem;
      font-size: 1.3rem;
      font-weight: 500;
      border: none;
      background-color: #e6e6e6;
      background-image: linear-gradient(180deg,#e6e6e6,#ddd);
      box-shadow: 0 1px 0 rgb(0 0 0 / 20%);
      margin-top: 0.8rem;
      cursor: pointer;
    }

    button:hover {
      background: #eaeaea;
    }
  }

  .account-section {
    border-top: 1px solid #999;
    display: flex;
    justify-content: space-between;
    font-size: 1.58rem;
    padding-bottom: 1.2rem;
    min-height: 8rem;

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

    .line {
      opacity: 0.2;
    }


    h2 {
        color: #737373;
        font-size: 1.9rem;
        font-weight: 500;
    }

    p {
      margin-bottom: 0.8rem;
    }

    p:first-child {
      font-weight: bold;
    }
  }

  .small-line {
    width: 90%;
    align-self: flex-end;
  }

  .account-subsection {
    display: flex;
    justify-content: space-between;
    padding-top: 1.2rem;

    .links {

      ul {
      list-style:none;
      text-align: right;

      li {
        margin: 0 0 6px 0;
      }

      }
    }

  }

  .settings {
    width: 74%;
    align-self: flex-start;
  }

.settings li {
      text-align: left;
  }

  .subsections-container {
    display: flex;
    flex-direction: column;
    width: 74%;

  }

  .profile-section {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 2rem 0 2rem;
    align-items: center;
    cursor: pointer;

    .left {
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
      }
    }

 
  }

  .profile-subsection {
    width: 90%;
    align-self: flex-end;
    display: flex;
    justify-content: space-between;
    margin: 2rem 0 2rem;
    align-items: center;
    font-size: 1.3rem;
    cursor: pointer;

    p:first-child {
      font-size: 1.45rem;
      font-weight: 500;
      margin-bottom: 0;
    }
  }

.big-line {
  width: 100%;
}

  footer {
    width: 100%;
    height: 12rem;
    font-size: 3rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #f3f3f3;
  }
`;

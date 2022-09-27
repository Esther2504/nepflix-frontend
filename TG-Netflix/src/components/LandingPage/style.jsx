import style from "styled-components";

export const Container = style.div`
    background-color: black;
    font-size: 2rem;
    color: white;
    width: 100%;
    height: 95vh;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 988px) {
           background-color: grey;
           flex-direction: column;
           font-size: 1.75rem;
        }

   @media (max-width: 645px) {
        // font-size: 1.55rem;
        background-color: purple;
        }       

   @media (max-width: 400px) {
        font-size: 1.55rem;
        background-color: blue;
        }        
`;

export const LandingCard = style.div`
    // background-color: white;
    // border: 1px solid yellow;
    color: white;    
    // color: black;
    width: 80%;
    height: 95%;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 705px) {
        width: 100%;
        padding: 0;
        // height: auto;
    }

    h1, h2 {
        text-align: center;
        margin: 1rem;
        padding: 1rem;
        @media (max-width: 450px) {
                padding: 0.5rem;
                margin: 0.5rem;
                }
            }
`;

export const LoginCard = style.div`
    background-color: pink;
    opacity: 0.5;
    color: black;
    border: 1px solid yellow;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin: auto 1rem;
    @media (max-width: 1045px) {
        flex-direction: column;
        width: 100%;
      }


    h3, button {
        // margin: auto;
        padding: 1rem ;
    }


    h3 {
        width: 65%;
        text-align: center;
    }

    button {
        width: 35%;
    }
`;

export const LoginForm = style.form`
// background-color: pink;
color: black;
color: white;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
width: 70%;
margin: 1rem;
text-align: center;
@media (max-width: 1045px) {
    flex-direction: column;
    width: 100%;
    }

  input {
    width: 65%;
  }

  button {
    width: 35%;
    }

  h3, input, button {
    padding: 0.75rem; 
    @media (max-width: 1045px) {
        margin: 0.5rem;
        width: 80%;
        }
   @media (max-width: 600px) {
        width: 90%;
        }
    }  
`;

export const SeperationLine = style.hr`
    background-color: green;
    width: 100%;
    padding: 0.5rem;
`;

//// PLACEHOLDER

export const Nav = style.div`
    background-color: pink;
    border: 1px solid red;
    font-size: 2rem;
    z-index: 5;
    width: 100%;
    height: 6rem;
`;

export const Footer = style.div`
    background-color: pink;
    border: 1px solid red;
    font-size: 2rem;
    width: 100%;
    height: 250px;
    // height: 1rem;
`;

export const Icon = style.span`
    background-color: lightblue;
    border: 1px solid black;
    width: 1rem;
    margin-left: 1rem;
`;

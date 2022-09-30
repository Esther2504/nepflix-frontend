import style from "styled-components";
import bgImage from "./netflixbg.png";

// Variables for Netflix' color pallet 
// https://www.color-hex.com/color-palette/22942 


export const Container = style.div`
    background-color: rgb(0,0,0,0.6); 
    font-size: 2rem;
    color: rgb(255,255,255);
    width: 100%;
    padding: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 700px) {
        margin: 0;
        padding: 0;
        height: auto;
    } 

    a{
        color:  rgb(255,255,255);

        &:visited {
            color:  rgba(219,0,0);
        }
    }
`;

export const Form = style.form`
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // height: 45%;
    padding: 60px 60px 40px;
    margin: 1rem;
    @media only screen and (max-width: 700px) {
        min-height: 50%;
        margin: auto;
        min-width: 90%;
        padding: 20px 40px 20px;
        justify-content: center;
    }

    button {
        width: 100%;
        margin: 2rem 0 1rem;
        padding: 2rem 0;
        border-radius: 2%;
        border: none;
        background-color:  rgba(219,0,0);
        color: rgb(255,255,255);
        font-weight: bold;
    }
    
`;

export const Input = style.div`
    label{
        margin: 0.75rem 0;
        // padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

 input{
        border-color: red;
        border: none;
        border-radius: 4px;
        width: 100%;
        line-height: 50px;
        padding: 5px 10px 0;
        @media only screen and (max-width: 700px){
        padding: 0.35rem;
        margin: 0.20rem;
        }

        &:focus {
            background-color: lightblue;
            outline: none;
            border: 3px solid red;
        }
    }
`;

export const LoginCard = style.div`
    background-color: rgb(0,0,0, 0.8);
    border-radius: 2%;
    width: 500px;
    height: 85vh;
    text-align: center;
    font-size: 1.7rem;
    @media only screen and (max-width: 700px) {
        width: 100%;
        height: 100vh;
        padding: 0;
        margin: 0;
        border-radius: 0;
    }

    h1, h2 {
        padding: 0.55rem;
        margin: 0.55rem;
        @media only screen and (max-width: 700px) {
            padding: 0.25rem;
            margin: 0.25rem;
        }
    }
`;

export const SubForm = style.div`
    // color: white;  // grey-ish
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0.5rem;
    font-size: 1.25rem;

    input[type= checkbox]{
        appearance: none;
        position: relative;
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.35rem;
        border: white;
        background-color: black;
        border: 0.5px solid white;
        color: white;
        vertical-align: -3px;

        &::before {
            content: "";
            visibility: hidden;
            width: 1.5rem;
            height: 1.5rem;
            position: absolute;
            font-size: 1.5rem;
            right: -1px;
            top: -1px;
            background-color: red;
            border: 1px solid white;
          }

         &:checked::before{
            visibility: visible;
         } 
    }
`;

export const ExtraInfo = style.div`
    text-align: left;
    padding: 1rem 2.5rem 2rem;
    margin: 1rem;
    dislay: flex;
    flexwrap: wrap;
    flex-direction: column;
    font-size: 1.5rem;
`;

export const Background = style.div`
background-image: url(${bgImage}); 
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`;

export const Logo = style.div`
    background-color: rgb(0,0,0,0.6); 
    // font-size: 2rem;
    width: 100%;
    height: auto;
    // margin: 2rem;
    @media only screen and (max-width: 700px){
        background-color: rgb(0,0,0, 0.9); 
        // height: 8rem;
    }

    svg {
        width: 25%;
        height: 6rem;
        // padding: 1rem;
        // margin-bottom: 2rem;
        position: relative;
        left: 20px;
        top: 20px;
        fill: red;
        @media only screen and (max-width: 700px){
           width: 30%;
           left: 15px;
        }
    }
`;



//// PLACEHOLDER



export const Footer = style.div`
    // background-color: pink;
    border: 1px solid red;
    font-size: 2rem;
    width: 100%;
    height: 250px;
`;

import style from "styled-components";
import bgImage from "./netflixbg.png";

// Variables for Netflix' color pallet 
// https://www.color-hex.com/color-palette/22942 


export const Container = style.div`
    background-color: rgb(0,0,0,0.6);
    color: rgb(255,255,255);
    width: 100%;
    height: 100vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
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
    padding: 60px 60px 40px;
    @media only screen and (max-width: 700px) {
        margin: auto;
        min-width: 90%;
        padding: 40px 40px 30px;
        justify-content: center;
    }

    button {
        width: 100%;
        margin: 2rem 0 1rem;
        padding: 2rem 0;
        border-radius: 2%;
        border: none;
        background-color: rgba(219,0,0);
        color: rgb(255,255,255);
        font-weight: bold;

        &:hover {
            cursor: pointer;
        }
    }
    
`;

export const Input = style.div`
    label{
        margin: 0.75rem 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

 input{
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
            background-color: rgb(211,211,211);
            outline: none;
        }
    }
`;

export const LoginCard = style.div`
    background-color: rgb(0,0,0, 0.8);
    border-radius: 2%;
    width: 450px;
    margin-bottom: 15px;
    min-height: 600px;
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
        padding: 0.35rem;
        margin: 0.35rem;
        @media only screen and (max-width: 700px) {
            padding: 0.25rem;
            margin: 0.25rem;
        }
    }
`;

export const SubForm = style.div`
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
        border: (255,255,255);
        background-color: grey;
        color: rgb(255,255,255);
        vertical-align: -3px;

        &: hover{
            cursor: pointer;
        }

        &::before {
            content: "";
            visibility: hidden;
            width: 1.5rem;
            height: 1.5rem;
            position: absolute;
            font-size: 1.5rem;
            right: -1px;
            top: -1px;
            background-color: rgba(219,0,0);
            border: 1px solid rgba(255, 255, 255);
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
    font-size: 1.5rem;
`;

export const Background = style.div`
background-image: url(${bgImage}); 
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`;

export const Logo = style.div`
    width:100%;
    height: 90px;
    padding: 0.5rem;
    margin: 2rem;
    position: relative;
    @media only screen and (max-width: 700px){
        background-color: rgb(0,0,0, 0.8); 
        margin: 0;
        padding: 1rem;
        top: 0;
    }

    svg {
        width: 250px;
        height: 50px;
        fill:  rgba(219,0,0);
    }
`;

export const Spacer = style.div`
    background-color: rgb(0,0,0, 0.6); 
    height: 75px;
    @media only screen and (max-width: 700px){
        display: none;
    }
`;


//// PLACEHOLDER, to be replaced with actual footer.

export const Footer = style.div`
    background-color: pink;
    opacity: 0.5;
    border: 1px solid red;
    font-size: 2rem;
    width: 100%;
    height: 250px;
`;

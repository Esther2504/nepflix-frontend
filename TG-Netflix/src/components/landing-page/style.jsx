import style from "styled-components";
import bgImage from "../../assets/landing-page/NetflixBg2.jpg";

// Variables for Netflix' color pallet 
// https://www.color-hex.com/color-palette/22942 

export const Container = style.div`
    background-color: rgb(0,0,0, 0.6);
    height: 100%;
    @media only screen and (max-width: 750px){
    background-color: black;
    }
`;

export const Background = style.div`
background-image: url(${bgImage}); 
background-repeat: no-repeat;
background-position: center;
background-size: cover;
padding-bottom: 10px;


    img {
        min-height: 100%;
        min-width: 100%;
        position: absolute;
        @media only screen and (max-width: 750px){
            display: none;
        }
    }
`;

export const Logo = style.div`
width:100%;
height: 90px;
padding: 2rem;
position: relative;
@media only screen and (max-width: 750px){
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

export const Wrapper = style.div`
    min-height: 100vh;
    max-width: 450px;
    margin: 0 auto -230px;
    padding: 10px;
`;

export const LoginBody = style.div`

    &:before{
        content: "";
        height: 50px;
        display: block;
        @media only screen and (max-width: 700px){
            height: 15px;
        }
    }

    &:after{
        content: "";
        height: 200px;
        margin: 0 auto 55px;
        display: block;
        @media only screen and (max-width: 700px){
            height: 35px;
        }
    }
`;

export const LoginCard = style.div`
background-color: rgb(0,0,0);
color: rgb(255,255,255);
border-radius: 2%;
max-width: 450px;
min-height: 650px;
margin: 0 auto;
text-align: center;
font-size: 1.7rem;
position: relative;
z-index: 5;

@media only screen and (max-width: 750px) {
    background-color: transparent;
    width: 100%;
    padding: 0;
    margin: 0;
    border-radius: 0;
}

h1, h2 {
    padding: 0.35rem;
    margin: 0.35rem;
    @media only screen and (max-width: 750px) {
        padding: 0.25rem;
        margin: 0.25rem;
    }
}
`;

export const Form = style.form`
text-align: left;
display: flex;
flex-direction: column;
justify-content: center;
padding: 30px 40px 20px;
@media only screen and (max-width: 750px) {
    margin: auto;
    min-width: 90%;
    padding: 20px 30px 10px;
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
    @media only screen and (max-width: 750px){
    padding: 0.35rem;
    margin: 0.20rem;
    }

    &:focus {
        background-color: rgb(211,211,211);
        outline: none;
    }
}
`;

export const Subform = style.div`
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
padding: 1rem 3rem;
margin: 1.5rem;
font-size: 1.10rem;
@media only screen and (max-width: 750px){
    padding: 0 2rem;
    margin: 0 1.5rem;
}
`;

///////////Placeholder

export const Footer = style.div`
    background-color: pink;
    display: block;
    width: 100%;
    height: 220px;
    position: relative;
    bottom: -10px;
`;
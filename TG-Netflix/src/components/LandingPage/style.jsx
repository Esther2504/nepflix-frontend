import style from "styled-components";

export const Container = style.div`
    background-color: grey;
    font-size: 2rem;
    color: white;
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
        color: white;

        &:visited {
            color: red;
        }
    }
`;

export const Form = style.form`
    // background-color: lightgreen;
    // border: 1px solid red;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 45%;
    margin: 1rem;
    @media only screen and (max-width: 700px) {
        height: 40%;
        margin: auto;
        min-width: 90%;
        justify-content: center;
    }


   

    button {
        width: 50%;
        margin: 0.55rem auto;
        padding: 1rem;
        border-radius: 2%;
        border: none;
        background-color: red;
        color: black;
        font-weight: bold;
    }
    
`;

export const Input = style.div`

    label{
        margin: 0 0.75rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

 input{
        padding: 1rem;
        margin: 0.75rem;
        border-color: red;
        border: none;
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
    color: white;
    border-radius: 2%;
    width: 500px;
    height: 85vh;
    text-align: center;
    font-size: 1.7rem;
    @media only screen and (max-width: 700px) {
        width: 100%;
        height: 80vh;
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
    // background-color: purple;
    color: white;  
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0.5rem;
    font-size: 1.25rem;
`;

export const ExtraInfo = style.div`
    text-align: left;
    padding: 1rem;
    margin: 1rem;
    dislay: flex;
    flexwrap: wrap;
    flex-direction: column;
    font-size: 1.5rem;
`;

export const SeperationLine = style.hr`
    background-color: black;
    width: 100%;
    padding: 0.5rem;
`;

//// PLACEHOLDER

export const Nav = style.div`
    background-color: pink;
    border: 1px solid red;
    font-size: 2rem;
    width: 100%;
    height: 6rem;
`;

export const Footer = style.div`
    background-color: pink;
    border: 1px solid red;
    font-size: 2rem;
    width: 100%;
    height: 250px;
`;

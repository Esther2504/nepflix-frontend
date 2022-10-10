import React from 'react'
import styled from 'styled-components'

// social icons
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { FaYoutube } from 'react-icons/fa'
import { IconContext } from "react-icons";

export default function Footer() {
    return (
        <>
            <Wrapper>
                <Container>
                    <SocialsWrapper>
                        <IconContext.Provider value={{ size: "24px", className: "socialIcons" }}>
                            <FaFacebookF />
                            <BsInstagram />
                            <BsTwitter />
                            <FaYoutube />
                        </IconContext.Provider>
                    </SocialsWrapper>

                    <LinksWrapper>
                        <Item><a href="#"><FooterLink>Audio Description</FooterLink></a></Item>
                        <Item><a href="#"><FooterLink>Help Centre</FooterLink></a></Item>
                        <Item><a href="#"><FooterLink>Gift Cards</FooterLink></a></Item>
                        <Item><a href="#"><FooterLink>Media Centre</FooterLink></a></Item>
                        <Item><a href="#"><FooterLink>Investor Relations</FooterLink></a></Item>
                        <Item><a href="#"><FooterLink>Jobs</FooterLink></a></Item>
                        <Item><a href="#"><FooterLink>Terms of Use</FooterLink></a></Item>
                        <Item><a href="#"><FooterLink>Privacy</FooterLink></a></Item>
                        <Item><a href="#"><FooterLink>Legal Notice</FooterLink></a></Item>
                        <Item><a href="#"><FooterLink>Cookie Preferences</FooterLink></a></Item>
                        <Item><a href="#"><FooterLink>Corporate Information</FooterLink></a></Item>
                        <Item><a href="#"><FooterLink>Contact Us</FooterLink></a></Item>
                    </LinksWrapper>

                    <ServiceCodeWrapper>
                        <ServiceCode><a href="#">Service Code</a></ServiceCode>
                    </ServiceCodeWrapper>

                    <CopyrightWrapper>
                        <span>© 1997-2022 Netflix, Inc.</span>
                    </CopyrightWrapper>
                </Container>
            </Wrapper>
        </>
    )
};


// Styled Components. - icon styling in GlobalStyle (.socialIcons)
const Wrapper = styled.div`
min-width: 190px;
display: flex;
align-items: center;
justify-content: center;
background: black; // pink for testing purposes
position: absolute;
bottom: 0;
width: 100%;
`

const Container = styled.div`
background-color: rgba(0,0,0,.75);
max-width: 980px;
display: block;
padding: 0 4%;
margin: 20px auto 0;
color: white
`

const SocialsWrapper = styled.div`
display: flex;
margin-bottom: 1em;
padding: 0 4%;
color: white;

`

const LinksWrapper = styled.ul`
padding: 0 4%;
display: flex;
flex-direction: row;
align-items: flex-start;
flex-wrap: wrap;
font-size: 13px;
margin-top: 20px;
margin-left: auto;
margin-right: auto;
margin-bottom: 0px;
    & ul {
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;

    }
    & li {
        list-style-type: none;
        flex: 0 0 50%;
        @media (min-width: 800px) {
        flex: 0 0 25%;  
        }
    }

    & a, a:visited, a:active {
        color: grey;
        text-decoration: none;
    }
    & a:hover {
        text-decoration:underline;
    }
`

const FooterLink = styled.span`
color: grey;
text-decoration: none;
`

const Item = styled.li`
margin-bottom: 16px;
`

const ServiceCodeWrapper = styled.div`
padding: 0 4%;
margin-top: 20px;
margin-left: auto;
margin-right: auto;
max-width: 980px;
`

const ServiceCode = styled.button`
background: transparent;
border: 1px solid #737373;
font-size: 13px;
color: #737373;
padding: 0.5em;
cursor: pointer;
text-indent: 0px;
overflow: visible;
text-shadow: none;
display: inline-block;
text-align: center;
align-items: flex-start;
box-sizing: border-box;
    & a, a:visited, a:active {
    color: #737373;
    text-decoration: none;
    }
    & a:hover {
    color: white;
    }
`

const CopyrightWrapper = styled.div`
color: #737373;
margin-top: 20px;
font-size: 13px;
margin-left: auto;
margin-right: auto;
margin-bottom: 2em;
padding: 0 4%;
`;
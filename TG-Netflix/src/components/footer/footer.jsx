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
                        <IconContext.Provider value={{ color: "white", size: "2em", className: "socialIcons" }}>
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

                    <div>Service Code</div>
                    <div>Copyright</div>

                </Container>
            </Wrapper>
        </>
    )
}

// Styled components


const Container = styled.div`
background-color: black;
width: 980px; // set to max-width later
display: block;
padding: 0 4%;
margin: 20px auto 0;
color: white
`
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const SocialsWrapper = styled.div`
display: flex;
margin-bottom: 1em;
`
const FooterLink = styled.span`
color: grey;
text-decoration: none;

`
const LinksWrapper = styled.ul`
display: flex;
flex-direction: row;
align-items: flex-start;
flex-wrap: wrap;
font-size: 13px;
margin-bottom: 0px;
margin-top: 20px;
margin-left: auto;
margin-right: auto;

& ul, li {
    list-style-type: none;
    flex: 0 0 25%;


  }
  font-weight: 600;
  & a, a:visited, a:active {
    color: grey;
    text-decoration: none;
  }
  & a:hover {
   text-decoration:underline;
}
`

const Item = styled.li`
margin-bottom: 16px;
 


`


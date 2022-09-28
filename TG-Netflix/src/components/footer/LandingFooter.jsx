import React from 'react'
import styled from 'styled-components'

import { BsGlobe } from 'react-icons/bs'


export default function Footer() {
    return (
        <>
            <Wrapper>
                <Container>
                    <FooterTopWrapper>
                    <span>Questions? Call <a href="tel:08000225173">08000225173</a></span>
                    </FooterTopWrapper>

                    <LinksWrapper>
                        <Item><a href="#"><FooterLink>FAQ</FooterLink></a></Item>
                        <Item><a href="#"><FooterLink>Help Centre</FooterLink></a></Item>
                        <Item><a href="#"><FooterLink>Terms of Use</FooterLink></a></Item>
                        <Item><a href="#"><FooterLink>Privacy</FooterLink></a></Item>
                        <Item><a href="#"><FooterLink>Cookie Preferences</FooterLink></a></Item>
                        <Item><a href="#"><FooterLink>Corporate Information</FooterLink></a></Item>
                    </LinksWrapper>

                    <LangSelectContainer>
                            <LangSelector>
                                <BsGlobe className='select-globe'/>
                                    <Langpicker>
                                        <option lang="en" value="">English</option>
                                        <option lang="nl" value="">Nederlands</option>
                                    </Langpicker>
                            </LangSelector>
                    </LangSelectContainer>

                </Container>
            </Wrapper>
        </>
    )
};

const Wrapper = styled.div`
min-width: 190px;
display: block;
align-items: center;
justify-content: center;
background: rgba(0,0,0,.75);
`

const Container = styled.div`
background-color: rgba(0,0,0,.75);
max-width: 980px; // set to max-width later
display: block;
padding: 30px 4%;
margin: 20px auto 0;
color: white;

`

const FooterTopWrapper = styled.div`
display: flex;
margin-bottom: 1em;
color:#737373;
padding: 0 4%;
font-size: 1.5em;
& a, a:visited, a:active {
        color: #737373;
        text-decoration: none;
    }
    & a:hover {
        text-decoration:underline;
    }
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
        color: #737373;
        text-decoration: none;
    }
    & a:hover {
        text-decoration:underline;
    }
`

const FooterLink = styled.span`
color: #737373;
text-decoration: none;
`

const Item = styled.li`
margin-bottom: 16px;
`

const LangSelectContainer = styled.div`
padding: 0 4%;
margin-top: 20px;
margin-left: auto;
margin-right: auto;
max-width: 980px;
display: block;
`

const Langpicker=styled.select`
  background-color: transparent;
  color: #737373;
  font-size: 13px;
  padding-left: 3.2rem;
  margin: 0;
  height: inherit;
  width: inherit;
  text-align: center;

`

const LangSelector = styled.div`
background: transparent;
border: none;
width: 15rem;
height: 5rem;
font-size: 1em;
color: #737373;
padding: 0;
margin: 0;
cursor: pointer;


  & a, a:visited, a:active {
    color: grey;
    text-decoration: none;
  }
  & a:hover {
    color: white;
  }
`





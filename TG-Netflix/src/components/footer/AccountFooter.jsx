import React from 'react'
import styled from 'styled-components'



export default function Footer() {
    return (
        <>
            <Wrapper>
                <Divider/> 
                <Container>
                    <FooterTopWrapper>
                    <span><a href="#">Questions? Contact us.</a></span>
                    </FooterTopWrapper>

                    <LinksWrapper>
                        <Item placeholder='Audio and Subtitles'><a href="#"><FooterLink>Audio and Subtitles</FooterLink></a></Item>
                        <Item placeholder='Help Centre'><a href="#"><FooterLink>Help Centre</FooterLink></a></Item>
                        <Item placeholder='Gift Cards'><a href="#"><FooterLink>Gift Cards</FooterLink></a></Item>
                        <Item placeholder='Investor Relations'><a href="#"><FooterLink>Investor Relations</FooterLink></a></Item>
                        <Item placeholder='Media Centre'><a href="#"><FooterLink>Media Centre</FooterLink></a></Item>
                        <Item placeholder='Jobs'><a href="#"><FooterLink>Jobs</FooterLink></a></Item>
                        <Item placeholder='Cookie Preferences'><a href="#"><FooterLink>Cookie Preferences</FooterLink></a></Item>
                        <Item placeholder='Terms of Use'><a href="#"><FooterLink>Terms of Use</FooterLink></a></Item>
                        <Item placeholder='Privacy Statement'><a href="#"><FooterLink>Privacy Statement</FooterLink></a></Item>
                    </LinksWrapper>

                    <ServiceCodeWrapper>
                        <ServiceCode><a href="#">Service Code</a></ServiceCode>
                    </ServiceCodeWrapper>

                     
                </Container>
            </Wrapper>
        </>
    )
};

// Styled Components
const Wrapper = styled.div`
min-width: 190px;
width: 100%;
padding-bottom: 20px;
margin-top: 80px;
position: relative;
background-color: rgb(243 243 243);  
`

const Divider = styled.div`
width: 100%;
height: 0px;
border-top: 1px solid transparent;
@media (min-width: 500px){
border-top: 1px solid #e6e6e6;
}
`

const Container = styled.div`
background-color: rgb(243 243 243);
display: block;
padding-top: 30px;
width: 90%;
margin: 0 auto;
color: white;
/* font-weight: 500; */  // maybe??
`

const FooterTopWrapper = styled.div`
display: flex;
margin: 0 0 30px;
color:#737373;

font-size: 1.6em;
    & a, a:visited, a:active {
        color: #737373;
        text-decoration: none;
    }
    & a:hover {
        text-decoration:underline;
    }
`

const LinksWrapper = styled.ul`
box-sizing: border-box;
max-width: 1000px;
font-size: 13px;
display: flex;
flex-direction: row;
align-items: flex-start;
flex-wrap: wrap;
    & ul {
        display: block;
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
        @media (min-width: 740px) {
        flex: 0 0 25%;  
        }
        @media (max-width: 739px) {
        flex: 0 0 33%;  
        }
        @media (max-width: 500px) {
        flex: 0 0 50%;  
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
width: 25%;
min-width: 100px;
vertical-align: top;
@media only screen and (max-width: 739px) {
    width: 33%;
}

@media only screen and (max-width: 500px) {
    width: 50%;
}

`
const ServiceCodeWrapper = styled.div`
display: block;
margin: 45px 0 20px;
`

const ServiceCode = styled.button`
background: transparent;
border: 1px solid #737373;
font-size: 1rem;
color: #737373;
padding: 8px;
min-width: 90px;
cursor: pointer;
display: inline-block;
text-align: center;

    & a, a:visited, a:active {
    color: #737373;
    text-decoration: none;
    }
    & a:hover {
    color: 737373;
    }
`







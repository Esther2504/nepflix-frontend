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


                    <div>Footer links</div>
                    <div>Service Code</div>
                    <div>Copyright</div>

                </Container>
            </Wrapper>
        </>
    )
}




const Container = styled.div`
background-color: black;
width: 980px; // set to max-width later
display: block;
padding: 0 4%;
margin: 20px auto 0;
color: white
`

const Wrapper = styled.div`
display: grid;
align-items: center;
place-content: center;
`
 const SocialsWrapper = styled.div`
display: flex;
margin-bottom: 1em;

`


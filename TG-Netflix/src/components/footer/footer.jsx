import React from 'react'
import Container from "./styling"
import Wrapper from "./styling"
import SocialsWrapper from "./styling"
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


import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

html,
body {
  min-height: 100vh;
}

body {
  line-height: 1.5;
  font-family: 'Manrope', sans-serif;
  -webkit-font-smoothing: antialiased;
  font-family: "Manrope", sans-serif;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

#root,
#__next {
  isolation: isolate;
}

//footer styling 
.socialIcons {
margin-right: 15px;
margin-top: 2px;
user-select: none;
cursor:pointer;
text-decoration: none;
}

.footer-links {
  & ul, li {
    list-style-type: none;
  }
  font-weight: 600;
  & a, a:visited, a:active {
    color: grey;
    text-decoration: none;
  }
  & a:hover {
   text-decoration:underline;
}

}`

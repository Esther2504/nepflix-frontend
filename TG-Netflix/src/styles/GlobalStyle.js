import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
    --black: #141414; // de zwarte achtergrondkleur =>  var(--black)
  }

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
  background-color: var(--black);
  overflow-x: hidden;
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

//footer styling - icons
.socialIcons {
margin-right: 25px;
margin-top: 2px;
user-select: none;
cursor:pointer;
text-decoration: none;
}

.select-globe {
  position: relative;
  top: 40px;
  left: 12px;
  scale: 2;

}
.select-caret {
  position: relative;
  top: 30px;
  left: 130px;
  scale: 2;
}

// content is displayed behind the see-through navbar. keeps the footer at the bottom. 
.members-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.fade-container {
  margin-top: -14vw;
  z-index: 1;

  // sets the Position of the lanes on smaller devices (when the banner is not displayed)
  @media (max-width: 644px) {
    margin-top: 9vw; 
  }
}

// aligns the content directly below the navbar. keeps the footer at the bottom.
.padding-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 4.1rem;
  @media (min-width: 950px) {
   padding-top: 6.8rem;
  }
}

// .hidden {
//   // opacity: 0;
//   animation-duration: 10s;
//   background-color: red;
// }
// .show {
//   // opacity: 1;
//   background-color: green;
//   animation-duration: 10s;
// }

`;

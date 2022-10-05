import styled from 'styled-components';

export const GridContainer = styled.div`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
height: 100%;
width: 100%;
margin: auto;
padding-left: 3%;

div {
  flex-basis: 19%;
  margin-left: .5px;
  margin-bottom: 4%;
}

@media screen and (max-width: 1100px) {
  padding-left: 6%;
  div {
    flex-basis: 23%;
  }
}

@media screen and (max-width: 800px) {
  padding-left: 5%;
  div {
    margin-bottom: 6%;
    flex-basis: 31%;
  }
}

@media screen and (max-width: 500px) {
  padding-left: 3%;
  div {
    flex-basis: 47%;
  }
}
`
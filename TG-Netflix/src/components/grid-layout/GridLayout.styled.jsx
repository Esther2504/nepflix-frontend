import styled from 'styled-components';

export const GridContainer = styled.div`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
height: 100%;
width: 98%;
margin: auto;
padding-left: 4%;

div {
  flex-basis: 19%;
  margin: 0 0 4% 0;
}

@media screen and (max-width: 1100px) {
  padding-left: 7%;
  div {
    flex-basis: 23%;
  }
}

@media screen and (max-width: 800px) {
  div {
    margin-bottom: 6%;
    flex-basis: 30%;
  }
}

@media screen and (max-width: 500px) {
  div {
    flex-basis: 45%;
  }
}
`

// Tijdelijk voor demo
export const Card = styled.div`
position: relative;
display: flex;
flex-wrap: wrap;
margin: 0 0.3rem;
padding: 0.3rem;
text-align: center;
font-size: 1.6rem;
font-family: Futura;
line-height: 0.9;
overflow: hidden;
border-radius: 15px;

span {
  position: absolute;
  bottom: 5px;
  right: 10px;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  -webkit-text-stroke: 1px black;
  text-shadow: none;
}
`;
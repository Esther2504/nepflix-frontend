import styled from 'styled-components';

export const GridContainer = styled.div`
display: flex;
border: 1px solid blue;
height: 100%;
width: 90%;
margin: auto;
jusitfy-items: center;

`

export const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;

div {
    margin-bottom: 5rem;
    flex-basis: 19%;
 }
`

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
  background-color: green;

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
import { BsFileX } from 'react-icons/bs';
import styled from 'styled-components';


export const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
justify-content: flex-start;
`;


export const Title = styled.h2`
  color: #e5e5e5;
 
`;


export const TitleWrapper = styled.div`
display: flex;
flex-direction: row;
width: 100%;
padding-left: 3%;
font-size: 2rem;
flex-basis: 19%;
margin-bottom: 2rem;


div {
  flex-basis: 19%;
  margin-left: .5px;
  margin-bottom: 4%;
}

@media screen and (max-width: 1100px) {
  padding-left: 6%;
  font-size: 1.5rem;
  div {
    flex-basis: 23%;
  }
}

@media screen and (max-width: 800px) {
  padding-left: 5%;
  font-size: 1.2rem;
  div {
    margin-bottom: 6%;
    flex-basis: 31%;
  }
}

@media screen and (max-width: 500px) {
  padding-left: 3%;
  font-size: 1.1rem;
  div {
    flex-basis: 47%;
  }
}



`;







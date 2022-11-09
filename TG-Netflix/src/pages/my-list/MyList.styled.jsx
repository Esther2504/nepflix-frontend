import styled from 'styled-components';

export const Title = styled.h2`
  color: #e5e5e5;
`;

export const TitleWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
margin: auto;
padding-left: 3%;
font-size: 2rem;
flex-basis: 19%;
margin-left: .5px;
margin-bottom: 4%;

@media screen and (max-width: 1100px) {
  font-size: 2rem;
  padding-left: 6%;
  div {
    flex-basis: 23%;
  }
}
@media screen and (max-width: 885px) {
  font-size: 1.6rem;
  padding-left: 5%;
  div {
    flex-basis: 31%;
  }
}
@media screen and (max-width: 500px) {
  font-size: 1.3rem;
  padding-left: 3%;
  div {
    flex-basis: 47%;
  }
}

  

`;




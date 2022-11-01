import styled from 'styled-components';

export const Title = styled.h2`
  color: #e5e5e5;

`;

export const TitleWrapper = styled.div`
display: flex;
flex-direction: row;
  height: 40px;
  text-align: left;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-left: 5%;


  @media (min-width: 600px) {
      font-size: 1.4rem;
      padding-left: 5%;
    }
    @media (min-width: 700px) {
      font-size: 1.5rem;
      padding-left: 4.5%;
    }
    @media (min-width: 800px) {
      font-size: 1.6rem;
      padding-left: 4%;
    }
    @media (min-width: 900px) {
      font-size: 1.7rem;
      padding-left: 4.7%;
    }
    @media (min-width: 1000px) {
      font-size: 1.8rem;
      padding-left: 4.5%;
    }
    @media (min-width: 1100px) {
      font-size: 2rem;
      padding-left: 3%;
  
    }
`;

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


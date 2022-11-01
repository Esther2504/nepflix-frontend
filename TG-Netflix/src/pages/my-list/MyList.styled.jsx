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


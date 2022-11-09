import styled from 'styled-components';

export const Container = styled.main`
  margin-top: 3rem;
  font-size: 1.5rem;
  color: #999999;

  @media (min-width: 950px) {
    font-size: 1.8rem;
  }
`;

export const Results = styled.p`
  width: 100%;
  margin-bottom: 2rem;

  span {
    margin-left: 0.5rem;
    color: white;
  }
`;

export const Alert = styled.div`
  display: grid;
  place-content: center;
  text-align: center;
  padding-top: 15rem;

  p {
    margin: 1rem;
  }
`;

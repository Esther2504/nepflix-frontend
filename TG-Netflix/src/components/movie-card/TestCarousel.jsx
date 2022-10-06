import styled from 'styled-components';
import MovieCard from './MovieCard';

export default function TestCarousel() {
  return (
    <>
      <Carousel>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </Carousel>
    </>
  );
}

const Carousel = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100vw;
`;

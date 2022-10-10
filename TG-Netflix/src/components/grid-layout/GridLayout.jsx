import React from 'react';
import { GridContainer } from './GridLayout.styled';
import MovieCard from '../movie-card/MovieCard';

export default function GridLayout() {
  return (
    <GridContainer>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />

      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />

      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </GridContainer>
  );
}

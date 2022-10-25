import React from 'react';
import { GridContainer } from './GridLayout.styled';
import MovieCard from '../movie-card/MovieCard';

export default function GridLayout({movies}) {
  return (
    <GridContainer>
      {movies.map((movie, index) => {
        return <MovieCard key={index} movie={movie}/>
      })}
      {/* <MovieCard /> */}
    </GridContainer>
  );
}

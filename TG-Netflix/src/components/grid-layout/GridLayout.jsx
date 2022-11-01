import React from 'react';
import { GridContainer } from './GridLayout.styled';
import MovieCard from '../movie-card/MovieCard';

export default function GridLayout({movies, genre}) {

// If/else statement is tijdelijk omdat de genres niet in de mockdata staan

if (movies.find(item => item.name === `${genre}`)) {
  movies = movies.find(item => item.name === `${genre}`);
} else {
  movies = movies.find(item => item.name === `Popular`);
}
movies = movies.movies

  return (
    <GridContainer>
      {movies.map((movie, index) => {
        return <MovieCard id="movie" key={index} movie={movie}/>
      })}
    </GridContainer>
  );
}

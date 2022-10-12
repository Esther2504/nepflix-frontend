import React from "react";
import styled from "styled-components";

const FilterLinks = () => {
  return (
    <>
      <div>
        <GenreLink href="">Action</GenreLink>
        <GenreLink href="">Anime</GenreLink>
        <GenreLink href="">Comedies</GenreLink>
        <GenreLink href="">Crime</GenreLink>
        <GenreLink href="">Critics's Picks</GenreLink>
        <GenreLink href="">Documentaries</GenreLink>
        <GenreLink href="">Dramas</GenreLink>
        <GenreLink href="">Dutch</GenreLink>
      </div>
      <div>
        <GenreLink href="">European Films</GenreLink>
        <GenreLink href="">Fantasy</GenreLink>
        <GenreLink href="">Halloween</GenreLink>
        <GenreLink href="">Horror</GenreLink>
        <GenreLink href="">Independent</GenreLink>
        <GenreLink href="">International</GenreLink>
        <GenreLink href="">Kids and Family</GenreLink>
        <GenreLink href="">Music and Musicals</GenreLink>
      </div>
      <div>
        <GenreLink href="">Romance</GenreLink>
        <GenreLink href="">Sci-Fi</GenreLink>
        <GenreLink href="">Shorts</GenreLink>
        <GenreLink href="">Sports</GenreLink>
        <GenreLink href="">Stand-up Comedy</GenreLink>
        <GenreLink href="">Thriller</GenreLink>
      </div>
    </>
  );
};

export default FilterLinks;

export const GenreLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

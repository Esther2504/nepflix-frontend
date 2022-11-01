import React from "react";
import styled from "styled-components";

const FilterLinks = ( {setGenre} ) => {

  return (
    <>
      {/* <div>
        <GenreLink onClick={(e) => setGenre("action")} href="">Action</GenreLink>
        <GenreLink href="">Adventure</GenreLink>
        <GenreLink href="">Animation</GenreLink>
        <GenreLink href="">Comedy</GenreLink>
        <GenreLink href="">Crime</GenreLink>
        <GenreLink href="">Documentary</GenreLink>
        <GenreLink href="">Drama</GenreLink>
        <GenreLink href="">Family</GenreLink>
      </div>
      <div>
        <GenreLink href="">Fantasy</GenreLink>
        <GenreLink href="">History</GenreLink>
        <GenreLink href="">Horror</GenreLink>
        <GenreLink href="">Music</GenreLink>
        <GenreLink href="">Mystery</GenreLink>
        <GenreLink href="">Romance</GenreLink>
        <GenreLink href="">Science Fiction</GenreLink>
        <GenreLink href="">TV movie</GenreLink>
      </div>
      <div>
        <GenreLink href="">Thriller</GenreLink>
        <GenreLink href="">War</GenreLink>
        <GenreLink href="">Western</GenreLink>
      </div> */}
      <div>
        <GenreLink onClick={(e) => setGenre("action")} href="">Action</GenreLink>
        <GenreLink onClick={(e) => setGenre("adventure")} href="">Adventure</GenreLink>
        <GenreLink onClick={(e) => setGenre("animation")}>Animation</GenreLink>
        <GenreLink onClick={(e) => setGenre("comedy")}>Comedy</GenreLink>
        <GenreLink onClick={(e) => setGenre("crime")} href="">Crime</GenreLink>
        <GenreLink onClick={(e) => setGenre("documentary")}>Documentary</GenreLink>
        <GenreLink onClick={(e) => setGenre("drama")}>Drama</GenreLink>
        <GenreLink onClick={(e) => setGenre("family")}>Family</GenreLink>
      </div>
      <div>
        <GenreLink onClick={(e) => setGenre("fantasy")}>Fantasy</GenreLink>
        <GenreLink onClick={(e) => setGenre("history")}>History</GenreLink>
        <GenreLink onClick={(e) => setGenre("horror")}>Horror</GenreLink>
        <GenreLink onClick={(e) => setGenre("music")}>Music</GenreLink>
        <GenreLink onClick={(e) => setGenre("mystery")}>Mystery</GenreLink>
        <GenreLink onClick={(e) => setGenre("romance")}>Romance</GenreLink>
        <GenreLink onClick={(e) => setGenre("science fiction")}>Science Fiction</GenreLink>
        <GenreLink onClick={(e) => setGenre("TV movie")}>TV movie</GenreLink>
      </div>
      <div>
        <GenreLink onClick={(e) => setGenre("thriller")}>Thriller</GenreLink>
        <GenreLink onClick={(e) => setGenre("war")}>War</GenreLink>
        <GenreLink onClick={(e) => setGenre("western")}>Western</GenreLink>
      </div>
    </>
  );
};

export default FilterLinks;

// export const GenreLink = styled.a`
//   color: #fff;
//   text-decoration: none;
//   font-size: 1.4rem;
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

export const GenreLink = styled.p`
  color: #fff;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

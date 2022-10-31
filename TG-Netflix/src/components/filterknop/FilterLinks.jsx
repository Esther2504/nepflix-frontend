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

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FilterLinks = ( {setGenre} ) => {
  return (
    <>
      <div>
        <LinkStyle onClick={(e) => setGenre("action")} to="/films/action">Action</LinkStyle>
        <LinkStyle onClick={(e) => setGenre("adventure")} to="/films/adventure">Adventure</LinkStyle>
        <LinkStyle onClick={(e) => setGenre("animation")} to="/films/animation">Animation</LinkStyle>
        <LinkStyle onClick={(e) => setGenre("comedy")} to="/films/comedy">Comedy</LinkStyle>
        <LinkStyle onClick={(e) => setGenre("crime")} to="/films/crime">Crime</LinkStyle>
        <LinkStyle onClick={(e) => setGenre("documentary")} to="/films/documentary">Documentary</LinkStyle>
        <LinkStyle onClick={(e) => setGenre("drama")} to="/films/drama">Drama</LinkStyle>
        <LinkStyle onClick={(e) => setGenre("family")} to="/films/family">Family</LinkStyle>
      </div>
      <div>
        <LinkStyle onClick={(e) => setGenre("fantasy")} to="/films/fantasy">Fantasy</LinkStyle>
        <LinkStyle onClick={(e) => setGenre("history")} to="/films/history">History</LinkStyle>
        <LinkStyle onClick={(e) => setGenre("horror")} to="/films/horror">Horror</LinkStyle>
        <LinkStyle onClick={(e) => setGenre("music")} to="/films/music">Music</LinkStyle>
        <LinkStyle onClick={(e) => setGenre("mystery")} to="/films/mystery">Mystery</LinkStyle>
        <LinkStyle onClick={(e) => setGenre("romance")} to="/films/romance">Romance</LinkStyle>
        <LinkStyle onClick={(e) => setGenre("science fiction")} to="/films/science_fiction">Science Fiction</LinkStyle>
        <LinkStyle onClick={(e) => setGenre("tv movie")} to="/films/tv_movie">TV movie</LinkStyle>
      </div>
      <div>
        <LinkStyle onClick={(e) => setGenre("thriller")} to="/films/thriller">Thriller</LinkStyle>
        <LinkStyle onClick={(e) => setGenre("war")} to="/films/war">War</LinkStyle>
        <LinkStyle onClick={(e) => setGenre("western")} to="/films/western">Western</LinkStyle>
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
export const LinkStyle = styled(Link)`
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


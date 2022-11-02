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
        <LinkStyle onClick={(e) => setGenre("science_fiction")} to="/films/science_fiction">Science Fiction</LinkStyle>
        <LinkStyle onClick={(e) => setGenre("tv_movie")} to="/films/tv_movie">TV movie</LinkStyle>
      </div>
      <div>
        <LinkStyle onClick={(e) => setGenre("thriller")} to="/films/thriller">Thriller</LinkStyle>
        <LinkStyle onClick={(e) => setGenre("war")} to="/films/war">War</LinkStyle>
        <LinkStyle onClick={(e) => setGenre("western")} to="/films/western">Western</LinkStyle>
      </div>
      {/* <div>
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
        <GenreLink onClick={(e) => setGenre("science_fiction")}>Science Fiction</GenreLink>
        <GenreLink onClick={(e) => setGenre("tv_movie")}>TV movie</GenreLink>
      </div>
      <div>
        <GenreLink onClick={(e) => setGenre("thriller")}>Thriller</GenreLink>
        <GenreLink onClick={(e) => setGenre("war")}>War</GenreLink>
        <GenreLink onClick={(e) => setGenre("western")}>Western</GenreLink>
      </div> */}
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


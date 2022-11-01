import React from "react";
import { useState, useEffect } from "react";

import FilterLinks from "./FilterLinks";
import arrowdown from "../../assets/navbar-images/arrow-down.png";
import listIcon from "../../assets/filter-menu-images/list.svg";
import gridIcon from "../../assets/filter-menu-images/grid.svg";
import listIconView from "../../assets/filter-menu-images/list-view.svg";
import gridIconView from "../../assets/filter-menu-images/grid-view.svg";

import {
  FilterWrapper,
  FilterGenreWrapper,
  FilterOptionWrapper,
  FilterTitle,
  FilmsLink,
  GenreTitle,
  FilterOptionButton,
  FilterGenreButton,
  FilterGenreSubMenu,
  ButtonText,
  ArrowIcon,
  OptionIcon,
} from "./FilterMenu.styled";

const FilterMenu = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll === null;
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // Voor de genretitel die op de pagina verschijnt nadat je een genre kiest
  let genreTitle = props.genre;
  if (props.genre == "science_fiction") {
    genreTitle = "Science Fiction";
  } else if (props.genre == "tv_movie") {
    genreTitle = "TV Movie";
  }

  return (
    <FilterWrapper isScrolled={isScrolled}>
      {props.genre === "" ? (
        <>
          <FilterTitle>Films</FilterTitle>
          <FilterGenreWrapper>
            <FilterGenreButton onClick={handleToggle}>
              <ButtonText>Genres</ButtonText>
              <ArrowIcon src={arrowdown} alt="" />
            </FilterGenreButton>
            <FilterGenreSubMenu onClick={handleToggle} visible={toggle}>
              <FilterLinks setGenre={props.setGenre} />
            </FilterGenreSubMenu>
          </FilterGenreWrapper>
        </>
      ) : (
        <>
          <FilmsLink onClick={(e) => props.setGenre("")}>Films</FilmsLink>
          <GenreTitle>{genreTitle}</GenreTitle>
        </>
      )}
      <FilterOptionWrapper>
        <FilterOptionButton
          style={{
            border: props.genre == "" ? "1px solid white" : "1px solid grey",
          }}
        >
          <OptionIcon
            src={props.genre == "" ? listIconView : listIcon}
            alt=""
          />
        </FilterOptionButton>
        <FilterOptionButton
          style={{
            border: props.genre == "" ? "1px solid grey" : "1px solid white",
          }}
        >
          <OptionIcon
            src={props.genre == "" ? gridIcon : gridIconView}
            alt=""
          />
        </FilterOptionButton>
      </FilterOptionWrapper>
    </FilterWrapper>
  );
};

export default FilterMenu;

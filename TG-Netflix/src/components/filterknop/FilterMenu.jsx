import React from "react";
import { useState, useEffect } from "react";

import FilterLinks from "./FilterLinks";
import arrowdown from "../../assets/navbar-images/arrow-down.png";
import listIcon from "../../assets/filter-menu-images/list.svg";
import gridIcon from "../../assets/filter-menu-images/grid.svg";

import {
  FilterWrapper,
  FilterGenreWrapper,
  FilterOptionWrapper,
  FilterTitle,
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
    console.log("clicked");
    setToggle(!toggle);
  };

  return (
    <FilterWrapper isScrolled={isScrolled}>
      <FilterTitle>Movies <GenreTitle>> {props.genre}</GenreTitle></FilterTitle>
      <FilterGenreWrapper>
        <FilterGenreButton onClick={handleToggle}>
          <ButtonText>Genres</ButtonText>
          <ArrowIcon src={arrowdown} alt="" />
        </FilterGenreButton>
        <FilterGenreSubMenu visible={toggle}>
          <FilterLinks setGenre={props.setGenre} />
        </FilterGenreSubMenu>
      </FilterGenreWrapper>
      <FilterOptionWrapper>
        <FilterOptionButton>
          <OptionIcon src={listIcon} alt="" />
        </FilterOptionButton>
        <FilterOptionButton>
          <OptionIcon src={gridIcon} alt="" />
        </FilterOptionButton>
      </FilterOptionWrapper>
    </FilterWrapper>
  );
};

export default FilterMenu;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../reducers/fetchReducer";
import {
  SmallModalContainer,
  SmallModal,
  SmallModalTop,
  SmallModalBottom,
  VideoControls,
  PlusCircle,
  InfoCon,
  AgeRes,
  Runtime,
  ArrowContainer,
  MatchPerc,
  ArrowDown,
  KeywordsContainer,
} from "./CallSmallModal.style";
import YouTube from "react-youtube";

const CallSmallModal = (props) => {
  const [sWidth, setsWidth] = useState(0);
  useEffect(() => {
    setsWidth(window.innerWidth);
  }, [sWidth]);

  const left = props.data.coords.x;
  const top = props.data.coords.y;
  const right = props.data.coords.right;
  const width = props.data.coords.right - props.data.coords.x;
  const height = props.data.coords.bottom - props.data.coords.y;
  const dispatch = useDispatch();
  const matchPerc = Math.floor(Math.random() * (100 - 50)) + 50;

  const coords = {
    left,
    top,
    width,
    height,
    right,
  };

  const id = props.movieID;
  const moviesInState = useSelector((state) => state.netflix.movies);
  const movieInfoAr = moviesInState.filter((movie) => movie.id === +id);

  if (movieInfoAr.length === 0) {
    dispatch(getMovies(parseInt(+id)));
  }
  const movieInfo = movieInfoAr[0];

  let keywords = [];
  for (let i = 0; i < movieInfo?.keywords.length; i++) {
    keywords.push(
      movieInfo?.keywords[i][0].toUpperCase() + movieInfo?.keywords[i].slice(1)
    );
  }
  const bg = props.data.dataset.backdrop;
  const description = props.data.dataset.description;
  const title = props.data.dataset.title;

  const mouseLeaveHandler = () => {
    setTimeout(function () {
      props.setIsHovering(false);
    }, 500);
  };

  return (
    <SmallModalContainer
    onMouseLeave={mouseLeaveHandler}
      coords={coords}
      bg={bg}
    >
      <SmallModal coords={coords} bg={bg} sWidth={sWidth}>
        <SmallModalTop bg={bg} />
        

        <SmallModalBottom>
          <InfoCon>
            <h1>{title}</h1>
          </InfoCon>
          <p style={{color: "white", fontStyle: "italic"}}>"{description}"</p>
        </SmallModalBottom>
      </SmallModal>
    </SmallModalContainer>
  );
};

export default CallSmallModal;

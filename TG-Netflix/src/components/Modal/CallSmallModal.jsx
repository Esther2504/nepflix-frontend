import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../reducers/fetchReducer';
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
} from './CallSmallModal.style';
import YouTube from 'react-youtube';

const CallSmallModal = (props) => {
  const [sWidth, setsWidth] = useState(0);
  useEffect(() => {
    setsWidth(window.innerWidth);
  }, [sWidth]);

  // let Trailer = props.movie.trailer;
  // let Trailer = 'https://www.youtube.com/watch?v=0IOsk2Vlc4o';
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

  const [videoState, setVideoState] = useState(false);

  // Als de small modal verschijnt, duurt het nog twee seconden tot de video speelt
  if (props.hover) {
    setTimeout(function () {
      setVideoState(true);
    }, 1500);
  }

  const opts = {
    width: "100%",
    height: "100%",

    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      disablekb: 1,
      end: 66,
      rel: 0,
      frameborder: "0",
    },
  };

  const runtime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const min = minutes % 60;
    const result = hours + "h " + min + "m";
    return result;
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
  const bg = movieInfo?.backdrop_path;

  let ageCertificate = movieInfo?.age_certificate;
  // Als age certificate niet bestaat dan is het een lege string.
  // Via onderstaande check wordt van de lege string "NR" gemaakt.
  if (!ageCertificate) {
    ageCertificate = "NR";
    // Als age certificate de letters PG- bevat, dan worden deze na onderstaande check eraf gehaald
  } else if (ageCertificate.includes("PG-")) {
    ageCertificate = ageCertificate.slice(3);
  }

  return (
    <SmallModalContainer coords={coords} bg={bg} onClick={props.onClick}>
      <SmallModal coords={coords} bg={bg} sWidth={sWidth}>
        <SmallModalTop bg={bg}>
          {videoState && (
            <YouTube
              videoId={movieInfo?.trailer}
              opts={opts}
              style={{ height: "inherit" }}
            />
          )}
        </SmallModalTop>

        <SmallModalBottom>
          <VideoControls>
            {/* <VideoPlay>
              <PlayButton />
              Play
            </VideoPlay> */}
            <PlusCircle
              onClick={function (e) {
                e.stopPropagation();
                return props.handleAddToMyList(e);
              }}
            />
            {/* <ThumbsUp /> */}
            {/* <RateIcons /> */}

            <ArrowContainer>
              <ArrowDown />
            </ArrowContainer>
          </VideoControls>
          <InfoCon>
            <MatchPerc>{matchPerc}% Match</MatchPerc>
            <AgeRes>{ageCertificate}</AgeRes>
            <Runtime>{runtime(movieInfo?.runtime)}</Runtime>
          </InfoCon>
          <KeywordsContainer>{keywords.join(" • ")}</KeywordsContainer>
        </SmallModalBottom>
      </SmallModal>
    </SmallModalContainer>
  );
};

export default CallSmallModal;

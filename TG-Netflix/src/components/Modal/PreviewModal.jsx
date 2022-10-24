import React, {useRef} from "react";
import Trailer from "../Modal/testTrailer.webm";
import {
    VideoPlayer,
    PreviewModalContainer,
    PreviewPlay,
    PreviewDuration,
    PreviewRating,
    PreviewMaturityRating,
    PreviewReleaseYear,
    PreviewAddToList,
    PreviewMetaData,
    PreviewSummary
  } from "../Modal/PreviewModal.style";

function PreviewModal({movie}) {
  // console.log(data)
    const modalRefVideo = useRef();
  return (
    <PreviewModalContainer>
      <PreviewDuration>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</PreviewDuration>
      <PreviewPlay />
      {/* Hier hoort een image met title in plaats van video (Styling moet nog aangepast worden)*/}
      <span Style="position:absolute">{movie.title}</span>
      <img src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}></img>
      {/* <VideoPlayer
        muted
        src={""}
        type="video/webm"
        ref={modalRefVideo} /> */}
      <PreviewMetaData>
        <PreviewRating>93% Match</PreviewRating>
        <PreviewMaturityRating></PreviewMaturityRating>
        <PreviewReleaseYear>{movie.release_year}</PreviewReleaseYear>
        <PreviewAddToList></PreviewAddToList>
        <PreviewSummary>{movie.description}</PreviewSummary>
      </PreviewMetaData>
    </PreviewModalContainer>
  );
}

export default PreviewModal;

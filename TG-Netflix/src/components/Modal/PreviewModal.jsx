import React, { useRef } from "react";
import Trailer from './testTrailer.webm'
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
  PreviewSummary,
} from "./PreviewModal.style";

function PreviewModal() {
  const modalRefVideo = useRef();
  return (
    <PreviewModalContainer>
      <PreviewDuration>2h 10m</PreviewDuration>
      <PreviewPlay />
      <VideoPlayer muted src={Trailer} type="video/webm" ref={modalRefVideo} />

      <PreviewMetaData>
        <PreviewRating>93% Match</PreviewRating>
        <PreviewMaturityRating></PreviewMaturityRating>
        <PreviewReleaseYear>2022</PreviewReleaseYear>
        <PreviewAddToList></PreviewAddToList>
        <PreviewSummary>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          at ex non metus consequat hendrerit. Sed euismod, nibh sed interdum
          blandit, quam metus tempus libero, quis vestibulum nisi leo at lacus.
        </PreviewSummary>
      </PreviewMetaData>
    </PreviewModalContainer>
  );
}

export default PreviewModal;

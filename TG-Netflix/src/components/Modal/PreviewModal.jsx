import React, { useRef } from 'react';
import Trailer from './testTrailer.webm';
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
} from './PreviewModal.style';

function PreviewModal(data) {
  const modalRefVideo = useRef();
  return (
    <PreviewModalContainer>
      <PreviewDuration>{data.movie.runtime}</PreviewDuration>
      <PreviewPlay />
      <VideoPlayer muted src={Trailer} type="video/webm" ref={modalRefVideo} />

      <PreviewMetaData>
        <PreviewRating></PreviewRating>
        <PreviewMaturityRating>
          {data.movie.age_certificate}
        </PreviewMaturityRating>
        <PreviewReleaseYear>{data.movie.release_year}</PreviewReleaseYear>
        <PreviewAddToList></PreviewAddToList>
        <PreviewSummary>{data.movie.description}</PreviewSummary>
      </PreviewMetaData>
    </PreviewModalContainer>
  );
}

export default PreviewModal;

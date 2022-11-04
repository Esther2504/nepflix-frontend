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
  Thumbnail,
  Title
} from './PreviewModal.style';

function PreviewModal(data) {
  const bg = 'https://image.tmdb.org/t/p/original' + data.movie.backdrop_path;
  const modalRefVideo = useRef();
  return (
    <PreviewModalContainer>
      <PreviewDuration>{data.movie.runtime}</PreviewDuration>
      <PreviewPlay />
      {/* <VideoPlayer muted src={Trailer} type="video/webm" ref={modalRefVideo} /> */}
      <Thumbnail bg={bg} />
      <PreviewMetaData>
        <PreviewRating></PreviewRating>
        <PreviewMaturityRating>
          {data.movie.age_certificate}
        </PreviewMaturityRating>
        <PreviewReleaseYear>{data.movie.release_year}</PreviewReleaseYear>
        <PreviewAddToList></PreviewAddToList>
        <Title>{data.movie.title}</Title>
        <PreviewSummary>{data.movie.overview}</PreviewSummary>
      </PreviewMetaData>
    </PreviewModalContainer>
  );
}

export default PreviewModal;

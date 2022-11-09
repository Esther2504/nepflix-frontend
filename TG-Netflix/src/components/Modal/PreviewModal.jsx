import React, { useRef } from 'react';
import {
  VideoPlayer,
  PreviewModalContainer,
  ThumbnailContainer,
  PreviewPlay,
  PreviewDuration,
  PreviewRating,
  PreviewMaturityRating,
  PreviewReleaseYear,
  PreviewAddToList,
  PreviewMetaData,
  PreviewSummary,
  Thumbnail,
  Title,
  MaturityContainer,
  RatingContainer 
} from './PreviewModal.style';

function PreviewModal(data) {
  const bg = 'https://image.tmdb.org/t/p/original' + data.movie.backdrop_path;
  return (
    <PreviewModalContainer>
      <PreviewPlay />
      {/* <VideoPlayer muted src={Trailer} type="video/webm" ref={modalRefVideo} /> */}
      <ThumbnailContainer>
        <Thumbnail bg={bg} />
        <PreviewDuration>{data.movie.runtime}m</PreviewDuration>
        <Title>{data.movie.title}</Title>
      </ThumbnailContainer>
      <PreviewMetaData>
        {/* <PreviewRating></PreviewRating> */}
        <MaturityContainer>
        <RatingContainer >
          <PreviewMaturityRating>
            {data.movie.age_certificate}
          </PreviewMaturityRating>
        </RatingContainer>
        <PreviewAddToList />
        </MaturityContainer>
        <PreviewReleaseYear>{data.movie.release_year}</PreviewReleaseYear>
        

        <PreviewSummary>{data.movie.overview}</PreviewSummary>
      </PreviewMetaData>
    </PreviewModalContainer>
  );
}

export default PreviewModal;

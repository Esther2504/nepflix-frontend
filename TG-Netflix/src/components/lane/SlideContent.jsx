import styled from 'styled-components';
import React, { useState } from 'react';
import { Card } from '../movie-card/MovieCard.styled';
import logo from '../../assets/movie-card-images/n_logo.ico';

const Container = styled.div`
  display: flex;
  position: relative;
  top: 0;
  left: 0;
`;

export default function SlideContent(props) {
  const logoArray = [logo, null];

  return (
    <Container>
      {props.list.map((item, index) => {
        function showLogo(logoArray) {
          return logoArray[/[6]/.test(item.id) ? 0 : 1];
        }
        return (
          <Card
            data-backdrop={item.backdrop_path}
            data-video={item.video}
            data-id={item.id}
            style={{ margin: '0px 3px' }}
            key={index}
            id="movie"
          >
            <span>{item.title}</span>
            <img
              width={props.imageWidth}
              height={props.imageHeight}
              src={item.backdrop_path}
              alt={item.title}
              id={item.id}
            />
            <img src={showLogo(logoArray)} />
          </Card>
        );
      })}
    </Container>
  );
}

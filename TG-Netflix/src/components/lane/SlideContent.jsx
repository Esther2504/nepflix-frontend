import styled from "styled-components";
import React, { useState } from "react";
import { Card } from "../movie-card/MovieCard.styled";

const Container = styled.div`
  display: flex;
  position: relative;
  top: 0;
  left: 0;

  img:nth-of-type(2) {
    position: absolute;
    top: 8px;
    left: 3px;
    width: 1.3vw;
  }
`;

export default function SlideContent(props) {
  return (
    <Container>
      {props.list.map((item, index) => {
        // console.log(item)
        return (
          <Card
            data-backdrop={item.backdrop_path}
            data-video={item.video}
            style={{ margin: "0px 3px" }}
            key={index}
            id="movie"
          >
            <span>{item.title}</span>
            <img
              width={props.imageWidth}
              height={props.imageHeight}
              src={"https://image.tmdb.org/t/p/original" + item.backdrop_path}
              alt={item.title}
              id={item.id}
            />
          </Card>
        );
      })}
    </Container>
  );
}


import { Card } from "./MovieCard.styled";
import React from "react";

export default function MovieCard({ person }) {
  const { backdrop_path, id, title, description } = person;

  return (
    <>
      <Card id="movie" data-backdrop={backdrop_path} data-id={id} data-description={description} data-title={title}>
        <img src={backdrop_path} alt={title} />
        <span>{title}</span>
      </Card>
    </>
  );
}

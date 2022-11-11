import { Card } from './MovieCard.styled';
import logo from '../../assets/movie-card-images/n_logo.ico';

export default function MovieCard({ movie }) {
  const { backdrop_path, id, title } = movie;
  const logoArray = [logo, null];

  function showLogo(logoArray) {
    return logoArray[/[6]/.test(id) ? 0 : 1];
  }

  return (
    <>
      <Card id="movie" data-id={movie.id}>
        <img src={backdrop_path} alt={title} />
        <span>{title}</span>
        <img src={showLogo(logoArray)} />
      </Card>
    </>
  );
}

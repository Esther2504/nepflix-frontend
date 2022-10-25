import { Card } from './MovieCard.styled';
// import image from '../../assets/movie-card-images/spider-man.jpg';
import logo from '../../assets/movie-card-images/n_logo.ico';

export default function MovieCard({movie}) {
  const {backdrop_path, id, title} = movie
  const logoArray = [logo, null];

  function showLogo(logoArray) {
    return logoArray[Math.floor(Math.random() * logoArray.length)];
  }

  return (
    <>
      <Card>
        <img src={"https://image.tmdb.org/t/p/original" + backdrop_path} alt={title} />
        <span>{title}</span>
        <img src={showLogo(logoArray)} />
      </Card>
    </>
  );
}

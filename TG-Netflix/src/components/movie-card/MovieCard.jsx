import { Card } from './MovieCard.styled';
import image from '../../assets/movie-card-images/spider-man.jpg';
import logo from '../../assets/movie-card-images/n_logo.ico';

export default function MovieCard() {
  const title = 'Spider-Man: No Way Home';
  const logoArray = [logo, null];

  function showLogo(logoArray) {
    return logoArray[Math.floor(Math.random() * logoArray.length)];
  }

  return (
    <>
      <Card>
        <img src={image} alt={title} />
        <span>{title}</span>
        <img src={showLogo(logoArray)} />
      </Card>
    </>
  );
}

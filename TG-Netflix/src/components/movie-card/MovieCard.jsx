import { Card } from './MovieCard.styled';
import image from '../../assets/spider-man.jpg';
import logo from '../../assets/n_logo.ico';

export default function MovieCard() {
  const title = 'Spider-Man';

  return (
    <>
      <Card>
        <img src={image} alt={title} />
        <span>{title}</span>
        <img src={logo} />
      </Card>
    </>
  );
}


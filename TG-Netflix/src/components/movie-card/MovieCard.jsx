import { Carousel, Card } from './MovieCard.styled';
import image from '../../assets/spider-man.jpg';

export default function MovieCard() {
  const title = 'SPIDER-MAN';

  return (
    <>
      <Carousel>
        <Card>
          <img src={image} alt={title} />
          <span>{title}</span>
        </Card>
        <Card>
          <img src={image} alt={title} />
          <span>{title}</span>
        </Card>
        <Card>
          <img src={image} alt={title} />
          <span>{title}</span>
        </Card>
        <Card>
          <img src={image} alt={title} />
          <span>{title}</span>
        </Card>
        <Card>
          <img src={image} alt={title} />
          <span>{title}</span>
        </Card>
        <Card>
          <img src={image} alt={title} />
          <span>{title}</span>
        </Card>
      </Carousel>
    </>
  );
}

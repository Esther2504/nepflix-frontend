import { Title, TitleWrapper } from './MyList.styled'
import Footer from '../../components/footer/footer';
import { GridContainer } from '../../components/grid-layout/GridLayout.styled';
import MovieCard from '../../components/movie-card/MovieCard';
import { useSelector } from "react-redux";


export default function MyList() {

  const liked = useSelector(state => state.netflix.liked);
  // console.log(liked)

  return (
    <>
      <div className="padding-container">
        <TitleWrapper>
          <Title>My List</Title>
        </TitleWrapper>
        <GridContainer>
          {liked.map((movie, index) => {
            return <MovieCard key={index} movie={movie} />
          })};
        </GridContainer>
        <Footer />
      </div>
    </>
  );
}

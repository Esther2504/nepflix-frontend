import { Title, TitleWrapper} from './MyList.styled'
import Footer from '../../components/footer/footer';

import categoriesMock from '../../mock-data/browse_categories_banner.mock.json';
import MovieCard from "../../components/movie-card/MovieCard"



export default function MyList({user}) {
  return (
    <>
      <div className="padding-container">

        <TitleWrapper>
          <Title>My List</Title>
        </TitleWrapper>



     
       
        <Footer />

      </div>
    </>
  );
}

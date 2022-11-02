import { Title, TitleWrapper} from './MyList.styled'
import Footer from '../../components/footer/footer';

import categoriesMock from '../../mock-data/browse_categories_banner.mock.json';
import GridLayout from '../../components/grid-layout/GridLayout';



export default function MyList() {
  return (
    <>
      <div className="padding-container">

        <TitleWrapper>
          <Title>My List</Title>
        </TitleWrapper>

        <GridLayout movies={categoriesMock.categories[0].movies} />

     
       
        <Footer />

      </div>
    </>
  );
}

import Footer from '../../components/footer/footer';
import GridLayout from '../../components/grid-layout/GridLayout';
import categoriesMock from '../../mock-data/browse_categories_banner.mock.json';
import {Title, TitleWrapper} from './MyList.styled'
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

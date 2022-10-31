import Footer from '../../components/footer/footer';
import GridLayout from '../../components/grid-layout/GridLayout';
import categoriesMock from '../../mock-data/browse_categories_banner.mock.json';
import {Title} from './MyList.styled'
export default function MyList() {
  return (
    <>
      <div className="padding-container">

        
        <Title>My List</Title>
        <GridLayout movies={categoriesMock.categories[0].movies} />
        <Footer />
      </div>
    </>
  );
}

import GridLayout from '../../components/grid-layout/GridLayout';
import Footer from '../../components/footer/footer';
import categoriesMock from '../../mock-data/browse_categories_banner.mock.json'

// data wordt gefetcht op basis van genrefilter
export default function Grid(category) {


  return (
    <>
      <div className="padding-container">
        <GridLayout movies={categoriesMock.categories[0].movies} />
        <Footer />
      </div>
    </>
  );
}

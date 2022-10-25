import LaneHandler from "../../components/lane/LaneHandler";
import Footer from "../../components/footer/footer";
import categoriesMock from '../../mock-data/browse_categories_banner.mock.json'
// example --> https://netflixclone.com/browse?categories=popular,top_rated,latest

export default function Lanes({categories}) {
  // Als data niet wordt doorgegeven via props, zelf
  return (
    <>
      <div className="padding-container">
        <LaneHandler categories={categories}/>
        <Footer />
      </div>
    </>
  );
}

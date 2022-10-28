import Footer from "../../components/footer/footer";
import movieDetailsMock from "../../mock-data/movie_details_similar.mock.json";

// props worden uiteindelijk doorgegeven met Params of elders
export default function ModalPage(movie) {
  movie = movieDetailsMock;
  return (
    <>
      <div className="padding-container">
        <Modal movie={movie} />
        <Footer />
      </div>
    </>
  );
}

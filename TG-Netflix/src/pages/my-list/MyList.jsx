import Footer from '../../components/footer/footer';
// onderstaande import verwijderen na review
import Spinner from '../../components/spinner-animation/Spinner';

export default function MyList() {
  return (
    <>
      <div className="padding-container">
        {/* CONTENT GOES HERE */}

        {/* spinner component verwijderen na review */}
        <Spinner/>
        <Footer />
      </div>
    </>
  );
}

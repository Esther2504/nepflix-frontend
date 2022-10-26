import Player from "../../components/player/Player";
import Footer from "../../components/footer/Footer";
import Lanes from "../lanes/Lanes";

// props kunnen worden doorgegeven worden vanaf main om content te laden voordat
// bezoeker inlogt
export default function Discover({banner, categories, movie}) {
    return (
        <>
            <div className="members-container">
                {/* CONTENT GOES HERE */}
                <Player data={banner} categories={categories} movie={movie}/>
                <Lanes />
                <Footer />
            </div>
        </>
    );
}

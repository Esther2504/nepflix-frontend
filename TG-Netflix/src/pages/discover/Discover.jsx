import Player from "../../components/player/Player";
import Footer from "../../components/footer/Footer";

// props kunnen worden doorgegeven worden vanaf main om content te laden voordat
// bezoeker inlogt
export default function Discover({banner, categories}) {
    return (
        <>
            <div className="members-container">
                {/* CONTENT GOES HERE */}
                <Player data={banner}/>
                <Footer />
            </div>
        </>
    );
}

import React, { useState, useEffect } from "react";
import LaneHandler from "../../components/lane/LaneHandler";
import Footer from "../../components/footer/footer";
import CallModal from "../../components/Modal/CallModal";

export default function Lanes() {
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState(false);
  const [dataset, setDataset] = useState();

  useEffect(() => {
    const films = document.querySelectorAll("#movie");
    films.forEach((film) => {
      film.addEventListener("mouseover", (e) => {
        if (e.target.getAttribute("id")) {
          setDataset(film.dataset);
          setIsHovering(true);
        }
        setCoords(e.target.getBoundingClientRect());
      });
      // film.addEventListener("mouseleave", (e) => {
      //   if (e.target.getAttribute("id")) {
      //     setIsHovering(false);
      //   }
      //   setCoords(e.target.getBoundingClientRect());

      // });
    });
  }, []);

  return (
    <>
      <div className="padding-container">
        {isHovering && (
          <CallModal data={{ coords: coords, dataset: dataset }} />
        )}
        <LaneHandler />
        <Footer />
      </div>
    </>
  );
}

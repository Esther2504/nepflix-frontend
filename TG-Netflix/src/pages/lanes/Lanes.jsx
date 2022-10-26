import React, { useState, useEffect } from "react";
import LaneHandler from "../../components/lane/LaneHandler";
import Footer from "../../components/footer/footer";
import CallModal from "../../components/Modal/CallModal";

export default function Lanes({categories, movie}) {
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState(false);
  const [dataset, setDataset] = useState();

  console.log(categories)

  useEffect(() => {
    const films = document.querySelectorAll("#movie");
    films.forEach((film) => {
      film.addEventListener("mouseenter", (e) => {
        if (e.target.getAttribute("id")) {
          setDataset(film.dataset);
              setIsHovering(true); 
        }
        setCoords(e.target.getBoundingClientRect());
      });

      // film.addEventListener("mouseleave", (e) => {
      //   if (e.target.getAttribute("id")) {
      //     setDataset();
      //     setIsHovering(false);
      //   }
      //   setCoords(e.target.getBoundingClientRect());
      // });
    });

    window.addEventListener("click", (e) => {
      e.stopPropagation();
      setIsHovering(false);
    });
  }, []);

  return (
    <>
      <div className="padding-container">
        {isHovering && (
          <CallModal
            onMouseLeave={() => setIsHovering(false)}
            hover={isHovering}
            data={{ coords: coords, dataset: dataset, movie: movie }}
          />
        )}
        <LaneHandler categories={categories} movie={movie}/>
        <Footer />
      </div>
      </>
  )}
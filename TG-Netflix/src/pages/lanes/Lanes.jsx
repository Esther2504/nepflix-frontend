import React, { useState, useEffect } from "react";
import LaneHandler from "../../components/lane/LaneHandler";
import Footer from "../../components/footer/footer";
import CallModal from "../../components/Modal/CallModal";
import CallBigModal from "../../components/Modal/CallBigModal";
import { useSelector, useDispatch } from "react-redux";
import {openModal, closeModal} from '../../reducers/modalReducer'
export default function Lanes() {
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState(false);
  const [dataset, setDataset] = useState();

  const dispatch = useDispatch();

  const globalModalState = useSelector((state) => state.modal.modalState);

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

    });

    window.addEventListener("click", (e) => {
      e.stopPropagation();
      setIsHovering(false);
    });
  }, []);



  const openBigModal = () => {
    console.log("openbigmodal");

    dispatch(openModal({modalState: true, coords:coords}))
    // setOpenBModal(<CallBigModal/>)
  };
  useEffect(()=>{
    console.log('state change');
  },[globalModalState])
  return (
    <>
      <div className="padding-container">
        {isHovering && (
          <CallModal
            onMouseLeave={() => setIsHovering(false)}
            hover={isHovering}
            data={{ coords: coords, dataset: dataset }}
            onClick={openBigModal}
          />
        )}
        {globalModalState.modalState &&(
          <CallBigModal data={coords}/>
        )}
        <LaneHandler />
        <Footer />
      </div>
    </>
  );
}

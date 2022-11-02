import { Title, TitleWrapper} from './MyList.styled'
import Footer from '../../components/footer/footer';

import categoriesMock from '../../mock-data/browse_categories_banner.mock.json';
import GridLayout from '../../components/grid-layout/GridLayout';

// // Modal 
// import React, { useState, useEffect } from "react";
// import CallModal from "../../components/Modal/CallModal";
// import CallBigModal from "../../components/Modal/CallBigModal";
// import { useSelector, useDispatch } from "react-redux";
// import { openModal, closeModal } from "../../reducers/modalReducer";


export default function MyList() {

// //STATE
// const [isHovering, setIsHovering] = useState(false);
// const [coords, setCoords] = useState(false);
// const [dataset, setDataset] = useState();
// const dispatch = useDispatch();
// const globalModalState = useSelector((state) => state.modal.modalState);
// //END STATE

//  //add evenlistener for small modal
//  useEffect(() => {
//   const films = document.querySelectorAll("#movie");
//   films.forEach((film) => {
//     film.addEventListener("mouseenter", (e) => {
//       if (e.target.getAttribute("id")) {
//         setDataset(film.dataset);
//         setIsHovering(true);
//         setCoords(e.target.getBoundingClientRect());
//         dispatch(openModal({ modalState:false, coords: coords }));
//       }
//     });
//   });

//   window.addEventListener("click", (e) => {
//     e.stopPropagation();
//     setIsHovering(false);
//   });
// }, []);

// const openBigModal = () => {

//   dispatch(openModal({ modalState: true, coords }));
// };



  return (
    <>
      <div className="padding-container">
      {/* {isHovering && (
          <CallModal
            onMouseLeave={() => setIsHovering(false)}
            hover={isHovering}
            data={{ coords: coords, dataset: dataset, movie: movie }}
            onClick={openBigModal}
          />
        )}
        {globalModalState.modalState && <CallBigModal />} */}
        <TitleWrapper>
          <Title>My List</Title>
        </TitleWrapper>

        <GridLayout movies={categoriesMock.categories[0].movies} />

     
       
        <Footer />

      </div>
    </>
  );
}

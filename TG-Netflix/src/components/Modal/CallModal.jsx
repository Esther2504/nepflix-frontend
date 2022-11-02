import React, { useRef, useEffect, useState } from "react";
import movieDetailsMock from '../../mock-data/movie_details_similar.mock.json'

import CallSmallModal from "./CallSmallModal";

function CallModal(props) {

  return (
    <>
      <CallSmallModal setIsHovering={props.setIsHovering} movie={movieDetailsMock} {...props} />
    </>
  );
}

export default CallModal;
import React, { useEffect, useState } from "react";
import {
  SmallModalContainer,
  SmallModal,
  SmallModalTop,
  SmallModalBottom,
  InfoCon,
} from "./CallSmallModal.style";

const CallSmallModal = (props) => {
  const [sWidth, setsWidth] = useState(0);
  useEffect(() => {
    setsWidth(window.innerWidth);
  }, [sWidth]);

  const left = props.data.coords.x;
  const top = props.data.coords.y;
  const right = props.data.coords.right;
  const width = props.data.coords.right - props.data.coords.x;
  const height = props.data.coords.bottom - props.data.coords.y;

  const coords = {
    left,
    top,
    width,
    height,
    right,
  };

  const bg = props.data.dataset.backdrop;
  const description = props.data.dataset.description;
  const name = props.data.dataset.name;

  const mouseLeaveHandler = () => {
    setTimeout(function () {
      props.setIsHovering(false);
    }, 400);
  
  };

  return (
    <SmallModalContainer
    // onMouseLeave={mouseLeaveHandler}
      coords={coords}
      bg={bg}
    >
      <SmallModal coords={coords} bg={bg} sWidth={sWidth}>
        <SmallModalTop bg={bg} />
        <SmallModalBottom>
          <InfoCon>
            <h1>{name}</h1>
          </InfoCon>
          <p style={{color: "white", fontStyle: "italic"}}>"{description}"</p>
        </SmallModalBottom>
      </SmallModal>
    </SmallModalContainer>
  );
};

export default CallSmallModal;

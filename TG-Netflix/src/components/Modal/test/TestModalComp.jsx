import React, {useRef} from "react";
import CallModal from "./CallModal";

function TestComp() {
  const pass = { name: "name", genre: "genre" };
  const ref = useRef();

  return (
    <CallModal props={pass} ref={ref}>
      <img
        src="https://via.placeholder.com/150C/O"
        width={150}
      ></img>
    </CallModal>
  );
}

export default TestComp;

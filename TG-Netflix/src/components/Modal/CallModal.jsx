import React, { useRef, useEffect, useState } from "react";
import CallBigModal from "./CallBigModal";

import CallSmallModal from "./CallSmallModal";

function CallModal(props) {

  return (
    <>
      <CallSmallModal {...props} />
    </>
  );
}

export default CallModal;

import React from "react";
import CallModal from "./CallModal";

import styled from "styled-components";
const Container = styled.div`
display:flex;`

function TestComp() {
  const pass = { name: "name", genre: "genre" };
  
  return (
    <Container>
      <CallModal data={pass}>
        <img src="https://via.placeholder.com/150C/O" width={150}></img>
      </CallModal>
      <CallModal data={pass}>
        <img src="https://via.placeholder.com/150C/O" width={150}></img>
      </CallModal>
      <CallModal data={pass}>
        <img src="https://via.placeholder.com/150C/O" width={150}></img>
      </CallModal>
      <CallModal data={pass}>
        <img src="https://via.placeholder.com/150C/O" width={150}></img>
      </CallModal>
      <CallModal data={pass}>
        <img src="https://via.placeholder.com/150C/O" width={150}></img>
      </CallModal>
      <CallModal data={pass}>
        <img src="https://via.placeholder.com/150C/O" width={150}></img>
      </CallModal>
      
    </Container>
  );
}

export default TestComp;

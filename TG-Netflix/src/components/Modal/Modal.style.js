import styled from "styled-components";
import vidTitle from "../Modal/House_of_the_Dragon_logo.webp";
import { AiFillCloseCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillPlayFill, BsHandThumbsUp } from "react-icons/bs";

const SmallModal = styled.div`
  border: 1px solid red;
  width: 15rem;
  margin-left: 2rem;
  transition: scale linear 1s;
  padding: 1rem;

  &:hover {
    scale: 1.3;
  }
`;

const ModalContainer = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  display: inner-block;
  margin: 0 auto;
  margin-top: 3rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  width: 85rem;
  height: 100%;
  background-color: #181818;
`;
const ModalClose = styled.div`
  position: absolute;
  right: 0;
  border-radius: 50px;
  background-color: white;
  z-index: 2;
  margin-top: 1.5rem;
  margin-right: 1.5rem;
  color: white;
`;

const ModalPreview = styled.div`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

const VideoPlayer = styled.video`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

const VideoControlsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 30rem;
  z-index: 3;
  margin-top: 18rem;
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
`;

const VideoTitle = styled.div`
  height: 8rem;
  background-image: url(${vidTitle});
  background-repeat: no-repeat;
  background-size: contain;
`;

const VideoControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
`;

const VideoPlay = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  width: 10rem;
  height: 40px;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 0.5rem;
  border: 1px solid black;
  &:hover {
    background-color: #cccccc;
  }
`;

const CloseCircle = styled(AiFillCloseCircle)`
  font-size: 4rem;
  color: #181818;
`;
const PlayButton = styled(BsFillPlayFill)`
  font-size: 4rem;
`;

const PlusCircle = styled(AiOutlinePlusCircle)`
  color: #cccccc;
  font-size: 4rem;
  margin-left: 0.5rem;
  &:hover {
    color: white;
  }
`;
const ThumbsUp = styled(BsHandThumbsUp)`
  border:3px solid #ccc;
  border-radius:50%;
  padding:0.5rem;
  color: #cccccc;
  font-size: 3.5rem;
  margin-left:0.5rem;
  &:hover {
    color: white;
  }
`;

export {
  SmallModal,
  ModalContainer,
  ModalContent,
  ModalClose,
  ModalPreview,
  VideoPlayer,
  VideoControlsContainer,
  VideoTitle,
  VideoPlay,
  VideoControls,
  CloseCircle,
  PlayButton,
  PlusCircle,
  ThumbsUp,
};

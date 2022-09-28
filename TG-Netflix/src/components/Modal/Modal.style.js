import styled from "styled-components";
import vidTitle from "../Modal/House_of_the_Dragon_logo.webp";
import { AiFillCloseCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillPlayFill, BsHandThumbsUp } from "react-icons/bs";
import { TbVolume3 } from "react-icons/tb";

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
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  margin-top: 3rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  width: 85rem;
  height: 100%;
  background-color: #181818;
  animation: blowUpModal .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;

  @keyframes blowUpModal {
    0% {
      transform:scale(0);
    }
    100% {
      transform:scale(1);
    }
  }
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
  _aspect-ratio: 16 / 9;
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
  background: linear-gradient(0deg, #181818, transparent 50%);
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
  align-items: center;
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
const CloseButton = styled.div``;

const CloseCircle = styled(AiFillCloseCircle)`
  position: absolute;
  right: 0;
  border-radius: 50%;
  z-index: 2;
  margin-top: 1.5rem;
  margin-right: 1.5rem;
  background-color: #181818;
  font-size: 4rem;
  &:hover {
    background-color: white;
  }
`;
const PlayButton = styled(BsFillPlayFill)`
  font-size: 4rem;
`;

const PlusCircle = styled(AiOutlinePlusCircle)`
  color: #cccccc;
  font-size: 4rem;
  margin-left: 1rem;
  &:hover {
    color: white;
    border-color: white;
  }
`;
const ThumbsUp = styled(BsHandThumbsUp)`
  border: 3px solid #ccc;
  border-radius: 50%;
  padding: 0.5rem;
  color: #cccccc;
  font-size: 3.5rem;
  margin-left: 1rem;
  &:hover {
    color: white;
    border-color: white;
  }
`;
const RateIcons = styled.div``;

const VolumeIcon = styled(TbVolume3)`
  border: 3px solid #ccc;
  border-radius: 50%;
  font-size: 4rem;
  color: #cccccc;
  padding: 0.5rem;
  margin-left: auto;
  margin-right: 1.5rem;
  &:hover {
    color: white;
    border-color: white;
  }
`;
const VideoInfoContainer = styled.div`
  border:1px solid red;
`
const MoreLikeThisContainer = styled.div`
  border:1px solid red;
`

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
  RateIcons,
  VolumeIcon,
  CloseButton,
  VideoInfoContainer,
  MoreLikeThisContainer,
};

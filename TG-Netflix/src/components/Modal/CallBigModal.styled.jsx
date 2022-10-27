import styled from "styled-components";
import VidTitle from "./House_of_the_dragon_logo.webp"
import {
  AiFillCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineDown,
} from "react-icons/ai";
import { BsFillPlayFill, BsHandThumbsUp } from "react-icons/bs";
import { TbVolume3 } from "react-icons/tb";

//START VIDEOPLAYER (will be replaced by videomodal)
export const VideoPlayer = styled.video`
  border-radius: 1rem;
  aspect-ratio: 16/9;
`;

export const VideoControlsContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: -12rem;
  z-index: 3;
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  background: linear-gradient(0deg, #181818, transparent 50%);
`;
export const VideoTitle = styled.div`
  height: 8rem;
  background-image: url(${VidTitle});
  background-repeat: no-repeat;
  background-size: contain;
   
`;
export const VideoControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const VideoPlay = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  width: 10rem;
  height: 40px;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 0.5rem;
  &:hover {
    background-color: #cccccc;
  }
`;
export const CloseButton = styled.div``;
export const CloseCircle = styled(AiFillCloseCircle)`
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
export const PlayButton = styled(BsFillPlayFill)`
  font-size: 4rem;
`;

export const PlusCircle = styled(AiOutlinePlusCircle)`
  color: #cccccc;
  font-size: 4rem;
  margin-left: 1rem;
  &:hover {
    color: white;
    border-color: white;
  }
`;
export const ThumbsUp = styled(BsHandThumbsUp)`
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
export const RateIcons = styled.div``;
export const VolumeIcon = styled(TbVolume3)`
  border: 3px solid #ccc;
  border-radius: 50%;
  font-size: 4rem;
  color: #cccccc;
  margin-left: auto;
  margin-right: 1.5rem;
  &:hover {
    color: white;
    border-color: white;
  }
`;
//END VIDEOPLAYER

//START MODAL
export const ModalContainer = styled.div`
  display: block;
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
  /* overflow-y: scroll; */
  top: 0;
  left: 0;
`;

export const ModalContent = styled.div`
  display: flex;
  -margin: 0 auto;
  margin-top: 3rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  max-width: 85rem;
  padding-bottom: 2rem;
  background-color: #181818;
  transform-origin: ${(props) => props.coords};

  animation: blowUpModal 0.75s ease-in-out forwards;
  @keyframes blowUpModal {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
      margin-left: calc((100vw - 85rem) / 2);
    }
  }
`;
export const ModalClose = styled.div`
  position: absolute;
  right: 0;
  border-radius: 50px;
  background-color: white;
  z-index: 2;
  margin-top: 1.5rem;
  margin-right: 1.5rem;
  color: white;
`;

export const ModalPreview = styled.div`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  display: flex;
  flex-direction: column;
`;

export const VideoInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 700;
  font-size: 1.6rem;
  margin-top: 1rem;
  color: #ffffff;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 1rem;
  @media (max-width: 353px) {
    flex-direction: column;
  }
`;
export const VideoInfoContainerLeft = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  width: 70%;
`;
export const VideoInfoContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  text-align: left;
  color: #ffffff;
  span {
    color: #777777;
  }
`;
export const MetaData = styled.div`
  grid-row: 1;
  display: flex;
  flex-direction: row;
`;
export const Rating = styled.div`
  color: #46d369;
`;
export const ReleaseYear = styled.div`
  margin-left: 0.5rem;
`;
export const MaturityRating = styled.div``;
export const Duration = styled.div`
  margin-left: 0.5rem;
`;
export const VidQuality = styled.div`
  margin-left: 0.5rem;
`;
export const AudDesc = styled.div`
  margin-left: 0.5rem;
`;
export const Cast = styled.div``;
export const Genres = styled.div``;
export const Tags = styled.div``;
export const Summary = styled.div`
  grid-row: 2;
  font-size: 1.4rem;
  text-align: left;
  margin-top: 1rem;
`;
export const MoreLikeThisContainer = styled.div`
  text-align: left;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  span {
    color: #ffffff;
    font-size: 2.4rem;
    font-weight: 700;
  }
`;
export const MoreLikeThisWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 823px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 353px) {
    grid-template-columns: repeat(1, 1fr);
  }
  gap: 1rem;
  border-bottom: 1px solid #777777;
  height: 75rem;
  overflow: hidden;
  padding-bottom: 5rem;
`;
export const MoreLikeThisToggle = styled(AiOutlineDown)`
  position: relative;
  font-size: 4rem;
  color: #777777;
  border: 1px solid #777777;
  border-radius: 50%;
  top: -2rem;
  left: 50%;
  &:hover {
    color: #ffffff;
    border-color: #ffffff;
  }
`;
export const AboutContainer = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  text-align: left;
  padding-left: 3rem;
  padding-right: 3rem;
  h1 {
    margin-bottom: 1rem;
  }
  span {
    color: #777777;
  }
`;
export const AboutTitle = styled.div``;
//END MODAL

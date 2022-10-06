import styled from "styled-components";
import vidTitle from "../Modal/House_of_the_Dragon_logo.webp";
import {
  AiFillCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineDown,
} from "react-icons/ai";
import { BsFillPlayFill, BsHandThumbsUp } from "react-icons/bs";
import { TbVolume3 } from "react-icons/tb";

//START SMALLMODAL (will be replaced with carousel)
const SmallModalTop = styled.div`
  height: 100%;
  width: 100%;
`;
const SmallModalBottom = styled.div`
  display: none;
  visibility: hidden;
  height: 100%;
  transform-origin: 0% 100%;
  background-color: #181818;
`;
const SmallModal = styled.div`
  width: 15rem;
  margin-left: 2rem;
  transition: scale linear 0.3s;
  -transform-origin: 0% 100%;
  border-radius: 0.5rem;
  width: 15rem;
  aspect-ratio: 16/9;
  background-color: #181818;

  &:hover {
    scale: 1.3;

    ${SmallModalBottom} {
      display: block;
      visibility: visible;
      border-radius: 0.5rem;
      animation: fade_in_show 0.1s;

      @keyframes fade_in_show {
        0% {
          opacity: 0;
          transform: scale(0);
        }

        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  }
`;
//END SMALLMODAL

//START VIDEOPLAYER (will be replaced by videomodal)
const VideoPlayer = styled.video`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  aspect-ratio: 16/9;
`;

const VideoControlsContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: -18rem;
  height: 18rem;
  z-index: 3;
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
  &:hover {
    background-color: #cccccc;
  }
`;
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
  margin-left: auto;
  margin-right: 1.5rem;
  &:hover {
    color: white;
    border-color: white;
  }
`;
//END VIDEOPLAYER

//START MODAL
const ModalContainer = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
  overflow-y: scroll;
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  margin-top: 3rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  max-width: 85rem;
  padding-bottom: 2rem;
  background-color: #181818;
  animation: blowUpModal 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  @keyframes blowUpModal {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
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
  display: flex;
  flex-direction: column;
`;

const VideoInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 700;
  font-size: 2rem;
  margin-top: 1rem;
  color: #ffffff;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 1rem;
`;
const VideoInfoContainerLeft = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  width: 70%;
`;
const VideoInfoContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  text-align: left;
  color: #ffffff;
  span {
    color: #777777;
  }
`;
const MetaData = styled.div`
  grid-row: 1;
  display: flex;
  flex-direction: row;
`;
const Rating = styled.div`
  color: #46d369;
`;
const ReleaseYear = styled.div`
  margin-left: 0.5rem;
`;
const MaturityRating = styled.div``;
const Duration = styled.div`
  margin-left: 0.5rem;
`;
const VidQuality = styled.div`
  margin-left: 0.5rem;
`;
const AudDesc = styled.div`
  margin-left: 0.5rem;
`;
const Cast = styled.div``;
const Genres = styled.div``;
const Tags = styled.div``;
const Summary = styled.div`
  grid-row: 2;
  font-size: 1.5rem;
  text-align: left;
`;
const MoreLikeThisContainer = styled.div`
  text-align: left;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  span {
    color: #ffffff;
    font-size: 2rem;
    font-weight: 700;
  }
`;
const MoreLikeThisWrapper = styled.div`
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
const MoreLikeThisToggle = styled(AiOutlineDown)`
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
const AboutContainer = styled.div`
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
const AboutTitle = styled.div``;
//END MODAL

export {
  SmallModal,
  SmallModalTop,
  SmallModalBottom,
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
  VideoInfoContainer,
  VideoInfoContainerLeft,
  VideoInfoContainerRight,
  MetaData,
  Rating,
  ReleaseYear,
  MaturityRating,
  Duration,
  VidQuality,
  AudDesc,
  Cast,
  Genres,
  Tags,
  Summary,
  MoreLikeThisContainer,
  MoreLikeThisWrapper,
  MoreLikeThisToggle,
  AboutContainer,
  AboutTitle,
};

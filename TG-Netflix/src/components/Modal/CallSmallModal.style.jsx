import styled from "styled-components";
import {
  AiFillCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineDown,
} from "react-icons/ai";
import { BsFillPlayFill, BsHandThumbsUp } from "react-icons/bs";
import { TbVolume3 } from "react-icons/tb";

export const SmallModalContainer = styled.div`
${props=> console.log(props)};
  position: absolute;
  left: ${(props) => props.coords.left + "px"};
  top: ${(props) => props.coords.top + "px"};
  width: ${(props) => props.coords.width + "px"};
  height: ${(props) => props.coords.height + "px"};
`;

//START SMALLMODAL
export const SmallModalTop = styled.div`
  height: 100%;
  width: 100%;
`;
export const SmallModalBottom = styled.div`
  background-color: #181818;
  width: 100%;
  height: 0;
  opacity: 0;
  transition: opacity ease-in-out 150ms, height 100ms ease-in-out;
  transition-delay: 300ms;
`;
export const SmallModal = styled.div`
  position: absolute;
  height: inherit;
  transition: scale ease-in-out 150ms, opacity 150ms ease-in-out;
  transition-delay: 300ms;
  /* transform-origin: ${(props) =>
    props.bounds === "center"
      ? "center"
      : props.bounds === "left"
      ? "left center"
      : "right center"}; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  background-color: #181818;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  z-index: 999;
  &:hover {
    scale: 1.5;
    ${SmallModalBottom} {
      border-radius: 0 0 0.5rem 0.5rem;
      opacity: 1;
      height: 5rem;
    }
  }
`;
//END SMALLMODAL

//START VIDEOPLAYER (will be replaced by videomodal)
export const VideoPlayer = styled.video`
  border-radius: 1rem;
  aspect-ratio: 16/9;
  display: none;
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

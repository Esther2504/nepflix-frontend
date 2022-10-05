import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

const VideoPlayer = styled.video`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  _aspect-ratio: 16 / 9;
`;

const PreviewMetaData = styled.div`
  display: grid;
  grid-template-row: 3;
  grid-template-columns: 2;
  color: #d2d2d2;
  padding: 1rem;
  background-color: #2f2f2f;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;
const PreviewPlay = styled(BsFillPlayFill)`
  position: absolute;
  border:1px solid #ffffff;
  border-radius:50%;
  opacity: 0;
  z-index: 2;
  color: #ffffff;
  font-size: 4rem;
  left: 45%;
  top: 15%;
`;
const PreviewModalContainer = styled.div`
  position: relative;
  &:hover {
    ${PreviewPlay} {
      transition: opacity 0.2s linear;
      opacity: 1;
      vertical-align: top;
    }
  }
`;
const PreviewDuration = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  top: 5%;
  right: -85%;
`;
const PreviewRating = styled.div`
  grid-row: 1;
  grid-column: 1;
  color: #46d369;
  font-size: 1.5rem;
  font-weight: 700;
`;
const PreviewMaturityRating = styled.div`
  grid-row: 2;
  grid-column: 1;
`;
const PreviewReleaseYear = styled.div`
  grid-row: 2;
  grid-column: 1;
  font-size: 1.5rem;
  font-weight: 700;
`;

const PreviewAddToList = styled(AiOutlinePlusCircle)`
  grid-row: 1 / span 2;
  grid-column: 2;
  font-size: 4rem;
  justify-self: end;
  color: #cccccc;
  &:hover {
    color: #ffffff;
  }
`;
const PreviewSummary = styled.div`
  grid-row: 3;
  grid-column: 1 / span 2;
  font-size: 1.5rem;
  text-align: left;
  margin-top: 1rem;
`;

export {
  VideoPlayer,
  PreviewModalContainer,
  PreviewPlay,
  PreviewDuration,
  PreviewRating,
  PreviewMaturityRating,
  PreviewReleaseYear,
  PreviewAddToList,
  PreviewMetaData,
  PreviewSummary,
};

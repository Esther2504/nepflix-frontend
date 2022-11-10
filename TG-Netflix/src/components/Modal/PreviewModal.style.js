import styled from 'styled-components';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';

export const VideoPlayer = styled.video`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  aspect-ratio: 16 / 9;
`;
export const Thumbnail = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  aspect-ratio: 16 / 9;
`;
export const PreviewMetaData = styled.div`
  /* display: grid;
  grid-template-rows: 2rem 2rem;
  grid-template-columns: 2; */
  position: relative;
  color: #d2d2d2;
  padding: 1rem;
  background-color: #2f2f2f;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  flex-grow: 1;
  /* height: 100%; */
`;
export const MaturityContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const PreviewPlay = styled(BsFillPlayFill)`
  position: absolute;
  border: 1px solid #ffffff;
  border-radius: 50%;
  opacity: 0;
  z-index: 2;
  color: #ffffff;
  font-size: 4rem;
  left: 45%;
  top: 15%;
`;
export const PreviewModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  height: 100%;

  &:hover {
    ${PreviewPlay} {
      transition: opacity 0.2s linear;
      opacity: 1;
      vertical-align: top;
    }
  }
`;

export const ThumbnailContainer = styled.div`
  position: relative;
  img:nth-of-type(1) {
    position: absolute;
    top: 8px;
    left: 3px;
    width: 1.3vw;
  }
`;
export const PreviewDuration = styled.div`
  position: absolute;
  z-index: 2;
  color: white;
  width: 50px;
  top: 10px;
  right: -5px;
  font-weight: bold;
  font-size: 1.3rem;
  text-shadow: 1px 1px 1px black;
`;
export const PreviewRating = styled.div`
  /* grid-row: 1;
  grid-column: 1; */
  color: #46d369;
  font-size: 1.6rem;
  font-weight: 700;
  height: 3rem;
`;

export const RatingContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 3rem;
  height: 3rem;
  padding: 1.6rem;
  line-height: 1.3rem;
  /* border-radius: 50%; */
background-color: black;
border: 2px solid white;
border-radius: 50%;
`

export const PreviewMaturityRating = styled.div`
  /* grid-row: 2;
  grid-column: 1; */
  font-size: 1.4rem;
  font-weight: bold;
text-align: center;
 
  /* height: 2rem; */
`;
export const PreviewReleaseYear = styled.div`
  /* grid-row: 2;
  grid-column: 2; */
  font-size: 1.6rem;
  font-weight: 700;
`;
export const PreviewAddToList = styled(AiOutlinePlusCircle)`
  /* grid-row: 1 / span 2;
  grid-column: 2; */
  /* position: absolute;
  top: 0;
  right: 0; */
  font-size: 4.5rem;
  justify-self: end;
  color: #cccccc;
  width: 35px;

  &:hover {
    color: #ffffff;
  }
`;
export const Title = styled.div`
  /* grid-row: 1; */
  /* grid-column: 1 /span 2; */
  font-size: 2rem;
  margin-top: 0;
  position: absolute;
  color: white;
  font-weight: 550;
  line-height: 1;
  text-shadow: 1px 1px 1px rgb(20, 20, 20);
  z-index: 2;
  left: 5px;
  bottom: 5px;
`;
export const PreviewSummary = styled.div`
  /* grid-row: 3; */
  /* grid-column: 1 / span 2; */
  font-size: 1.4rem;
  text-align: left;
  margin-top: 1rem;
  /* height: 100%; */
`;

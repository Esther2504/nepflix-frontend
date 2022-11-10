import styled from 'styled-components';
import { AiFillCloseCircle, AiOutlineDown } from 'react-icons/ai';

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

//START MODAL
export const ModalContainer = styled.div`
  display: block;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  -margin: 0 auto;
  margin-top: 3rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  max-width: 70%;
  padding-bottom: 2rem;
  background-color: #181818;
  transform-origin: ${(props) => props.coords};
  @media (max-width: 1100px) {
    max-width: 90%;
  }

  animation: blowUpModal 0.75s ease-in-out forwards;
  @keyframes blowUpModal {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
      margin-left: calc((100vw - 70%) / 2);
    }
  }

  @media (max-width: 1100px) {
    @keyframes blowUpModal {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
        margin-left: calc((100vw - 90%) / 2);
      }
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
  text-align: justify;

  @media (max-width: 820px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
export const VideoInfoContainerLeft = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  width: 70%;

  @media (max-width: 820px) {
    width: 100%;
  }
`;
export const VideoInfoContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  text-align: left;
  color: #ffffff;
  padding-left: 2rem;

  width: 50%;

  @media (max-width: 820px) {
    width: 100%;
    padding-left: 0;
  }

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
    display: block;
    margin-bottom: 1rem;
  }
`;
export const MoreLikeThisWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 823px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
  gap: 1rem;
  border-bottom: 1px solid #777777;
  height: 90rem;
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

export const Error = styled.div`
  color:#fff;
  width:100%;

  height:10rem;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size:2rem;

`
//END MODAL

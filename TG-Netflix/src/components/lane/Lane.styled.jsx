import styled from "styled-components";


export const LaneContainer = styled.div`
margin-bottom: 2rem;
`;

export const LaneWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 90vw;
  margin: auto;
  display: flex;
`;

export const TopWrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: flex;
`;

export const LaneTitle = styled.div`
  color: #e5e5e5;
  width: 90vw;
  font-size: 1.2vw;
  margin: 0 auto;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-right: 3rem;
`;

export const ScrollBtns = styled.div`
  display:flex;
`

export const SlideIndicator = styled.div`
  /* child of LaneContainer */
  width: 50%;
  z-index: 1;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  opacity: 0; /* set opacity 1 on hover / 0 on mouse leave */
`;

export const IndicatorRect = styled.div`
  /* child of SlideIndicator */
  width: 12px;
  height: 2px;
  background: ${(props) => (props.active ? "lightgrey" : "grey")};
  margin: 0 1px;
`;

export const ScrollLeftButtonContainer = styled.div`
  height:inherit;
  width:5vw;
`
export const ScrollRightButtonContainer = styled.div`
  height:inherit;
  width:5vw;
`
export const ScrollLeftButton = styled.span`
  left: 0;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;
  width: inherit;
  height: 100%;
  background-color: #14141440;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: transparent;
  transition: font-size 70ms linear;
  opacity: 0;
  pointer-events: none;
  &:hover {
    font-size: 28px;
  }
`;

export const ScrollRightButton = styled.span`
  left: auto;
 
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  cursor: pointer;
  width: inherit;
  height: 100%;
  background-color: #14141440;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: transparent;
  transition: font-size 70ms linear;
  opacity: 0;
  &:hover {
    font-size: 28px;
  }


`;

export const Slides = styled.div`
  /* child of Lane */
  transition: ${(props) => (props.hasTransitionClass ? "ease all 0.5s" : null)};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  scroll-padding-inline: 4.8rem;
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  margin: 3px;
  border-radius: 5px;
  cursor: pointer;
  span {
    position: absolute;
    width: 100%;
    padding: 0 5px;
    bottom: 7px;
    font-family: Futura;
    text-align: center;
    line-height: 0.9;
    font-size: 1.5vw;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 2px rgb(0, 0, 0, 0.75);
    z-index: 0;
  }
  img:nth-of-type(2) {
    position: absolute;
    top: 8px;
    left: 3px;
    width: 1.3vw;
  }
`;
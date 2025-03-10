import React from "react";
import { useState, useEffect } from "react";
import {
  LaneWrapper,
  LaneContainer,
  SlideIndicator,
  IndicatorRect,
  ScrollLeftButton,
  ScrollRightButton,
  Slides,
  LaneTitle,
  TopWrapper,
  ScrollBtns,
  ScrollLeftButtonContainer,
  ScrollRightButtonContainer,
} from "./Lane.styled";
import SlideContent from "./SlideContent";

export default function Lane(props) {
  const transitionSpeed = 500;
  const [visibleSlide, setVisibleSlide] = useState(1);
  const [hasTransitionClass, setHasTransitionClass] = useState(true);
  const [stateSlides, setStateSlides] = useState(props.slices);
  const [leftAndRightDisabled, setLeftAndRightDisabled] = useState(false);
  const laneWidth = document.getElementById("root").clientWidth * 0.9;
  const slides = props.slices;
  const itemsPerLane = props.itemsPerLane;
  const slideHeight = (laneWidth / itemsPerLane) * (9 / 16);

  useEffect(() => {
    const slidesWithClones = [...slides];
    slidesWithClones.unshift(slidesWithClones[slidesWithClones.length - 1]);
    slidesWithClones.push(slidesWithClones[1]);
    setStateSlides(slidesWithClones);
  }, [slides]);

  useEffect(() => {
    if (visibleSlide == stateSlides.length - 1) {
      setLeftAndRightDisabled(true);
      setTimeout(() => {
        setHasTransitionClass(false);
        setVisibleSlide(1);
      }, transitionSpeed);
    }

    if (visibleSlide === 1) {
      setTimeout(() => {
        setHasTransitionClass(true);
      }, transitionSpeed);
    }

    if (visibleSlide === 0) {
      setLeftAndRightDisabled(true);
      setTimeout(() => {
        setHasTransitionClass(false);
        setVisibleSlide(stateSlides.length - 2);
      }, transitionSpeed);
    }

    if (visibleSlide == stateSlides.length - 2) {
      setTimeout(() => {
        setHasTransitionClass(true);
      }, transitionSpeed);
    }
  }, [visibleSlide]);

  useEffect(() => {
    if (leftAndRightDisabled) {
      setTimeout(() => {
        setLeftAndRightDisabled(false);
      }, transitionSpeed * 2);
    }
  }, [leftAndRightDisabled]);

  const calculateLeftMargin = () => {
    return "-" + visibleSlide * laneWidth + "px";
  };

  const slideDimensionStyles = () => {
    return { width: laneWidth + "px", height: slideHeight + "px" };
  };

  const scrollLeft = () => {
    setVisibleSlide(visibleSlide - 1);
  };

  const scrollRight = () => {
    setVisibleSlide(visibleSlide + 1);
  };

  const dotIsActive = (index) => {
    return (
      index === visibleSlide ||
      (index === 1 && visibleSlide === stateSlides.length - 1) ||
      (index === stateSlides.length - 2 && visibleSlide === 0)
    );
  };

  const [isHovered, setIsHovered] =
    useState(false); /*   hover state voor indicators/ left right buttons  */
  const [isScrolled, setIsScrolled] =
    useState(false); /* set opacity obv naar rechts gescrolled */

  let categoryTitle = props.categoryTitle;
  if (categoryTitle == "Science fiction") {
    categoryTitle = "Science Fiction";
  } else if (categoryTitle == "Tv movie") {
    categoryTitle = "TV Movie";
  }

  return (
    <LaneContainer>
      <TopWrapper>
        <LaneTitle>
          <h2>{categoryTitle}</h2>
        </LaneTitle>

        <SlideIndicator
          style={{
            opacity: isHovered ? "1" : "",
          }}
        >
          {stateSlides.map((slide, index) => {
            if (index === 0 || index === stateSlides.length - 1) {
              return null;
            }
            return <IndicatorRect key={index} active={dotIsActive(index)} />;
          })}
        </SlideIndicator>
      </TopWrapper>
      <ScrollBtns
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ScrollLeftButtonContainer>
          <ScrollLeftButton
            onClick={!leftAndRightDisabled ? scrollLeft : null}
            disabled={leftAndRightDisabled}
            style={{
              pointerEvents: !isScrolled ? "" : "all",
              zIndex: !isScrolled ? "-10" : "",
              opacity: isHovered && isScrolled ? "1" : "",
              color: isHovered ? "white" : "",
              backgroundColor: isHovered ? "#14141480" : "",
            }}
          >
            ❮
          </ScrollLeftButton>
        </ScrollLeftButtonContainer>

        <LaneWrapper>
          <div className="lane_container" style={slideDimensionStyles()}>
            <Slides
              hasTransitionClass={hasTransitionClass}
              style={{ left: calculateLeftMargin() }}
            >
              {stateSlides.map((slide, index) => {
                return (
                  <div key={index} style={slideDimensionStyles()}>
                    <SlideContent
                      list={Array.from(slide)}
                      imageWidth={laneWidth / itemsPerLane - 6 + "px"}
                      imageHeight={slideHeight + "px"}
                      title={props.title}
                    ></SlideContent>
                  </div>
                );
              })}
            </Slides>
          </div>
        </LaneWrapper>
        <ScrollRightButtonContainer>
          <ScrollRightButton
            onClick={!leftAndRightDisabled ? scrollRight : null}
            onMouseDown={() => setIsScrolled(true)}
            disabled={leftAndRightDisabled}
            style={{
              opacity: isHovered ? "1" : "",
              color: isHovered ? "white" : "",
              backgroundColor: isHovered ? "#14141480" : "",
            }}
          >
            ❯
          </ScrollRightButton>
        </ScrollRightButtonContainer>
      </ScrollBtns>
    </LaneContainer>
  );
}

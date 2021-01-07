import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slide from "./Slide";

export default function OptionSlide({ img1, img2, img3, count, height }) {
  const TOTAL_SLIDES = count;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const isMaximum = currentSlide >= TOTAL_SLIDES;
    setCurrentSlide(isMaximum ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? TOTAL_SLIDES : currentSlide - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide => currentSlide + 1);
      if (currentSlide >= TOTAL_SLIDES) {
        setCurrentSlide(0);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [TOTAL_SLIDES, currentSlide]);

  return (
    <Container>
      <SliderContainer currentSlide={currentSlide}>
        <Slide img={img1} height={height} />
        <Slide img={img2} height={height} />
        <Slide img={img3} height={height} />
      </SliderContainer>
      <ButtonContainer>
        <Button1 onClick={prevSlide}>
          <img src="images/다운로드 (4).svg" alt="arrow" />
        </Button1>
        <Button2 onClick={nextSlide}>
          <img src="images/다운로드 (4).svg" alt="arrow" />
        </Button2>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
  margin-top: 40px;
  position: relative;
  height: 100%;
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  transition: all 0.5s ease-in-out;
  transform: translateX(-${props => props.currentSlide}00%);
`;

const Button1 = styled.button`
  position: absolute;
  top: 50%;
  left: 0px;
  z-index: 10;
  border: none;
  outline: none;
  background-color: transparent;
  transform: translateY(-50%) rotate(-180deg);
`;

const Button2 = styled.button`
  position: absolute;
  top: 50%;
  right: 0px;
  z-index: 10;
  border: none;
  outline: none;
  background-color: transparent;
  transform: translateY(-50%);
`;

const ButtonContainer = styled.div`
  width: 100%;
`;

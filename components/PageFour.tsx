"use client";
import React from "react";
import styled from "styled-components";

const PageFiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;

const PageFiveContent = styled.div`
  width: 50vw;
`;

const PageFiveStyle = styled.div`
  font-size: 9rem;
  color: #000;
  text-align: center;
  font-weight: 200;
  margin-top: 15vh;
`;

const SmallText = styled.p`
  font-size: 0.9rem;
  color: #000;
  text-align: center;
  font-weight: 200;
  margin-top: 15vh;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px; /* Adjust as needed */
`;

const Button = styled.button`
  background-color: black;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  border: none;
  &:hover {
    background-color: white;
    color: black;
  }
  margin-top: 4vh;

`;

export interface IPageFiveProps {}

const PageFive: React.FunctionComponent<IPageFiveProps> = () => {
  return (
    <>
      <PageFiveContainer id="Technique">
        <PageFiveContent>
          <PageFiveStyle>Technique</PageFiveStyle>
          <SmallText>
            Refine Your Gym Routine with Proven Techniques! Explore our
            Technique Section for a treasure trove of workout wisdom sourced
            directly from top fitness influencers on YouTube. Tailor your
            training regimen by selecting your desired workout type, whether
            it's mastering squats, perfecting deadlifts, or honing your bench
            press technique. With our 'Learn More' option, dive deeper into each
            technique's intricacies, empowering you to elevate your fitness
            game. Get ready to unleash your full potential and achieve your
            fitness aspirations with precision and confidence!
          </SmallText>
          <ButtonContainer>
            <Button>Click Here For More</Button>
          </ButtonContainer>
        </PageFiveContent>
      </PageFiveContainer>
    </>
  );
};

export default PageFive;
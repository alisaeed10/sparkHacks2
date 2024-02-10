"use client";
import React from "react";
import styled from "styled-components";
import ScrollButton from "./ScroolButton";


const PageThreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url('../public/stars.webp');
`;

const PageThreeContent = styled.div`
  width: 50vw;
  margin-bottom: 17vh;
`;

const PageThreeStyle = styled.div`
  font-size: 9rem;
  color: #000;
  text-align: center;
  font-weight: 200;
  margin-top: 7vh;
`;

const SmallText = styled.p`
  font-size: 0.9rem;
  color: #000;
  text-align: center;
  font-weight: 200;
  margin-top: 5vh;
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

export interface IPageThreeProps {}

const PageThree: React.FunctionComponent<IPageThreeProps> = () => {
  return (
    <>
      <PageThreeContainer id="AtHomeWorkOuts">
        <PageThreeContent>
          <PageThreeStyle>Home Work Outs</PageThreeStyle>
          <SmallText>
            Transform Your Home into Your Personal Gym! Dive into our At-Home
            Workout Section for a wealth of exercise routines tailored
            specifically for your living space. Discover a variety of workouts
            designed to challenge and invigorate, from full-body HIIT sessions
            to soothing yoga flows, all accessible from the comfort of your own
            home. Select your preferred workout, each accompanied by detailed
            descriptions and instructional videos, empowering you to customize
            your fitness journey to match your goals and preferences. Take the
            first step towards a healthier, stronger you—click 'Learn More' to
            unlock the secrets to effective at-home fitness.
          </SmallText>
          <ButtonContainer>
            <Button>Click Here For More</Button>
          </ButtonContainer>
          <ButtonContainer>
            <ScrollButton />
          </ButtonContainer>
        </PageThreeContent>
      </PageThreeContainer>
    </>
  );
};

export default PageThree;

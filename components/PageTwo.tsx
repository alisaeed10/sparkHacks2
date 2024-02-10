/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import styled from "styled-components";
// import ScrollButton from "./ScroolButton";
import './background.css';

const PageFiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const PageFiveContent = styled.div`
  width: 50vw;
`;

const PageFiveStyle = styled.div`
  font-size: 9rem;
  color: white;
  text-align: center;
  font-weight: 200;
  margin-bottom: 12vh;
`;

const SmallText = styled.p`
  font-size: 1rem;
  color: white;
  text-align: center;
  font-weight: 300;
  margin-top: 11vh;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px; /* Adjust as needed */
`;

const Button2 = styled.button`
  background-color: rgb(255, 170, 0);
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

export interface IPageTwoProps {}

const PageTwo: React.FunctionComponent<IPageTwoProps> = () => {
  const motivation = () => {
    window.location.href = '/Motivation';
  }
  return (
    <div className="conainter-background">
      <PageFiveContainer id="Motivation">
        <PageFiveContent>
          <PageFiveStyle>Motivation</PageFiveStyle>
          <SmallText>
            Discover the Power of Motivation: Dive into our Motivation section
            for a curated collection of inspirational videos from renowned
            YouTube influencers. Elevate your spirits and ignite your drive with
            powerful quotes designed to boost confidence and fuel determination.
            Whether you're seeking a dose of encouragement or a surge of
            motivation, our carefully selected content is here to inspire you.
            Click 'Learn More' to embark on a journey of self-discovery and
            unleash your full potential today
          </SmallText>
          <ButtonContainer>
            <Button2 onClick={()=> motivation()}>Click Here For More</Button2>
          </ButtonContainer>
          {/* <ButtonContainer>
            <ScrollButton />
          </ButtonContainer> */}
        </PageFiveContent>
      </PageFiveContainer>
    </div>
  );
};

export default PageTwo;

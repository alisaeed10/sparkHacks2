/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ScrollButton from "./ScroolButton";
import './background.css';

const PageOneContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  
`;

const Heading1 = styled.h1`
  margin: 20px 0px 20px;
  font-size: 75px;
`;

const Span = styled.span`
  color: rgb(255, 170, 0);
`;

const Heading4 = styled.h4`
  letter-spacing: 2px;
  font-size: 22px;
`;

const Heading3 = styled.h3`
  font-size: 1rem;
  margin-bottom: 50px;
`;

const PageOneContent = styled.div`
  width: 50vw;
  top: 50%;
  text-align: center;
  margin-top: 20px; /* Move text down */
  margin-left: 400px; /* Move text to the right */
`;

const PageOneStyle = styled.div`
  font-size: 9rem;
  color: white;
  // text-align: center;
  font-weight: 9rem;
  margin-top: 15vh;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  margin-bottom: 120px; /* Adjust margin-bottom as needed */
`;

const PageOne: React.FunctionComponent = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Improvement",
    "Dedication",
    "A Happier You",
    "Confidence",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="conainter-background">
      <PageOneContainer id="Home">
        <PageOneContent>
          <PageOneStyle>
            <Heading1>Get Ready</Heading1>
            <Heading1>
              For <Span>{texts[textIndex]}</Span>
            </Heading1>
            <Heading3>
              This provides a supportive and empowering environment for individuals
              who may feel hesitant or unsure about going to the gym. Through
              tailored workouts, motivational content, and educational
              resources, we aim to boost confidence, inspire progress, and
              impart essential knowledge about fitness. Whether you're a
              beginner or returning to the gym after a hiatus, our app offers a
              judgment-free space where you can build strength, improve health,
              and achieve your fitness goals at your own pace.{" "}
            </Heading3>
          </PageOneStyle>
          <ButtonContainer>
            <ScrollButton />
          </ButtonContainer>
        </PageOneContent>
      </PageOneContainer>
    </div>
  );
};

export default PageOne;

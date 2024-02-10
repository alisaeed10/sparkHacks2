/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import styled from "styled-components";
// import ScrollButton from "./ScroolButton";


const PageOneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;

const PageOneContent = styled.div`
  width: 50vw;
`;

const PageOneStyle = styled.div`
  font-size: 9rem;
  color: #000;
  text-align: center;
  font-weight: 200;
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

export interface IPageOneProps {}

const PageOne: React.FunctionComponent<IPageOneProps> = () => {
  return (
    <>
      <PageOneContainer id="Home">
        <PageOneContent>
          <PageOneStyle>Home</PageOneStyle>
          {/* <ButtonContainer>
            <ScrollButton />
          </ButtonContainer> */}
        </PageOneContent>
      </PageOneContainer>
    </>
  );
};

export default PageOne;

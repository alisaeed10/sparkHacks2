'use client'
import React from "react";
import styled from "styled-components";

const PageFourContainer = styled.div`
    display: flex;
    width: 100vw; /* Full width of the viewport */
    height: 100vh; /* Full height of the viewport */
    background-color: #8b5cf6; /* Use the desired purple color */
`;

const PageFourStyle = styled.div`
    font-size: 9rem;
    width: 100%; /* Full width of the container */
    height: 100%; /* Full height of the container */
    color: #000; /* Black color */
    display: flex;
    align-items: center; /* Vertically center content */
    justify-content: center; /* Horizontally center content */
    text-align: center; /* Center text */
    font-weight: 800; /* Extra bold */
    text-transform: uppercase; /* Uppercase text */
`;

export interface IPageFourProps {

}

const PageFour: React.FunctionComponent<IPageFourProps> = () => {

    return(
       <>
        <PageFourContainer id="page4">
            <PageFourStyle>
                page 4
            </PageFourStyle>
        </PageFourContainer>
       </>
    )
}

export default PageFour
'use client'
import React from "react";
import styled from "styled-components";

const PageThreeContainer = styled.div`
    display: flex;
    width: 100vw; /* Full width of the viewport */
    height: 100vh; /* Full height of the viewport */
    background-color: #3b82f6; /* Use the desired blue color */
`;

const PageThreeStyle = styled.div`
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

export interface IPageThreeProps {
    
}

const PageThree: React.FunctionComponent<IPageThreeProps> = () => {

    return(
       <>
        <PageThreeContainer id="page3">
            <PageThreeStyle>
                page 3
            </PageThreeStyle>
        </PageThreeContainer>
       </>
    )
}

export default PageThree
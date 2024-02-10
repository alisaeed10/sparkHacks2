'use client'
import React from "react";
import styled from "styled-components";

const PageTwoContainer = styled.div`
    display: flex;
    background-color: #6b7280; /* Use the desired gray color */
    width: 100vw; /* Full width of the viewport */
    height: 100vh; /* Full height of the viewport */
`;

const PageTwoStyle = styled.div`
    font-size: 9rem;
    width: 100vw; /* Full width of the viewport */
    height: 100vh; /* Full height of the viewport */
    color: #000; /* Black color */
    display: flex;
    align-items: center; /* Vertically center content */
    justify-content: center; /* Horizontally center content */
    text-align: center; /* Center text */
    font-weight: 800; /* Extra bold */
    text-transform: uppercase; /* Uppercase text */
`;

export interface IPageTwoProps {

}

const PageTwo: React.FunctionComponent<IPageTwoProps> = () => {

    return(
       <>
        <PageTwoContainer id="page2">
            <PageTwoStyle >
page 2
            </PageTwoStyle>
        </PageTwoContainer>
       </>
    )
}

export default PageTwo
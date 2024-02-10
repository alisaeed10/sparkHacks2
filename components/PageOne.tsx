'use client'
import React from "react";
import styled from "styled-components";
// import tw from "twin.macro"

const PageOneContainer = styled.div`
    display: flex;
    background-color: #6b7280; /* Use the desired gray color */
    width: 100vw; /* Full width of the viewport */
    height: 100vh; /* Full height of the viewport */
`;

const PageOneStyle = styled.div`
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

export interface IPageOneProps {

}

const PageOne: React.FunctionComponent<IPageOneProps> = () => {

    return(
       <>
        <PageOneContainer id="page1">
            <PageOneStyle>
                Page 1
            </PageOneStyle>
        </PageOneContainer>
       </>
    )
}

export default PageOne
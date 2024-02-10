"use client";
// app/gymTechnique/page.tsx
import React from 'react';
import styled from 'styled-components';
import YouTubeFeed from '../../components/YouTubeFeed';
import NavBarNoScroll from '../../components/NavBarNoScroll';


const SectionTitle = styled.h2`
    // color: #fb9e72; // Adjust to match your design
    background-color: #fb9e72;
    text-align: center;
    text-transform: uppercase;
    text-bold: 20px;
    font-family: 'Helvetica Neue', Arial, sans-serif; /* This is a guess, you might need to adjust the font family */
    font-size: 36px; /* Adjust the size as needed */
    font-weight: bold; /* This could be 700 or 'bold' depending on your font */
    color: #ffffff; /* This is white, adjust the color as needed */
    text-transform: uppercase; /* This makes the text uppercase */
    letter-spacing: 1px; /* Adjust the spacing between letters */
    text-align: center; /* Centers the text */
    // margin-top: 20px; // Adjust spacing as needed
`;

const RecommendationTitle = styled.h2`
    font-size: 38px; // Adjust to match your design
    // color: #999999; // Adjust to match your design
    
    background-color: #fbb682;
    text-align: center;
    font-family: 'Helvetica Neue', Arial, sans-serif; /* This is a guess, you might need to adjust the font family */
    font-size: 24px; /* Adjust the size as needed */
    font-weight: bold; /* This could be 700 or 'bold' depending on your font */
    color: #ffffff; /* This is white, adjust the color as needed */
    text-transform: uppercase; /* This makes the text uppercase */
    letter-spacing: 1px; /* Adjust the spacing between letters */
    text-align: center; /* Centers the text */

    // margin-top: 20px; // Adjust spacing as needed
`;


export default function GymTechnique() {
    const apiKey = 'AIzaSyAd6E4KAFLYHDeNGcLIHsqgCeu_I4SV9ls'; // Ensure this is set in your .env.local file
    const [query, setQuery] = React.useState('gym proper form');

    const handleSearch = (searchTerm: string) => {
        setQuery(searchTerm);
    };
    return (
        <main style={{ overflowY: 'scroll', height: '100vh'}}>
            <SectionTitle>Proper Techniques</SectionTitle>
            <NavBarNoScroll onSearch={handleSearch}/> 
            <RecommendationTitle>Recommended</RecommendationTitle>
            <YouTubeFeed apiKey={apiKey} query={query}/>
        </main>
    );
}
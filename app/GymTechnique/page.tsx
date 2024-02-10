// app/gymTechnique/page.tsx
import React from 'react';
import YouTubeFeed from '../../components/YouTubeFeed';
import NavBar from '../../components/NavBar';


export default function GymTechnique() {
    const apiKey = 'AIzaSyDMdK-HwCHSqA5DmtHBHEA_NwDyAsHMT94'; // Ensure this is set in your .env.local file

    return (
        <main style={{ overflowY: 'scroll', height: '100vh'}}>
            <NavBar /> 

            <YouTubeFeed apiKey={apiKey} />
        </main>
    );
}
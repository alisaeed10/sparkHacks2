// app/gymTechnique/page.tsx
import React from 'react';
import YouTubeFeed from '../../components/YouTubeFeed';


export default function GymTechnique() {
    const apiKey = 'AIzaSyDMdK-HwCHSqA5DmtHBHEA_NwDyAsHMT94'; // Ensure this is set in your .env.local file

    return (
        <main style={{ overflowY: 'scroll', height: '100vh'}}>
            <YouTubeFeed apiKey={apiKey} />
        </main>
    );
}

"use client";
import './motivation.css';
import YoutubeShorts from './YoutubeShorts';
import NavBar from '@/components/NavBar'
import { QuoteGenerator } from './QuoteGenerator';
import { useState } from 'react'; 
const youtubeApiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
export default function Motivation() {
  
  const homePage = () => {
    window.location.href = '/';
  }
  const homeWorkouts = () => {
    window.location.href = '/HomeWorkout';
  }
  const technique = () => {
    window.location.href = '/GymTechnique';
  }

  return (
    <main className='motivation'>
      <div className='motivation-navbar'>
      <nav className ="fixed w-full h-24 shadow-xl">
        <div className="flex justify-between items-center h-full w-full px-4 2x1:px-16 ">
            {/* <div></div> */}
            <div>
                <ul className = "hidden sm:flex">
                    <li className = "ml-10 uppercase hover:border-b text-xl"><button onClick={() => homePage()}>Home</button></li>
                    <li className = "ml-10 uppercase hover:border-b text-xl"><button onClick={() => homeWorkouts()}>Home-WorkOuts</button></li>
                    <li className = "ml-10 uppercase hover:border-b text-xl"><button onClick={() => technique()}>Technique</button></li>
                </ul>
            </div>
        </div>
    </nav>
      </div>
      <div className='motivation-container'>
        <div className="motivation-title-container">
          <p className='motivation-title'>Motivation</p>
        </div>
        <div className='motivation-content-container-youtube-shorts'>
          <YoutubeShorts apiKey={youtubeApiKey}/>
        </div>
        <div className='motivation-content-container'>

          <QuoteGenerator />
        </div>
      </div>
      
    </main>
  );
} 
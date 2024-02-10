import './motivation.css';
import YoutubeShorts from './YoutubeShorts';
// import { QuoteGenerator } from './QuoteGenerator';
const youtubeApiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
export default function Motivation() {
  return (
    <main className='motivation'>
      <div className='motivation-container'>
        <div className="motivation-title-container">
          <p className='motivation-title'>Motivation</p>
          <p className='motivation-subtitle'>Find your motivation to keep going</p>
        </div>
        <div className='motivation-content-container-youtube-shorts'>
          <YoutubeShorts apiKey={youtubeApiKey}/>
        </div>
        <div className='motivation-content-container'>
          {/* <QuoteGenerator /> */}
        </div>
      </div>
      
    </main>
  );
} 
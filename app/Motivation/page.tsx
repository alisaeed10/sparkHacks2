import './motivation.css';
import { QuoteGenerator } from './QuoteGenerator';

export default function Motivation() {
  return (
    <main className='motivation'>
      <div className='motivation-container'>
        <div className="motivation-title-container">
          <p className='motivation-title'>Motivation</p>
          <p className='motivation-subtitle'>Find your motivation to keep going</p>
        </div>
        <div className='motivation-content-container'>
          <QuoteGenerator />
        </div>
      </div>
      
    </main>
  );
} 
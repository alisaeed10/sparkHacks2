"use client"
//components/YouTubeFeed.tsx
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './YouTubeFeed.css';


type YouTubeVideoProps = {
  videoId: string;
  shouldAutoPlay: boolean;
};

const YouTubeVideo = React.forwardRef<HTMLIFrameElement, YouTubeVideoProps>(
  ({ videoId, shouldAutoPlay }, ref) => {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);

    //const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
    const handleMouseEnter = () => {
      if (iframeRef.current) {
        iframeRef.current.src += "&autoplay=1"; // Start playback
      }
    };

    const handleMouseLeave = () => {
      if (iframeRef.current) {
        const src = iframeRef.current.src.replace("&autoplay=1", "");
        iframeRef.current.src = src; // Stop playback
      }
    };

    return (
      <iframe
        ref={iframeRef}
        className="youtube-video"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    );
  });

YouTubeVideo.displayName = 'YouTubeVideo';

type YouTubeFeedProps = {
  apiKey: string | undefined;
  query: string;
};

const YouTubeFeedSec = ({ apiKey, query }: YouTubeFeedProps) => {
  const [videos, setVideos] = useState<string[]>([]);
  const videoRefs = useRef<(HTMLIFrameElement | null)[]>([]);

  const fetchVideos = async () => {

    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 10,
          q: "how to do" + query + "at home",
          type: 'video',
          key: apiKey,
        },
      });
      setVideos(response.data.items.map((item: any) => item.id.videoId));
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [apiKey, query]);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { target, isIntersecting } = entry;
          if (isIntersecting) {
            (target as HTMLIFrameElement).src += '&autoplay=1';
          } else {
            (target as HTMLIFrameElement).src = (target as HTMLIFrameElement).src.replace('&autoplay=1', '');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    videoRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      videoRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [videos]);

  // return (
  //   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  //     {videos.map((videoId, index) => (
  //       <YouTubeVideo
  //         key={videoId}
  //         videoId={videoId}
  //         shouldAutoPlay={false}
  //         ref={(el) => (videoRefs.current[index] = el)}
  //       />
  //     ))}
  //   </div>
  // );
  return (
    <div className="youtube-feed-container">
      {videos.map((videoId, index) => (
        <YouTubeVideo
          key={videoId}
          videoId={videoId}
          shouldAutoPlay={false}
          ref={(el) => (videoRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default YouTubeFeedSec;





"use client"
//components/YouTubeFeed.tsx
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './motivation.css';

type YouTubeVideoProps = {
  videoId: string;
  shouldAutoPlay: boolean;
};

const YouTubeVideo = React.forwardRef<HTMLIFrameElement, YouTubeVideoProps>(
  ({ videoId, shouldAutoPlay }, ref) => {
    const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

    return (
      <iframe
        ref={ref}
        width="800"
        height="600"
        src={src}
        frameBorder="10"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"

      />
    );
  }
);

YouTubeVideo.displayName = 'YouTubeVideo';

type YouTubeFeedProps = {
  apiKey: string | undefined;
};

const YoutubeShorts = ({ apiKey }: YouTubeFeedProps) => {
  const [videos, setVideos] = useState<string[]>([]);
  const videoRefs = useRef<(HTMLIFrameElement | null)[]>([]);

  const fetchVideos = async () => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 1,
          q: 'gym motivation speeches',
          type: 'shorts',
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
  }, [apiKey]);
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         // Get the iframe element from the entry target
  //         const iframe = entry.target as HTMLIFrameElement;
  //         // Determine if the video is in the center of the screen
  //         const isCentered = (entry.intersectionRatio > 0.75);
          
  //         if (isCentered && !iframe.src.includes('autoplay=1')) {
  //           // Modify the src to include autoplay only if it's not already there
  //           iframe.src += '&autoplay=1';
  //         } else if (!isCentered && iframe.src.includes('autoplay=1')) {
  //           // Turn off autoplay
  //           iframe.src = iframe.src.replace('&autoplay=1', '');
  //         }
  //       });
  //     },
  //     {
  //       root: null, // viewport
  //       threshold: 0.75 // 75% of the item must be visible for isIntersecting to be true
  //     }
  //   );

  //   videoRefs.current.forEach((ref) => {
  //     if (ref) {
  //       observer.observe(ref);
  //     }
  //   });

  //   // Cleanup observer on unmount
  //   return () => {
  //     videoRefs.current.forEach((ref) => {
  //       if (ref) {
  //         observer.unobserve(ref);
  //       }
  //     });
  //   };
  // }, [videos]);

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

  return (
    <div className='youtubeShort-conatiner'>
    <div className='youtubeShort'>
      {videos.map((videoId, index) => (
        <YouTubeVideo
          key={videoId}
          videoId={videoId}
          shouldAutoPlay={false}
          ref={(el) => (videoRefs.current[index] = el)}
        />
      ))}
    </div>
    </div>
  );
};

export default YoutubeShorts;

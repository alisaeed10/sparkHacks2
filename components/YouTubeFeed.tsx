// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';

// // Type declarations for the YouTube API (YT)
// declare global {
//   interface Window {
//     onYouTubeIframeAPIReady: () => void;
//     YT: any;
//   }
// }

// const loadYouTubeIframeAPI = () => {
//   // Ensure the script is only loaded once
//   if (window.YT) return;

//   const tag = document.createElement('script');
//   tag.src = 'https://www.youtube.com/iframe_api';
//   const firstScriptTag = document.getElementsByTagName('script')[0];
//   if (firstScriptTag && firstScriptTag.parentNode) {
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//   } else {
//     // Handle the case where the script could not be inserted, or throw an error
//     console.error('YouTube IFrame API script could not be inserted');
//   }
// };

// // The YouTubeVideo component is responsible for rendering each individual video
// const YouTubeVideo = React.forwardRef<HTMLDivElement, { videoId: string }>(
//   ({ videoId }, ref: React.RefObject<HTMLDivElement>) => {
//     const { videoId } = props;

//     useEffect(() => {
//       // This function gets called when the YouTube IFrame API is ready
//       const onYouTubeIframeAPIReady = () => {
//         if (ref.current) { // Check if the ref is not null
//           // Create a new YouTube player with the API
//           new window.YT.Player(ref.current, {
//             videoId: videoId,
//             events: {
//               onReady: (event) => {
//                 event.target.mute(); // Mute the video to increase chances of autoplaying due to browser restrictions
//               },
//             },
//           });
//         }
//       };

//       // Assign the callback to the global scope if the API script is not yet loaded
//       if (typeof window.YT === 'undefined') {
//         window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
//       } else {
//         // If the script is already loaded, call the function directly
//         onYouTubeIframeAPIReady();
//       }

//       // Load the YouTube IFrame API
//       loadYouTubeIframeAPI();

//       // Cleanup function to unset the global callback when the component is unmounted
//       return () => {
//         window.onYouTubeIframeAPIReady = null;
//       };
//     }, [videoId]);

//     // Return a div which the YouTube API will use to render the video player
//     return <div ref={ref}></div>;
//   }
// );

// YouTubeVideo.displayName = 'YouTubeVideo';


// // The YouTubeFeed component fetches a list of videos and renders them using YouTubeVideo components
// const YouTubeFeed = ({ apiKey }: { apiKey?: string }) => {
//   const [videos, setVideos] = useState<string[]>([]);
//   const videoRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
//           params: {
//             part: 'snippet',
//             maxResults: 10,
//             q: 'motivation',
//             type: 'video',
//             key: apiKey,
//           },
//         });
//         setVideos(response.data.items.map((item: any) => item.id.videoId));
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       }
//     };

//     if (apiKey) {
//       fetchVideos();
//     }
//   }, [apiKey]);

//   // Render a div for each video, which will become a YouTube player
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       {videos.map((videoId, index) => (
//         <YouTubeVideo
//           key={videoId}
//           videoId={videoId}
//           ref={(el) => (videoRefs.current[index] = el)}
//         />
//       ))}
//     </div>
//   );
// };

// export default YouTubeFeed;





"use client"
//components/YouTubeFeed.tsx
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

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
        width="560"
        height="315"
        src={src}
        frameBorder="0"
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

const YouTubeFeed = ({ apiKey }: YouTubeFeedProps) => {
  const [videos, setVideos] = useState<string[]>([]);
  const videoRefs = useRef<(HTMLIFrameElement | null)[]>([]);

  const fetchVideos = async () => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 10,
          q: 'motivation',
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
  }, [apiKey]);
  

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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

export default YouTubeFeed;




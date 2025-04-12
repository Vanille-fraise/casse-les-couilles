'use client';

import Image from 'next/image';
import React from 'react';

interface FaceBackgroundProps {
  imageUrls: string[];
}

// Simple hash function to generate a somewhat unique duration and delay
const simpleHash = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

const FaceBackground: React.FC<FaceBackgroundProps> = ({ imageUrls }) => {
  const rows = Array.from({ length: 5 }, (_, i) => i); // 5 rows

  // Distribute images somewhat evenly among rows
  const imagesPerRow = Math.ceil(imageUrls.length / rows.length);
  const getRowImages = (rowIndex: number): string[] => {
    const start = rowIndex * imagesPerRow;
    const end = start + imagesPerRow;
    // Ensure we have enough images for animation by repeating the list if necessary
    let rowImages = imageUrls.slice(start, end);
    while (rowImages.length > 0 && rowImages.length < 10) { // Ensure minimum number for smooth looping
        rowImages = rowImages.concat(imageUrls.slice(0, 10 - rowImages.length));
    }
     // Repeat images within the row to create a seamless loop effect
    return [...rowImages, ...rowImages];
  };


  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
{/* Option 2: Custom smaller blur value */}

<div className="relative w-full h-full flex flex-col justify-around">
        {rows.map((rowIndex) => {
          const direction = rowIndex % 2 === 0 ? 'right' : 'left';
          const rowImages = getRowImages(rowIndex);
          // Calculate a somewhat unique but consistent duration for each row based on content
          const seed = rowImages.join(''); // Use combined urls as seed
          const baseDuration = 220; // Base duration in seconds
          const duration = baseDuration + (simpleHash(seed) % 20); // Vary duration slightly (60-80s)

          return (
            <div
              key={rowIndex}
              className="w-full overflow-hidden"
              style={{ height: 'calc(100% / 5)' }} // Distribute height equally
            >
              <div
                className="flex h-full"
                style={{
                  width: '200%', // Double width for seamless loop
                  animation: `slide-${direction} ${duration}s linear infinite`,
                }}
              >
                {rowImages.map((url, index) => (
                  <div key={`${rowIndex}-${index}-${url}`} className="flex-shrink-0 px-1 h-full w-[10%] relative"> {/* Adjust w-[10%] based on expected image count */}
                    <Image
                      src={url}
                      alt={`Background face ${rowIndex}-${index}`}
                      layout="fill"
                      objectFit="cover"
                      className="opacity-80" // Slightly transparent
                      priority={rowIndex < 2} // Prioritize loading images in the first few rows
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      <div className="absolute z-5 inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/20 dark:from-black/30 dark:via-white/0 dark:to-black/50 backdrop-blur-[1.5px]"></div>

      </div>
      {/* Add keyframes directly in the component style for simplicity */}
      <style jsx global>{`
        @keyframes slide-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        @keyframes slide-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default FaceBackground;

"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

export interface GameItemType {
  code: string;
  url: string;
  description: object;
  assets: { thumb: string };
  name: { en: string };
  gamePreviews: { en: string };
  categories: { en: Array<string> };
}

export function GameCard({ gameItem }: { gameItem: GameItemType }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsLoading(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsLoading(false);
  };

  const handleVideoReady = () => {
    setIsLoading(false);
  };

  const handleVideoError = () => {
    setIsLoading(false);
  };


  return (
    <Link
      href={gameItem.url}
      className="flex flex-col items-center justify-center m-3  duration-300 hover:scale-110"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-40 h-40">
        <Image
          className="w-40 h-40 rounded-3xl"
          src={gameItem.assets.thumb}
          alt="game icon"
          width={160}
          height={160}
        />
        {isHovered && gameItem.gamePreviews.en && (
          <>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75 rounded-3xl">
                <div className="w-6 h-6 border-4 border-t-transparent border-gray-600 rounded-full animate-spin"></div>
              </div>
            )}
            <ReactPlayer
              url={gameItem.gamePreviews.en}
              playing={isHovered}
              muted
              width="100%"
              height="100%"
              onReady={handleVideoReady}
              onError={handleVideoError}
              className="absolute top-0 left-0 rounded-3xl"
              config={{
                youtube: {
                  playerVars: {
                    controls: 0,
                    modestbranding: 1,
                    rel: 0,
                    showinfo: 0,  // Deprecated, but included for completeness
                    fs: 0,
                  },
                },
              }}
            />
          </>
        )}
      </div>

      <div className={`my-2 w-full rounded-full transition-colors duration-300 flex flex-col items-center h-[48px] ${isHovered ? "bg-blue-700 text-white hover:bg-blue-800 " : ""}`}>
        {isHovered ? <p className=' font-bold'>Play Now</p> : " "}
        <p className="text-sm tracking-tight text-center">{gameItem.name.en}</p>
      </div>
    </Link>
  );
}

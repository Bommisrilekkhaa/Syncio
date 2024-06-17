"use client"

import React, { useState } from 'react'
import { useEffect } from "react";
const page = () => {

  const [tracks,settrack] = useState([]);
  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const response = await fetch(
          'https://v1.nocodeapi.com/bommi/spotify/wTNZVKTrzAmCriGl/search?q=adiyae&type=track&offset=10'
        );

        if (!response.ok) {
          throw new Error("Failed to fetch music data");
        }

        const jsonData = await response.json();
        console.log(jsonData);

        settrack(jsonData.tracks.items)
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchMusic();
  }, []);

  return (
    <div className="flex items-center justify-center gap-5 flex-wrap">


      {tracks.map((track) => (
        <div key={track.id} className="bg-gray-800 flex flex-col items-center justify-start gap-1 text-white border border-solid border-white rounded-lg p-4 w-72 h-72 text-wrap overflow-hidden">
          <div className="flex items-center justify-center mb-2">
            {/* <Image src={track.album.images[0].url} alt="Album Cover" className=" my-3 w-16 h-16 rounded-lg" width={5} height={5}/> */}
          </div>
          <p className="text-lg font-bold text-center">{track.name}</p>
          <p className="text-sm">{track.artists[0].name}</p>
          {/* <div className=" w-full"> */}
            <audio src={track.preview_url} controls className=" mt-auto w-full"></audio>
          {/* </div> */}
        </div>
      ))}
    </div>
  )
}

export default page

// https://v1.nocodeapi.com/bommi/spotify/wTNZVKTrzAmCriGl/search?q=<q>
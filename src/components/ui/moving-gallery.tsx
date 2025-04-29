import React from 'react';
import { gallery } from '../../utils/images';


const InfiniteGallery: React.FC = () => {
  return (


    <div className='my-10 flex items-center justify-center '>
        <div  className='absolute z-10 w-4/5 md:w-3/5  bg-slate-200  bg-opacity-60 rounded '>
                 <p className=' p-5 text-center font-whisper text-xl text-black md:text-4xl'>
                  “Photography is the story I fail to put into words.” <br/>
                 – Chia Sei Yu</p>
                </div>

    <div className="relative overflow-hidden w-full">
      <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
        {gallery.map((item, index) => (
          <img
            key={index}
            src={item.images}
            alt={`Image ${index}`}
            className="w-[400px] h-[350px] object-cover rounded mx-20"
          />
        ))}
        {gallery.map((item, index) => (
          <img
            key={`clone-${index}`}
            src={item.images}
            alt={`Clone ${index}`}
            className="w-[400px] h-[350px] object-cover rounded mx-20"
          />
        ))}
      </div>
    </div>

    </div>
  );
};

export default InfiniteGallery;

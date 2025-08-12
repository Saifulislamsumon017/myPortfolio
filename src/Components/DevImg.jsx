import React from 'react';
import Hero from '../assets/Hero.png';

const DevImg = ({ containerStyles }) => {
  return (
    <div className={`${containerStyles} relative`}>
      <img
        src={Hero}
        alt="developer"
        className="object-contain w-full h-full"
      />
    </div>
  );
};

export default DevImg;

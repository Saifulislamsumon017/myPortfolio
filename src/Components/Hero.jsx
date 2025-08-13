import React from 'react';
import hero from '../assets/Sumon/Mohammad Saiful Islam2025081253955.png';
import facebook from '../assets/All Image/facebook.png';
import twitter from '../assets/All Image/twitter.png';
import instagram from '../assets/All Image/instagram.png';
import linkedin from '../assets/All Image/linkedin.png';
import reactLogo from '../assets/All Image/React.png';
import reduxLogo from '../assets/All Image/Redux.png';
import tailwind from '../assets/All Image/Tailwind Css.png';

const Hero = () => {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I'm Saiful <span className="text-red-500">Islam</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">Web Developer & Designer</p>
            <p className="mb-4">
              I'm a passionate web developer with expertise in React, Next.js,
              and modern web technologies. I love creating beautiful and
              functional website that solve real world problems.
            </p>
            <button className="bg-black text-white px-3 py-2 w-max rounded-md">
              <a
                href="https://drive.google.com/file/d/1LBMHWpTgTGkvCTcHYiU8JQRCHb5-SRl8/view?usp=sharing"
                download
                target="_blank"
              >
                Download CV
              </a>
            </button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img
              src={hero}
              alt=""
              className="lg:h-[85vh] h-96 object-cover rounded-2xl shadow-lg"
            />
            <img
              src={reactLogo}
              alt=""
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />
            <img
              src={reduxLogo}
              alt=""
              className="absolute w-10 top-0 right-5 md:hidden"
            />
            <img
              src={tailwind}
              alt=""
              className="absolute w-10 rounded-full right-0 bottom-36 md:hidden"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-30 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full">
        <a href="https://www.facebook.com/saifulislamsumon017" target="_blank">
          <img src={facebook} alt="" className="w-20 " />
        </a>
        <a
          href="https://www.instagram.com/saifulislam.sumon017/"
          target="_blank"
        >
          <img src={instagram} alt="" className="w-20" />
        </a>
        <a href="https://x.com/Saifulislam169" target="_blank">
          {' '}
          <img src={twitter} alt="" className="w-20" />
        </a>
        <a href="https://www.linkedin.com/in/saifulislamsumon/" target="_blank">
          <img src={linkedin} alt="" className="w-20" />
        </a>
      </div>
    </div>
  );
};

export default Hero;

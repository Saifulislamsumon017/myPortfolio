import React from 'react';
import Github from '../assets/All Image/Github.png';
import { Link } from 'react-router';

const Cards = ({ item }) => {
  return (
    <div className="border border-red-500 rounded-lg w-[350px] lg:w-[400px] bg-red-50">
      <img src={item.image} alt={item.name} className="rounded-lg" />
      <div className="p-4">
        <h1 className="font-semibold text-xl mb-2">{item.name}</h1>
        <p>{item.details.description.substring(0, 100)}...</p>

        <div className="flex gap-3 mt-4 flex-wrap">
          <Link
            to={`/projects/${item.id}`}
            className="bg-red-500 text-white px-3 py-2 rounded-md"
          >
            View More
          </Link>

          {/* <a
            href={item.details.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white px-3 py-2 rounded-md"
          >
            Live Preview
          </a>

          <a
            href={item.details.githubClient}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-3 py-2 rounded-md flex items-center gap-1"
          >
            <img src={Github} alt="GitHub" className="w-6" />
            Github Link
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Cards;

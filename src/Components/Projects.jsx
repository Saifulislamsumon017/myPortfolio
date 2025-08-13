import React from 'react';
import Cards from './Cards';
import projectData from '../Data/projectData';

const Projects = () => {
  return (
    <div id="projects" className="relative bg-gray-700 py-16 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectData.map(item => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

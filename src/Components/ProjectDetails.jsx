import React from 'react';

import Github from '../assets/All Image/Github.png';
import projectData from '../Data/projectData'; // import your project data here
import { Link, useNavigate, useParams } from 'react-router';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectData.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="text-center py-20 text-red-600">
        Project not found
        <br />
        <button
          onClick={() => navigate(-1)}
          className="mt-4 underline text-blue-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-blue-600 underline mb-6 inline-block">
            ← Back to Home
          </Link>

          <img
            src={project.image}
            alt={project.name}
            className="rounded-lg w-full h-[400px] object-cover object-top mb-6"
          />
          <h1 className="text-3xl font-bold mb-4">{project.name}</h1>

          <section className="mb-6">
            <h2 className="font-semibold text-xl mb-2">Technology Stack</h2>
            <ul className="list-disc list-inside">
              {project.details.techStack.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="font-semibold text-xl mb-2">Description</h2>
            <p>{project.details.description}</p>
          </section>

          <section className="mb-6 flex gap-4 flex-wrap">
            <a
              href={project.details.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Live Preview
            </a>
            <a
              href={project.details.githubClient}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2"
            >
              <img src={Github} alt="GitHub" className="w-6" />
              GitHub Client Repo
            </a>
          </section>

          <section className="mb-6">
            <h2 className="font-semibold text-xl mb-2">Challenges Faced</h2>
            <ul className="list-disc list-inside">
              {project.details.challenges.map((ch, i) => (
                <li key={i}>{ch}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-xl mb-2">Future Plans</h2>
            <ul className="list-disc list-inside">
              {project.details.futurePlans.map((plan, i) => (
                <li key={i}>{plan}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

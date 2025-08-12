import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase } from 'lucide-react';

// Import your logos here
import webverseLogo from '../assets/All Image/webverse.png';
import agcLogo from '../assets/All Image/agc_logo.png';
import newtonschoolLogo from '../assets/All Image/newtonschool.png';

// Your experiences data (can also be imported from a separate file)
const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: 'Fullstack Developer',
    company: 'Webverse Digital',
    date: 'April 2024 - Present',
    desc: 'Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React JS',
      'TypeScript',
      'Node JS',
      'Tailwind CSS',
      'MongoDb',
      'Redux',
      'Next Js',
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: 'Fullstack Engineer',
    company: 'Agumentik Group of Companies',
    date: 'July 2023 - March 2024',
    desc: 'Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.',
    skills: [
      'ReactJS',
      'Redux',
      'JavaScript',
      'Tailwind CSS',
      'HTML',
      'CSS',
      'SQL',
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: 'Frontend Intern',
    company: 'Newton School',
    date: 'September 2021 - August 2022',
    desc: 'Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.',
    skills: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Figma', 'Material UI'],
  },
];

const Experience = () => {
  return (
    <div className="bg-gray-100 relative py-16" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
            Experience
          </h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900">
            My Professional Journey
          </p>
          <p className="mt-4 max-w-3xl text-lg text-gray-600 lg:mx-auto leading-relaxed">
            Here’s a snapshot of my hands-on experience building scalable and
            efficient web applications.
          </p>
        </div>

        <VerticalTimeline lineColor="#dc2626">
          {experiences.map(({ id, img, role, company, date, desc, skills }) => (
            <VerticalTimelineElement
              key={id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'transparent',
                color: '#1f2937',
                borderRadius: '12px',
                boxShadow: 'none',
              }}
              contentArrowStyle={{ borderRight: '7px solid transparent' }}
              date={date}
              iconStyle={{
                background: '#dc2626',
                color: '#fff',
                boxShadow: '0 0 0 4px #fee2e2',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              icon={
                img ? (
                  <img
                    src={img}
                    alt={`${company} logo`}
                    className="w-10 h-10 rounded-full object-contain"
                  />
                ) : (
                  <Briefcase size={28} />
                )
              }
            >
              <div
                className="border border-red-300 flex flex-col gap-4 px-6 py-5 rounded-lg shadow-md shadow-red-300"
                style={{ backgroundColor: 'transparent' }}
              >
                <h3 className="font-bold text-xl text-gray-900">{role}</h3>
                <h4 className="text-red-600 font-semibold">{company}</h4>
                <p className="leading-relaxed text-gray-700">{desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-sm px-3 py-1 bg-red-100 text-red-700 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;

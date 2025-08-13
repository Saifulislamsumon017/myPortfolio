import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Your icons (use this or replace with actual logos)
import glaLogo from '../assets/Education/Royal.png';
import glaLogo1 from '../assets/Education/Royal.png';
import bsaLogo from '../assets/Education/Hazera.png';
import vpsLogo from '../assets/Education/Baitushraf.png';

const education = [
  {
    id: 0,
    img: glaLogo,
    school: 'Royal University of Dhaka',
    date: 'July2015 - July 2016',
    desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    degree: 'MCA (Master of Computer Applications)',
  },
  {
    id: 1,
    img: glaLogo1,
    school: 'Royal University of Dhaka',
    date: 'Jun 2009 - Dec 2013',
    desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from Royal University of Dhaka. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Royal University of Dhaka allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: 'BSc (Bachelor of Science in Computer Science)',
  },
  {
    id: 2,
    img: bsaLogo,
    school: 'Hazera Taju Degree College',
    date: 'Jun 2007 - Dec 2008',
    desc: 'I completed my class 12 education from Hazera Taju Degree College, where I studied Physics, Chemistry, and Mathematics with Computer Science.',
    degree: 'HSC (Higher Secondary Certificate)',
  },
  {
    id: 3,
    img: vpsLogo,
    school: 'Baitush Sharaf Adarsha Kamil Madrasah',
    date: 'Jun 2005 - Dec 2006',
    desc: 'I completed my class 10 education from Baitush Sharaf Adarsha Kamil Madrasah, where I studied Science with Computer Application.',
    degree: 'SSC (Secondary School Certificate)',
  },
];

const Education = () => {
  return (
    <div className="bg-gray-100 relative py-16" id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
            Education
          </h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900">
            My Academic Journey
          </p>
          <p className="mt-4 max-w-3xl text-lg text-gray-600 lg:mx-auto leading-relaxed">
            A path of continuous learning, exploration, and skill-building that
            fuels my passion for technology.
          </p>
        </div>

        <VerticalTimeline lineColor="#dc2626">
          {education.map(({ id, img, school, date, desc, degree }) => (
            <VerticalTimelineElement
              key={id}
              className="vertical-timeline-element--education"
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
                <img
                  src={img}
                  alt={`${school} logo`}
                  className="w-10 h-10 rounded-full object-contain"
                />
              }
            >
              <div
                className="border border-red-300 flex flex-col gap-4 px-6 py-5 rounded-lg shadow-md shadow-red-300"
                style={{ backgroundColor: 'transparent' }}
              >
                <h3 className="font-bold text-xl text-gray-900">{degree}</h3>
                <h4 className="text-red-600 font-semibold">{school}</h4>
                <p className="leading-relaxed text-gray-700">{desc}</p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;

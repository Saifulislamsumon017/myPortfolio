import React from 'react';
import Hero from '../../Components/Hero';
import About from '../../Components/About';
import Projects from '../../Components/Projects';
import Testimonials from '../../Components/Testimonials';
import Contact from '../../Components/Contact';
import Education from '../../Components/Education';
import Experience from '../../Components/Experience';

const Home = () => {
  return (
    <>
      <title>Mohammad Saiful Islam | My Portfolio</title>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
};

export default Home;

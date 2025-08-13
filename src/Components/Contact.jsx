import React from 'react';
import facebook from '../assets/All Image/facebook.png';
import instagram from '../assets/All Image/instagram.png';
import linkedin from '../assets/All Image/linkedin.png';
import Lottie from 'lottie-react';
import contact from '../assets/lotify Image/Contact.json';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-700 relative py-16 px-5 md:px-0">
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Info Section */}
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-red-500">
              Get in Touch
            </h2>
            <p className="mb-6 text-white/85">
              I'm always open to new opportunities and collaboration. Feel free
              to reach out!
            </p>

            {/* Contact Details */}
            <div className="mb-6 text-white space-y-3">
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-red-400" />
                <span className="font-medium">Email:</span>
                <a
                  href="mailto:saiful@example.com"
                  className="hover:underline ml-1"
                >
                  saifulislam.msi169@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-400" />
                <span className="font-medium">Phone:</span>
                <a href="tel:+8801711477979" className="hover:underline ml-1">
                  +880 1711-477979
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.facebook.com/saifulislamsumon017"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <img src={facebook} alt="Facebook" className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/saifulislam.sumon017/"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <img
                  src={instagram}
                  target="_blank"
                  alt="Instagram"
                  className="h-6 w-6"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/saifulislamsumon/"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <img src={linkedin} alt="LinkedIn" className="h-6 w-6" />
              </a>
            </div>

            {/* Lottie Animation */}
            <Lottie
              animationData={contact}
              className="w-[350px] mx-auto lg:w-[500px]"
            />
          </div>

          {/* Contact Form */}
          <form className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10">
            <h1 className="text-gray-900 text-4xl font-bold mb-7">
              Contact Me
            </h1>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm 
                  focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm 
                  focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter Your Message"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm 
                  focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 transition-colors text-white px-5 py-2 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

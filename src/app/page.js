'use client';

import Image from 'next/image';
import heroImage from '../../public/hero.jpg';
import AboutMe from './about/page';
import Services from './services/page';
import GetInTouch from '@/components/GetInTouch';
import { FaBriefcase, FaProjectDiagram, FaUsers } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="bg-[#f9f8fe] text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-20">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Text Section */}
          <div className="max-w-xl text-center md:text-left">
            <p className="text-[#C33235] text-xl font-semibold mb-2">I am</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Mieraf Abebe
            </h1>
            <p className="mt-3 text-[#C33235] font-bold text-lg">
              Software Engineer
            </p>
            <p className="mt-4 text-gray-700 text-base leading-relaxed">
              I am a web and mobile developer. I work as a Frontend Developer
              specializing in React, Next.js, and React Native.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="/services"
                className="bg-[#C33235] text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition duration-300"
              >
                MY SERVICES
              </a>
              <a
                href="/projects"
                className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition duration-300"
              >
                RECENT WORKS
              </a>
            </div>
          </div>

          {/* Profile & Stats Section */}
      
            {/* Profile Image */}
            <div className="rounded-full bg-[#edf2f8] p-4 shadow-lg">
              <Image
                src={heroImage}
                alt="Profile"
                width={180}
                height={180}
                className="rounded-full object-cover"
                priority
              />
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {/* Experience */}
              <div className="bg-[#f1f5f9] px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition text-center">
                <div className="text-[#C33235] text-3xl mb-2 flex justify-center">
                  <FaBriefcase />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">2+</h3>
                <p className="text-gray-600 text-sm">Years of Experience</p>
              </div>

              {/* Projects */}
              <div className="bg-[#f1f5f9] px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition text-center">
                <div className="text-[#C33235] text-3xl mb-2 flex justify-center">
                  <FaProjectDiagram />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">15+</h3>
                <p className="text-gray-600 text-sm">Projects Completed</p>
              </div>

              {/* Clients */}
              <div className="bg-[#f1f5f9] px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition text-center">
                <div className="text-[#C33235] text-3xl mb-2 flex justify-center">
                  <FaUsers />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">10+</h3>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div>
            </div>
          </div>
      </section>

      {/* About Me Section */}
      <section className="mt-10 pt-10">
        <AboutMe />
      </section>

      <GetInTouch />
      <Services />
    </main>
  );
}

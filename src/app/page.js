'use client';

import Image from 'next/image';
import heroImage from '../../public/hero1.png';
import AboutMe from './about/page';
import Services from './services/page';
import GetInTouch from '@/components/GetInTouch';
import { FaBriefcase, FaProjectDiagram, FaUsers } from 'react-icons/fa';
import Footer from '../components/Footer';
import Contact from './contact/page';

export default function Home() {
  return (
    <main className="bg-[#f9f8fe] text-gray-900">
      {/* Hero Section */}
<section className="min-h-screen px-6 md:px-20 py-10 flex items-center justify-center ml-20">
  <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
    {/* Text Section */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <p className="text-[#C33235] text-xl font-semibold mb-1">I am</p>
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Mieraf Abebe
      </h1>
      <p className="mt-2 text-[#C33235] font-bold text-lg">
        Software Engineer
      </p>
      <p className="mt-3 text-gray-700 text-base leading-relaxed">
        I'm a front-end and mobile developer focused on building clean, user-friendly digital experiences.
        Reliable, detail-oriented, and always learning to craft better interfaces and interactions.
      </p>

      <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
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

    {/* Image + Stats Container */}
    <div className="w-full md:w-1/2 flex flex-col items-center gap-6 mt-14">
      {/* Profile Image */}
      <div className="rounded-full bg-[#edf2f8] p-4 shadow-lg">
        <Image
          src={heroImage}
          alt="Profile"
          width={160}
          height={160}
          className="rounded-full object-cover w-[140px] h-[140px] md:w-[200px] md:h-[200px] "
          priority
        />
      </div>

      {/* Experience Stats */}
      <div className="flex  sm:flex-row justify-center gap-4">
        {/* Experience */}
        <div className="bg-[#f1f5f9] px-5 py-3 rounded-lg shadow-sm text-center w-32">
          <div className="text-[#C33235] text-2xl mb-1 flex justify-center">
            <FaBriefcase />
          </div>
          <h3 className="text-xl font-bold text-gray-800">2+</h3>
          <p className="text-gray-600 text-sm">Years</p>
        </div>

        {/* Projects */}
        <div className="bg-[#f1f5f9] px-5 py-3 rounded-lg shadow-sm text-center w-32">
          <div className="text-[#C33235] text-2xl mb-1 flex justify-center">
            <FaProjectDiagram />
          </div>
          <h3 className="text-xl font-bold text-gray-800">10+</h3>
          <p className="text-gray-600 text-sm">Projects</p>
        </div>

        {/* Clients */}
        <div className="bg-[#f1f5f9] px-5 py-3 rounded-lg shadow-sm text-center w-32">
          <div className="text-[#C33235] text-2xl mb-1 flex justify-center">
            <FaUsers />
          </div>
          <h3 className="text-xl font-bold text-gray-800">6+</h3>
          <p className="text-gray-600 text-sm">Clients</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Other Sections */}
      <section>
        <AboutMe />
        <GetInTouch />
        <Services />
        <Contact />
        <Footer />
      </section>
    </main>
  );
}

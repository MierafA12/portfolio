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
    <main className="bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[90vh] px-6 md:px-12 lg:px-24 pt-32 pb-20 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-[#C33235] text-lg font-black uppercase tracking-[0.3em] mb-2">I am</p>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tighter">
              Mieraf Abebe
            </h1>
            <p className="mt-4 inline-block px-4 py-1 bg-red-50 text-[#C33235] font-black text-sm rounded-lg uppercase tracking-wider">
              Software Engineer
            </p>
            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 font-medium">
              {`I'm a front-end and mobile developer focused on building clean, user-friendly digital experiences. Reliable, detail-oriented, and craftsmanship-focused.`}
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start font-black text-[10px] tracking-widest">
              <a
                href="/services"
                className="bg-[#C33235] text-white px-8 py-4 rounded-2xl hover:bg-black transition-all duration-300 shadow-xl shadow-red-100"
              >
                EXPLORE SERVICES
              </a>
              <a
                href="/projects"
                className="bg-white border-2 border-gray-100 text-gray-900 px-8 py-4 rounded-2xl hover:border-[#C33235] hover:text-[#C33235] transition-all duration-300"
              >
                VIEW PROJECTS
              </a>
            </div>
          </div>

          {/* Image + Stats Container */}
          <div className="w-full md:w-1/2 flex flex-col items-center gap-10">
            {/* Profile Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-red-50/50 rounded-full blur-2xl -z-10" />
              <div className="rounded-full bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50">
                <Image
                  src={heroImage}
                  alt="Profile"
                  width={240}
                  height={240}
                  className="rounded-full object-cover w-[180px] h-[180px] md:w-[240px] md:h-[240px]"
                  priority
                />
              </div>
            </div>

            {/* Experience Stats */}
            <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
              {[
                { icon: <FaBriefcase />, value: '2+', label: 'Years Exp.' },
                { icon: <FaProjectDiagram />, value: '10+', label: 'Projects Done' },
                { icon: <FaUsers />, value: '6+', label: 'Global Clients' },
              ].map((stat, i) => (
                <div key={i} className="bg-white px-6 py-4 rounded-3xl shadow-sm border border-gray-50 text-center min-w-[120px] hover:shadow-md transition-shadow">
                  <div className="text-[#C33235] text-xl mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <h3 className="text-xl font-black text-gray-900">{stat.value}</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <AboutMe />
      <GetInTouch />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}

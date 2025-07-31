'use client';

import { useState } from 'react';
import { FaTelegramPlane, FaLinkedinIn, FaGithub , FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import htmlIcon from '../../../public/html.webp';
import cssIcon from '../../../public/css.webp';
import jsIcon from '../../../public/js.webp';
import reactIcon from '../../../public/react.webp';
import nextIcon from '../../../public/next.webp';
import tailwindIcon from '../../../public/tailwind.webp';
import nodeIcon from '../../../public/node.webp';
import mongoIcon from '../../../public/mongo.jpg';
import gitIcon from '../../../public/git.webp';
import flutterIcon from '../../../public/flutter.webp';
import figmaIcon from '../../../public/figma.webp';
import pythonIcon from '../../../public/python.webp';
import mern from '../../../public/mern.jpg';
import udacity from '../../../public/udacity.png'
import flutter from '../../../public/UDAMY.jpg';
import js from '../../../public/solo.png';
export default function AboutMe() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 md:px-20 pt-32 pb-16">
      {/* Header Section */}
      <section className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Explore The Creativity & More
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Welcome to my digital space! I am{' '}
          <span className="text-[#C33235] font-semibold">Mieraf Abebe</span>, a
          Frontend Developer specializing in web and mobile apps using React,
          Next.js, and React Native. I’m always open to new opportunities and
          collaborations. Let’s build something extraordinary together!
        </p>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {['about', 'education', 'experience', 'certificates'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full font-medium transition duration-300 ${
                activeTab === tab
                  ? 'bg-[#C33235] text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto border-t-2 border-b-2 border-[#C33235]">
        {/* ABOUT TAB */}
        {activeTab === 'about' && (
          <div className="py-10 md:py-14">
            <h3 className="text-2xl font-bold mb-4 text-[#C33235]">
              Personal Info
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With experience as a frontend developer, I’ve developed and
              delivered user-friendly, fast, and accessible web and mobile
              interfaces. I enjoy turning ideas into real-world digital
              products. Whether it’s building responsive UIs or solving complex
              UI logic, I’m ready to tackle it!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="bg-white p-4 rounded-md border">
                <p className="text-gray-500">Email</p>
                <p className="mt-1 font-medium">mierafabebe12@gmail.com</p>
              </div>
              <div className="bg-white p-4 rounded-md border">
                <p className="text-gray-500">Location</p>
                <p className="mt-1 font-medium">Debre Birhan, Ethiopia</p>
              </div>
              <div className="bg-white p-4 rounded-md border">
                <p className="text-gray-500">Follow</p>
                <div className="flex gap-4 mt-2 text-[#C33235] text-xl">
                  <Link href="https://t.me/mafi124679" target="_blank" title="Telegram">
                    <FaTelegramPlane />
                  </Link>
                  <Link href="https://linkedin.com/in/mieraf-abebe-971ba1323" target="_blank" title="LinkedIn">
                    <FaLinkedinIn />
                  </Link>
                  <Link href="https://github.com/MierafA12" target="_blank" title="GitHub">
                    <FaGithub />
                  </Link>
                  <Link href="mailto:mierafabebe12@gmail.com" title="Email">
                  <FaEnvelope/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* EDUCATION TAB */}
        {activeTab === 'education' && (
          <div className="py-10 md:py-14">
            <h3 className="text-3xl font-bold text-[#C33235] mb-6">Education</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  BSc in Software Engineering
                </h4>
                <p className="text-sm text-gray-500">
                  Debre Birhan University 
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Frontend Mentorship
                </h4>
                <p className="text-sm text-gray-500">
                  Self-taught via online platforms (YouTube, docs, projects)
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  MERN stack  Bootcamp
                </h4>
                <p className="text-sm text-gray-500"> Training · 2024</p>
              </div>
            </div>
          </div>
        )}

        {/* EXPERIENCE TAB */}
        {activeTab === 'experience' && (
          <section className="py-10 md:py-14">
            <h3 className="text-2xl font-bold mb-6 text-[#C33235]">Experience</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Full stack bootcamp|MERN</h4>
                <p className="text-gray-600 text-sm mt-1">2024</p>
                <p className="mt-2 text-gray-700 leading-relaxed">
                  Contributed to real-world full stack  projects using React and nodejs. Participated in weekly code reviews and agile standups.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">React Native Bootcamp</h4>
                <p className="text-gray-600 text-sm mt-1">Remote Training – 2024</p>
                <p className="mt-2 text-gray-700 leading-relaxed">
                  Completed hands-on mobile app development training using React Native. Built and deployed working applications as part of the capstone.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* CERTIFICATES TAB */}
      {activeTab === 'certificates' && (
  <section className="py-10 md:py-14">
    <h3 className="text-2xl font-bold mb-6 text-[#C33235] text-center">Certificates</h3>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
      {[
        { name: 'MERN stack ', img: mern },
                { name: 'udacity|programming fundamentals', img: udacity },
                { name: 'Flutter fundamentals', img: flutter },
                { name: 'js practice', img: js },
      ].map((cert, index) => (
        <div key={index} className="text-center">
          <div className="w-[120px] h-[90px] md:w-[140px] md:h-[100px] mx-auto">
            <img
              src={cert.img.src}
              alt={cert.name}
              className="w-full h-full object-contain rounded-md shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="mt-2 text-sm text-gray-700 font-medium">{cert.name}</p>
        </div>
      ))}
    </div>
  </section>
)}

   </section>
      {/* SKILLS SECTION */}
      <h3 className="text-3xl font-bold text-center text-[#C33235] mt-10">Skills</h3>
      <section className="w-full bg-[#f9f8fe] py-10 overflow-hidden mt-10">
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-14 animate-scroll whitespace-nowrap" style={{ animation: 'scroll 15s linear infinite' }}>
            {[
              { name: 'HTML', img: htmlIcon },
              { name: 'CSS', img: cssIcon },
              { name: 'Tailwind', img: tailwindIcon },
              { name: 'JavaScript', img: jsIcon },
              { name: 'React', img: reactIcon },
              { name: 'Next.js', img: nextIcon },
              { name: 'Flutter', img: flutterIcon },
              { name: 'Node.js', img: nodeIcon },
              { name: 'MongoDB', img: mongoIcon },
              { name: 'Git', img: gitIcon },
              { name: 'Figma', img: figmaIcon },
              { name: 'Python', img: pythonIcon },
            ].map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[100px]">
                <div className="w-14 h-14 md:w-16 md:h-16 mb-2">
                  <img src={skill.img.src} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

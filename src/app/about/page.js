'use client';

import { useState } from 'react';
import { FaTelegramPlane, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

// Skill Icons
import htmlIcon from '../../../public/html.webp';
import cssIcon from '../../../public/css.webp';
import jsIcon from '../../../public/js.webp';
import reactIcon from '../../../public/react.webp';
import nextIcon from '../../../public/next.webp';
import tailwindIcon from '../../../public/tailwind.webp';
import nodeIcon from '../../../public/node.webp';
import mongoIcon from '../../../public/mongo.jpg';
import gitIcon from '../../../public/git.webp';
import flutterIcon from '../../../public/flutter.webp'

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
          {['about', 'education', 'experience'].map((tab) => (
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

      {/* Tab Content */}
      <section className="max-w-6xl mx-auto">
        {activeTab === 'about' && (
          <div className="bg-[#f8f8f8] rounded-xl p-8 shadow-md">
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
                  <Link
                    href="https://t.me/yourTelegramUsername"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Telegram"
                    className="hover:text-red-600 transition"
                  >
                    <FaTelegramPlane />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/yourLinkedInUsername"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="hover:text-red-600 transition"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link
                    href="https://github.com/yourGitHubUsername"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="hover:text-red-600 transition"
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    href="mailto:mierafabebe12@gmail.com"
                    title="Email"
                    className="hover:text-red-600 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v1.2l-10 6.2-10-6.2V6c0-1.1.9-2 2-2zm16 3.4v10.6c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V7.4l10 6.2 10-6.2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'education' && (
  <div className="py-10 md:py-14 border-t border-b border-gray-200">
    <h3 className="text-3xl font-bold text-[#C33235] mb-6">Education</h3>
    <div className="space-y-6">
      <div>
        <h4 className="text-xl font-semibold text-gray-800">
          BSc in Software Engineering
        </h4>
        <p className="text-sm text-gray-500">
          Debre Birhan University · Expected 2026
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
          React Native Bootcamp
        </h4>
        <p className="text-sm text-gray-500">Remote Training · 2024</p>
      </div>
    </div>
  </div>
)}

{activeTab === 'experience' && (
  <div className="py-10 md:py-14 border-t border-b border-[#C33235]">
    <h3 className="text-3xl font-bold text-[#C33235] mb-6">Experience</h3>
    <div className="space-y-6">
      <div>
        <h4 className="text-xl font-semibold text-gray-800">
          Frontend Intern at Prodigy InfoTech
        </h4>
        <p className="text-sm text-gray-500">March 2024 – Present</p>
        <p className="mt-2 text-gray-700">
          Built interactive web interfaces, landing pages, and contributed to
          internal tools. Focused on responsive layout and animations.
        </p>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-gray-800">
          Language Learning App (React Native + Node.js)
        </h4>
        <p className="text-sm text-gray-500">Personal Project · 2024</p>
        <p className="mt-2 text-gray-700">
          Designed and developed an educational mobile app with offline
          capabilities, user goals, and payment integration.
        </p>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-gray-800">
          Freelance Projects (Web & Admin Dashboards)
        </h4>
        <p className="text-sm text-gray-500">Remote · 2023 – 2024</p>
        <p className="mt-2 text-gray-700">
          Delivered custom portfolio websites, blogs, and admin panels for
          clients using React, Tailwind, and Next.js.
        </p>
      </div>
    </div>
  </div>
)}

      </section>

      {/* Animated Skills Section */}
       <h3 className="text-3xl font-bold text-center text-[#C33235] mt-10">
          Skills
        </h3>
      <section className="w-full bg-[#f9f8fe] py-10 overflow-hidden mt-20">
       

        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-12 animate-scroll whitespace-nowrap"
            style={{ animation: 'scroll 15s linear infinite' }}
          >
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
            ].map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center min-w-[100px]"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 mb-2">
                  <img
                    src={skill.img.src}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

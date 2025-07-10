'use client';

import { useState } from 'react';
import { FaTelegramPlane,FaLinkedinIn ,FaGithub} from 'react-icons/fa';
import Link from 'next/link';

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
          {['about', 'education', 'experience', 'skills'].map((tab) => (
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

      {/* Content Section */}
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
    {/* Telegram */}
    <Link
      href="https://t.me/yourTelegramUsername"
      target="_blank"
      rel="noopener noreferrer"
      title="Telegram"
      className="hover:text-red-600 transition"
    >
      <FaTelegramPlane />
    </Link>

    {/* LinkedIn */}
    <Link
      href="https://linkedin.com/in/yourLinkedInUsername"
      target="_blank"
      rel="noopener noreferrer"
      title="LinkedIn"
      className="hover:text-red-600 transition"
    >
      <FaLinkedinIn />
    </Link>

    {/* GitHub */}
    <Link
      href="https://github.com/yourGitHubUsername"
      target="_blank"
      rel="noopener noreferrer"
      title="GitHub"
      className="hover:text-red-600 transition"
    >
      <FaGithub/>
    </Link>

    {/* Email */}
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
          <div className="bg-[#f8f8f8] rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-[#C33235]">
              Education
            </h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>
                BSc in Software Engineering - Debre Birhan University (Expected
                2026)
              </li>
              <li>Frontend Mentorship - Self-learning via online platforms</li>
              <li>React Native Bootcamp - Remote training (2024)</li>
            </ul>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="bg-[#f8f8f8] rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-[#C33235]">
              Experience
            </h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Frontend Intern at Prodigy InfoTech (2024)</li>
              <li>
                Built a Language Learning App using React Native + Node.js
              </li>
              <li>
                Contributed to multiple freelance projects — portfolio, blogs,
                admin dashboards
              </li>
            </ul>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="bg-[#f8f8f8] rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-[#C33235]">Skills</h3>
            <div className="flex flex-wrap gap-3 text-sm text-gray-800">
              {[
                'HTML',
                'CSS',
                'JavaScript',
                'React',
                'Next.js',
                'React Native',
                'Tailwind CSS',
                'Node.js',
                'MongoDB',
                'Git',
                'Figma',
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-white border px-4 py-2 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

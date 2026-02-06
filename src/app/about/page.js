'use client';

import { useState } from 'react';
import { FaTelegramPlane, FaLinkedinIn, FaGithub, FaEnvelope, FaTwitter, FaMedium } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

// Skills Images
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

// Certificates Images
import mern from '../../../public/mern.jpg';
import udacity from '../../../public/udacity.png';
import flutter from '../../../public/UDAMY.jpg';
import js from '../../../public/solo.png';

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <main className="relative bg-white text-gray-900 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-red-50/50 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-blue-50/20 blur-[80px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-40 pb-24">
        {/* Header Section */}
        <section className="max-w-4xl mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-[#C33235]" />
            <span className="text-[#C33235] font-black uppercase tracking-[0.3em] text-[10px]">Biography</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
            Explore My <br />
            <span className="text-[#C33235]">Creative Journey.</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg font-medium">
            Welcome to my digital space! I am <span className="text-gray-900 font-bold underline decoration-[#C33235]/30 underline-offset-8">Mieraf Abebe</span>, a Software Engineer dedicated to crafting high-fidelity user interfaces and robust mobile solutions.
          </p>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
            {['about', 'education', 'experience', 'certificates'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300 ${activeTab === tab
                  ? 'bg-[#C33235] text-white shadow-lg shadow-red-100'
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </section>

        <section className="max-w-6xl border-t border-gray-100">
          {/* ABOUT TAB */}
          {activeTab === 'about' && (
            <div className="py-12 md:py-16">
              <h3 className="text-2xl font-black mb-6 text-gray-900 tracking-tight">
                Personal Info
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg font-medium">
                With experience as a frontend developer, I&apos;ve developed and
                delivered user-friendly, fast, and accessible web and mobile
                interfaces. I enjoy turning ideas into real-world digital
                products. Whether it&apos;s building responsive UIs or solving complex
                UI logic, I&apos;m ready to tackle it!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#C33235] mb-2">Email</p>
                  <p className="font-bold text-gray-900 text-sm">mierafabebe12@gmail.com</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#C33235] mb-2">Location</p>
                  <p className="font-bold text-gray-900 text-sm">Addis Abeba, Ethiopia</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-2xl flex flex-col justify-center">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-4">Follow</p>
                  <div className="flex gap-5 text-white text-xl">
                    <Link href="https://t.me/mafi124679" target="_blank" className="hover:text-[#C33235] transition-colors">
                      <FaTelegramPlane />
                    </Link>
                    <Link href="https://linkedin.com/in/mieraf-abebe-971ba1323" target="_blank" className="hover:text-[#C33235] transition-colors">
                      <FaLinkedinIn />
                    </Link>
                    <Link href="https://github.com/MierafA12" target="_blank" className="hover:text-[#C33235] transition-colors">
                      <FaGithub />
                    </Link>
                    <Link href="https://x.com/mierafabebe" target="_blank" className="hover:text-[#C33235] transition-colors">
                      <FaTwitter />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* EDUCATION TAB */}
          {activeTab === 'education' && (
            <div className="py-12 md:py-16">
              <h3 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Academic Background</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: 'BSc in Software Engineering', org: 'Debre Birhan University', desc: 'Focus on system architecture and engineering principles.' },
                  { title: 'Frontend Mentorship', org: 'Professional Training', desc: 'Specialized in modern JavaScript ecosystems and UI optimization.' },
                  { title: 'Full Stack Bootcamp', org: 'TechTonic 2024', desc: 'Intensive certification in MERN stack development.' }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h4 className="text-lg font-black text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#C33235] mb-4">{item.org}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EXPERIENCE TAB */}
          {activeTab === 'experience' && (
            <div className="py-12 md:py-16">
              <h3 className="text-2xl font-black mb-8 text-gray-900 tracking-tight">Professional Path</h3>
              <div className="space-y-8">
                {[
                  { title: 'Full stack bootcamp | MERN', org: 'TechTonic tribe - 2024', desc: 'Contributed to real-world full stack projects using React and Node.js. Participated in weekly code reviews and agile standups.', link: 'https://www.linkedin.com/company/techtonic-tribe/' },
                  { title: 'Mobile app dev | Flutter', org: 'Kuraztech - 2025', desc: 'Worked with the mobile team to build cross-platform apps using Flutter, contributing to real-world Tech projects.', link: 'https://www.linkedin.com/company/kuraztech/' },
                  { title: 'React Native Developer', org: 'Mobile Bootcamp – 2024', desc: 'Hands-on development training building and deploying working applications.' }
                ].map((exp, i) => (
                  <div key={i} className="group p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-[#C33235]/20 transition-all duration-300">
                    <h4 className="text-xl font-black text-gray-900">{exp.title}</h4>
                    <p className="text-xs font-bold text-[#C33235] mt-1 uppercase tracking-widest">{exp.org}</p>
                    <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">{exp.desc}</p>
                    {exp.link && (
                      <a href={exp.link} target="_blank" className="inline-flex items-center mt-6 text-[10px] font-black uppercase tracking-widest hover:text-[#C33235] transition-colors">
                        Case Study <span>→</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CERTIFICATES TAB */}
          {activeTab === 'certificates' && (
            <div className="py-12 md:py-16 text-center">
              <h3 className="text-2xl font-black mb-10 text-gray-900 tracking-tight">Technical Credentials</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { name: 'MERN stack', img: mern },
                  { name: 'Udacity Fundamentals', img: udacity },
                  { name: 'Flutter UI', img: flutter },
                  { name: 'JS Mastery', img: js },
                ].map((cert, index) => (
                  <div key={index} className="space-y-4 group">
                    <div className="aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 group-hover:shadow-xl transition-all duration-500 flex items-center justify-center p-4">
                      <Image
                        src={cert.img}
                        alt={cert.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest group-hover:text-gray-900 transition-colors">{cert.name}</p>
                  </div>
                ))}
              </div>
            </div>
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
                    <Image src={skill.img} alt={skill.name} width={64} height={64} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

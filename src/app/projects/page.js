'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Ethiolingo from '../../../public/ethiolingoo.jpg';
import Lounge from '../../../public/Lounge.png';
import quizapp from '../../../public/quizapp.png';
import task from '../../../public/task.jpg';
import hemenhotel from '../../../public/hemenhotel.png';
import car from '../../../public/car.jpg';
import EthioEvents from '../../../public/ethioevents.png';
import CryptoApp from '../../../public/Crypto.png';
import schoolDashboard from '../../../public/school.png';

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = project.description.split(' ');
  const isLong = words.length > 25;
  const displayDescription = isExpanded || !isLong
    ? project.description
    : words.slice(0, 25).join(' ') + '...';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative mb-24 md:mb-40"
    >

      <div className={`absolute -inset-4 bg-gradient-to-r from-red-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 ${index % 2 !== 0 ? 'md:bg-gradient-to-l' : ''}`} />

      <div className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

        {/* Styled Image Stage */}
        <div className="w-full md:w-3/5 relative">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(195,50,53,0.15)] bg-slate-50 border border-white/50 group-hover:shadow-[0_40px_80px_rgba(195,50,53,0.25)] transition-all duration-700">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C33235]/5 to-transparent z-0" />

            <div className="relative w-full h-full p-8 md:p-12 flex items-center justify-center z-10">
              {/* Image with Floating Shadow Effect */}
              <div className="relative w-full h-full transition-all duration-700 group-hover:scale-[1.03] group-hover:-rotate-1">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Refined Content Section */}
        <div className="w-full md:w-2/5 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight group-hover:text-[#C33235] transition-colors duration-300">
              {project.title}
            </h3>
            <div className="h-1 w-12 bg-[#C33235] rounded-full group-hover:w-24 transition-all duration-500" />
          </div>

          <div className="space-y-4">
            <div className="text-gray-600 leading-relaxed text-sm md:text-base">
              <p>{displayDescription}</p>
              {isLong && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[#C33235] text-sm font-bold mt-2 flex items-center gap-1 hover:gap-2 transition-all duration-300"
                >
                  {isExpanded ? 'SEE LESS' : 'READ CASE STUDY'}
                  <span>{isExpanded ? '↑' : '→'}</span>
                </button>
              )}
            </div>

            {/* Premium Pill Tags for Tech Stack */}
            <div className="pt-2">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Tech Ecosystem</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-white border border-gray-100 text-[#C33235] text-[11px] font-bold rounded-full shadow-sm hover:border-[#C33235]/30 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Core Impact</p>
              <p className="text-xs text-gray-500 italic border-l-2 border-red-100 pl-3 leading-relaxed">
                {project.experience}
              </p>
            </div>
          </div>
          <div className="pt-6">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-bold rounded-xl text-xs tracking-widest hover:bg-[#C33235] transform hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              EXPLORE CODEBASE
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const projects = [
    {
      image: Ethiolingo,
      title: 'EthioLingo – Language Learning',
      description:
        'A comprehensive offline-supported mobile application designed to bridge the gap in learning Ethiopian local languages. It features interactive lessons, progress tracking, and localized UI/UX for an intuitive educational experience.',
      techStack: ['React Native', 'SQLite', 'Node.js', 'MongoDB'],
      link: 'https://github.com/Hailemeskel-Getaneh/EthioLingo',
      experience: 'Engineered a robust offline-first synchronization engine and optimized mobile UI performance.',
    },
    {
      image: EthioEvents,
      title: 'EthioEvents – Management',
      description:
        'A sophisticated full-stack event management ecosystem. It handles everything from discovery and registration to secure JWT-based authentication and complex role-based access for various administrative levels.',
      techStack: ['React', 'Tailwind CSS', 'PHP', 'MySQL', 'JWT'],
      link: 'https://github.com/MierafA12/eventManegment',
      experience:
        'Architected a scalable permissions system and integrated secure payment workflows for end-to-users.'
    },
    {
  image: schoolDashboard,
  title: 'School Analytics Dashboard ',
  description:
    'A view-only mobile analytics dashboard built for government officials to monitor and analyze school data across regions. The app provides access to school profiles, license documents, subscription status, demographic insights, and visual analytics through an intuitive and secure interface.',
  techStack: [
    'Flutter',
    'Dart',
    'laravel',
    'my-sql',
  ],
  link: 'https://github.com/MierafA12/school-analytics-dashboard-mobile',
  experience:
    'Designed a clean, data-driven dashboard experience with advanced filtering, visual charts, dark mode support, and secure read-only access for government stakeholders.',
},
    {
      image: CryptoApp,
      title: 'CryptoTrack – Market Intel',
      description:
        'A high-performance cryptocurrency tracker providing real-time market data, portfolio management, and trend analysis. Built with Flutter for a sleek, cross-platform experience with Firebase integration.',
      techStack: ['Flutter', 'Dart', 'Crypto API', 'Firebase'],
      link: 'https://github.com/MierafA12/Cryptocurrency-Tracker-App',
      experience:
        'Implemented real-time data streaming via WebSockets and built complex financial charting components.'
    },
    {
      image: Lounge,
      title: 'Lounge Food – Live Ordering',
      description:
        'A streamlined food ordering platform optimized for lounge environments. Features real-time menu updates, frictionless order placement, and an intuitive admin interface for kitchen staff management.',
      techStack: ['React', 'Tailwind CSS', 'Express', 'MongoDB'],
      link: 'https://github.com/MierafA12/food-ordering-web',
      experience: 'Focused on reducing order latency and improving responsive component rendering across devices.',
    },
    {
      image: hemenhotel,
      title: 'Hemen Hotel – Digital Concierge',
      description: 'A premium hospitaly showcase website. Emphasizes visual storytelling with high-fidelity imagery and a focus on smooth transitions and conversion-optimized booking flows.',
      techStack: ['React', 'CSS Modules'],
      link: 'https://github.com/MierafA12/HemenHotel',
      experience: 'Crafted a pixel-perfect design system and ensured industry-leading accessibility standards.',
    },
    {
      image: quizapp,
      title: 'EduQuiz – Timed Learning',
      description:
        'An engaging educational tool that gamifies learning through timed challenges. It dynamically renders quiz sets and tracks user performance across various difficulty levels.',
      techStack: ['React', 'JavaScript', 'CSS'],
      link: 'https://github.com/Hailemeskel-Getaneh/QuizApp',
      experience: 'Developed custom timer logic and an extensible JSON-driven quiz engine structure.',
    },
    {
      image: task,
      title: 'TaskFlow – Productivity',
      description:
        'A minimal yet powerful task management utility for mobile. It focuses on the essentials of productivity, offering local persistence for instantaneous data access.',
      techStack: ['React Native', 'AsyncStorage'],
      link: 'https://github.com/MierafA12/simpletaskmanager',
      experience: 'Optimized local storage handling and refined mobile gesture interactions.',
    },
    {
      image: car,
      title: 'CarRent – Fleet Solutions',
      description:
        'A local car rental solution featuring a user-friendly booking workflow and fleet management. It simplifies the transition from browsing to booking on mobile devices.',
      techStack: ['React Native', 'AsyncStorage'],
      link: 'https://github.com/MierafA12/simple-room-managment',
      experience: 'Enhanced UI state management and session persistence for a reliable booking experience.',
    },
  ];

  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-50/50 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50/30 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-[#C33235]" />
            <span className="text-[#C33235] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-4 tracking-tight">
            Selected <br />
            <span className="text-[#C33235]">Works.</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed font-medium">
            A curation of digital products engineered with focus on performance, scalability, and exceptional user experiences.
          </p>
        </header>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

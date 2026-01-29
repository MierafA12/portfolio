'use client';

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
export default function Projects() {
  const projects = [
    {
      image: Ethiolingo,
      title: 'EthioLingo – Local Language Learning App',
      description:
        'An offline-supported mobile app helping users learn Ethiopian languages through interactive lessons and practice tools.',
      techStack: ['React Native', 'SQLite', 'Node.js', 'MongoDB'],
      link: 'https://github.com/Hailemeskel-Getaneh/EthioLingo',
      experience: 'Led mobile-first UI and offline syncing, improved app structure and modular lesson design.',
    },
    {
  image: EthioEvents,
  title: 'EthioEvents Event Management System',
  description:
    'A web-based event management platform that enables users to discover events, register, and make payments, while allowing admins and super admins to manage events and monitor registrations.',
  techStack: ['React', 'Tailwind CSS', 'PHP', 'MySQL', 'JWT'],
  link: 'https://github.com/MierafA12/eventManegment',
  experience:
    'Built a role-based system with secure authentication, event management workflows, and responsive UI, gaining experience in full-stack development and access control.'
},
{
  image: CryptoApp,
  title: 'CryptoTrack Cryptocurrency Management App',
  description:
    'A web-based cryptocurrency application that allows users to track crypto prices, manage portfolios, and view real-time market trends, while admins manage listed coins and platform settings.',
  techStack: ['Flutter', 'Dart', 'Crypto API', 'Firebase'],
  link: 'https://github.com/MierafA12/Cryptocurrency-Tracker-App',
  experience:
    'Developed real-time data integration, secure authentication, portfolio management features, and role-based access control, strengthening skills in APIs, security, and full-stack development.'
},
    {
      image: Lounge,
      title: 'Lounge Food Ordering Web',
      description:
        'A food ordering platform built for lounges, allowing customers to browse menus and place orders easily.',
      techStack: ['React', 'Tailwind CSS', 'Express', 'MongoDB'],
      link: 'https://github.com/MierafA12/food-ordering-web',
      experience: 'Gained backend integration experience and worked on responsive component layouts.',
    }, 
    {
      image: hemenhotel,
      title: 'Hemen Hotel Website',
      description: 'Modern hotel website showcasing rooms, services, and location with responsive design.',
      techStack: ['React', 'CSS Modules'],
      link: 'https://github.com/MierafA12/HemenHotel',
      experience: 'Focused on clean design and multi-device responsiveness.',
    },
    {
      image: quizapp,
      title: 'Quiz App with Timer',
      description:
        'Fun and educational quiz app that challenges users with timed questions across different topics.',
      techStack: ['React', 'JavaScript', 'CSS'],
      link: 'https://github.com/Hailemeskel-Getaneh/QuizApp',
      experience: 'Built timer logic and dynamic rendering of quiz data.',
    },
    {
      image: task,
      title: 'Simple Task Manager',
      description:
        'Minimal mobile app for tracking and completing tasks. Stores data locally for quick access.',
      techStack: ['React Native', 'AsyncStorage'],
      link: 'https://github.com/MierafA12/simpletaskmanager',
      experience: 'Learned local storage handling in mobile environments and UI state updates.',
    },
    {
      image: car,
      title: 'Car Rent App',
      description:
        'A local car rental app with a user-friendly interface and booking functionality built using React Native.',
      techStack: ['React Native', 'AsyncStorage'],
      link: 'https://github.com/MierafA12/simple-room-managment',
      experience: 'Enhanced UI building skills and storage of session data using local storage.',
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#C33235] mt-4">Projects</h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Here are some of the projects I’ve built to solve real-world problems and sharpen my skills.
        </p>
      </div>

      <div className="relative">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative mb-16 md:mb-24 flex flex-col md:flex-row items-center gap-6 ${
              index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
            }`}
          >
            <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="w-full md:w-[90%] lg:w-[58%] z-10 bg-[#f9f8fe] border border-[#C33235] 
             rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
>
  <div
    className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
  >
    {/* Image */}
    <div className="relative w-full md:w-1/2 h-[180px] sm:h-[200px] md:h-[220px] lg:h-[280px]">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-contain"
      />
    </div>

    {/* Content */}
    <div className="w-full md:w-1/2 p-4 sm:p-5">
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#C33235] mb-2">
        {project.title}
      </h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3">
        {project.description}
      </p>

      <div className="mb-3">
        <p className="text-sm font-medium text-gray-800 mb-1">Tech Stack:</p>
        <ul className="flex flex-wrap gap-2 text-xs sm:text-sm text-[#C33235]">
          {project.techStack.map((tech, i) => (
            <li key={i} className="bg-white border px-2 py-1 rounded-md shadow-sm">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-sm font-medium text-gray-800 mb-1">What I learned:</p>
        <p className="text-xs sm:text-sm text-gray-600">{project.experience}</p>
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-xs sm:text-sm text-[#C33235] font-semibold hover:underline"
      >
        View Code →
      </a>
    </div>
  </div>
</motion.div>

          </div>
        ))}
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Ethiolingo from '../../../public/EthioLingo.jpg'
import Lounge  from '../../../public/Lounge.png'
import quizapp from '../../../public/quizapp.png'
import task from '../../../public/task.jpg'
import hemenhotel from '../../../public/hemenhotel.png'
import car from '../../../public/car.jpg'

export default function projects(){
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
return(
    <section className="py-20 px-6 md:px-20 bg-white">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-extrabold text-[#C33235] mb-4">Projects</h2>
    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      Here are some of the projects I’ve built to solve real-world problems and sharpen my skills across web and mobile development.
    </p>
  </div>

  <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="bg-[#f9f9f9] border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <div className="w-full h-48 relative rounded-t-xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#C33235] mb-2">{project.title}</h3>
          <p className="text-gray-700 text-sm mb-4">{project.description}</p>
          
          <div className="mb-3">
            <p className="text-sm font-medium text-gray-800 mb-1">Tech Stack:</p>
            <ul className="flex flex-wrap gap-2 text-xs text-gray-600">
              {project.techStack.map((tech, i) => (
                <li
                  key={i}
                  className="bg-white border px-2 py-1 rounded-md shadow-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-800 mb-1">What I learned:</p>
            <p className="text-sm text-gray-600">{project.experience}</p>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm text-[#C33235] font-semibold hover:underline"
          >
            View Code →
          </a>
        </div>
      </motion.div>
    ))}
  </div>
</section>

) 
}
'use client';

import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaGlobe, FaPalette } from 'react-icons/fa';
export default function services(){
const services = [
  {
    title: 'Front-End Development',
    icon: <FaLaptopCode className="text-4xl text-[#C33235]" />,
    description:
      'Building responsive, performant, and accessible UIs using React, Next.js, and Tailwind.',
  },
  {
    title: 'Web Development',
    icon: <FaGlobe className="text-4xl text-[#C33235]" />,
    description:
      'Creating full-stack web applications with modern tools and frameworks using React, Node.js, and MongoDB.',
  },
  {
    title: 'Mobile App Development',
    icon: <FaMobileAlt className="text-4xl text-[#C33235]" />,
    description:
      'Crafting smooth and scalable mobile apps with React Native, focusing on user-friendly interfaces.',
  },
  {
    title: 'UI/UX Prototyping',
    icon: <FaPalette className="text-4xl text-[#C33235]" />,
    description:
      'Designing clean, intuitive user experiences using Figma and translating them into working interfaces.',
  },
];
  return(
    <section className="bg-[#f9f8fe] py-16 px-6 md:px-20 mt-20">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-extrabold text-[#C33235] mb-4">My Services</h2>
    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      Here are some of the services I offer based on my experience and passion for building functional digital experiences.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
    {services.map((service, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300"
      >
        <div className="mb-4 flex justify-center">{service.icon}</div>
        <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
        <p className="text-gray-600 text-sm">{service.description}</p>
      </motion.div>
    ))}
  </div>
</section>
  )
}
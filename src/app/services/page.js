'use client';

import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaGlobe, FaPalette } from 'react-icons/fa';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Dynamic Background Shadow/Glow */}
      <div className="absolute -inset-2 bg-gradient-to-br from-[#C33235]/10 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative h-full bg-white border border-gray-100 p-10 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
        {/* Decorative corner accent */}
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-red-50 rounded-full group-hover:bg-[#C33235]/5 transition-colors duration-500" />

        <div className="relative z-10 flex flex-col items-start text-left">
          <div className="mb-8 p-4 bg-red-50 rounded-2xl text-[#C33235] group-hover:bg-[#C33235] group-hover:text-white transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-[#C33235]/20">
            {service.icon}
          </div>

          <h4 className="text-2xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
            {service.title.split(' ').map((word, i) => (
              <span key={i} className={i === service.title.split(' ').length - 1 ? "text-[#C33235]" : ""}>
                {word}{' '}
              </span>
            ))}
          </h4>

          <div className="w-8 h-1 bg-[#C33235] mb-6 rounded-full group-hover:w-16 transition-all duration-500" />

          <p className="text-gray-500 leading-relaxed text-sm md:text-base font-medium">
            {service.description}
          </p>

        </div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  const services = [
    {
      title: 'Front-End Development',
      icon: <FaLaptopCode className="text-4xl" />,
      description:
        'Building ultra-fast, visually stunning, and inclusive user interfaces using modern architectures like React & Next.js.',
    },
    {
      title: 'Web Engineering',
      icon: <FaGlobe className="text-4xl" />,
      description:
        'Architecting complex, scalable full-stack applications with high-performance backends and robust data modeling.',
    },
    {
      title: 'Mobile Solutions',
      icon: <FaMobileAlt className="text-4xl" />,
      description:
        'Crafting native-grade cross-platform mobile experiences with React Native, emphasizing fluidity and performance.',
    },
    {
      title: 'Strategy & UI Design',
      icon: <FaPalette className="text-4xl" />,
      description:
        'Transforming conceptual ideas into high-fidelity prototypes and intuitive designs focused on superior user retention.',
    },
  ];

  return (
    <section className="relative bg-white py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-50/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-50/30 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-[#C33235]" />
            <span className="text-[#C33235] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">Expertise</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-4 tracking-tight">
            Service <br />
            <span className="text-[#C33235]">Solutions.</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed font-medium">
            Bridging the gap between ambitious ideas and high-performance technical execution.
          </p>
        </header>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

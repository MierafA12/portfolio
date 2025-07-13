'use client';

import Image from 'next/image';
import heroImage from '../../public/hero.jpg';
import AboutMe from './about/page';
import Services from './services/page';
import GetInTouch from '@/components/GetInTouch';
import jsIcon from '../../public/flutter.webp';
import reactIcon from '../../public/react.webp';
import nodeIcon from '../../public/node.webp';
import tsIcon from '../../public/tailwind.webp';

export default function Home() {
  return (
    <main className="bg-[#f9f8fe] text-gray-900">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center px-6 md:px-20">
        <div className="w-full max-w-7xl  relative ml-40">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
            {/* Text Section */}
            <div className="max-w-xl text-center md:text-left">
              <p className="text-[#C33235] text-xl font-semibold mb-2">I am</p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Mieraf Abebe
              </h1>
              <p className="mt-3 text-[#C33235] font-bold text-lg">
                Software Engineer
              </p>
              <p className="mt-4 text-gray-700 text-base leading-relaxed">
                I am a web and mobile developer. I work as a Frontend Developer
                specializing in React, Next.js, and React Native.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="/services"
                  className="bg-[#C33235] text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition duration-300"
                >
                  MY SERVICES
                </a>
                <a
                  href="/projects"
                  className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition duration-300"
                >
                  RECENT WORKS
                </a>
              </div>
            </div>

            {/* Profile Image + Orbiting Icons */}
            <div className="relative flex items-center justify-center w-[300px] h-[300px] z-10 mr-40">
              {/* Orbiting Icons */}
              <div className="absolute w-full h-full orbit-ring">
                <img
                  src={jsIcon.src}
                  alt="Flutter"
                  className="orbit-icon"
                  style={{
                    top: 0,
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
                <img
                  src={reactIcon.src}
                  alt="React"
                  className="orbit-icon"
                  style={{
                    top: '25%',
                    right: 0,
                    transform: 'translate(50%, -50%)',
                  }}
                />
                <img
                  src={nodeIcon.src}
                  alt="Node"
                  className="orbit-icon"
                  style={{
                    bottom: 0,
                    left: '50%',
                    transform: 'translate(-50%, 50%)',
                  }}
                />
                <img
                  src={tsIcon.src}
                  alt="Tailwind"
                  className="orbit-icon"
                  style={{
                    top: '25%',
                    left: 0,
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              </div>

              {/* Center Profile Image */}
              <div className="rounded-full bg-[#edf2f8] p-4 shadow-lg z-20">
                <Image
                  src={heroImage}
                  alt="Profile"
                  width={180}
                  height={180}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes orbit-spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .orbit-ring {
            position: absolute;
            top: 0;
            left: 0;
            animation: orbit-spin 5s linear infinite;
          }

          .orbit-icon {
            position: absolute;
            width: 48px;
            height: 48px;
            border-radius: 50%;
          }
        `}</style>
      </section>

      {/* About Me Section */}
      <section className="mt-10 pt-10">
        <AboutMe />
      </section>
      <GetInTouch/>
      <Services/>
      
    </main>
  );
}

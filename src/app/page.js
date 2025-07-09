import Image from 'next/image';
import heroImage from '../../public/hero.jpg';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 pt-32 bg-white text-gray-900">
      <div className="w-full max-w-7xl mx-auto px-4 relative">
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
                href="/work"
                className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition duration-300"
              >
                RECENT WORKS
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center items-center">
            <div className="rounded-full bg-[#edf2f8] p-3 md:p-6 shadow-lg z-10">
              <Image
                src={heroImage}
                alt="Profile Image"
                width={220}
                height={220}
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Horizontal Line Broken Around Image */}
        <div className="absolute left-0 right-0 bottom-0 flex items-center justify-between mt-16">
          <div className="w-1/3 h-[4px] bg-[#C33235]" />
          <div className="w-1/3" /> {/* Gap for image */}
          <div className="w-1/3 h-[4px] bg-[#C33235]" />
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import Link from 'next/link';
import think from '../../public/think.png';

export default function GetInTouch() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Text Section */}
        <div className="flex-1 min-w-[200px] space-y-4">
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
            Have a project <br />
            <span className="text-[#C33235]">idea in your mind?</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-full">
            Let's talk and turn your idea into a real-world project — I'm here to help bring it to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C33235] text-white px-8 py-3 rounded-full font-black text-xs tracking-widest uppercase hover:bg-black transition-all duration-300 shadow-xl shadow-red-100"
          >
            GET IN TOUCH
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex-1 min-w-[200px]">
          <Image
            src={think}
            alt="Thinking about a new project"
            className="w-full h-auto rounded-xl object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

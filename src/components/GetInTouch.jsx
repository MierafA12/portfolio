import Image from "next/image";
import Link from 'next/link';
import think from '../../public/think.png';

export default function GetInTouch() {
  return (
    <section className="px-4 md:px-20 py-10 bg-white">
      <div className="flex flex-row flex-wrap items-center justify-between gap-4">
        {/* Text Section */}
        <div className="flex-1 min-w-[200px] space-y-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            Is there any idea in your mind?
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-full">
            Let's talk and turn your idea into a real-world project — I'm here to help bring it to life.
          </p>
          <Link
            href="/contacts"
            className="inline-block bg-[#C33235] text-white px-5 py-2 rounded-full font-medium hover:bg-red-700 transition duration-300 text-sm sm:text-base"
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

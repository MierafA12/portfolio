import Image from "next/image";
import Link from 'next/link';
import think from '../../public/think.png';

export default function GetInTouch() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Is there any idea in your mind?
          </h1>
          <p className="text-gray-600 text-lg max-w-xl">
            Let's talk and turn your idea into a real-world project — I'm here to help bring it to life.
            </p>
          <Link
            href="/contacts"
            className="inline-block bg-[#C33235] text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition duration-300"
          >
            GET IN TOUCH
          </Link>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3">
          <Image
            src={think}
            alt="Thinking about a new project"
            className="w-full h-auto rounded-xl "
            priority
          />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots } from "react-icons/fa";
import { MdSubject } from "react-icons/md";
import Contactme from "../../../public/contactme.png";

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-white px-6 py-10">
      {/* Left image */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
        <Image src={Contactme} alt="Contact image" className="rounded-xl w-full h-auto" />
      </div>

      {/* Right form */}
      <div className="w-full md:w-1/2 space-y-5 pr-24">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Get in Touch</h2>

        {/* Name */}
        <div className="flex items-center gap-2 border p-3 rounded-md">
          <FaUser className="text-gray-500" />
          <input
            type="text"
            name="fullname"
            placeholder="Enter your full name"
            className="w-full outline-none"
            required
          />
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 border p-3 rounded-md">
          <FaEnvelope className="text-gray-500" />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full outline-none"
            required
          />
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2 border p-3 rounded-md">
          <FaPhone className="text-gray-500" />
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            className="w-full outline-none"
          />
        </div>

        {/* Subject */}
        <div className="flex items-center gap-2 border p-3 rounded-md">
          <MdSubject className="text-gray-500" />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full outline-none"
          />
        </div>

        {/* Message */}
        <div className="flex items-start gap-2 border p-3 rounded-md">
          <FaRegCommentDots className="mt-1 text-gray-500" />
          <textarea
            name="message"
            placeholder="Type your message"
            rows="4"
            className="w-full outline-none resize-none"
          />
        </div>

        {/* Submit Button */}
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold  py-2 px-6 rounded-md transition duration-200">
          Get in Touch
        </button>
      </div>
    </div>
  );
}

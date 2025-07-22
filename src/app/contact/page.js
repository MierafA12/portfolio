"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots } from "react-icons/fa";
import { MdSubject } from "react-icons/md";
import Contactme from "../../../public/contactme.png";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2vyz96p",
        "template_gn5dfqo",
        form.current,
        "JfQTPFDwsbanjVcuL"
      )
      .then(
        () => {
          setIsSuccess(true);
          setStatusMessage("✅ Message sent successfully!");
          form.current.reset();
        },
        () => {
          setIsSuccess(false);
          setStatusMessage("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-white px-6 py-10">
      {/* Left Image */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
        <Image
          src={Contactme}
          alt="Contact image"
          className="rounded-xl w-full h-auto"
        />
      </div>

      {/* Right Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full md:w-1/2 space-y-5 pr-4"
      >
        <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
        <p className="text-gray-500 mb-4">
          Don’t hesitate to contact me — I’m here to help you!
        </p>

        {/* Show status messages */}
        {statusMessage && (
          <div
            className={`p-3 rounded-md text-sm font-medium ${
              isSuccess ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {statusMessage}
          </div>
        )}

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
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

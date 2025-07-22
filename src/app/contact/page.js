"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots } from "react-icons/fa";
import { MdSubject } from "react-icons/md";
import Contactme from "../../../public/contactme.png";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const validatePhone = (phone) => {
    const ethiopianOrIntlRegex = /^(\+251\d{9}|\+?\d{7,15})$/;
    return ethiopianOrIntlRegex.test(phone);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const phone = form.current.phone.value.trim();

    if (!validatePhone(phone)) {
      setStatus("📞 Please enter a valid Ethiopian or international phone number.");
      return;
    }

    emailjs
      .sendForm(
        "service_2vyz96p",
        "template_gn5dfqo",
        form.current,
        "JfQTPFDwsbanjVcuL"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully! I’ll get back to you soon.");
          form.current.reset();
        },
        () => {
          setStatus("❌ Something went wrong. Don't worry—try again or reach me directly.");
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-white px-4 py-10">
      {/* Left image */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
        <Image
          src={Contactme}
          alt="Contact image"
          className="rounded-xl w-full h-auto"
        />
      </div>

      {/* Right form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg space-y-5 p-4"
      >
        <h2 className="text-3xl font-semibold mb-2 text-gray-800">Get in Touch</h2>

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
            placeholder="+251911223344 or +441234567890"
            className="w-full outline-none"
            required
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
            required
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

        {/* Status Message */}
        {status && (
          <div
            className={`text-sm px-4 py-2 rounded-md ${
              status.startsWith("✅")
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {status}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition duration-200"
        >
          Get in Touch
        </button>
      </form>
    </div>
  );
}

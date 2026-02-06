"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots } from "react-icons/fa";
import { MdSubject } from "react-icons/md";
import Contactme from "../../../public/contactme.png";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = (formData) => {
    const newErrors = {};

    const phoneRegex = /^(\+251|0)?9\d{8}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone =
        "Please enter a valid Ethiopian phone number (e.g., +251912345678 or 0912345678)";
    }

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(form.current));
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({}); // clear previous errors

    emailjs
      .sendForm(
        "service_2vyz96p",
        "template_gn5dfqo",
        form.current,
        "JfQTPFDwsbanjVcuL"
      )
      .then(
        () => {
          setSuccessMessage("✅ Message sent successfully!");
          setTimeout(() => {
            setSuccessMessage("");
          }, 4000);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setSuccessMessage("❌ Something went wrong. Please try again.");
          setTimeout(() => {
            setSuccessMessage("");
          }, 4000);
        }
      );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24">
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-20">
        {/* Left image */}
        <div className=" hidden lg:block w-full md:w-1/2 mb-10 md:mb-0 md:pr-10  ">
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
          className="w-full max-w-lg space-y-5 md:pr-10"
        >
          <div className="mb-6">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
              Get in <span className="text-[#C33235]">Touch</span>
            </h2>
            <div className="h-1 w-12 bg-[#C33235] mt-2 rounded-full" />
          </div>

          {successMessage && (
            <div className="text-green-600 bg-green-100 border border-green-300 p-2 rounded-md transition duration-300">
              {successMessage}
            </div>
          )}

          {/* Full Name */}
          <div>
            <div className="flex items-center gap-2 border p-3 rounded-md">
              <FaUser className="text-gray-500" />
              <input
                type="text"
                name="fullname"
                placeholder="Enter your full name"
                className="w-full outline-none"
                required
                onChange={() => setErrors((prev) => ({ ...prev, fullname: "" }))}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center gap-2 border p-3 rounded-md">
              <FaEnvelope className="text-gray-500" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full outline-none"
                required
                onChange={() => setErrors((prev) => ({ ...prev, email: "" }))}
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-center gap-2 border p-3 rounded-md">
              <FaPhone className="text-gray-500" />
              <input
                type="tel"
                name="phone"
                placeholder="e.g. +251912345678 or 0912345678"
                className="w-full outline-none"
                required
                onChange={() => setErrors((prev) => ({ ...prev, phone: "" }))}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Subject */}
          <div>
            <div className="flex items-center gap-2 border p-3 rounded-md">
              <MdSubject className="text-gray-500" />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full outline-none"
                onChange={() => setErrors((prev) => ({ ...prev, subject: "" }))}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <div className="flex items-start gap-2 border p-3 rounded-md">
              <FaRegCommentDots className="mt-1 text-gray-500" />
              <textarea
                name="message"
                placeholder="Don't be afraid to talk with me — I’m here to help!"
                rows="4"
                className="w-full outline-none resize-none"
                required
                onChange={() => setErrors((prev) => ({ ...prev, message: "" }))}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#C33235] text-white px-8 py-3 rounded-full font-black text-xs tracking-widest uppercase hover:bg-black transition-all duration-300"
          >
            Get in Touch
          </button>
        </form>
      </div>
    </div >
  );
}

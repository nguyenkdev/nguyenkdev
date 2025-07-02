"use client"; // Ensure this component is client-side rendered
import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";
import Ripple from "material-ripple-effects";
import CopyIcon from "./CopyIcon";
import { usePathname } from "next/navigation";

const Contact: React.FC = () => {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const locale = parts[0];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();
  const ripple = new Ripple();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data using EmailJS
    toast({
      variant: "success",
      title: "Thank you for your message!",
      description:
        "I appreciate you taking the time to connect, and I'll respond as soon as possible.",
    });
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  if (pathname.includes("info") || pathname == `/${locale}`) {
    return (
      <section id="contact">
        <div className="flex flex-col lg:flex-row justify-between mx-auto max-w-screen-lg px-4 lg:px-8 py-8 gap-8">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
              <button
                type="submit"
                onClick={(e: any) => ripple.create(e, "light")}
                className="w-full bg-yellow-400 text-gray-900 font-bold py-2 rounded hover:bg-yellow-300 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="w-full lg:w-fit flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Connect With Me
            </h3>
            <a
              href="/assets/cv/TranNguyenKhoiNguyen-fullstack.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center text-shadow-hover text-gray-200"
            >
              <span>Résumé</span>
              <span className="text-lg ">↗</span>
            </a>
            <div className="flex items-center gap-2 text-gray-400">
              <a
                href="mailto:nguyenkdev@gmail.com"
                className="flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-mail size-6"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                  <path d="M3 7l9 6l9 -6" />
                </svg>
                <span className="ml-2">nguyenkdev@gmail.com</span>
              </a>
              <CopyIcon text="nguyenkdev@gmail.com" />
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <a
                href="https://www.linkedin.com/in/nguyenkdev" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin size-6"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 11v5" />
                  <path d="M8 8v.01" />
                  <path d="M12 16v-5" />
                  <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                  <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                </svg>
                <span>linkedin.com/in/nguyenkdev</span>
              </a>
              <CopyIcon text="https://www.linkedin.com/in/nguyenkdev" />
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <a
                href="https://github.com/nguyenkdev" // Replace with your GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github size-6"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
                <span>github.com/nguyenkdev</span>
              </a>
              <CopyIcon text="https://github.com/nguyenkdev" />
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};

export default Contact;

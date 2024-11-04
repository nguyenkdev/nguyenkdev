"use client";
import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";
import { Highlight } from "./ui/hero-highlight";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#d3d3d3"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#f8e1a5"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="#f5f5dc"
        />
      </div>
      <div
        className="h-screen w-full bg-white dark:bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white  dark:bg-black-100
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex justify-center items-center mx-auto max-w-screen-lg px-4 lg:px-8 lg:h-screen mt-[30%] md:mt-[20%] lg:mt-0 relative z-5">
        <div className="flex flex-col">
          <div>
            <h3 className="font-medium">Tran Nguyen Khoi Nguyen</h3>
            <div className="">
              <h1 className="text-5xl font-bold my-6">
                <div className="text-gold">Frontend Developer</div>
                <div className="text-gold">with Full Stack Experience</div>
              </h1>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex flex-col md:w-3/5">
              <p className="font-normal text-base lg:text-lg text-slate-200">
                I craft seamless, <Highlight>responsive</Highlight>,{" "}
                <Highlight>user-centric</Highlight> web applications with a
                focus on <Highlight>performance</Highlight>,{" "}
                <Highlight>scalability</Highlight>, and{" "}
                <Highlight>clean design</Highlight>. I am open-minded and eager
                to learn from others to continuously improve my skills and stay
                ahead in this evolving field.
              </p>
              <div className="flex gap-4 mt-4 items-center justify-center">
                <a
                  href="/assets/cv/CV_Tran_Nguyen_Khoi_Nguyen.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-full border-2 border-slate-200 p-1 text-sm font-semibold text-center flex items-center justify-center">
                    CV
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/nguyenkdev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin size-8"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 11v5" />
                    <path d="M8 8v.01" />
                    <path d="M12 16v-5" />
                    <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                    <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/nguyenkdev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github size-8"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

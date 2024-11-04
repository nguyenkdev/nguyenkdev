'use client';
import React from "react";
import LaptopMockup from "./LaptopMockup";
import MobileMockup from "./MobileMockup";
import Ripple from "material-ripple-effects";
export default function Work() {
  const ripple = new Ripple();
  return (
    <section id="work">
      <div className="mx-auto max-w-screen-lg px-4 lg:px-8 pb-8 pt-[20%] sm:pt-[10%] lg:pt-16 ">
        <div className="tracking-normal text-[24px] font-medium leading-[100%]">
          Work
        </div>
        <div className="flex flex-col gap-32 lg:gap-16 p-6">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
            {/* Left Side: Work Description */}
            <div className="flex-1 space-y-4">
              <a
                href="https://tapdoanvk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffa037] flex gap-2 items-center hover:text-[#feb159] transition-colors duration-300"
              >
                <span>Tập Đoàn Công Nghệ VK</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
              <div className="text-lg font-medium text-white">
                Vchatshop
                <span className="mx-2 text-black dark:text-white">•</span>{" "}
                {/* Dot with theme-based color */}
                <span className="text-gray-400">
                  Vietnamese e-commerce platform
                </span>
              </div>
              <div className="">
                <a
                  href="https://vchatshop.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline flex gap-2 items-center"
                >
                  <span className="text-gray-300 font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                      />
                    </svg>
                  </span>
                  <span>https://vchatshop.vn</span>
                </a>
              </div>
              <div className="text-gray-300">
                <span className="font-semibold">Role:</span> Full-stack
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {/* Combined Tech Stack */}
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "jQuery",
                  "Bootstrap",
                  "Laravel",
                  "PHP",
                  "MySQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="inline-block bg-transparent border border-yellow-500 text-yellow-500 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <a
                  onClick={(e) => ripple.create(e, "light")}
                  className="mdc-ripple-surface relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Learn more
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Side: Images */}
            <div className="flex-1">
              <a
                href="https://vchatshop.vn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative mt-[10%]">
                  <div className="flex justify-end ">
                    <LaptopMockup link="/assets/vchatshop-fullpage.png" />
                  </div>
                  <div className="absolute top-4 right-0">
                    <MobileMockup link="/assets/vchatshop-mobile-fullpage.png" />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
            {/* Left Side: Work Description */}
            <div className="flex-1 space-y-4">
              <div className="text-lg font-medium text-white">
                TapdoanVk
                <span className="mx-2 text-black dark:text-white">•</span>{" "}
                {/* Dot with theme-based color */}
                <span className="text-gray-400">
                  Corporate website for Tập Đoàn Công Nghệ VK
                </span>
              </div>
              <div className="">
                <a
                  href="https://tapdoanvk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline flex gap-2 items-center"
                >
                  <span className="text-gray-300 font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                      />
                    </svg>
                  </span>
                  <span>https://tapdoanvk.com</span>
                </a>
              </div>
              <div className="text-gray-300">
                <span className="font-semibold">Role:</span> Front-end
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {/* Combined Tech Stack */}
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "TypeScript",
                  "Angular",
                  "Bootstrap",
                  "Material UI",
                  "EmailJS",
                  "Google Sheet API",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="inline-block bg-transparent border border-yellow-500 text-yellow-500 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <a className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Learn more
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Side: Images */}
            <div className="flex-1">
              <a
                href="https://vchatshop.vn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative mt-[10%]">
                  <div className="flex justify-end ">
                    <LaptopMockup link="/assets/tapdoanvk-fullpage.png" />
                  </div>
                  <div className="absolute top-4 right-0">
                    <MobileMockup link="/assets/tapdoanvk-mobile-fullpage.webp" />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
            {/* Left Side: Work Description */}
            <div className="flex-1 space-y-4">
              <a
                href="https://geekup.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#74d6c9] flex gap-2 items-center hover:text-[#66bcb1] transition-colors duration-300"
              >
                <span>GEEK Up</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
              <div className="text-lg font-medium text-white">
                O-Geek
                <span className="mx-2 text-black dark:text-white">•</span>{" "}
                {/* Dot with theme-based color */}
                <span className="text-gray-400">
                  Internal web app for the company
                </span>
              </div>
              <div className="text-gray-300">
                <span className="font-semibold">Role:</span> Front-end
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {/* Combined Tech Stack */}
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "ReactJS",
                  "Ant Design",
                  "LESS",
                  "ChartJS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="inline-block bg-transparent border border-yellow-500 text-yellow-500 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <a className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Learn more
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Side: Images */}
            <div className="flex-1">
              <div className="relative mt-[10%]">
                <div className="flex justify-end ">
                  <LaptopMockup link="/assets/geekup.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

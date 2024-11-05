"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Ripple from "material-ripple-effects";

export default function WorkV2() {
  const ripple = new Ripple();
  const vchatshopTech = [
    {
      id: 1,
      name: "HTML",
      designation: "",
      image: "/assets/tech/html.svg",
    },
    {
      id: 2,
      name: "CSS",
      designation: "",
      image: "/assets/tech/css.svg",
    },
    {
      id: 3,
      name: "JavaScript",
      designation: "",
      image: "/assets/tech/javascript.svg",
    },
    {
      id: 4,
      name: "jQuery",
      designation: "",
      image: "/assets/tech/jquery.svg",
    },
    {
      id: 5,
      name: "Bootstrap",
      designation: "",
      image: "/assets/tech/bootstrap.svg",
    },
    {
      id: 6,
      name: "Laravel",
      designation: "",
      image: "/assets/tech/laravel.svg",
    },
    {
      id: 7,
      name: "PHP",
      designation: "",
      image: "/assets/tech/php.svg",
    },
    {
      id: 8,
      name: "MySQL",
      designation: "",
      image: "/assets/tech/mysql.svg",
    },
  ];

  const vkTech = [
    {
      id: 1,
      name: "HTML",
      designation: "",
      image: "/assets/tech/html.svg",
    },
    {
      id: 2,
      name: "CSS",
      designation: "",
      image: "/assets/tech/css.svg",
    },
    {
      id: 3,
      name: "JavaScript",
      designation: "",
      image: "/assets/tech/javascript.svg",
    },
    {
      id: 4,
      name: "TypeScript",
      designation: "",
      image: "/assets/tech/typescript.svg",
    },
    {
      id: 5,
      name: "Angular",
      designation: "",
      image: "/assets/tech/angular.svg",
    },
    {
      id: 6,
      name: "Bootstrap",
      designation: "",
      image: "/assets/tech/bootstrap.svg",
    },
    {
      id: 7,
      name: "Angular Material",
      designation: "",
      image: "/assets/tech/angular-material.svg",
    },
    {
      id: 8,
      name: "EmailJS",
      designation: "",
      image: "/assets/tech/emailjs.svg",
    },
    {
      id: 9,
      name: "Google Sheet API",
      designation: "",
      image: "/assets/tech/google-sheet.svg",
    },
  ];

  const geekTech = [
    {
      id: 1,
      name: "HTML",
      designation: "",
      image: "/assets/tech/html.svg",
    },
    {
      id: 2,
      name: "CSS",
      designation: "",
      image: "/assets/tech/css.svg",
    },
    {
      id: 3,
      name: "JavaScript",
      designation: "",
      image: "/assets/tech/javascript.svg",
    },
    {
      id: 4,
      name: "TypeScript",
      designation: "",
      image: "/assets/tech/typescript.svg",
    },
    {
      id: 5,
      name: "ReactJS",
      designation: "",
      image: "/assets/tech/react.svg",
    },
    {
      id: 6,
      name: "LESS",
      designation: "",
      image: "/assets/tech/less.svg",
    },
    {
      id: 7,
      name: "Ant Design",
      designation: "",
      image: "/assets/tech/antdesign.svg",
    },
    {
      id: 8,
      name: "ChartJS",
      designation: "",
      image: "/assets/tech/chartjs.svg",
    },
  ];
  return (
    <section id="work">
      <div className="mx-auto max-w-screen-lg px-4 lg:px-8 pb-8 pt-[20%] sm:pt-[10%] lg:pt-16 ">
        <div>
          <div className="relative shadow-[0_0_60px_#0003,0_30px_80px_#00000080] backdrop-filter-none outline outline-1 outline-offset-[-1px] outline-[#f2f2f226] bg-gradient-radial from-[#f2f2f233] to-transparent rounded-3xl p-2 overflow-hidden w-full h-fit">
            <div className="relative shadow-[0_0_60px_#0003,0_30px_80px_#00000080] backdrop-filter-none outline outline-1 outline-offset-[-1px] outline-[#f2f2f226] bg-gradient-radial from-[#f2f2f233] to-transparent rounded-3xl p-6 lg:p-8 overflow-hidden w-full h-fit bg-[#1a1a1a]">
              <div className="flex flex-col gap-6">
                <a
                  href="https://tapdoanvk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl lg:text-2xl font-bold flex gap-2 items-center"
                >
                  <svg
                    height="48"
                    width="48"
                    version="1.2"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffa133"
                    className="size-7 lg:size-8"
                  >
                    <title>image</title>
                    <defs>
                      <clipPath id="cp1">
                        <path d="m0 0h48v48h-48z" />
                      </clipPath>
                    </defs>
                    <g id="Clip-Path" clipPath="url(#cp1)">
                      <g id="Layer">
                        <path
                          className="s0"
                          id="Layer"
                          d="m24.6 26.8l10.1 21.2h8.4l-13-27.5z"
                        />
                        <path
                          className="s0"
                          id="Layer"
                          d="m0 27.3l7.7 20.7h8.5l-10.3-27.5z"
                        />
                        <path
                          className="s0"
                          id="Layer"
                          d="m37 12.6l-27.5 30.6v4.8h7.8l30.7-35.4z"
                        />
                        <path
                          className="s0"
                          id="Layer"
                          d="m18.7 4.9v43.1h8v-48h-1.3z"
                        />
                      </g>
                    </g>
                  </svg>
                  Tập đoàn công nghệ VK
                </a>
                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                  <Card className="bg-[#212121] border-white/[0.2] box-shadow-red-hover size-full flex-1">
                    <div className="flex flex-col justify-between h-full">
                      <div className="flex flex-col">
                        <a
                          href="https://vchatshop.vn/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="w-full relative overflow-hidden rounded-t-xl  ">
                            <img
                              src="/assets/images/vchatshop.png"
                              alt="Vchatshop"
                              className="w-full h-auto relative z-0 rounded-t-xl transition-all duration-300 hover:scale-110"
                            />
                          </div>
                        </a>
                        <CardHeader>
                          <CardTitle>
                            <div className="flex justify-between items-center">
                              <div>Vchatshop</div>
                              <a
                                href="https://vchatshop.vn/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-2 items-center text-shadow-hover"
                              >
                                <span>Live</span>
                                <span className="text-lg font-bold">↗</span>
                              </a>
                            </div>
                          </CardTitle>
                          <CardDescription>
                            VChatShop is a Vietnamese e-commerce platform
                            offering diverse products. The user-friendly site
                            supports brand partnerships and allows users to
                            manage their own stores.
                          </CardDescription>
                        </CardHeader>
                      </div>
                      <div className="flex flex-col">
                        <CardContent>
                          <div className="flex flex-row items-center w-full">
                            <AnimatedTooltip items={vchatshopTech} />
                          </div>
                        </CardContent>
                        <CardFooter>
                          <div className="flex justify-end w-full">
                            <a
                              href="#_"
                              onClick={(e) => ripple.create(e, "light")}
                              className="relative inline-flex items-center justify-center px-2 py-1 overflow-hidden font-medium text-yellow-600 transition duration-300 ease-out border-2 border-yellow-500 rounded-full shadow-md group"
                            >
                              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-500 group-hover:translate-x-0 ease">
                                <svg
                                  className="size-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                  ></path>
                                </svg>
                              </span>
                              <span className="absolute flex items-center text-sm font-normal justify-center w-full h-full text-yellow-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                                Learn more
                              </span>
                              <span className="relative text-sm font-normal invisible">
                                Learn more
                              </span>
                            </a>
                          </div>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-[#212121] border-white/[0.2] box-shadow-orange-hover flex-1">
                    <div className="flex flex-col justify-between h-full">
                      <div className="flex flex-col">
                        <a
                          href="https://tapdoanvk.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="w-full relative overflow-hidden rounded-t-xl  ">
                            <img
                              src="/assets/images/tapdoanvk.png"
                              alt="TapdoanVK"
                              className="w-full h-auto relative z-0 rounded-t-xl transition-all duration-300 hover:scale-110"
                            />
                          </div>
                        </a>

                        <CardHeader>
                          <CardTitle>
                            <div className="flex justify-between items-center">
                              <div>Tập đoàn VK</div>
                              <a
                                href="https://tapdoanvk.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-2 items-center text-shadow-hover"
                              >
                                <span>Live</span>
                                <span className="text-lg font-bold">↗</span>
                              </a>
                            </div>
                          </CardTitle>
                          <CardDescription>
                            Corporate website for Tập Đoàn Công Nghệ VK.
                          </CardDescription>
                        </CardHeader>
                      </div>
                      <div className="flex flex-col">
                        <CardContent>
                          <div className="flex flex-row items-center w-full">
                            <AnimatedTooltip items={vkTech} />
                          </div>
                        </CardContent>
                        <CardFooter>
                          <div className="flex justify-end w-full">
                            <a
                              href="#_"
                              onClick={(e) => ripple.create(e, "light")}
                              className="relative inline-flex items-center justify-center px-2 py-1 overflow-hidden font-medium text-yellow-600 transition duration-300 ease-out border-2 border-yellow-500 rounded-full shadow-md group"
                            >
                              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-500 group-hover:translate-x-0 ease">
                                <svg
                                  className="size-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                  ></path>
                                </svg>
                              </span>
                              <span className="absolute flex items-center text-sm font-normal justify-center w-full h-full text-yellow-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                                Learn more
                              </span>
                              <span className="relative text-sm font-normal invisible">
                                Learn more
                              </span>
                            </a>
                          </div>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shadow-[0_0_60px_#0003,0_30px_80px_#00000080] backdrop-filter-none outline outline-1 outline-offset-[-1px] outline-[#f2f2f226] bg-gradient-radial from-[#f2f2f233] to-transparent rounded-3xl p-2 overflow-hidden w-full h-fit">
            <div className="relative shadow-[0_0_60px_#0003,0_30px_80px_#00000080] backdrop-filter-none outline outline-1 outline-offset-[-1px] outline-[#f2f2f226] bg-gradient-radial from-[#f2f2f233] to-transparent rounded-3xl p-6 lg:p-8 overflow-hidden w-full h-fit bg-[#1a1a1a]">
              <div className="flex flex-col gap-6">
                <a
                  href="https://geekup.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl lg:text-2xl font-bold flex gap-2 items-center"
                >
                  <img
                    src="/assets/images/geekup.svg"
                    alt="Geekup"
                    className="w-28 h-8"
                  />
                </a>
                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                  <div className="flex-1 flex flex-col gap-4">
                    <h3 className="text-base ">
                      <span className="font-semibold">My role: </span>
                      <span className="text-slate-300">
                        Front-end Developer Intern
                      </span>
                    </h3>
                    <h3 className="text-base ">
                      <span className="font-semibold">Timeline: </span>
                      <span className="text-slate-300">02/2022 - 04/2022</span>
                    </h3>
                    <h3 className="text-base font-semibold">
                      Responsibilities:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-base font-normal text-slate-300">
                      <li>
                        Followed the Scrum process to gather and analyze
                        information from users and business stakeholders.
                      </li>
                      <li>
                        Collaborated with the design team to create UI/UX
                        interfaces from scratch using Figma and Draw.io.
                      </li>
                      <li>
                        Documented user pain points, use cases, flows, and
                        feature lists in English.
                      </li>
                      <li>
                        Developed a web application based on user and business
                        requirements using ReactJS, Less, Ant Design, and
                        ChartJS.
                      </li>
                      <li>
                        Worked closely with the back-end team to ensure seamless
                        front-end and back-end integration, contributing to the
                        project's overall success.
                      </li>
                    </ul>
                  </div>
                  <Card className="bg-[#212121] border-white/[0.2] box-shadow-green-hover size-full flex-1">
                    <div className="flex flex-col justify-between h-full">
                      <div className="flex flex-col">
                        <a
                          href="https://geekup.vn/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="w-full relative overflow-hidden rounded-t-xl  ">
                            <img
                              src="/assets/geekup.png"
                              alt="Vchatshop"
                              className="w-full h-auto relative z-0 rounded-t-xl transition-all duration-300 hover:scale-110"
                            />
                          </div>
                        </a>
                        <CardHeader>
                          <CardTitle>
                            <div className="flex justify-between items-center">
                              <div>O-Geek</div>
                            </div>
                          </CardTitle>
                          <CardDescription>
                            An internal web app for the company.
                          </CardDescription>
                        </CardHeader>
                      </div>
                      <div className="flex flex-col">
                        <CardContent>
                          <div className="flex flex-row items-center w-full">
                            <AnimatedTooltip items={geekTech} />
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

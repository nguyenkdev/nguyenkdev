"use client";
import React, { useState } from "react";
import { Pacifico } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { useRouter } from "next/navigation";

const pacifico = Pacifico({
  weight: "400",
  style: "normal",
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
  variable: "--font-pacifico",
});

export default function Navbar() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const locale = parts[0];
  const [active, setActive] = useState("/" + parts[1]);
  const router = useRouter();

  const handleClick = (path: string) => {
    setActive(path);
  };
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWorkClick = () => {
    if (pathname !== `/${locale}`) {
      router.push("/");
      setTimeout(() => {
        scrollToSection("work");
      }, 500);
    } else {
      scrollToSection("work");
    }
  };

  const handleContactClick = () => {
    if (pathname.includes("info") || pathname === `/${locale}`) {
      scrollToSection("contact");
    } else {
      router.push("/");
      scrollToSection("contact");
    }
  };

  return (
    <nav className="fixed top-0 flex w-full justify-between p-4 z-20">
      <div className={`${pacifico.variable} flex items-center`}>
        <Link
          href={"/"}
          onClick={(e) => {
            handleClick("/work");
          }}
          className="gold h-full pacifico text-2xl flex items-center"
        >
          <div className="hidden lg:block">NguyenkDev</div>
          <div className="block lg:hidden">N</div>
        </Link>
      </div>

      <div>
        <div className="nav-pill-wrapper flex flex-col justify-center w-[180px] h-[56px] relative">
          <motion.div
            className="nav-indicator-glow bg-[#f2f2f2] rounded-[2px] w-[24px] h-[4px] mb-[-2px] shadow-[0_2px_25px_2px_#fff]"
            initial={false}
            animate={{
              marginLeft: active === "/info" ? "121px" : "33px",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />

          <div className="nav-pill backdrop-blur-[15px] bg-[#f2f2f20d] border border-[#f2f2f21a] rounded-[24px] flex justify-between items-center w-[180px] h-[48px] px-[6px] relative shadow-[0_10px_25px_#00000026] transition-shadow duration-1000 ease-[cubic-bezier(.23,1,.32,1)] transition-border duration-[600ms] ease-[cubic-bezier(.165,.84,.44,1)] hover:bg-[#f2f2f214] hover:border-[#f2f2f233] hover:shadow-[0_15px_40px_#0000004d]">
            <Link
              href={`/${locale}`}
              onClick={(e) => {
                e.preventDefault();
                handleWorkClick();
                handleClick("/work");
              }}
              className="nav-toggle work w-inline-block text-[#f2f2f2] text-center rounded-[18px] flex justify-center items-center w-[80px] h-[36px] no-underline transition-all duration-200 ease-[cubic-bezier(.165,.84,.44,1)] hover:bg-gradient-to-l from-transparent to-[#f2f2f20d]"
            >
              <div className="text-nav-toggle">Work</div>
            </Link>
            <Link
              href={`/${locale}/info`}
              onClick={(e) => {
                handleClick("/info");
              }}
              className="nav-toggle w-inline-block text-[#f2f2f2] text-center rounded-[18px] flex justify-center items-center w-[80px] h-[36px] no-underline transition-all duration-200 ease-[cubic-bezier(.165,.84,.44,1)] hover:bg-gradient-to-r from-transparent to-[#f2f2f20d]"
            >
              <div className="text-nav-toggle">Info</div>
            </Link>

            <motion.div
              className="nav-indicator-pill absolute top-[5px] bg-[#f2f2f20d] rounded-[18px] w-[80px] h-[36px] z-[-1]"
              initial={false}
              animate={{
                left: active === "/info" ? "auto" : "6px",
                right: active === "/info" ? "6px" : "auto",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <Link href={`#contact`}>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className=" flex items-center space-x-2"
            onClick={(e) => {
              e.preventDefault();
              handleContactClick();
            }}
          >
            <span className="block lg:hidden m-0">
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-at size-6"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
              </svg>
            </span>
            <span className="hidden lg:block m-0">Contact me</span>
          </HoverBorderGradient>
        </Link>
      </div>
    </nav>
  );
}

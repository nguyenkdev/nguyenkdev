"use client";
import Link from "next/link";
import { ReactNode, useState } from "react";

const HoverArrowLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed top-4 left-6 lg:top-12 lg:left-12 z-20 backdrop-blur-[10px] bg-[#f2f2f226] border border-[#f2f2f20a] rounded-full self-center items-center px-6 py-2 text-on-background text-sm transition-all duration-400 ease-[cubic-bezier(.165,.84,.44,1)] flex no-underline gap-1 hover:bg-[#f2f2f233] hover:border-[#f2f2f21a]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`icon icon-tabler icons-tabler-outline icon-tabler-arrow-left transition-transform duration-400 ease-[cubic-bezier(.165,.84,.44,1)] ${
          isHovered ? "-translate-x-1" : ""
        }`}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l14 0" />
        <path d="M5 12l6 6" />
        <path d="M5 12l6 -6" />
      </svg>
      {children}
    </Link>
  );
};

export default HoverArrowLink;

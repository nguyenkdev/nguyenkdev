"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(theme == "light" ? true : false);
  const toggleSwitch = () => {
    setIsDarkMode((prev) => !prev);
    setTheme(theme == "light" ? "dark" : "light");
  };
  const className = `switch ${
    isDarkMode ? "bg-gray-300 justify-end" : "bg-gray-200 justify-start"
  }`;
  return (
    <motion.div
      className={`flex w-16 h-8 rounded-full p-1 cursor-pointer ${className}`}
      onClick={toggleSwitch}
    >
      <motion.div
        className={`w-6 h-6 rounded-full shadow-md flex justify-center items-center ${
          isDarkMode ? "bg-white" : "bg-gray-800"
        }`}
        layout
        transition={{ ease: "easeInOut" }}
      >
        {isDarkMode ? (
          <SunIcon className="w-3 h-3 text-gray-800" />
        ) : (
          <MoonIcon className="w-3 h-3 text-white" />
        )}
      </motion.div>
    </motion.div>
  );
}

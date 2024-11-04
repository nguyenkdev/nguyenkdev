"use client"; // Ensure this component is client-side rendered
import React, { useRef, useEffect } from "react";

interface LaptopMockupProps {
  link?: string; // Optional prop for the full-page link
}

const LaptopMockup: React.FC<LaptopMockupProps> = ({ link }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 4; // Adjust scroll speed here
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the interval ID

  const handleMouseEnter = () => {
    if (imageRef.current) {
      // Clear any existing intervals to prevent multiple intervals running
      clearInterval(intervalRef.current as NodeJS.Timeout);
      // Start a new scrolling interval
      intervalRef.current = setInterval(() => {
        if (imageRef.current) {
          const currentScroll = imageRef.current.scrollTop;
          const maxScroll = imageRef.current.scrollHeight - imageRef.current.clientHeight;
          // Scroll down until the bottom is reached
          if (currentScroll < maxScroll) {
            imageRef.current.scrollTop = currentScroll + scrollSpeed;
          } else {
            clearInterval(intervalRef.current as NodeJS.Timeout); // Stop when at the bottom
          }
        }
      }, 16); // About 60 FPS
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      // Reset scroll position to the top
      imageRef.current.scrollTop = 0;
    }
    // Clear interval on mouse leave
    clearInterval(intervalRef.current as NodeJS.Timeout);
  };

  useEffect(() => {
    return () => {
      // Clean up interval when the component unmounts
      clearInterval(intervalRef.current as NodeJS.Timeout);
    };
  }, []);

  return (
    <div className="">
      <div className="relative w-[300px] flex justify-center items-center">
        {/* Mockup Image Container */}
        <img
          src="/assets/macbook-mockup.png" // The laptop mockup image
          alt="Laptop Mockup"
          className="absolute left-0 right-0 w-full h-auto pointer-events-none" // Set pointer-events to none
        />
        {/* Scrollable container for the website screenshot */}
        <div
          ref={imageRef}
          className="w-[222px] h-[139px] overflow-hidden" // Ensure this is relative for absolute positioning
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Website Screenshot */}
          {link ? (
            <img
              src={link} // Use the link prop for the image source
              alt="Website Screenshot"
              className="h-auto w-full" // Maintain aspect ratio
            />
          ) : (
            <div className="flex justify-center items-center w-full h-full bg-gray-300 text-gray-600">
              No Image Available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LaptopMockup;

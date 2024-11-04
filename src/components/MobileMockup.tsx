"use client"; // Ensure this component is client-side rendered
import React, { useRef, useEffect } from "react";

interface MobileMockupProps {
  link?: string; // Optional prop for the full-page link
}

const MobileMockup: React.FC<MobileMockupProps> = ({ link }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 4; // Scroll speed
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the interval ID

  const handleMouseEnter = () => {
    if (imageRef.current) {
      clearInterval(intervalRef.current as NodeJS.Timeout);
      intervalRef.current = setInterval(() => {
        if (imageRef.current) {
          const currentScroll = imageRef.current.scrollTop;
          const maxScroll =
            imageRef.current.scrollHeight - imageRef.current.clientHeight;
          if (currentScroll < maxScroll) {
            imageRef.current.scrollTop = currentScroll + scrollSpeed;
          } else {
            clearInterval(intervalRef.current as NodeJS.Timeout);
          }
        }
      }, 16); // About 60 FPS
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.scrollTop = 0; // Reset scroll position to the top
    }
    clearInterval(intervalRef.current as NodeJS.Timeout);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current as NodeJS.Timeout); // Clean up interval when the component unmounts
    };
  }, []);

  return (
    <div className="">
      <div className="relative w-[100px] flex justify-center items-center">
        {/* Mockup Image Container */}
        <img
          src="/assets/iphone-mockup.png" // The mobile mockup image
          alt="Mobile Mockup"
          loading="lazy"
          className="absolute left-0 right-0 w-full h-auto pointer-events-none" // Set pointer-events to none for the mockup
        />
        {/* Scrollable container for the mobile website screenshot */}
        <div
          ref={imageRef}
          className="w-[88px] h-[192px] overflow-hidden rounded"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Mobile Website Screenshot */}
          {link ? (
            <img
              src={link} // Use the link prop for the image source
              alt="Mobile Website Screenshot"
              loading="lazy"
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

export default MobileMockup;

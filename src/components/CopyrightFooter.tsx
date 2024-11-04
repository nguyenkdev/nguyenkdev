import React from "react";

const CopyrightFooter: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="text-center p-4">
      <p className="text-sm">
        © {currentYear} NguyenkDev. All rights reserved.
      </p>
    </footer>
  );
};

export default CopyrightFooter;

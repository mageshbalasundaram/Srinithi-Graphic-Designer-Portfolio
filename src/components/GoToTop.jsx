// GoToTop.jsx
import React, { useState, useEffect } from "react";

const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-1 rounded-full bg-transparent text-white hover:shadow-lg  transition z-1000"
        >
          <svg width="40" height="40" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 21C7.8 21 4 17.2 4 12.5C4 7.8 7.8 4 12.5 4C17.2 4 21 7.8 21 12.5C21 17.2 17.2 21 12.5 21ZM12.5 5C8.35 5 5 8.35 5 12.5C5 16.65 8.35 20 12.5 20C16.65 20 20 16.65 20 12.5C20 8.35 16.65 5 12.5 5Z" fill="white" />
            <path d="M16.6504 13.35L12.5004 9.20005L8.35039 13.35L7.65039 12.65L12.5004 7.80005L17.3504 12.65L16.6504 13.35Z" fill="white" />
            <path d="M12 8.5H13V17H12V8.5Z" fill="white" />
          </svg>

        </button>
      )}
    </>
  );
};

export default GoToTop;

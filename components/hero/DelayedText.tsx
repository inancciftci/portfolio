"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface DelayedTextProps {
  text: string;
  typingSpeed?: number;
  cursorBlinkSpeed?: number;
  className?: string;
}

const DelayedText: React.FC<DelayedTextProps> = ({
  text = "React/Next.js Developer",
  typingSpeed = 100,
  cursorBlinkSpeed = 500,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, typingSpeed]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(interval);
  }, [cursorBlinkSpeed]);

  return (
    <div
      className={` font-mono text-2xl my-4 flex justify-center items-center ${className}`}
    >
      <motion.span
        className="font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedText.includes("Developer") ? (
          <>
            {displayedText.replace("Developer", "")}
            <span className="font-bold text-blue-600">Developer</span>
          </>
        ) : (
          displayedText
        )}
      </motion.span>
      <span
        className="text-2xl font-bold text-blue-600"
        style={{ opacity: cursorVisible ? 1 : 0 }}
      >
        |
      </span>
    </div>
  );
};

export default DelayedText;

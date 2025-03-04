import React from "react";
import DelayedText from "./DelayedText";

const Hero = () => {
  return (
    <>
      <div className="container py-6 mx-auto">
        <div className="flex items-center justify-center min-h-[85vh]">
          <div className="flex flex-col justify-center ">
            <span>Hello, I&apos;m Inanc. A Passionate Software Engineer</span>
            <DelayedText text="React/Next.js Developer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

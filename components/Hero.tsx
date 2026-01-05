import { ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col justify-center items-center py-16">
      {/* Linear Glow */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-4xl h-40 opacity-50 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-red-500/50 via-red-500/60 to-red-500/50 blur-[80px] rounded-xl mix-blend-screen" />
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Badge */}
        <Badge className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs text-red-400 font-it-weralionis tracking-wide">
          <span className="font-semibold uppercase">Important</span>
          <span className="opacity-90">React2Shell Security Advisory</span>
          <span className="flex items-center ml-1 opacity-70 gap-0.5">
            Learn more <ChevronRight size={14} />
          </span>
          <span className="opacity-80 ml-2">Start with HTML, CSS & JS!</span>
        </Badge>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-it-weralionis tracking-tight text-white mb-4">
          Learn Web Development
          <br />
          <span className="text-red-400">Step by Step</span>
        </h1>

        {/* Minimal Description */}
        <p className="max-w-xl text-lg md:text-xl text-gray-400 leading-relaxed mx-auto">
          Begin with <span className="text-white font-it-weralionis">HTML</span>,{" "}
          <span className="text-white font-it-weralionis">CSS</span>, and{" "}
          <span className="text-white font-it-weralionis">JavaScript</span> — the
          essentials for building real websites.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <Button className="flex items-center rounded-full bg-white py-3 px-5 text-md font-medium text-black hover:bg-gray-200 transition-colors font-it-weralionis tracking-wide">
            Start Learning ⚡
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
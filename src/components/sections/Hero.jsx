import React from "react";
import { ChevronDown, Star, Mail } from "lucide-react";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

import { PERSONAL_INFO, SOCIAL_LINKS, STATS } from "../../utils/constants";
import FadeIn from "../animations/FadeIn";
import { scrollToSection } from "../../hooks/useScrollSpy";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const Hero = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="relative min-h-screen flex items-center bg-slate-50 text-gray-900 dark:bg-black dark:text-white overflow-hidden">
      <RadialGradientBackground variant="hero" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

          {/* LEFT SIDE */}
          <div className="flex-1 text-left">

            <FadeIn delay={0}>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                Hi, I’m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-indigo-500 to-blue-500 font-bold">
                  Surenthiran Sathurjan
                </span>
              </h2>
            </FadeIn>

            {/* TITLE */}
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-6xl font-black mb-6">
                
                <span className="bg-gradient-to-r font-serif from-primary via-indigo-500 to-blue-500 text-transparent bg-clip-text ">
                  Software
                </span>

                {" "}

                <span className="text-black font-serif [text-shadow:2px_2px_0_purple,-2px_-2px_0_purple,2px_-2px_0_purple,-2px_2px_0_purple]">
                  Engineer
                </span>

              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-gray-600 dark:text-white/70 text-lg max-w-xl mb-8">
                I am a passionate Software Engineer focused on building clean,
                scalable and modern applications with great UI/UX.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="flex items-center gap-6 flex-wrap">

               <button
                  onClick={() => scrollToSection("contact")}
                  className="relative px-6 py-3 font-semibold rounded-lg
                            bg-gradient-to-r from-purple-500/20 via-indigo-500/10 to-blue-500/20
                            border border-purple-400/30
                            text-gray-900 dark:text-white/90
                            transition-all duration-300
                            hover:scale-105 hover:text-primary
                            hover:border-primary
                            hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]
                            group overflow-hidden"
                >
                  {/* animated glow layer */}
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500
                                  opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"></span>

                  {/* subtle moving shine */}
                  <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%]
                                  transition-transform duration-700 bg-white/10 skew-x-12"></span>

                  <span className="relative z-10">
                    Get in Touch
                  </span>
                </button>

                <div className="flex items-center gap-4">

                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="relative p-3 rounded-lg bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 hover:border-primary hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-300 group"
                  >
                    <FaLinkedin className="w-5 h-5 text-gray-600 dark:text-white/70 group-hover:text-primary" />
                  </a>

                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noreferrer"
                    className="relative p-3 rounded-lg bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 hover:border-primary hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-300 group"
                  >
                    <FaGithub className="w-5 h-5 text-gray-600 dark:text-white/70 group-hover:text-primary" />
                  </a>

                  <a
                    href={SOCIAL_LINKS.email}
                    className="relative p-3 rounded-lg bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 hover:border-primary hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-300 group"
                  >
                    <Mail className="w-5 h-5 text-gray-600 dark:text-white/70 group-hover:text-primary" />
                  </a>

                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="relative p-3 rounded-lg bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 hover:border-primary hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-300 group"
                  >
                    <FaFacebook className="w-5 h-5 text-gray-600 dark:text-white/70 group-hover:text-primary" />
                  </a>

                </div>

              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                {STATS.map((stat, i) => (
                  <div
                    key={i}
                    className="border-r border-black/20 dark:border-white/20 pr-4 last:border-none"
                  >
                    <div className="text-2xl text-primary font-mono">
                      {stat.value}
                    </div>
                    <p className="text-gray-600 dark:text-white/70 text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

          </div>

          {/* RIGHT IMAGE */}
          <FadeIn delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] max-w-[320px] ml-auto group">

                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-[-8px] bg-gradient-to-r from-pink-600 via-purple-500 to-pink-400 animate-spin-slow rounded-2xl opacity-100"></div>
                </div>

                <div className="relative rounded-2xl overflow-hidden m-[2px] h-[calc(100%-4px)]">
                  <img
                    src={`${baseUrl}assets/portait_photo.png`}
                    alt="Developer"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>
          </FadeIn>

        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;

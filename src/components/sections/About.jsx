import React from "react";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import FadeIn from "../animations/FadeIn";
import { ABOUT_STATS, PERSONAL_INFO } from "../../utils/constants";
import { Download, Code2, Sparkles } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

const About = () => {
  const skills = [
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen py-0 bg-slate-50 text-gray-900 dark:bg-black dark:text-white overflow-hidden flex items-center"
    >
      <RadialGradientBackground variant="about" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">

        {/* MAIN GRID */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

          {/* LEFT SIDE */}
          <div className="flex-1 flex flex-col gap-10">

            <FadeIn delay={60}>
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit">
                <Code2 className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">
                  Full-Stack Developer
                </span>
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 dark:text-white leading-tight">
                Crafting digital experiences that matter
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="flex flex-col gap-4 max-w-xl">
                {PERSONAL_INFO.bio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base text-gray-600 dark:text-white/70 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>

            {/* STATS  */}
            {/* <FadeIn delay={300}>
              <div className="grid grid-cols-3 gap-8">
                {ABOUT_STATS.map((stat, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-primary/20 rounded-full"></div>

                    <div className="text-3xl font-normal text-white mb-2 font-mono">
                      {stat.value}
                    </div>

                    <p className="text-sm text-white/60 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn> */}

           <FadeIn delay={400}>
            <button
              onClick={() => window.open(PERSONAL_INFO.resume, "_blank")}
              className="relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-medium
                        bg-gradient-to-r from-purple-500/20 via-indigo-500/10 to-blue-500/20
                        border border-purple-400/30
                        text-gray-900 dark:text-white
                        transition-all duration-300
                        hover:scale-105
                        hover:border-primary
                        hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]
                        group overflow-hidden"
            >
              
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500
                              opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"></span>

              
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%]
                              transition-transform duration-700 bg-white/10 skew-x-12"></span>

              
              <Download className="w-5 h-5 relative z-10 group-hover:translate-y-0.5 transition-transform duration-300" />

              <span className="relative z-10">
                Download Resume
              </span>
            </button>
          </FadeIn>

          </div>

          {/* RIGHT SIDE */}
       <FadeIn delay={200}>
          <div className="grid grid-cols-2 gap-4 max-w-[340px]">

            {/* Top card */}
            <div className="col-span-2 relative group animate-[float_2s_ease-in-out_infinite]">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>

              <div className="relative bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Expertise
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-white/70 leading-relaxed">
                      Building scalable web applications with modern technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Clean Code */}
            <div className="bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 rounded-2xl p-6 animate-[float_3s_ease-in-out_infinite] hover:scale-105 transition-all duration-300">
              <Sparkles className="w-5 h-5 text-primary mb-4" />
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                Clean Code
              </h3>
              <p className="text-sm text-gray-600 dark:text-white/70">
                Maintainable and scalable code structure.
              </p>
            </div>

            {/* Performance */}
            <div className="bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 rounded-2xl p-6 animate-[float_4s_ease-in-out_infinite] hover:scale-105 transition-all duration-300">
              <Download className="w-5 h-5 text-primary mb-4" />
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                Performance
              </h3>
              <p className="text-sm text-gray-600 dark:text-white/70">
                Optimized for speed and efficiency.
              </p>
            </div>

            {/* Bottom stats */}
            <div className="col-span-2 bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 rounded-2xl p-6 animate-[float_2.5s_ease-in-out_infinite] hover:scale-105 transition-all duration-300">
              <div className="grid grid-cols-3 text-center">
                <div>
                  <div className="text-xl font-bold text-primary">100%</div>
                  <div className="text-xs text-gray-500 dark:text-white/60">Clients</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-primary">24/7</div>
                  <div className="text-xs text-gray-500 dark:text-white/60">Support</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-primary">Fast</div>
                  <div className="text-xs text-gray-500 dark:text-white/60">Delivery</div>
                </div>
              </div>
            </div>

          </div>
        </FadeIn>
        </div>

        {/* SKILLS */}
        <FadeIn delay={500}>
          <div className="flex flex-col items-center gap-8 mt-20 pb-16">
            <div className="text-center">
              <h3 className="text-2xl font-normal text-gray-900 dark:text-white mb-2">
                Tech Stack & Expertise
              </h3>
              <p className="text-sm text-gray-500 dark:text-white/60">
                Technologies I work with to build amazing products.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative bg-black/5 hover:bg-black/10 border border-black/10 hover:border-primary/50 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
                >
                  <skill.icon className="w-8 h-8 text-primary" />
                  <div className="text-sm text-gray-700 dark:text-white/80 font-medium text-center">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default About;

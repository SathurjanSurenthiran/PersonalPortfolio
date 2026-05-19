import React, { useState } from "react";
import { projects, categories } from "../../data/projects";
import {
  Briefcase,
  Target,
  Globe,
  Palette,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import FadeIn from "../animations/FadeIn";
import { scrollToSection } from "../../hooks/useScrollSpy";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const visibleCards = 3;
  const maxIndex = Math.max(0, filteredProjects.length - visibleCards);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
  };

  const categoryIcons = {
    All: Target,
    "Web Apps": Globe,
    "UI Components": Palette,
    "Full Stack": Zap,
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center bg-slate-50 text-gray-900 dark:bg-black dark:text-white overflow-hidden scroll-mt-24"
    >
      {/* Background */}
      <RadialGradientBackground variant="projects" />

      {/* Floating Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />

        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">

        {/* HEADER */}
        <FadeIn>
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                         border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5 backdrop-blur-md
                         mb-6 hover:scale-105 transition-all duration-300"
            >
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm text-gray-700 dark:text-white/80 font-medium">
                My Work
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>

            <p className="text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
              Showcasing my best work, problem-solving skills, and modern
              full-stack development experience.
            </p>

            {/* CTA Button */}
           <button
              onClick={() => scrollToSection("contact")}
              className="group relative mt-8 px-8 py-3 rounded-full
                        border border-primary/30
                        bg-primary/10 backdrop-blur-md
                        hover:bg-primary hover:text-white
                        hover:scale-105 hover:-translate-y-1
                        transition-all duration-300
                        shadow-lg hover:shadow-primary/30
                        font-medium overflow-hidden
                        animate-[float_2s_ease-in-out_infinite]"
            >
            
              <span className="absolute inset-0 rounded-full border border-primary/40 opacity-40 group-hover:opacity-100 transition-all duration-300"></span>

              
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                              bg-gradient-to-r from-transparent via-white/15 to-transparent
                              skew-x-12 transition-transform duration-700"></span>

              
              <span className="absolute inset-0 bg-primary/10 blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500"></span>

              <span className="relative flex items-center gap-2 z-10">
                Let’s Work Together
                <span className="group-hover:translate-y-1 transition-transform duration-300">
                  ↓
                </span>
              </span>

              <style>{`
                @keyframes float {
                  0% { transform: translateY(0px); }
                  50% { transform: translateY(-4px); }
                  100% { transform: translateY(0px); }
                }@
              `}</style>
            </button>
          </div>
        </FadeIn>

        {/* CATEGORY FILTER */}
        <FadeIn delay={100}>
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {categories.map((category, index) => {
              const Icon = categoryIcons[category];

              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-full
                              backdrop-blur-md border
                              transition-all duration-300
                              hover:scale-105 hover:-translate-y-1
                              ${
                                activeCategory === category
                                  ? "bg-purple-600 text-white border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.35)] dark:bg-purple-950"
                                  : "bg-purple-100 text-purple-700 border-purple-200 hover:text-purple-900 hover:bg-purple-200/60 hover:border-purple-400 dark:bg-purple-950/40 dark:text-white/70 dark:border-purple-950/40 dark:hover:text-white dark:hover:bg-purple-900/60 dark:hover:border-purple-400"
                              }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
              
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                                  bg-gradient-to-r from-transparent via-white/15 to-transparent
                                  skew-x-12 transition-transform duration-700"></span>
                 
                  {activeCategory === category && (
                    <span className="absolute inset-0 bg-purple-500/10 blur-xl"></span>
                  )}
          
                  {Icon && (
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  )}

                  <span className="font-medium relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* PROJECTS */}
        <div className="relative">
          {/* Left Arrow */}
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20
                         p-3 rounded-full
                         bg-black/10 border border-black/10 dark:bg-white/10 dark:border-white/10
                         backdrop-blur-md
                         hover:bg-primary/20 hover:border-primary/30
                         hover:scale-110
                         transition-all duration-300
                         shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Right Arrow */}
          {currentIndex < maxIndex && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20
                         p-3 rounded-full
                         bg-black/10 border border-black/10 dark:bg-white/10 dark:border-white/10
                         backdrop-blur-md
                         hover:bg-primary/20 hover:border-primary/30
                         hover:scale-110
                         transition-all duration-300
                         shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* PROJECT CARDS */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 374}px)`,
              }}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* DOT NAVIGATION */}
          <div className="flex justify-center items-center gap-3 mt-8 pb-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`h-2 rounded-full transition-all duration-300
                            hover:scale-125
                            ${
                              currentIndex === index
                                ? "w-8 bg-primary shadow-lg shadow-primary/30"
                                : "w-2 bg-black/20 hover:bg-black/30 dark:bg-white/30 dark:hover:bg-white/50"
                            }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import FadeIn from "../animations/FadeIn";

const ProjectCard = ({ project, index }) => {
  return (
    <FadeIn delay={index * 100}>
      <div
        className="min-w-[350px] w-[350px] h-[520px]
                   bg-black/5 border border-black/10 text-gray-900 dark:bg-white/5 dark:border-white/10 dark:text-white rounded-2xl
                   backdrop-blur-md overflow-hidden flex flex-col
                   transition-all duration-500
                   hover:-translate-y-3 hover:scale-[1.03]
                   hover:border-primary/40
                   hover:shadow-2xl hover:shadow-primary/20
                   group"
      >
        {/* IMAGE */}
        <div className="h-52 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover
                       transition-transform duration-700
                       group-hover:scale-110"
          />
        </div>

        {/* CONTENT */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition duration-300">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-white/60 text-sm flex-1">
            {project.description}
          </p>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-2 my-4">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full font-medium
                           bg-gradient-to-r from-indigo-500/20 to-purple-500/20
                           text-indigo-200 border border-indigo-400/20
                           hover:scale-110 hover:-translate-y-0.5
                           transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-sm text-primary font-medium mt-auto">
            {project.metrics}
          </p>
        </div>
      </div>
    </FadeIn>
  );
};

export default ProjectCard;

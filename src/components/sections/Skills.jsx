import React from "react";
import { skills } from "../../data/skills";
import * as Icons from "lucide-react";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const Skills = () => {
  const skillCategories = {
    "Frontend Development": [
      skills.find((s) => s.name === "React.js"),
      skills.find((s) => s.name === "JavaScript"),
      skills.find((s) => s.name === "Tailwind CSS"),
      skills.find((s) => s.name === "HTML5"),
      skills.find((s) => s.name === "CSS"),
    ].filter(Boolean),

    "Backend & APIs": [
      skills.find((s) => s.name === "Node.js"),
      skills.find((s) => s.name === "Java"),
      skills.find((s) => s.name === "Spring Boot"),
      skills.find((s) => s.name === "C++"),
      skills.find((s) => s.name === "REST APIs"),
    ].filter(Boolean),

    "Tools & Others": [
      skills.find((s) => s.name === "MySQL"),
      skills.find((s) => s.name === "MongoDB"),
      skills.find((s) => s.name === "Git & GitHub"),
      skills.find((s) => s.name === "Postman"),
      skills.find((s) => s.name === "Figma"),
      skills.find((s) => s.name === "React Native"),
    ].filter(Boolean),
  };

  const getProficiencyLevel = (level) => {
    const levels = {
      Expert: 95,
      Advanced: 80,
      Intermediate: 65,
    };

    return levels[level] || 50;
  };

  const getLevelColor = (level) => {
    const colors = {
      Expert: "text-primary bg-primary/10 border-primary/30",
      Advanced: "text-blue-400 bg-blue-500/10 border-blue-500/30",
      Intermediate: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    };

    return (
      colors[level] || "text-gray-400 bg-gray-500/10 border-gray-500/30"
    );
  };

  const skillIconMap = {
    "React.js": Icons.Braces,
    JavaScript: Icons.FileCode,
    "Tailwind CSS": Icons.Wind,
    HTML5: Icons.Globe,
    CSS: Icons.Paintbrush,

    "Node.js": Icons.Server,
    Java: Icons.Coffee,
    "Spring Boot": Icons.Sprout,
    "C++": Icons.Code,
    "REST APIs": Icons.Link2,

    MySQL: Icons.Database,
    MongoDB: Icons.Database,
    "Git & GitHub": Icons.GitBranch,
    Postman: Icons.Send,
    Figma: Icons.Palette,
    "React Native": Icons.Smartphone,
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen py-0 bg-slate-50 text-gray-900 dark:bg-black dark:text-white overflow-hidden flex items-center"
    >
      <RadialGradientBackground variant="skills" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full pb-12">

        <FadeIn delay={100}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6 backdrop-blur-sm">
              <Icons.Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                My Expertise
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>

            <p className="text-lg text-gray-500 dark:text-white/60 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {Object.entries(skillCategories).map(
            ([category, categorySkills], categoryIndex) => (
              <FadeIn key={category} delay={categoryIndex * 100}>
                <div className="relative h-full min-h-[620px]
                                bg-black/5 backdrop-blur-md border border-black/10 dark:bg-white/5 dark:border-white/10
                                rounded-2xl p-6 hover:border-primary/30
                                transition-all duration-300 group
                                hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10
                                flex flex-col">

                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-black/10 dark:border-white/10">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/20 rounded-full"></div>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                      {category}
                    </h3>
                  </div>

                  <div className="space-y-6 flex-1">
                    {categorySkills.map((skill) => {
                      const IconComponent =
                        skillIconMap[skill.name] || Icons.Code;

                      const proficiency =
                        getProficiencyLevel(skill.level);

                      return (
                        <div key={skill.id || skill.name} className="space-y-3">

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-black/5 rounded-lg border border-black/10 dark:bg-white/5 dark:border-white/10">
                                
                                <IconComponent className="w-4 h-4 text-primary" />
                              </div>

                              <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                                {skill.name}
                              </h4>
                            </div>

                            <span
                              className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(
                                skill.level
                              )}`}
                            >
                              {skill.level}
                            </span>
                          </div>

                          <div className="relative h-1.5 bg-black/10 dark:bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="absolute top-0 left-0 h-full
                                         bg-gradient-to-r from-primary/20 to-primary
                                         rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${proficiency}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="absolute inset-0 rounded-2xl
                                 bg-gradient-to-br from-primary/0 to-primary/0
                                 group-hover:from-primary/5 group-hover:to-primary/10
                                 transition-all duration-300 pointer-events-none" />
                </div>
              </FadeIn>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;

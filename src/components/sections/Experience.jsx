import React from "react";
import { MapPin, GraduationCap } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import kelaniya from '../../assets/logos/kelaniya.webp';
import school from '../../assets/logos/school.jpeg';

const Experience = () => {
  const education = [
    {
      id: 1,
      title: "BSc (Hons) Software Engineering",
      institution: "University of Kelaniya",
      location: "Kelaniya, Sri Lanka",
      year: "2023 - Present",
      gpa: "GPA: 3.358",
      description:
        "Currently pursuing Software Engineering with focus on full-stack development, software architecture, and modern web technologies.",
      logo: kelaniya,
    },
    {
      id: 2,
      title: "Physical Science",
      institution: "J/ Uduppidy American Mission College",
      location: "Jaffna, Sri Lanka",
      year: "Completed 2022",
      gpa: "Z-Score: 1.573",
      subjects: "Mathematics, Physics, Chemistry",
      description:
        "Completed Advanced Level education in Physical Science stream with strong academic performance and leadership experience.",
      logo: school,
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center bg-slate-50 text-gray-900 dark:bg-black dark:text-white overflow-hidden scroll-mt-24"
    >
      <RadialGradientBackground variant="experience" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">

        {/* Header */}
        <FadeIn delay={100}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <GraduationCap className="w-4 h-4 text-primary" />

              <span className="text-sm text-primary font-medium">
                Education
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 dark:text-white mb-3">
              Academic Background
            </h2>

            <p className="text-lg text-gray-500 dark:text-white/60 max-w-2xl mx-auto">
              My educational journey and academic achievements
            </p>
          </div>
        </FadeIn>

        {/* Education Cards */}
        <div className="flex flex-col gap-6 max-w-5xl mx-auto pb-16">
          {education.map((item, index) => {
            return (
              <FadeIn key={item.id} delay={index * 120}>
                <div
                  className="relative group bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10
                             rounded-2xl p-6 hover:border-primary/30
                             transition-all duration-300"
                >
                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 rounded-2xl
                               bg-gradient-to-br from-primary/0 to-primary/0
                               group-hover:from-primary/10 group-hover:to-primary/5
                               blur-xl transition-all duration-300"
                  />

                  <div className="relative z-10 flex gap-4">

                    {/* Logo Image */}
                    <div className="shrink-0">
                      <img
                        src={item.logo}
                        alt={item.institution}
                        className="w-30 h-30 rounded-full object-cover border-2 border-primary/20 shadow-lg"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">

                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-500 dark:text-white/60 mb-2">
                        {item.institution}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-white/50 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>

                        <div>{item.year}</div>
                      </div>

                      {/* GPA / Z-score */}
                      <p className="text-sm text-primary font-medium mb-2">
                        {item.gpa}
                      </p>

                      {/* Subjects */}
                      {item.subjects && (
                        <p className="text-sm text-gray-600 dark:text-white/70 mb-2">
                          <span className="font-medium text-gray-900 dark:text-white">
                            Subjects:
                          </span>{" "}
                          {item.subjects}
                        </p>
                      )}

                      <p className="text-sm text-gray-600 dark:text-white/70 leading-relaxed">
                        {item.description}
                      </p>

                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;

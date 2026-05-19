import React from "react";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { PERSONAL_INFO } from "../../utils/constants";
import FadeIn from "../animations/FadeIn";

const Footer = () => {
  const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    facebook: FaFacebook,
  };

  const socialLinks = {
    linkedin: "https://linkedin.com/",
    github: "https://github.com/",
    facebook: "https://facebook.com/",
  };

  return (
    <footer
      className="relative bg-slate-50 border-t border-black/10 dark:bg-black dark:border-white/10 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl" />
      </div>

      <FadeIn delay={200}>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6 w-full">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* LEFT SIDE */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-gray-600 dark:text-white/70 text-sm">

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                {PERSONAL_INFO.email}
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                {PERSONAL_INFO.location}
              </div>

            </div>

            {/* CENTER */}
            <div className="text-center text-gray-500 dark:text-white/40 text-sm">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </div>

            {/* RIGHT SIDE - SOCIAL ICONS */}
            <div className="flex gap-4">
              {Object.entries(socialIcons).map(([key, Icon]) => (
                <a
                  key={key}
                  href={socialLinks[key]}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    relative p-3 rounded-lg
                    bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10
                    transition-all duration-300
                    hover:bg-primary/10 hover:border-primary
                    hover:scale-110
                    hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]
                    group
                  "
                >
                  {/* Glow Effect */}
                  <span className="absolute inset-0 rounded-lg bg-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300 animate-pulse" />

                  {/* Icon */}
                  <Icon className="relative w-4 h-4 text-gray-600 dark:text-white/70 group-hover:text-primary transition-colors duration-300" />
                </a>
              ))}
            </div>

          </div>
        </div>
      </FadeIn>
    </footer>
  );
};

export default Footer;

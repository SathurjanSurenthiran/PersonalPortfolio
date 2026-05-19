import { useEffect, useState } from "react";

export const useScrollSpy = (sectionIds, offset = 100) => {
  /* Default active section = Home */
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      /* If page is at top → keep Home active */
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      /* Find current section */
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }

      /* Fallback */
      setActiveSection("home");
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};

/* Smooth scroll to a section */
export const scrollToSection = (sectionId, offset = 90) => {
  /* Home click → scroll to top */
  if (sectionId === "home") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  }

  const section = document.getElementById(sectionId);

  if (section) {
    const top = section.offsetTop - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
};
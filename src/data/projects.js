const baseUrl = import.meta.env.BASE_URL;

export const projects = [
  {
    id: 1,
    title: "Clothing E-commerce Website",
    description:
      "Modern online clothing store with product browsing, shopping cart, secure checkout, and responsive user experience.",
    image: `${baseUrl}assets/projects/cloths.webp`,
    category: "Full Stack",
    technologies: ["React", "Node.js", "MySQL", "Stripe"],
    metrics: "Improved customer shopping experience",
  },

  {
    id: 2,
    title: "Handcraft Products E-commerce Website",
    description:
      "Online marketplace for handmade products with product management, order tracking, and secure payment integration.",
    image: `${baseUrl}assets/projects/handcraft.webp`,
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    metrics: "Enhanced product visibility and sales",
  },

  {
    id: 3,
    title: "Book Fair Reservation System",
    description:
      "Web-based booking system for reserving book fair stalls and visitor slots with schedule management and admin control.",
    image: `${baseUrl}assets/projects/bookfair.webp`,
    category: "Web Apps",
    technologies: ["React", "PHP", "MySQL", "Bootstrap"],
    metrics: "Simplified reservation and event management",
  },

  {
    id: 4,
    title: "Notes Taking App",
    description:
      "Simple and efficient note-taking application with create, edit, delete, and organize features for daily productivity.",
    image: `${baseUrl}assets/projects/notes.webp`,
    category: "UI Components",
    technologies: ["React", "JavaScript", "Local Storage", "Tailwind CSS"],
    metrics: "Improved personal productivity workflow",
  },

  {
    id: 5,
    title: "Student Management System",
    description:
      "Management system for handling student records, attendance, results, and academic details with admin dashboard support.",
    image: `${baseUrl}assets/projects/studentmanage.jpg`,
    category: "Full Stack",
    technologies: ["Java", "Spring Boot", "MySQL", "React"],
    metrics: "Streamlined academic record management",
  },

  {
    id: 6,
    title: "Calculator App",
    description:
      "Modern calculator application with basic arithmetic operations, clean UI design, and responsive functionality for daily use.",
    image: `${baseUrl}assets/projects/calculater.webp`,
    category: "UI Components",
    technologies: ["React", "JavaScript", "CSS", "Tailwind CSS"],
    metrics: "Improved fast and accurate calculations",
  },
];

export const categories = [
  "All",
  "Full Stack",
  "Web Apps",
  "UI Components",
];
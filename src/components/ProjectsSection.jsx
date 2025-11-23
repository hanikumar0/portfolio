import React from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CartWise – Smart Cart System",
    description:
      "A modern shopping cart web app with product management and smart features.",
    image: "/projects/cartwise.png",
    tags: ["React", "Firebase", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/cartwise",
  },
  {
    id: 2,
    title: "ATS Checker Tool",
    description:
      "Automated ATS resume checking tool with high accuracy and clean UI.",
    image: "/projects/ats-checker.png",
    tags: ["Node.js", "React", "Gemini API"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/ATS-checker",
  },
  {
    id: 3,
    title: "ChatGPT Bot – Main",
    description:
      "AI-powered chatbot integrated with LLM APIs for real-time conversations.",
    image: "/projects/bot-main.png",
    tags: ["JavaScript", "AI API", "Express"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/bot-main",
  },
  {
    id: 4,
    title: "Medical Data Extraction",
    description:
      "PDF medical data extractor using AI + OCR for structured output.",
    image: "/projects/medical.png",
    tags: ["Python", "OCR", "Streamlit"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/medical-data-extraction",
  },
  {
    id: 5,
    title: "Real-Time Chat App",
    description:
      "Fast and secure real‑time chat application with socket.io.",
    image: "/projects/chat.png",
    tags: ["Node.js", "Socket.io", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/Real-Time-Chat-Application",
  },
  {
    id: 6,
    title: "LifeLinkr – Health UI",
    description:
      "Beautiful health tracking UI built with modern design principles.",
    image: "/projects/lifelinkr.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/lifelinkr",
  },
  {
    id: 7,
    title: "Meal Finder App",
    description:
      "Quick meal recipe finder using API search functionality.",
    image: "/projects/meal-finder.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/Meal-finder",
  },
  {
    id: 8,
    title: "Connect Fusion AI",
    description:
      "AI-powered platform to connect ideas and automate workflows.",
    image: "/projects/connect-fusion.png",
    tags: ["React", "Node.js", "AI"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/connect-fusion-ai",
  },
  {
    id: 9,
    title: "Startup Connect Landing Page",
    description:
      "A clean and responsive landing page for startup promotion.",
    image: "/projects/startup-connect.png",
    tags: ["HTML", "CSS", "JS"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/Landing-page-for-startup-connect",
  },
  {
    id: 10,
    title: "AWS Quiz Portal",
    description:
      "Interactive AWS quiz portal for skill assessment.",
    image: "/projects/aws-quiz.png",
    tags: ["React", "Firebase"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/Aws-quiz-portal",
  },
  {
    id: 11,
    title: "Quiz Wizard",
    description:
      "Dynamic quiz system with time tracking and scoring.",
    image: "/projects/quiz-wizard.png",
    tags: ["React", "Node.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/Quiz-wizard",
  },
  {
    id: 12,
    title: "Weather Forecasting App",
    description:
      "Real-time weather insights using OpenWeather API.",
    image: "/projects/weather.png",
    tags: ["React", "API"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/weather-forcasting",
  },
  {
    id: 13,
    title: "Online Education Platform",
    description:
      "Complete e-learning platform with course management.",
    image: "/projects/education.png",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/online-education-platform",
  },
  {
    id: 14,
    title: "Flipkart Clone",
    description:
      "Full‑stack Flipkart e-commerce UI clone.",
    image: "/projects/flipkart.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/flipkart-clone",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my real projects — built with clean code, modern UI, and real functionality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={`${project.id}-tag-${i}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label={`Open demo for ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label={`Open GitHub repo for ${project.title}`}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/hanikumar0"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

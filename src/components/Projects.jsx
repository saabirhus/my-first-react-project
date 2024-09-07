import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "AI Chatbot",
    description: "An AI-powered chatbot that can handle customer queries.",
    imageUrl: "https://play-lh.googleusercontent.com/bPaTi-1S2PbncUU-4Zgv2mkH0AKSsxblnDpkcsXI8LLjwIqhbsVAhSm5EBfapjEJe6Yg=w240-h480-rw"
  }, 
  {
    title: "E-commerce Platform",
    description: "A full-fledged e-commerce platform with payment integration.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0070/7032/files/ecommerce_20platforms.png?v=1701447416"
  },
  {
    title: "Social Media App",
    description: "A social media application for connecting with friends.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ggMF3dz0ymKJi5_XKEGe6vtaT5Ek-pO-uw&s"
  },
  {
    title: "Task Management Tool",
    description: "A tool to manage tasks and increase productivity.",
    imageUrl: "https://via.placeholder.com/300"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase skills and projects.",
    imageUrl: "https://via.placeholder.com/300"
  },
  {
    title: "Weather App",
    description: "An app to get real-time weather updates for any location.",
    imageUrl: "https://via.placeholder.com/300"
  },
  {
    title: "Finance Tracker",
    description: "A finance tracker to manage and analyze your expenses.",
    imageUrl: "https://via.placeholder.com/300"
  },
  {
    title: "Fitness App",
    description: "An app to track workouts and monitor progress.",
    imageUrl: "https://via.placeholder.com/300"
  },
  {
    title: "Recipe Finder",
    description: "A recipe finder app to discover and save your favorite recipes.",
    imageUrl: "https://via.placeholder.com/300"
  },
  {
    title: "Travel Guide",
    description: "A travel guide app with information on popular destinations.",
    imageUrl: "https://via.placeholder.com/300"
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.imageUrl} alt={project.title} className="project-image" />
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Sample data — replace with your real projects
const allProjects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with Next.js, Tailwind CSS.',
    tech: ['Next.js', 'Tailwind'],
    image: '/portfolio.png',
    demoLink: 'https://your-portfolio-demo.com',
    codeLink: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'Inventory Management System',
    description: 'Full-stack app for managing stock and billing.',
    tech: ['React', 'Node.js', 'MySQL'],
    image: '/inventory.jpg',
    demoLink: 'https://inventory-demo.com',
    codeLink: 'https://github.com/yourusername/inventory-app',
  },
  {
    title: 'AI Chat App',
    description: 'AI-powered chatbot using GPT-J with Node.js backend.',
    tech: ['React', 'Node.js'],
    image: '/projects/project3.png',
    demoLink: 'https://chat-ai-demo.com',
    codeLink: 'https://github.com/yourusername/ai-chat',
  },
];

// Filter options
const filters = ['All', 'Next.js', 'React', 'Node.js', 'MySQL', 'Tailwind'];

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredProjects =
    selectedFilter === 'All'
      ? allProjects
      : allProjects.filter((p) => p.tech.includes(selectedFilter));

  return (
    <section id="projects" className="min-h-screen bg-slate-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">Projects</h2>
        <p className="text-slate-400 mt-2">Some things I've built recently</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-2 text-sm rounded-full border transition ${
              selectedFilter === filter
                ? 'bg-sky-400 text-black font-semibold'
                : 'border-slate-600 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
            className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={200}
              height={200}
              className="w-full h-50 object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-bold text-yellow-400">{project.title}</h3>
              <p className="text-slate-300 text-sm">{project.description}</p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-sky-400 hover:bg-sky-500 text-black font-semibold py-2 px-4 rounded transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold py-2 px-4 rounded transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

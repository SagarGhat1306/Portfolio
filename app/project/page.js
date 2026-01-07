'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; 


const allProjects = [
    {
    title: 'FlexWear - E-commerce',
    description: 'AI-powered chatbot using GPT-J with Node.js backend.',
    tech: ['React', 'Node.js'],
    image: '/FlexWear.jpg',
    demoLink: 'https://vrihaacreation-frontend.vercel.app/',
    codeLink: 'https://github.com/SagarGhat1306/vrihaacreation_final',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with Next.js, Tailwind CSS.',
    tech: ['Next.js', 'Tailwind'],
    image: '/portfolio.png',
    demoLink: 'https://portfolio-orpin-beta-49.vercel.app/',
    codeLink: 'https://github.com/SagarGhat1306/portfolio/',
  },
  {
    title: 'Inventory Management System',
    description: 'Full-stack app for managing stock and billing.',
    tech: ['React', 'Node.js', 'MySQL'],
    image: '/inventory.jpg',
    demoLink: 'https://github.com/SagarGhat1306/Invetory-Managment',
    codeLink: 'https://github.com/SagarGhat1306/Invetory-Managment',
  },
    {
    title: 'School Management System',
    description: 'Full-stack app for school levle management.',
    tech: ['Next.js', 'Node.js', 'MySQL'],
    image: '/school_app.png',
    demoLink: 'https://school-managementapp.vercel.app/',
    codeLink: 'https://github.com/SagarGhat1306/school_management',
  },
  {
    title: 'portfolio Website',
    description: 'A personal portfolio built with Next.js, Tailwind CSS.',
    tech: ['Next.js', 'Tailwind'],
    image: '/portfolio2.png',
    demoLink: 'https://vinayak-portfolio-navy.vercel.app/',
    codeLink: 'https://github.com/SagarGhat1306/Vinayak_portfolio',
  },
  {
    title: 'AI Chat App',
    description: 'AI-powered chatbot using GPT-J with Node.js backend.',
    tech: ['React', 'Node.js'],
    image: '/Ai_chat.jpg',
    demoLink: 'https://chat-ai-demo.com',
    codeLink: 'https://github.com/yourusername/ai-chat',
  },
    {
    title: 'AI Chat App',
    description: 'AI-powered chatbot using GPT-J with Node.js backend.',
    tech: ['React', 'Node.js'],
    image: '/Ai_chat.jpg',
    demoLink: 'https://chat-ai-demo.com',
    codeLink: 'https://github.com/yourusername/ai-chat',
  },
    {
    title: 'AI Chat App',
    description: 'AI-powered chatbot using GPT-J with Node.js backend.',
    tech: ['React', 'Node.js'],
    image: '/Ai_chat.jpg',
    demoLink: 'https://chat-ai-demo.com',
    codeLink: 'https://github.com/yourusername/ai-chat',
  },
];


const filters = ['All', 'Next.js', 'React', 'Node.js/Express.js', 'MongoDB bMySQL', 'Tailwind'];

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
        <p className="text-slate-400 mt-2">Some things I have built recently</p>
      </div>

  
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

 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
            className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
          >
          <div className="w-full h-50 overflow-hidden ">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-bold text-yellow-400">{project.title}</h3>
              <p className="text-slate-300 text-sm">{project.description}</p>

         
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

  <div className="flex gap-4 mt-4">
  {/* Live Demo Button */}
  <a
    href={project.demoLink}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 text-center bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
  >
    Live Demo
  </a>  

  {/* GitHub Button */}
  <a
    href={project.codeLink}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 text-center border border-gray-700 text-gray-700 hover:bg-gray-800 hover:text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
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

'use client';
import { motion } from 'framer-motion';

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaAws, FaDocker, FaFigma, FaVideo, FaDatabase
} from 'react-icons/fa';

import {
  SiAdobe, SiAdobephotoshop, SiAdobeaftereffects,
  SiAdobepremierepro, SiMysql, SiKubernetes, SiReact,SiNextdotjs , SiTailwindcss
} from 'react-icons/si';

const skills = [
  {
    title: '🎨 Design Tools',
    color: 'text-pink-400',
    items: [
      { name: 'Adobe Illustrator', icon: <SiAdobe /> },
      { name: 'Photoshop', icon: <SiAdobephotoshop /> },
      { name: 'Video Editing', icon: <FaVideo /> },
      { name: 'Figma', icon: <FaFigma /> },
      { name: 'After Effects', icon: <SiAdobeaftereffects /> },
      { name: 'Premiere Pro', icon: <SiAdobepremierepro /> },
    ],
  },
  {
    title: '🧱 Frontend',
    color: 'text-yellow-400',
    items: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'Tailwind css', icon: <SiTailwindcss /> },
     
    ],
  },
  {
    title: '⚛️ Frameworks',
    color: 'text-sky-400',
    items: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'React Native', icon: <SiReact /> },
    { name : 'Next.js' , icon : <SiNextdotjs />}
    ],
  },
  {
    title: '🗄️ Backend',
    color: 'text-green-400',
    items: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'MySQL', icon: <SiMysql /> },
    ],
  },
  {
    title: '☁️ DevOps / Cloud',
    color: 'text-indigo-400',
    items: [
      { name: 'AWS', icon: <FaAws /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">TechSkills</h2>
        <p className="text-slate-400 mt-2">Tools, Languages, and Platforms I work with</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 hover:scale-[1.03] transition"
          >
            <h3 className={`text-xl font-semibold mb-4 ${category.color}`}>{category.title}</h3>
            <ul className="space-y-2 text-slate-300 text-sm md:text-base">
              {category.items.map((skill, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-xl">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

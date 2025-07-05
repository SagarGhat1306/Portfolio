'use client';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className=" min-h-screen bg-slate-800 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Bio */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
    <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
    About Me
    </h2>

          <p className="text-slate-300 mb-4">
            I am Sagar Ghat— a passionate Full Stack Developer and Creative Designer who loves blending logic with aesthetics.
            I build smooth, accessible, and visually rich web interfaces that deliver great user experiences.
          </p>
          <p className='text-slate-300 mb-4'>
            I specialize in React.js, Next.js, Node.js, Tailwind CSS, and Figma, and I thrive in turning ideas into impactful products.
          </p>
          <p className="text-slate-400 mb-4">
            Whether it is designing a pixel-perfect UI or solving complex backend problems, I enjoy every part of the process.
            I believe in lifelong learning, clean code, and creative solutions.
          </p>
          <p className="text-slate-500 italic">
            “Design is not just what it looks like and feels like. Design is how it works.” – Steve Jobs
          </p>
        </motion.div>

        {/* Right: Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="bg-slate-700 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Quick Highlights</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>💻 2+ years coding experience</li>
              <li>🎨 Strong eye for UI/UX</li>
              <li>🚀 Built 10+ full-stack projects</li>
              <li>🛠️ Skilled in React, Next.js , Node.js, MySQL, Tailwind</li>
              <li>🌐 Passionate about open-source & web accessibility</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

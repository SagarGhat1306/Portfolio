'use client';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
          Hi, I am <span className="text-6xl font-bold bg-gradient-to-r from-sky-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">Sagar Ghat</span>
        </h1>

        <p className="text-yellow-400 text-2xl font-mono mb-4 h-10">
          <Typewriter
            words={[
              'Full Stack Developer',
              'Creative Designer',
              'UI/UX Enthusiast',
              'Code Artist',
              'Problem Solver',
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <p className="text-slate-300 mb-6">
          I blend creativity and code to build web interfaces that are as beautiful as they are functional.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/project"
            className="bg-sky-400 hover:bg-sky-500 text-black font-semibold py-2 px-6 rounded-lg shadow-md transition"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold py-2 px-6 rounded-lg transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}

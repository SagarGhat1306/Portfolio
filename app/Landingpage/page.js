'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const router = useRouter();

  // Auto redirect to /home after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/home');
    }, 4000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="h-screen w-full bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center overflow-hidden relative">
      {/* Animated Floating Blobs */}
      <motion.div
        className="absolute w-[300px] h-[300px] bg-sky-400 opacity-20 rounded-full blur-3xl top-10 left-10"
        animate={{ x: [0, 40, -30, 0], y: [0, -30, 20, 0] }}
        transition={{ repeat: Infinity, duration: 18 }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] bg-pink-400 opacity-20 rounded-full blur-3xl bottom-10 right-10"
        animate={{ x: [0, -40, 30, 0], y: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 20 }}
      />
      <motion.div
        className="absolute w-[250px] h-[250px] bg-purple-500 opacity-10 rounded-full blur-2xl top-1/2 left-1/3"
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
        transition={{ repeat: Infinity, duration: 22 }}
      />

      {/* Aesthetic Loading / Intro Animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold tracking-wide text-sky-400 select-none"
      >
        Loading Portfolio...
      </motion.div>
    </div>
  );
}

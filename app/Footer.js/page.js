'use client';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-400 sticky py-6 px-4 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4">
      
        <div className="flex gap-4 text-lg">
          <a href="https://github.com/yourusername" target="_blank" className="hover:text-white"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" className="hover:text-white"><FaLinkedin /></a>
          <a href="https://twitter.com/yourhandle" target="_blank" className="hover:text-white"><FaTwitter /></a>
        </div>

        <p className="text-center md:text-right">© {new Date().getFullYear()} Sagar. All rights reserved.</p>
      </div>
    </footer>
  );
}

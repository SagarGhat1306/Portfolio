// 'use client';
// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="bg-slate-900 text-white px-6 py-4 shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <div className="text-yellow-400 text-lg md:text-xl font-bold tracking-wide">
//           Portfolio
//         </div>
//         <div className="flex space-x-6 text-sm md:text-base font-medium">
//           <Link href="/" className="hover:text-sky-400 transition">Home</Link>
//           <Link href="/About" className="hover:text-sky-400 transition">About</Link>
//           <Link href="/skill" className="hover:text-sky-400 transition">Tech Skills</Link>
//           <Link href="/project" className="hover:text-sky-400 transition">Projects</Link>
//           <Link href="/contact" className="hover:text-sky-400 transition">Contact</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-yellow-400 text-lg md:text-xl font-bold tracking-wide">
          Portfolio
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm md:text-base font-medium">
          <Link href="/" className="hover:text-sky-400 transition">Home</Link>
          <Link href="/About" className="hover:text-sky-400 transition">About</Link>
          <Link href="/skill" className="hover:text-sky-400 transition">Tech Skills</Link>
          <Link href="/project" className="hover:text-sky-400 transition">Projects</Link>
          <Link href="/contact" className="hover:text-sky-400 transition">Contact</Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 px-4 text-base font-medium">
          <Link href="/" className="hover:text-sky-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/About" className="hover:text-sky-400 transition" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/skill" className="hover:text-sky-400 transition" onClick={() => setIsOpen(false)}>Tech Skills</Link>
          <Link href="/project" className="hover:text-sky-400 transition" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/contact" className="hover:text-sky-400 transition" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

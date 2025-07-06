'use client';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';



const SERVICE_ID = 'service_j42j4y8';    
const TEMPLATE_ID = 'template_040jhih';  
const PUBLIC_KEY = 'dCw_e6Em3HXhaq1jH';


export default function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        SERVICE_ID,    
        TEMPLATE_ID,    
        form.current,
         PUBLIC_KEY   
      )
      .then(
        () => {
          alert('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('Error:', error);
          alert(' Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
           Contact Me
        </h2>
        <p className="text-slate-400">
          Let&rsquo;s connect — drop a message or find me on social platforms.
        </p>
      </div>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-3xl mx-auto space-y-6 bg-slate-800 p-8 rounded-xl shadow-md border border-slate-700"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="bg-slate-700 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="bg-slate-700 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full bg-slate-700 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
        ></textarea>

        <button
          type="submit"
          className="bg-sky-400 hover:bg-sky-500 text-black font-semibold px-6 py-3 rounded-lg transition"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="text-center mt-10 text-slate-400 space-y-2">
        <p>Email: <a href="mailto:sagarghat2004@gmail.com" className="text-sky-400">sagarghat2004@gmail.com</a></p>
        <p>Phone: <a href="tel:+917498946070" className="text-sky-400">+91 7498946070</a></p>
        <a
          href="/MY_RESUME_SAGAR_GHAT.pdf"
          download
          className="inline-block mt-4 text-yellow-400 border border-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition"
        >
          Download Resume
        </a>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-8 text-2xl text-slate-300">
        <a href="https://github.com/SagarGhat1306/" target="_blank" className="hover:text-white" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/sagar-ghat-72a9b82b4" target="_blank" className="hover:text-white" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" className="hover:text-white" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </section>
  );
}

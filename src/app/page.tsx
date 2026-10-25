"use client";

import { motion } from "framer-motion";
import { Code, Palette, GitFork, Globe, Mail, ExternalLink, Layers, Target, Briefcase, Monitor, Cpu, PenTool, Film, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative selection:bg-cyan-500 selection:text-slate-950">
      {/* Fixed Glassmorphism Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            zEXain
          </span>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Home
            </a>
            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#services" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Services
            </a>
            <a href="#skills" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
              Muhammad Zain Saleem
            </h1>
            <p className="text-xl md:text-2xl font-medium text-cyan-400 mb-6">
              zEXain | Full Stack Developer & Brand Designer
            </p>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Building high-performance web applications AND brands that sell.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3 rounded-full border border-cyan-400/50 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all text-center"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500"
          >
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              About Me
            </h2>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
              I am Muhammad Zain Saleem (zEXain), a multidisciplinary creative technologist with expertise in both Full Stack Development and Brand Identity Design. Unlike specialists who only focus on one aspect, I bridge the gap between technical functionality and visual aesthetics to deliver complete digital solutions that not only work flawlessly but also look stunning and drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-center mb-16 tracking-tight text-white"
          >
            What I <span className="text-cyan-400">Do</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Web Development */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300 group"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  Full Stack Development
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  High-performance, scalable web applications with a modern tech stack.
                </p>
              </div>
              <ul className="space-y-3 border-t border-white/10 pt-6">
                {["React/Next.js", "Responsive Design", "SEO Optimization", "API Integration"].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-300 font-medium">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mr-3 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 2: Brand & Design */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 group"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  Brand Identity & Packaging
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Premium packaging and brand identities that stand out and sell.
                </p>
              </div>
              <ul className="space-y-3 border-t border-white/10 pt-6">
                {["Print-Ready Packaging", "Logo Design", "Brand Strategy", "AI-Enhanced Video Ads"].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-300 font-medium">
                    <span className="w-2 h-2 rounded-full bg-purple-400 mr-3 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 tracking-tight text-white">
            My <span className="text-cyan-400">Tech Stack</span> & <span className="text-purple-400">Expertise</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Development Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Cpu className="w-6 h-6 mr-3 text-cyan-400" /> Development
              </h3>
              <p className="text-slate-400 mb-8">Building robust, scalable applications.</p>
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Python", "SQL", "Git", "Docker"].map((skill) => (
                  <span key={skill} className="bg-white/5 border border-cyan-500/30 text-cyan-400 rounded-full px-4 py-1 text-sm font-medium hover:bg-cyan-500/10 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Design Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <PenTool className="w-6 h-6 mr-3 text-purple-400" /> Design & Branding
              </h3>
              <p className="text-slate-400 mb-8">Creating compelling visual identities.</p>
              <div className="flex flex-wrap gap-3">
                {["Brand Strategy", "Logo Design", "Packaging Design", "Typography", "Color Theory", "Adobe Suite", "AI Video Generation"].map((skill) => (
                  <span key={skill} className="bg-white/5 border border-purple-500/30 text-purple-400 rounded-full px-4 py-1 text-sm font-medium hover:bg-purple-500/10 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative z-10 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 tracking-tight text-white">
            Featured <span className="text-cyan-400">Work</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="h-48 bg-slate-900 flex items-center justify-center text-slate-500 relative">
                <Palette className="w-12 h-12 opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Brand Identity & Packaging Design</h3>
                <p className="text-slate-400 text-sm mb-4">Created print-ready packaging and high-converting video assets for e-commerce brands.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Adobe Illustrator</span>
                  <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Photoshop</span>
                  <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">AI Video Tools</span>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="h-48 bg-slate-900 flex items-center justify-center text-slate-500 relative">
                <Code className="w-12 h-12 opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Next.js Portfolio Website</h3>
                <p className="text-slate-400 text-sm mb-4">A high-performance, futuristic portfolio built with Next.js, Tailwind CSS, and Framer Motion.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Next.js</span>
                  <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">React</span>
                  <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Tailwind</span>
                  <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Framer Motion</span>
                </div>
              </div>
            </motion.div>

            {/* Project 3 & 4 (Placeholders) */}
            {[3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="h-48 bg-slate-900 flex items-center justify-center text-slate-500 relative">
                  <Monitor className="w-12 h-12 opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Project Title {i}</h3>
                  <p className="text-slate-400 text-sm mb-4">A brief, impactful description of the project demonstrating technical and design excellence.</p>
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Next.js</span>
                    <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Tailwind</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 tracking-tight text-white">
            Why Clients <span className="text-cyan-400">Choose Me</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Dual Expertise", text: "Development and Design in one package. No need to hire multiple freelancers." },
              { icon: Target, title: "Technical Precision", text: "Code that scales flawlessly and designs that print perfectly the first time." },
              { icon: Briefcase, title: "Business-Focused", text: "I don't just make things look pretty. I build solutions that drive real business growth." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-colors"
              >
                <item.icon className="w-10 h-10 text-cyan-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative z-10 bg-gradient-to-b from-transparent to-cyan-950/20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">
              Let's Build Something <span className="text-cyan-400">Amazing</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12">
              Whether you need a high-performance web application or a brand identity that sells, I'm here to help. Reach out and let's discuss your project.
            </p>
            <a
              href="mailto:your-real-email@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-400 text-slate-950 font-bold rounded-full hover:bg-cyan-300 transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)] text-lg mb-12"
            >
              <Mail className="w-5 h-5" /> Send Me an Email
            </a>
            
            <div className="flex justify-center gap-8">
              <a href="https://github.com/zEXain" className="text-white hover:text-cyan-400 transition-colors"><GitFork className="w-8 h-8" /></a>
              <a href="https://www.linkedin.com/in/your-linkedin-url" className="text-white hover:text-cyan-400 transition-colors"><Globe className="w-8 h-8" /></a>
              <a href="#" className="text-white hover:text-cyan-400 transition-colors"><Briefcase className="w-8 h-8" /></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/10">
        <p className="text-slate-500 text-sm">
          © 2024 zEXain (Muhammad Zain Saleem). All rights reserved.
        </p>
      </footer>


    </div>
  );
}
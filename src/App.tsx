/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Sun, 
  Moon, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Layers, 
  Cpu, 
  Globe, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import React, { useState, useEffect, FormEvent } from 'react';

// --- Types ---
interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  description: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

// --- Data ---
const SKILLS: Skill[] = [
  { name: 'HTML5/CSS3', level: 95, icon: <Layers className="w-5 h-5" />, description: 'Semantic markup, Flexbox, Grid, and Animations.' },
  { name: 'JavaScript', level: 90, icon: <Code2 className="w-5 h-5" />, description: 'Modern ES6+, DOM manipulation, and Async programming.' },
  { name: 'TypeScript', level: 85, icon: <Cpu className="w-5 h-5" />, description: 'Static typing for safer, scalable codebases.' },
  { name: 'React', level: 88, icon: <Terminal className="w-5 h-5" />, description: 'Hook-based architecture and state management.' },
  { name: 'Node.js', level: 75, icon: <Globe className="w-5 h-5" />, description: 'Building efficient backend services and APIs.' },
  { name: 'Tailwind CSS', level: 92, icon: <Layers className="w-5 h-5" />, description: 'Utility-first styling for rapid UI development.' },
];

const PROJECTS: Project[] = [
  {
    title: 'CloudFlow Analytics',
    description: 'A real-time data visualization dashboard for monitoring system performance across distributed nodes.',
    tags: ['React', 'TypeScript', 'D3.js'],
    link: '#',
    image: 'https://picsum.photos/seed/analytics/800/600',
  },
  {
    title: 'Pulse E-Commerce',
    description: 'A mobile-first shopping experience with optimized checkout flow and lightning-fast product search.',
    tags: ['React', 'Node.js', 'Tailwind'],
    link: '#',
    image: 'https://picsum.photos/seed/commerce/800/600',
  },
  {
    title: 'SecureGate Auth',
    description: 'A robust authentication microservice implementing multi-factor auth and identity federation.',
    tags: ['Node.js', 'Express', 'JWT'],
    link: '#',
    image: 'https://picsum.photos/seed/security/800/600',
  },
];

// --- Components ---

const SectionTitle = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <div id={id} className="mb-12">
    <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase mb-4">
      {children}
    </h2>
    <div className="h-1 w-24 bg-blue-600 dark:bg-blue-400" />
  </div>
);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  
  // Form State
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // Toggle Dark Mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess(false);

    if (!email.includes('@')) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (message.length < 10) {
      setFormError('Message must be at least 10 characters long.');
      return;
    }

    // Simulate success
    setFormSuccess(true);
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-[#FDFDFC] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#FDFDFC] font-sans transition-colors duration-300">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFDFC]/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md border-b border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="font-display font-bold text-xl tracking-tighter uppercase">
            John.Dev
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="md:hidden">
              {/* Mobile menu icon would go here */}
            </button>
          </div>
        </div>
      </nav>

      {/* Header / Hero */}
      <header className="relative pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-600 dark:text-blue-400 font-mono text-sm tracking-widest uppercase mb-4">
              Available for New Projects
            </p>
            <h1 className="text-[12vw] md:text-[10vw] font-display font-bold leading-[0.85] tracking-tighter uppercase mb-12">
              John Patrick <br /> 
              <span className="text-transparent border-text-stroke">Buni</span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <p className="text-2xl md:text-4xl max-w-2xl font-light leading-snug">
                Full Stack Web Developer specialized in building <span className="font-medium italic">high-performance</span> digital systems and scalable web environments.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center border border-black/10 dark:border-white/10 rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center border border-black/10 dark:border-white/10 rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <main>
        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-black/5 dark:bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionTitle>Biography</SectionTitle>
                <div className="space-y-6 text-lg text-black/70 dark:text-white/70 leading-relaxed font-sans">
                  <p>
                    I am a full stack web developer with a passion for architectural purity and performance optimization. My journey started with assembly and C, which gave me a deep appreciation for what's happening under the hood.
                  </p>
                  <p>
                    Today, I leverage modern frameworks like React and Node.js to build user-facing systems that aren't just pretty, but robust and lightning-fast. I believe every line of code should serve a purpose.
                  </p>
                </div>
              </div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square bg-[#E4E3E0] dark:bg-zinc-800 rounded-2xl overflow-hidden"
              >
                <img 
                  src="https://picsum.photos/seed/portrait/800/800" 
                  alt="Professional portrait"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 border-y border-black/10 dark:border-white/10">
          <div className="max-w-7xl mx-auto">
            <SectionTitle>Core Expertise</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILLS.map((skill) => (
                <motion.div
                  key={skill.name}
                  layoutId={skill.name}
                  onClick={() => setActiveSkill(skill)}
                  className="p-8 border border-black/5 dark:border-white/5 bg-white dark:bg-zinc-900 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/10 transition-all group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3 bg-black dark:bg-white text-white dark:text-black rounded-lg">
                      {skill.icon}
                    </div>
                    <span className="text-3xl font-display font-bold opacity-10 group-hover:opacity-50 transition-opacity">
                      {skill.level}%
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2 uppercase tracking-tight">{skill.name}</h3>
                  <p className="text-black/50 dark:text-white/50 text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </div>

            <AnimatePresence>
              {activeSkill && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActiveSkill(null)}
                  className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
                >
                  <motion.div 
                    layoutId={activeSkill.name}
                    className="w-full max-w-lg bg-white dark:bg-zinc-900 p-10 rounded-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-4 bg-black dark:bg-white text-white dark:text-black rounded-xl">
                        {activeSkill.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-display font-bold uppercase tracking-tighter">{activeSkill.name}</h2>
                        <p className="text-blue-600 dark:text-blue-400 font-mono text-sm tracking-widest uppercase">Expert Proficiency</p>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <div className="flex justify-between mb-2 text-sm font-medium">
                        <span>Proficiency Level</span>
                        <span>{activeSkill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${activeSkill.level}%` }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full bg-blue-600 dark:bg-blue-400" 
                        />
                      </div>
                    </div>

                    <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed mb-10">
                      {activeSkill.description} I've applied these skills in high-stakes production environments, focusing on performance metrics and clean architecture.
                    </p>

                    <button 
                      onClick={() => setActiveSkill(null)}
                      className="w-full py-4 bg-black dark:bg-white text-white dark:text-black font-display font-bold uppercase tracking-widest rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-transform"
                    >
                      Close Details
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <SectionTitle>Featured Systems</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {PROJECTS.map((project, idx) => (
                <motion.div 
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex flex-col"
                >
                  <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-xl border border-black/5 dark:border-white/5">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                      <a href={project.link} className="p-4 bg-white text-black rounded-full hover:scale-110 transition-transform">
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  <p className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">Project {idx + 1}</p>
                  <h3 className="text-2xl font-display font-bold mb-3 uppercase tracking-tighter">{project.title}</h3>
                  <p className="text-black/60 dark:text-white/60 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-black/5 dark:bg-white/5 text-[10px] uppercase font-bold tracking-widest border border-black/5 dark:border-white/5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-black dark:bg-zinc-900 text-white dark:text-zinc-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <SectionTitle>Let's Sync</SectionTitle>
                <p className="text-2xl md:text-3xl font-light mb-12 opacity-80 leading-snug">
                  Interested in collaborating or have a complex system that needs optimization? Let's discuss the architecture.
                </p>
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full border border-white/5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest opacity-50 mb-1">Direct Line</p>
                      <a href="mailto:john@buni.dev" className="text-xl font-medium hover:text-blue-400 transition-colors">john@buni.dev</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/5">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest font-bold mb-3 opacity-60">Your Email Address</label>
                    <input 
                      type="text" 
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="dev@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 focus:border-blue-500 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-widest font-bold mb-3 opacity-60">System Message / Requirements</label>
                    <textarea 
                      id="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Detail your project architecture or goals..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 focus:border-blue-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  {formError && (
                    <div className="flex items-center gap-3 text-red-400 bg-red-400/10 p-4 rounded-lg text-sm border border-red-400/20">
                      <AlertCircle className="w-4 h-4" />
                      {formError}
                    </div>
                  )}

                  {formSuccess && (
                    <div className="flex items-center gap-3 text-green-400 bg-green-400/10 p-4 rounded-lg text-sm border border-green-400/20">
                      <CheckCircle2 className="w-4 h-4" />
                      Transmission successful. I'll get back to you soon.
                    </div>
                  )}

                  <button 
                    type="submit"
                    className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-display font-bold uppercase tracking-widest rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Execute Contact
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm opacity-50 font-mono">
            &copy; {new Date().getFullYear()} Buni Digital. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            <a href="https://github.com/john-buni" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">Github</a>
            <a href="https://linkedin.com/in/john-buni" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* Custom Styles for Text Stroke Effect */}
      <style>{`
        .border-text-stroke {
          -webkit-text-stroke: 1.5px currentColor;
          text-stroke: 1.5px currentColor;
        }
        @media (max-width: 768px) {
          .border-text-stroke {
            -webkit-text-stroke: 1px currentColor;
            text-stroke: 1px currentColor;
          }
        }
      `}</style>
    </div>
  );
}

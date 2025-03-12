import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, Terminal, Globe, Coffee } from 'lucide-react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(target.matches('a, button, .image-hover, .hover-trigger'));
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      style={{ left: position.x, top: position.y }}
    />
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-zinc-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold text-purple-500 hover-trigger">JD</a>
            <div className="flex gap-4">
              <a href="#about" className="hover:text-purple-500 transition-colors hover-trigger hidden md:block">About</a>
              <a href="#projects" className="hover:text-purple-500 transition-colors hover-trigger hidden md:block">Projects</a>
              <a href="#experience" className="hover:text-purple-500 transition-colors hover-trigger hidden md:block">Experience</a>
              <a href="#contact" className="hover:text-purple-500 transition-colors hover-trigger hidden md:block">Contact</a>
              <div className="flex gap-4 ml-4 border-l pl-4 border-gray-700">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors hover-trigger">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors hover-trigger">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-20 md:py-0 relative z-10"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-purple-500">Ahmad Idrees</span>
            <br />
            I am a software developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-8">
            Full Stack Developer specializing in building exceptional digital experiences.
            Currently focused on building accessible, human-centered products.
          </p>
          <div className="flex gap-4">
            <a 
              href="#contact" 
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors hover-trigger"
            >
              Get in touch
            </a>
            <a 
              href="#projects" 
              className="border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-lg transition-colors hover-trigger"
            >
              View my work
            </a>
          </div>
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <User className="text-purple-500" /> About Me
              </h2>
              <p className="text-gray-400 mb-6">
                With over 5 years of experience in full-stack development, I've had the privilege of working 
                on diverse projects that have shaped my expertise in creating robust, scalable applications.
              </p>
              <p className="text-gray-400 mb-6">
                My journey in tech started with a fascination for problem-solving and has evolved into a 
                passion for building products that make a real difference in people's lives.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Terminal className="text-purple-500" />
                  <span>Clean Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="text-purple-500" />
                  <span>Responsive Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code2 className="text-purple-500" />
                  <span>Best Practices</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="text-purple-500" />
                  <span>Team Player</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-zinc-800 rounded-lg">
                  <h3 className="font-bold mb-4">Frontend</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>React & Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Redux & Zustand</li>
                  </ul>
                </div>
                <div className="p-6 bg-zinc-800 rounded-lg">
                  <h3 className="font-bold mb-4">Backend</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                    <li>GraphQL</li>
                  </ul>
                </div>
                <div className="p-6 bg-zinc-800 rounded-lg">
                  <h3 className="font-bold mb-4">DevOps</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>Docker</li>
                    <li>AWS</li>
                    <li>CI/CD</li>
                    <li>Monitoring</li>
                  </ul>
                </div>
                <div className="p-6 bg-zinc-800 rounded-lg">
                  <h3 className="font-bold mb-4">Tools</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>Git</li>
                    <li>VS Code</li>
                    <li>Figma</li>
                    <li>Postman</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Code2 className="text-purple-500" /> Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "A full-featured online store with real-time inventory management, secure payments, and an intuitive admin dashboard.",
                image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
                github: "https://github.com",
                live: "https://example.com"
              },
              {
                title: "Task Management App",
                description: "Collaborative project management tool with real-time updates, task delegation, and progress tracking features.",
                image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
                github: "https://github.com",
                live: "https://example.com"
              },
              {
                title: "Social Media Dashboard",
                description: "Comprehensive analytics platform for social media management with AI-powered insights and scheduling.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tech: ["Vue.js", "Express", "MongoDB", "TensorFlow.js"],
                github: "https://github.com",
                live: "https://example.com"
              },
              {
                title: "AI Content Generator",
                description: "Machine learning powered platform that helps create, optimize, and analyze content for various platforms.",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                tech: ["React", "Python", "OpenAI", "Redis"],
                github: "https://github.com",
                live: "https://example.com"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900 rounded-lg overflow-hidden group"
              >
                <div className="image-hover">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors hover-trigger">
                      <Github size={20} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors hover-trigger">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Briefcase className="text-purple-500" /> Experience
          </h2>
          <div className="space-y-8">
            {[
              {
                role: "Senior Full Stack Developer",
                company: "Tech Corp",
                period: "2020 - Present",
                description: "Led development of multiple full-stack applications, mentored junior developers, and implemented best practices that improved team productivity by 40%.",
                achievements: [
                  "Architected and deployed microservices infrastructure",
                  "Reduced API response time by 60%",
                  "Implemented CI/CD pipeline"
                ],
                technologies: ["React", "Node.js", "PostgreSQL", "AWS"]
              },
              {
                role: "Full Stack Developer",
                company: "Startup Inc",
                period: "2018 - 2020",
                description: "Developed and maintained multiple client projects using modern web technologies, focusing on performance and user experience.",
                achievements: [
                  "Built real-time collaboration features",
                  "Improved application load time by 45%",
                  "Implemented automated testing"
                ],
                technologies: ["Vue.js", "Express", "MongoDB", "Docker"]
              },
              {
                role: "Frontend Developer",
                company: "Design Agency",
                period: "2016 - 2018",
                description: "Created responsive web applications with focus on user experience and accessibility standards.",
                achievements: [
                  "Developed component library",
                  "Achieved 100% accessibility score",
                  "Reduced bundle size by 35%"
                ],
                technologies: ["React", "TypeScript", "SCSS"]
              }
            ].map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-800 rounded-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">{exp.role} @ {exp.company}</h3>
                  <p className="text-gray-400">{exp.period}</p>
                </div>
                <p className="text-gray-400 mb-4">{exp.description}</p>
                <ul className="list-disc list-inside text-gray-400 mb-4 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-400 mb-8">
              I'm currently open to new opportunities and would love to hear about your project. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="flex justify-center gap-6">
              <a 
                href="mailto:contact@example.com" 
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors hover-trigger flex items-center gap-2"
              >
                <Mail size={20} />
                Say Hello
              </a>
              <a 
                href="/resume.pdf" 
                className="border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-lg transition-colors hover-trigger"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p>Designed & Built by John Doe</p>
          <p className="mt-2">© 2024 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
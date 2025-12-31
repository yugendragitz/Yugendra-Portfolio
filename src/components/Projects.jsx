import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiX, HiExternalLink, HiCode } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Flask Market App',
      description: 'A full-featured e-commerce marketplace built with Flask and PostgreSQL',
      longDescription: 'Complete marketplace application with user authentication, product management, shopping cart functionality, and secure payment processing. Features include real-time inventory tracking, order management, and admin dashboard.',
      tech: ['Python', 'Flask', 'PostgreSQL', 'HTML/CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      github: 'https://github.com/yugendragitz/Flask-Market-Enterprise',
      live: 'https://flask-market-enterprise.vercel.app/',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Smart Helmet Project',
      description: 'IoT-based smart helmet for accident detection and emergency alert system',
      longDescription: 'Innovative safety solution using Arduino Uno R3, vibration sensor for accident detection, GSM SIM 800L module for emergency SMS alerts, and GPS Neo 6NM module for real-time location tracking. Programmed using Arduino IDE for hardware integration and sensor data processing.',
      tech: ['Arduino UNO R3', 'Arduino IDE', 'GSM SIM800L', 'GPS Neo 6NM', 'Vibration Sensor'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      github: 'https://github.com/yugendragitz/Smart-Helmet',
      live: '#',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Web Client Pages',
      description: 'Modern, responsive client-facing web pages with advanced UI/UX',
      longDescription: 'Collection of professionally designed web pages for various clients. Features include smooth animations, responsive design, SEO optimization, and modern UI patterns. Built with React and Tailwind CSS for optimal performance.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      github: 'https://github.com/yugendragitz',
      live: '#',
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Portfolio Dashboard',
      description: 'Modern personal portfolio website showcasing projects, skills, and experience',
      longDescription: 'A sleek and responsive portfolio website built with React and Tailwind CSS. Features smooth animations with Framer Motion, interactive particle background, dark theme design, and optimized performance. Deployed on Vercel for fast global delivery.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'Vercel'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      github: 'https://github.com/yugendragitz/Yugendra-Portfolio',
      live: 'https://yugendra-portfolio.vercel.app',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"
          ></motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold">View Details</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-dark-lighter rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors"
                    >
                      <SiGithub />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 text-gray-300 hover:text-secondary transition-colors"
                    >
                      <HiExternalLink />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} opacity-50`}></div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-white text-3xl hover:text-accent transition-colors"
                >
                  <HiX />
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                <h4 className="text-xl font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-dark-lighter rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center space-x-2"
                  >
                    <SiGithub />
                    <span>View Code</span>
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex items-center space-x-2"
                  >
                    <HiExternalLink />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

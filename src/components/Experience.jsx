import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiCode, HiLightBulb, HiCheckCircle } from 'react-icons/hi';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    {
      year: '2024 - Present',
      title: 'B.Tech 2nd Year',
      company: 'Computer Science & Engineering',
      description: 'Pursuing Bachelor of Technology degree with focus on Full Stack Development, Data Structures & Algorithms, and Database Management Systems.',
      icon: <HiAcademicCap />,
      color: 'from-blue-500 to-cyan-500',
      achievements: [
        'CGPA: 8.5+',
        'Active participant in coding competitions',
        'Member of Tech Club',
      ]
    },
    {
      year: '2024',
      title: 'Full Stack Development Projects',
      company: 'Self-Learning & Building',
      description: 'Developed multiple full-stack applications using React, Node.js, FastAPI, and PostgreSQL. Focused on creating scalable and high-performance web solutions.',
      icon: <HiCode />,
      color: 'from-purple-500 to-pink-500',
      achievements: [
        'Built 5+ production-ready projects',
        'Mastered React and modern frontend tools',
        'Implemented RESTful APIs with FastAPI and Node.js',
      ]
    },
    {
      year: '2023',
      title: 'IoT & Hardware Integration',
      company: 'Smart Helmet Project',
      description: 'Led development of IoT-based smart helmet with accident detection capabilities. Integrated hardware sensors with web-based monitoring system.',
      icon: <HiLightBulb />,
      color: 'from-green-500 to-teal-500',
      achievements: [
        'Successful hardware-software integration',
        'Real-time GPS tracking implementation',
        'Emergency alert system development',
      ]
    },
    {
      year: '2023',
      title: 'Web Development Journey',
      company: 'Started Learning',
      description: 'Began journey in web development, learning HTML, CSS, JavaScript fundamentals. Built first responsive websites and discovered passion for frontend development.',
      icon: <HiCheckCircle />,
      color: 'from-orange-500 to-red-500',
      achievements: [
        'Completed 100+ hours of coding',
        'Built first portfolio website',
        'Learned version control with Git',
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 bg-dark-light/30">
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
            My <span className="gradient-text">Journey</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"
          ></motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 pb-12 border-l-2 border-dark-lighter last:pb-0"
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-0 top-0 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl text-white shadow-lg`}
                >
                  {item.icon}
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="glass p-6 rounded-xl ml-8"
                >
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white`}>
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                  <p className="text-primary font-medium mb-3">{item.company}</p>
                  <p className="text-gray-400 mb-4">{item.description}</p>

                  <div className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <HiCheckCircle className="text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <p className="text-gray-400 text-lg mb-4">
              Continuously learning and growing as a developer
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-block"
            >
              Let's Build Something Together
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

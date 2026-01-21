import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiFlask,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiNodedotjs,
  SiVisualstudiocode,
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <SiReact />, level: 85, color: '#61DAFB' },
        { name: 'JavaScript', icon: <SiJavascript />, level: 80, color: '#F7DF1E' },
        { name: 'HTML5', icon: <SiHtml5 />, level: 90, color: '#E34F26' },
        { name: 'CSS3', icon: <SiCss3 />, level: 85, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 80, color: '#06B6D4' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', icon: <SiPython />, level: 85, color: '#3776AB' },
        { name: 'FastAPI', icon: <SiFlask />, level: 80, color: '#009688' },
        { name: 'Node.js', icon: <SiNodedotjs />, level: 75, color: '#339933' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 70, color: '#4169E1' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: <SiGit />, level: 80, color: '#F05032' },
        { name: 'GitHub', icon: <SiGithub />, level: 85, color: '#181717' },
        { name: 'VS Code', icon: <SiVisualstudiocode />, level: 90, color: '#007ACC' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 px-4 bg-dark-light/30">
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
            My <span className="gradient-text">Skills</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"
          ></motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl" style={{ color: skill.color }}>
                            {skill.icon}
                          </span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-dark-lighter rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-lg">
              Always learning and exploring new technologies 🚀
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

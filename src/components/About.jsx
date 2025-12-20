import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCode, HiLightningBolt, HiSparkles } from 'react-icons/hi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const features = [
    {
      icon: <HiCode className="text-4xl text-primary" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices"
    },
    {
      icon: <HiLightningBolt className="text-4xl text-secondary" />,
      title: "Fast Learner",
      description: "Quickly adapting to new technologies and frameworks"
    },
    {
      icon: <HiSparkles className="text-4xl text-accent" />,
      title: "Problem Solver",
      description: "Strong foundation in DSA and algorithmic thinking"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"
          ></motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate <span className="text-primary font-semibold">Full Stack Developer</span> currently 
                pursuing my B.Tech degree. I love turning complex problems into simple, beautiful, 
                and intuitive solutions.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in web development started with a curiosity about how websites work, 
                and it has evolved into a passion for creating <span className="text-secondary font-semibold">scalable, 
                high-performance web applications</span>. I specialize in building modern solutions using 
                <span className="text-accent font-semibold"> React</span>, <span className="text-accent font-semibold">Node.js</span>, 
                <span className="text-accent font-semibold"> Python</span>, and <span className="text-accent font-semibold">FastAPI</span>.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or solving algorithmic challenges to sharpen my problem-solving skills.
              </p>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-block"
              >
                Let's Work Together
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="glass p-6 rounded-xl card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-dark-lighter rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

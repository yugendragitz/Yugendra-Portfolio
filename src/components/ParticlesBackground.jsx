import React, { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    const initParticles = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b']
            },
            shape: {
              type: ['circle', 'triangle'],
            },
            opacity: {
              value: 0.6,
              random: true,
              anim: {
                enable: true,
                speed: 1.5,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: true,
                speed: 3,
                size_min: 0.3,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#6366f1',
              opacity: 0.3,
              width: 1.5
            },
            move: {
              enable: true,
              speed: 2.5,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'grab'
              },
              onclick: {
                enable: true,
                mode: 'push'
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 0.5
                }
              },
              push: {
                particles_nb: 5
              },
              repulse: {
                distance: 150,
                duration: 0.4
              }
            }
          },
          retina_detect: true
        });
      }
    };

    // Wait for particles.js to load
    const checkParticles = setInterval(() => {
      if (window.particlesJS) {
        initParticles();
        clearInterval(checkParticles);
      }
    }, 100);

    return () => clearInterval(checkParticles);
  }, []);

  return <div id="particles-js"></div>;
};

export default ParticlesBackground;

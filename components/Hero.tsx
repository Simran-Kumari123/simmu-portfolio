'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './Hero.module.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.heroText}>
            <motion.div variants={itemVariants} className={styles.greeting}>
              <span className={styles.wave}>👋</span>
              <span>Hello, I'm</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className={styles.name}>
              <span className={styles.firstName}>Simran</span>
              <span className={styles.lastName}>Kumari</span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className={styles.title}>
              Full Stack Developer
            </motion.h2>

            <motion.p variants={itemVariants} className={styles.description}>
              As a fresher, I am excited to build my career in web development.
              I enjoy exploring new technologies, writing clean code, and designing user-friendly solutions.
            </motion.p>

            <motion.div variants={itemVariants} className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>1+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Technologies</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className={styles.heroButtons}>
              <Link href="#projects" className={styles.primaryButton}>
                View My Work
              </Link>
              <Link href="#contact" className={styles.secondaryButton}>
                Get In Touch
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className={styles.socialLinks}>
              <a
                href="https://github.com/Simran-Kumari123"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub Profile"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/simran-kumari-403737292/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=simrankumari02184@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Email Contact"
              >
                <FiMail />
              </a>

            </motion.div>
          </div>

          <div className={styles.heroImage}>
            <motion.div
              className={styles.imageContainer}
              variants={floatingVariants}
              animate="animate"
            >
              <div className={styles.imageWrapper}>
                <Image
                src="/hero.png"
                alt="Simran Kumari - Full Stack Developer"
                width={300}
                height={300}
                className={styles.profileImage}
                priority
              />
                <div className={styles.imageOverlay}></div>
              </div>

              {/* Floating Tech Icons */}
              <motion.div
                className={`${styles.floatingIcon} ${styles.icon1}`}
                animate={{
                  y: [-15, 15, -15],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ⚛️
              </motion.div>

              <motion.div
                className={`${styles.floatingIcon} ${styles.icon2}`}
                animate={{
                  y: [15, -15, 15],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🚀
              </motion.div>

              <motion.div
                className={`${styles.floatingIcon} ${styles.icon3}`}
                animate={{
                  y: [-10, 20, -10],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                💻
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <Link href="#about" className={styles.scrollLink} aria-label="Scroll to About section">
            <span className={styles.scrollText}>Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FiArrowDown />
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradient1}></div>
        <div className={styles.gradient2}></div>
        <div className={styles.particles}>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.particle}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
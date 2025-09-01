'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { skills, skillCategories, getSkillsByCategory } from '@/data/skills';
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3,
  SiTailwindcss, SiSass, SiVuedotjs, SiNodedotjs, SiExpress, SiPython,
  SiDjango, SiFastapi, SiPhp, SiLaravel, SiMongodb, SiPostgresql,
  SiMysql, SiRedis, SiPrisma, SiGit, SiDocker, SiAmazonaws, SiVercel,
  SiFigma, SiVisualstudiocode, SiGraphql, SiSocketdotio, SiJest, SiCypress
} from 'react-icons/si';
import styles from './About.module.css';

// Icon mapping
const iconMap: { [key: string]: any } = {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3,
  SiTailwindcss, SiSass, SiVuedotjs, SiNodedotjs, SiExpress, SiPython,
  SiDjango, SiFastapi, SiPhp, SiLaravel, SiMongodb, SiPostgresql,
  SiMysql, SiRedis, SiPrisma, SiGit, SiDocker, SiAmazonaws, SiVercel,
  SiFigma, SiVisualstudiocode, SiGraphql, SiSocketdotio, SiJest, SiCypress
};

const About = () => {
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

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className={styles.sectionTitle}>
            About Me
          </motion.h2>
          <motion.p variants={itemVariants} className={styles.sectionSubtitle}>
            Get to know me better
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.aboutContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className={styles.aboutText}>
            <div className={styles.textContent}>
              <h3 className={styles.aboutTitle}>
                Passionate Full Stack Developer
              </h3>
              <p className={styles.aboutDescription}>
                I'm a passionate aspiring full-stack developer, eager to create digital solutions that make an impact. My journey in technology began with curiosity and continues to grow as I explore new ideas and projects.
              </p>
              <p className={styles.aboutDescription}>
                I enjoy working with modern web technologies like React, Next.js, Node.js, and TypeScript. I focus on writing clean, maintainable code and learning best practices to deliver engaging user experiences.
              </p>
              <p className={styles.aboutDescription}>
                Outside of coding, I love exploring new technologies, experimenting with personal projects, and contributing to the developer community through learning and sharing knowledge.
              </p>

            </div>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <h4>🎓 Education</h4>
                <p>Computer Science Graduate</p>
              </div>
              <div className={styles.highlight}>
                <h4>💼 Experience</h4>
                <p>1 Year in Web Development</p>
              </div>
              <div className={styles.highlight}>
                <h4>🌍 Location</h4>
                <p>Available for Remote Work</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.aboutImage}>
            <div className={styles.imageWrapper}>
              <Image
                src="/simmu img.jpg"
                alt="Simran Kumari"
                width={400}
                height={500}
                className={styles.image}
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className={styles.skillsSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 variants={itemVariants} className={styles.skillsTitle}>
            Skills & Technologies
          </motion.h3>

          <div className={styles.skillsGrid}>
            {skillCategories.map((category, categoryIndex) => {
              const categorySkills = getSkillsByCategory(category.key);

              return (
                <motion.div
                  key={category.key}
                  className={styles.skillCategory}
                  variants={itemVariants}
                  custom={categoryIndex}
                >
                  <h4
                    className={styles.categoryTitle}
                    style={{ color: category.color }}
                  >
                    {category.label}
                  </h4>
                  <div className={styles.skillsList}>
                    {categorySkills.map((skill, skillIndex) => {
                      const IconComponent = iconMap[skill.icon];

                      return (
                        <motion.div
                          key={skill.name}
                          className={styles.skillItem}
                          variants={skillVariants}
                          custom={skillIndex}
                          whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <div className={styles.skillIcon}>
                            {IconComponent && <IconComponent />}
                          </div>
                          <span className={styles.skillName}>{skill.name}</span>
                          <div className={styles.proficiencyBar}>
                            <motion.div
                              className={styles.proficiencyFill}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency * 20}%` }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
                              style={{ backgroundColor: category.color }}
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>



        {/* Fun Facts */}
        <motion.div
          className={styles.funFacts}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 variants={itemVariants} className={styles.funFactsTitle}>
            Fun Facts About Me
          </motion.h3>

          <div className={styles.factsGrid}>
            <motion.div variants={itemVariants} className={styles.fact}>
              <span className={styles.factIcon}>💻</span>
              <p>Tech explorer - always learning AI, ML, and Web3</p>
            </motion.div>
            <motion.div variants={itemVariants} className={styles.fact}>
              <span className={styles.factIcon}>🎨</span>
              <p>Arts & Crafts - love creating handmade projects</p>
            </motion.div>
            <motion.div variants={itemVariants} className={styles.fact}>
              <span className={styles.factIcon}>✈️</span>
              <p>Travel enthusiast - love exploring new places and cultures</p>
            </motion.div>
            <motion.div variants={itemVariants} className={styles.fact}>
              <span className={styles.factIcon}>🎶</span>
              <p>Music lover - Enjoy exploring different genres and artists</p>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';
import { projects, getFeaturedProjects } from '@/data/projects';
import styles from './Projects.module.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const categories = ['all', 'featured', 'frontend', 'backend', 'full stack'];
  
  const getFilteredProjects = () => {
    let filtered = projects;
    
    if (filter === 'featured') {
      filtered = getFeaturedProjects();
    } else if (filter !== 'all') {
      filtered = projects.filter(project => 
        project.category.toLowerCase() === filter.toLowerCase()
      );
    }
    
    return showAll ? filtered : filtered.slice(0, 6);
  };

  const filteredProjects = getFilteredProjects();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className={styles.sectionTitle}>
            Featured Projects
          </motion.h2>
          <motion.p variants={itemVariants} className={styles.sectionSubtitle}>
            A showcase of my latest work and personal projects
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className={styles.filterContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className={styles.filterButtons}>
            <FiFilter className={styles.filterIcon} />
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`${styles.filterButton} ${
                  filter === category ? styles.active : ''
                }`}
                onClick={() => setFilter(category)}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className={styles.projectsGrid}
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${filter}`}
                className={`${styles.projectCard} ${
                  project.featured ? styles.featured : ''
                }`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                custom={index}
                whileHover={{ y: -10 }}
              >
                <div className={styles.projectImage}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.projectLinks}>
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FiGithub />
                      </Link>
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                        aria-label={`View ${project.title} live demo`}
                      >
                        <FiExternalLink />
                      </Link>
                    </div>
                  </div>
                  {project.featured && (
                    <div className={styles.featuredBadge}>
                      ⭐ Featured
                    </div>
                  )}
                </div>

                <div className={styles.projectContent}>
                  <div className={styles.projectHeader}>
                    <span className={styles.projectCategory}>
                      {project.category}
                    </span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                  </div>

                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>

                  <div className={styles.projectTech}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={styles.projectActions}>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.actionButton}
                    >
                      <FiGithub />
                      Code
                    </Link>
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.actionButton} ${styles.primary}`}
                    >
                      <FiExternalLink />
                      Live Demo
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More/Less Button */}
        {projects.length > 6 && (
          <motion.div
            className={styles.showMoreContainer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              className={styles.showMoreButton}
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? 'Show Less' : `Show All ${projects.length} Projects`}
            </motion.button>
          </motion.div>
        )}

        {/* Project Stats */}
        <motion.div
          className={styles.projectStats}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className={styles.stat}>
            <span className={styles.statNumber}>{projects.length}</span>
            <span className={styles.statLabel}>Total Projects</span>
          </motion.div>
          <motion.div variants={itemVariants} className={styles.stat}>
            <span className={styles.statNumber}>
              {projects.filter(p => p.category === 'Full Stack').length}
            </span>
            <span className={styles.statLabel}>Full Stack Apps</span>
          </motion.div>
          <motion.div variants={itemVariants} className={styles.stat}>
            <span className={styles.statNumber}>
              {Array.from(new Set(projects.flatMap(p => p.technologies))).length}
            </span>
            <span className={styles.statLabel}>Technologies Used</span>
          </motion.div>
          <motion.div variants={itemVariants} className={styles.stat}>
            <span className={styles.statNumber}>
              {projects.filter(p => p.featured).length}
            </span>
            <span className={styles.statLabel}>Featured Projects</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
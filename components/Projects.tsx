'use client';

import React, { useState } from 'react';
import styles from './Projects.module.css';
import { projects, Project, getFeaturedProjects, getProjectsByCategory } from '@/data/projects';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const categories = ['all', 'featured', 'frontend', 'backend', 'full stack'];

  const getFilteredProjects = () => {
    let filtered = projects;

    if (filter === 'featured') {
      filtered = getFeaturedProjects();
    } else if (filter !== 'all') {
      filtered = getProjectsByCategory(filter.charAt(0).toUpperCase() + filter.slice(1));
    }

    // Custom sorting: featured projects first, then others, alternating categories
    filtered = filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;
      return 0;
    });

    return showAll ? filtered : filtered.slice(0, 6);
  };

  const filteredProjects = getFilteredProjects();

  // Separate featured and other projects
  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className={`${styles.projects} section-padding`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>

        <div className={styles.filterButtons}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${filter === category ? styles.active : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.projectsGrid}>
          <div className={styles.featuredColumn}>
            {featuredProjects.map((project: Project) => (
              <div
                key={project.id}
                className={`${styles.projectCard} ${styles.featured}`}
              >
                <div className={styles.projectImageWrapper}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                  />
                  {project.featured && (
                    <div className={styles.featuredBadge}>Featured</div>
                  )}
                </div>
                <div className={styles.projectContent}>
                  <div className={styles.projectHeader}>
                    <span className={styles.projectCategory}>{project.category}</span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                  </div>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectTech}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.projectTechItem}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={styles.projectActions}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.actionButton} ${styles.githubButton}`}
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FiGithub />
                        GitHub
                      </a>
                    )}
                    {project.demoUrl && project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.actionButton} ${styles.primary}`}
                        aria-label={`View ${project.title} live demo`}
                      >
                        <FiExternalLink />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.otherProjectsColumn}>
            {otherProjects.map((project: Project) => (
              <div
                key={project.id}
                className={styles.projectCard}
              >
                <div className={styles.projectImageWrapper}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                  />
                  {project.featured && (
                    <div className={styles.featuredBadge}>Featured</div>
                  )}
                </div>
                <div className={styles.projectContent}>
                  <div className={styles.projectHeader}>
                    <span className={styles.projectCategory}>{project.category}</span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                  </div>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectTech}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.projectTechItem}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={styles.projectActions}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.actionButton} ${styles.githubButton}`}
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FiGithub />
                        GitHub
                      </a>
                    )}
                    {project.demoUrl && project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.actionButton} ${styles.primary}`}
                        aria-label={`View ${project.title} live demo`}
                      >
                        <FiExternalLink />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {projects.length > 6 && (
          <button
            className={styles.showMoreButton}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : `Show All ${projects.length} Projects`}
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;

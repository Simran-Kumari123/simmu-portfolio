'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiHeart ,FiYoutube } from 'react-icons/fi';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com/Simran-Kumari123'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/simran-kumari-403737292/'
    },

      {
    icon: FiYoutube,
    label: 'YouTube',
    href: 'https://www.youtube.com/@simrankumari1480'
  },
    
    {
      icon: FiMail,
      label: 'Email',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=simrankumari02184@gmail.com'
    }
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div
          className={styles.footerContent}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.footerSection}>
            <div className={styles.brand}>
              <h3 className={styles.brandName}>Simran</h3>
              <p className={styles.brandDescription}>
                Full Stack Developer passionate about creating exceptional digital experiences.
              </p>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Connect</h4>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
            <p className={styles.contactInfo}>
              Available for freelance work and full-time opportunities.
            </p>
          </div>
        </motion.div>

        <motion.div
          className={styles.footerBottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.copyright}>
            <p>
              © {currentYear} Simran.All rights reserved.
            </p>
          </div>
          
          <div className={styles.madeWith}>
            <p>
              Made with <FiHeart className={styles.heartIcon} /> using Next.js & TypeScript
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradient}></div>
      </div>
    </footer>
  );
};

export default Footer;
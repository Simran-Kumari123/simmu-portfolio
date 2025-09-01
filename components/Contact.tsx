'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiYoutube } from 'react-icons/fi';
import styles from './Contact.module.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace with your actual form submission logic
      // Example: Formspree, Netlify Forms, or your own API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'simrankumari02184@gmail.com',
      href: 'mailto:simrankumari02184@gmail.com'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 (555) 123-4567',
      href: 'tel:+91 900000000'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Rajkot, Gujarat, India',
      href: '#'
    }
  ];

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
     }
  
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className={styles.sectionTitle}>
            Get In Touch
          </motion.h2>
          <motion.p variants={itemVariants} className={styles.sectionSubtitle}>
            Let's work together to bring your ideas to life
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.contactContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Let's Connect</h3>
            <p className={styles.infoDescription}>
              I'm always open to discussing new opportunities, creative projects, 
              or just having a friendly chat about technology and development.
            </p>

            <div className={styles.contactItems}>
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className={styles.contactItem}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  custom={index}
                >
                  <div className={styles.contactIcon}>
                    <item.icon />
                  </div>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactLabel}>{item.label}</span>
                    <span className={styles.contactValue}>{item.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>Follow Me</h4>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className={styles.contactForm}>
            <h3 className={styles.formTitle}>Send Me a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`${styles.input} ${errors.name ? styles.error : ''}`}
                    placeholder="Your full name"
                    {...register('name', { 
                      required: 'Name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters'
                      }
                    })}
                  />
                  {errors.name && (
                    <span className={styles.errorMessage}>{errors.name.message}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`${styles.input} ${errors.email ? styles.error : ''}`}
                    placeholder="your.email@example.com"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <span className={styles.errorMessage}>{errors.email.message}</span>
                  )}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  className={`${styles.input} ${errors.subject ? styles.error : ''}`}
                  placeholder="What's this about?"
                  {...register('subject', { 
                    required: 'Subject is required',
                    minLength: {
                      value: 5,
                      message: 'Subject must be at least 5 characters'
                    }
                  })}
                />
                {errors.subject && (
                  <span className={styles.errorMessage}>{errors.subject.message}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
                  placeholder="Tell me about your project or just say hello!"
                  {...register('message', { 
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters'
                    }
                  })}
                />
                {errors.message && (
                  <span className={styles.errorMessage}>{errors.message.message}</span>
                )}
              </div>

              <motion.button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className={styles.loadingSpinner}></span>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  className={styles.successMessage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✅ Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className={styles.errorMessage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ❌ Sorry, there was an error sending your message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className={styles.cta}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to Start a Project?</h3>
            <p className={styles.ctaDescription}>
              I'm available for freelance work and full-time opportunities. 
              Let's create something amazing together!
            </p>
            <motion.a
              href="mailto:your.email@example.com"
              className={styles.ctaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
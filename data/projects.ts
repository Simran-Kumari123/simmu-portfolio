export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
  category: string;
}

export const projects: Project[] = [
 {
  id: '1',
  title: 'Cosmetic & Beauty Store Website',
  description: 'A static website for a cosmetic and beauty products store with multiple pages and responsive design.',
  longDescription: 'This is a modern, responsive static website for a cosmetic and beauty products store. It features multiple pages including home, product listings, blog, contact, cart, and user account management. Key features include product search, shopping cart functionality, blog section for beauty tips, and responsive CSS styling for mobile and desktop users.',
  image: '/ecommerce.png',
  technologies: ['HTML5', 'CSS3', 'JavaScript'],
  githubUrl: 'https://github.com/Simran-Kumari123/Ecommerce-website',
  demoUrl: 'https://cosmetic-store-demo.netlify.app',
  featured: false,
  category: 'Frontend'
},

  {
    id: '2',
    title: 'Vaishali Website',
    description: 'A responsive website built to showcase Vaishali. Includes modern UI design and clean code.',
    longDescription: 'A beautiful, responsive tourism website showcasing the historical and cultural significance of Vaishali, Bihar — the world\'s first republic.',
    image: '/vaishali.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Simran-Kumari123/vaishali-website',
    demoUrl: 'https://gleeful-rabanadas-638549.netlify.app/',
    featured: true,
    category: 'Frontend'
  },
  {
    id: '3',
    title: 'Foodie Restaurant Website 🍽️',
    description: 'A modern, responsive full-stack restaurant website with menu, reservations, and team showcase.',
    longDescription: 'Foodie is a full-stack web application for restaurants, built with React, Node.js, Express, and MongoDB. It allows customers to browse menus, make online reservations, learn about the restaurant’s story and team, and explore its features. The app is designed with responsive UI for a smooth experience across desktop, tablet, and mobile.',
    image: '/food.png',
    technologies: ['React', 'Vite', 'CSS3', 'JavaScript ES6+', 'Node.js', 'Express.js', 'MongoDB'],
    githubUrl: 'https://github.com/Simran-Kumari123/Foodie',
    demoUrl: '#',
    featured: true,
    category: 'Full Stack'
  },
  {
    id: '4',
    title: 'Social Media API',
    description: 'RESTful API for a social media platform with authentication and real-time features.',
    longDescription: 'A robust RESTful API built for a social media platform. Includes user authentication, post creation and management, real-time messaging, friend connections, image uploads, and comprehensive API documentation with Swagger.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.io', 'Cloudinary'],
    githubUrl: 'https://github.com/yourusername/social-media-api',
    demoUrl: 'https://api-docs-demo.vercel.app',
    featured: false,
    category: 'Backend'
  },

 {
  id: '5',
  title: 'Portfolio Website',
  description: 'Modern, responsive portfolio website built with Next.js and TypeScript.',
  longDescription: 'A modern portfolio website showcasing projects and skills. Features smooth animations, responsive design, contact form integration, SEO optimization, and accessibility compliance. Built with Next.js 13+ app router and deployed on Vercel, it serves as a professional showcase of development work and capabilities.',
  image: '/portfolio.png',
  technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'CSS Modules', 'Vercel'],
  githubUrl: 'https://github.com/yourusername/portfolio',
  demoUrl: 'https://yourportfolio.vercel.app',
  featured: true,
  category: 'Frontend'
},


  {
    id: '6',
    title: 'AI Chat Application',
    description: 'Intelligent chat application powered by OpenAI with conversation history.',
    longDescription: 'An AI-powered chat application that integrates with OpenAI\'s GPT models. Features include conversation history, message threading, user authentication, customizable AI personalities, and export functionality for chat histories.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'OpenAI API', 'Prisma', 'PostgreSQL', 'NextAuth.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/ai-chat-app',
    demoUrl: 'https://ai-chat-demo.vercel.app',
    featured: false,
    category: 'Full Stack'
  },
  // ✅ New Projects Below
  {
    id: '7',
    title: 'Task Manager App',
    description: 'A productivity web app to manage tasks with drag-and-drop boards.',
    longDescription: 'A Trello-like task manager built with React and Firebase. Features include user authentication, drag-and-drop task management, deadlines, priority levels, and team collaboration.',
    image: '/blog.png',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'React DnD'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    demoUrl: 'https://taskmanager-demo.vercel.app',
    featured: false,
    category: 'Frontend'
  },
  {
    id: '8',
    title: 'Interactive Quiz App',
   description: 'A web-based quiz application with multiple topics, timer, and performance tracking.',
  longDescription: 'An interactive quiz app built with HTML, CSS, and JavaScript. Users can take quizzes on various topics including Programming, Geography, Mathematics, and Entertainment. Features include a countdown timer, multiple-choice questions, and a results page that shows user performance at the end. Ideal for practicing knowledge and having fun with quizzes.',
  image: '/quiz.png',
  technologies: ['HTML5', 'CSS3', 'JavaScript'],
  githubUrl: 'https://github.com/Simran-Kumari123/Online-Quiz',
  demoUrl: 'https://online-quiz-demo.netlify.app',
  featured: false,
  category: 'Frontend'
},

  {
    id: '9',
    title: 'Blog Platform',
    description: 'A blogging platform with markdown support and admin panel.',
    longDescription: 'A modern, responsive React-based blog platform with a complete commenting system and image upload capabilities. Built with Vite for fast development and optimized performance.',
    image: '/blog.png',
   technologies: ['React 18.2.0', 'React Router DOM 6.8.0', 'Vite 4.1.0', 'CSS3', 'localStorage'],
    githubUrl: 'https://github.com/Simran-Kumari123/Simran-Blog-Platform',
    demoUrl: 'https://blogcms-demo.vercel.app',
    featured: false,
    category: 'Frontend'
  }
];


export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};
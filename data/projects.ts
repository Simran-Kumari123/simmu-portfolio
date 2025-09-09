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
    githubUrl: 'https://github.com/Simran-Kumari123/Foodiee',
    demoUrl: 'https://foodiee-eosin.vercel.app/',
    featured: true,
    category: 'Full Stack'
  },
  {
    id: '4',
    title: 'Wedding Planner Website',
    description: 'A comprehensive wedding planning web application built with React frontend and Node.js backend. This application helps couples organize their wedding with features like vendor directory, budget management, guest list management, RSVP tracking, and wedding checklist.',
    longDescription: 'A comprehensive wedding planning web application built with React frontend and Node.js backend. This application helps couples organize their wedding with features like vendor directory, budget management, guest list management, RSVP tracking, and wedding checklist. Features include home page with wedding countdown and photo gallery, planning tools, vendor directory, budget manager, guest list, RSVP tracker, wedding checklist, and photo gallery. Backend provides RESTful API endpoints for all wedding planning features with CORS enabled.',
    image: '/wedding.png',
    technologies: ['React', 'React Router', 'Bootstrap', 'Axios', 'Node.js', 'Express.js', 'CORS'],
    githubUrl: 'https://github.com/Simran-Kumari123/Wedding-Planner-Website',
    demoUrl: '#',
    featured: false,
    category: 'Full Stack'
  },    

 {
  id: '5',
  title: 'Portfolio Website',
  description: 'Modern, responsive portfolio website built with Next.js and TypeScript.',
longDescription: 'A modern portfolio website showcasing projects and skills. Features smooth animations, responsive design, contact form integration, SEO optimization, and accessibility compliance. Built with Next.js 13+ app router and deployed on Vercel, it serves as a professional showcase of development work and capabilities. While deploying on Vercel, I encountered errors such as FUNCTION_INVOCATION_TIMEOUT (504) and DEPLOYMENT_NOT_FOUND (404). I debugged these by optimizing function execution and verifying DNS settings, which improved deployment reliability.',
  image: '/portfolio.png',
  technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'CSS Modules', 'Vercel'],
  githubUrl: 'https://github.com/Simran-Kumari123/simmu-portfolio',
  demoUrl: 'https://simmu-portfolio.vercel.app/',
  featured: true,
  category: 'Frontend'
},


 {
  id: '6',
  title: 'HireHub',
  description: 'Modern job portal built with Next.js 14, React 18, and Tailwind CSS.',
  longDescription: 'HireHub is a comprehensive job portal application leveraging a modern tech stack for optimal performance and user experience. The frontend is powered by Next.js 14, a React-based framework that provides server-side rendering, static site generation, and excellent developer experience with features like automatic code splitting and optimized bundling. The application uses React 18 as its core JavaScript library for building interactive user interfaces with component-based architecture. For styling, the project utilizes Tailwind CSS 3.3, a utility-first CSS framework that enables rapid UI development with pre-built classes and responsive design capabilities. TypeScript 5 adds type safety and better code maintainability, while ESLint ensures clean and consistent code quality. With PostCSS and Autoprefixer, the styling is fully cross-browser compatible. The project structure follows Next.js conventions with pages-based routing, reusable components, utility functions for authentication and storage management, and optimized static assets handling. This tech stack ensures fast loading times, SEO optimization, responsive design across devices, and a scalable architecture suitable for deployment on platforms like Vercel or Netlify.',
  image: '/hirehub.png',
  technologies: ['Next.js 14', 'React 18', 'Tailwind CSS 3.3', 'TypeScript 5', 'PostCSS', 'ESLint'],
  githubUrl: 'https://github.com/Simran-Kumari123/HireHub',
  demoUrl: 'https://hire-hub-eosin.vercel.app/',
  featured: false,
  category: 'Frontend'
},

 
  {
    id: '7',
    title: 'Travelmate- Tourist Website',
    description: 'Travelmate is a task management tool with boards, cards, deadlines, and team collaboration features.',
    longDescription: 'A Trello-like task manager built with React and Firebase. Features include user authentication, drag-and-drop task management, deadlines, priority levels, and team collaboration.',
    image: '/travel.png',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'React DnD'],
    githubUrl: 'https://github.com/Simran-Kumari123/travelmate',
    demoUrl: ' ',
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
  demoUrl: ' https://online-quiz-bice.vercel.app/',
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
    demoUrl: ' ',
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
export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  proficiency: number; // 1-5 scale
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: 'SiReact', category: 'frontend', proficiency: 5 },
  { name: 'Next.js', icon: 'SiNextdotjs', category: 'frontend', proficiency: 5 },
  { name: 'TypeScript', icon: 'SiTypescript', category: 'frontend', proficiency: 4 },
  { name: 'JavaScript', icon: 'SiJavascript', category: 'frontend', proficiency: 5 },
  { name: 'HTML5', icon: 'SiHtml5', category: 'frontend', proficiency: 5 },
  { name: 'CSS3', icon: 'SiCss3', category: 'frontend', proficiency: 5 },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss', category: 'frontend', proficiency: 4 },
  { name: 'Sass', icon: 'SiSass', category: 'frontend', proficiency: 4 },
  { name: 'Vue.js', icon: 'SiVuedotjs', category: 'frontend', proficiency: 3 },
  
  // Backend
  { name: 'Node.js', icon: 'SiNodedotjs', category: 'backend', proficiency: 4 },
  { name: 'Express.js', icon: 'SiExpress', category: 'backend', proficiency: 4 },
  { name: 'Python', icon: 'SiPython', category: 'backend', proficiency: 4 },
  { name: 'Django', icon: 'SiDjango', category: 'backend', proficiency: 3 },
  { name: 'FastAPI', icon: 'SiFastapi', category: 'backend', proficiency: 3 },
  { name: 'PHP', icon: 'SiPhp', category: 'backend', proficiency: 3 },
  { name: 'Laravel', icon: 'SiLaravel', category: 'backend', proficiency: 3 },
  
  // Database
  { name: 'MongoDB', icon: 'SiMongodb', category: 'database', proficiency: 4 },
  { name: 'PostgreSQL', icon: 'SiPostgresql', category: 'database', proficiency: 4 },
  { name: 'MySQL', icon: 'SiMysql', category: 'database', proficiency: 4 },
  { name: 'Redis', icon: 'SiRedis', category: 'database', proficiency: 3 },
  { name: 'Prisma', icon: 'SiPrisma', category: 'database', proficiency: 4 },
  
  // Tools
  { name: 'Git', icon: 'SiGit', category: 'tools', proficiency: 5 },
  { name: 'Docker', icon: 'SiDocker', category: 'tools', proficiency: 3 },
  { name: 'AWS', icon: 'SiAmazonaws', category: 'tools', proficiency: 3 },
  { name: 'Vercel', icon: 'SiVercel', category: 'tools', proficiency: 4 },
  { name: 'Figma', icon: 'SiFigma', category: 'tools', proficiency: 4 },
  { name: 'VS Code', icon: 'SiVisualstudiocode', category: 'tools', proficiency: 5 },
  
  // Other
  { name: 'GraphQL', icon: 'SiGraphql', category: 'other', proficiency: 3 },
  { name: 'Socket.io', icon: 'SiSocketdotio', category: 'other', proficiency: 3 },
  { name: 'Jest', icon: 'SiJest', category: 'other', proficiency: 3 },
  { name: 'Cypress', icon: 'SiCypress', category: 'other', proficiency: 3 },
];

export const getSkillsByCategory = (category: string) => {
  return skills.filter(skill => skill.category === category);
};

export const skillCategories = [
  { key: 'frontend', label: 'Frontend', color: '#667eea' },
  { key: 'backend', label: 'Backend', color: '#764ba2' },
  { key: 'database', label: 'Database', color: '#f093fb' },
  { key: 'tools', label: 'Tools & DevOps', color: '#4facfe' },
  { key: 'other', label: 'Other', color: '#43e97b' },
];
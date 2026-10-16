import Bootstrap from '../Assets/Skillsimg/Bootstrap.png'
import css from '../Assets/Skillsimg/CSS3.png'
import express from '../Assets/Skillsimg/Express.png'
import git from '../Assets/Skillsimg/Git.png'
import framer from '../Assets/Skillsimg/framermotion.jpeg'
import gsap from '../Assets/Skillsimg/Gsap.png'
import html from '../Assets/Skillsimg/html.png'
import js from '../Assets/Skillsimg/js.png'
import material from '../Assets/Skillsimg/Material.png'
import mongodb from '../Assets/Skillsimg/MongoDB.png'
import nextjs from '../Assets/Skillsimg/next.png'
import nodejs from '../Assets/Skillsimg/Node.js.png'
import reactbootstrap from '../Assets/Skillsimg/ReactBootstrap.png'
import react from '../Assets/Skillsimg/React.png'
import socket from '../Assets/Skillsimg/socket.png'
import redux from '../Assets/Skillsimg/redux.png'
import tailwind from '../Assets/Skillsimg/tailwind.png'
import typescript from '../Assets/Skillsimg/TypeScript.png'

const SkillsData = [
  /* ================= FRONTEND ================= */
  {
    id: 0,
    name: 'React',
    imgSkills: react,
    link: 'https://react.dev/',
    category: 'Frontend',
    level: 92,
  },
  {
    id: 1,
    name: 'Tailwind CSS',
    imgSkills: tailwind,
    link: 'https://tailwindcss.com/docs/installation/using-vite',
    category: 'Frontend',
    level: 90,
  },
  {
    id: 7,
    name: 'Next.js',
    imgSkills: nextjs,
    link: 'https://nextjs.org/',
    category: 'Frontend',
    level: 80,
  },
  {
    id: 8,
    name: 'Material UI',
    imgSkills: material,
    link: 'https://mui.com/material-ui/getting-started/',
    category: 'Frontend',
    level: 85,
  },
  {
    id: 10,
    name: 'React Bootstrap',
    imgSkills: reactbootstrap,
    link: 'https://react-bootstrap.netlify.app/docs/getting-started/introduction',
    category: 'Frontend',
    level: 85,
  },
  {
    id: 17,
    name: 'Bootstrap',
    imgSkills: Bootstrap,
    link: 'https://getbootstrap.com/',
    category: 'Frontend',
    level: 88,
  },
  {
    id: 14,
    name: 'Redux',
    imgSkills: redux,
    link: 'https://redux.js.org/',
    category: 'Frontend',
    level: 80,
  },
  {
    id: 13,
    name: 'Framer Motion',
    imgSkills: framer,
    link: 'https://www.framer.com/motion/',
    category: 'Animation',
    level: 88,
  },
  {
    id: 16,
    name: 'GSAP',
    imgSkills: gsap,
    link: 'https://gsap.com/',
    category: 'Animation',
    level: 85,
  },

  /* ================= LANGUAGES ================= */
  {
    id: 3,
    name: 'JavaScript',
    imgSkills: js,
    link: 'https://www.w3schools.com/js/',
    category: 'Languages',
    level: 90,
  },
  {
    id: 12,
    name: 'TypeScript',
    imgSkills: typescript,
    link: 'https://www.w3schools.com/typescript/typescript_intro.php',
    category: 'Languages',
    level: 78,
  },
  {
    id: 6,
    name: 'HTML5',
    imgSkills: html,
    link: 'https://www.w3schools.com/html/default.asp',
    category: 'Languages',
    level: 95,
  },
  {
    id: 5,
    name: 'CSS3',
    imgSkills: css,
    link: 'https://www.w3schools.com/css/',
    category: 'Languages',
    level: 92,
  },

  /* ================= BACKEND ================= */
  {
    id: 2,
    name: 'Node.js',
    imgSkills: nodejs,
    link: 'https://nodejs.org/en',
    category: 'Backend',
    level: 85,
  },
  {
    id: 4,
    name: 'Express.js',
    imgSkills: express,
    link: 'https://expressjs.com/',
    category: 'Backend',
    level: 85,
  },
  {
    id: 15,
    name: 'Socket.io',
    imgSkills: socket,
    link: 'https://socket.io/',
    category: 'Backend',
    level: 75,
  },

  /* ================= DATABASE ================= */
  {
    id: 9,
    name: 'MongoDB',
    imgSkills: mongodb,
    link: 'https://www.mongodb.com/',
    category: 'Database',
    level: 82,
  },

  /* ================= TOOLS ================= */
  {
    id: 11,
    name: 'Git',
    imgSkills: git,
    link: 'https://git-scm.com/',
    category: 'Tools',
    level: 88,
  },
];

export default SkillsData;
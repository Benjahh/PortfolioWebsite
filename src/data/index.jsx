import {
  SiExpress,
  SiNodedotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVite,
  SiMongodb,
  SiGit,
  SiFramer,
  SiNextdotjs,
  SiVisualstudiocode,
} from 'react-icons/si';

import testImage from '../assets/iamges/test_image.png';

export const navbarLinks = [
  {
    link: '#home',
    linkName: 'HOME',
  },
  {
    link: '#about',
    linkName: 'ABOUT',
  },
  {
    link: '#projects',
    linkName: 'PROJECTS',
  },
  {
    link: '#contact',
    linkName: 'CONTACT',
  },
];

export const techStack = [
  {
    stackName: 'Back-End Tech',
    stack: [
      {
        skillName: 'NodeJS',
        Icon: <SiNodedotjs size="30" />,
      },
      {
        skillName: 'MongoDB',
        Icon: <SiMongodb size="30" />,
      },
      {
        skillName: 'ExpressJS',
        Icon: <SiExpress size="30" />,
      },
    ],
  },
  {
    stackName: 'Front-End Tech',
    stack: [
      {
        skillName: 'TypeScript',
        Icon: <SiTypescript size="30" />,
      },
      {
        skillName: 'JavaScript',
        Icon: <SiJavascript size="30" />,
      },
      {
        skillName: 'Nextjs',
        Icon: <SiNextdotjs size="30" />,
      },
      {
        skillName: 'ReactJS',
        Icon: <SiReact size="30" />,
      },
      {
        skillName: 'Framer ',
        Icon: <SiFramer size="30" />,
      },
      {
        skillName: 'Tailwind',
        Icon: <SiTailwindcss size="30" />,
      },
    ],
  },
  {
    stackName: 'Other Tech',
    stack: [
      {
        skillName: 'Vite',
        Icon: <SiVite size="30" />,
      },
      {
        skillName: 'Git',
        Icon: <SiGit size="30" />,
      },
      {
        skillName: 'Vscode',
        Icon: <SiVisualstudiocode size="30" />,
      },
    ],
  },
];

export const projects = [
  {
    projectName: 'WebScrapingApp',
    projectType: 'PRACTICE PROJECT',
    projectRepo: 'https://github.com/Benjahh/benjahh.github.io',
    projectLink: 'https://facebook.com',
    projectDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni quam molestiae culpa unde sequi cum nesciunt repellat, similique quia atque eaque suscipit nam possimus quos, labore ipsam velit laboriosam?',
    projectImage: testImage,
    reverse: false,
    projectSkill: [
      {
        skillName: 'NextJS,',
        Icon: <SiReact size="" />,
        color: '#ff1e7a',
      },
      {
        skillName: 'TailWindcss,',
        Icon: <SiTailwindcss size="" />,
        color: '#FF5337',
      },
      {
        skillName: 'TypeScript,',
        Icon: <SiTypescript size="" />,
        color: '#5e3ad8',
      },
      {
        skillName: 'HeadlessUI,',
        Icon: <SiTypescript size="" />,
        color: '#5e3ad8',
      },
      {
        skillName: 'Redux',
        Icon: <SiTypescript size="" />,
        color: '#5e3ad8',
      },
    ],
  },
  {
    projectName: 'ThreadsApp',
    projectType: 'PRACTICE PROJECT',
    projectRepo: 'https://github.com/Benjahh/benjahh.github.io',
    projectLink: 'https://google.com',
    projectDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni quam molestiae culpa unde sequi cum nesciunt repellat, similique quia atque eaque suscipit nam possimus quos, labore ipsam velit laboriosam?',
    projectImage: testImage,
    reverse: true,
    projectSkill: [
      {
        skillName: 'NextJS,',
        Icon: <SiReact size="" />,
        color: '#ff1e7a',
      },
      {
        skillName: 'TailWindcss,',
        Icon: <SiTailwindcss size="" />,
        color: '#FF5337',
      },
      {
        skillName: 'TypeScript,',
        Icon: <SiTypescript size="" />,
        color: '#5e3ad8',
      },
      {
        skillName: 'HeadlessUI,',
        Icon: <SiTypescript size="" />,
        color: '#5e3ad8',
      },
      {
        skillName: 'Redux',
        Icon: <SiTypescript size="" />,
        color: '#5e3ad8',
      },
    ],
  },
  {
    projectName: 'CarShowcaseApp',
    projectType: 'PRACTICE PROJECT',

    projectRepo: 'https://github.com/Benjahh/benjahh.github.io',
    projectLink: 'https://google.com',
    projectDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni quam molestiae culpa unde sequi cum nesciunt repellat, similique quia atque eaque suscipit nam possimus quos, labore ipsam velit laboriosam?',
    projectImage: testImage,
    reverse: false,
    projectSkill: [
      {
        skillName: 'NextJS,',
        Icon: <SiReact size="" />,
        color: '#ff1e7a',
      },
      {
        skillName: 'TailWindcss,',
        Icon: <SiTailwindcss size="" />,
        color: '#FF5337',
      },
      {
        skillName: 'TypeScript,',
        Icon: <SiTypescript size="" />,
        color: '#5e3ad8',
      },
      {
        skillName: 'HeadlessUI,',
        Icon: <SiTypescript size="" />,
        color: '#5e3ad8',
      },
      {
        skillName: 'Redux',
        Icon: <SiTypescript size="" />,
        color: '#5e3ad8',
      },
    ],
  },
  {
    projectName: 'BlockChainApp',
    projectType: 'PRACTICE PROJECT',
    projectRepo: 'https://github.com/Benjahh/benjahh.github.io',
    projectLink: 'https://google.com',
    projectDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni quam molestiae culpa unde sequi cum nesciunt repellat, similique quia atque eaque suscipit nam possimus quos, labore ipsam velit laboriosam?',
    projectImage: testImage,
    reverse: true,
    projectSkill: [
      {
        skillName: 'NextJS,',
        Icon: <SiReact size="" />,
        color: '#ff1e7a',
      },
      {
        skillName: 'TailWindcss,',
        Icon: <SiTailwindcss size="" />,
        color: '#FF5337',
      },
      {
        skillName: 'TypeScript,',
        Icon: <SiTypescript size="" />,
        color: '#5e3ad8',
      },
      {
        skillName: 'HeadlessUI,',
        Icon: <SiTypescript size="" />,
        color: '#5e3ad8',
      },
      {
        skillName: 'Redux',
        Icon: <SiTypescript size="" />,
        color: '#5e3ad8',
      },
    ],
  },
];

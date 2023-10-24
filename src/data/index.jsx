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
  SiRedux,
  SiFramer,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiNpm,
  SiHeadlessui,
} from 'react-icons/si';
import { DiNpm } from 'react-icons/di';

import testImage from '../assets/iamges/test_image.png';

export const flexBetweeen = 'flex justify-center items-center';

export const frontEndTech = [
  {
    skillName: 'TypeScript',
    Icon: <SiTypescript size="80" />,
  },

  {
    skillName: 'JavaScript',
    Icon: <SiJavascript size="80" />,
  },

  {
    skillName: 'Nextjs',
    Icon: <SiNextdotjs size="80" />,
  },
  {
    skillName: 'ReactJS',
    Icon: <SiReact size="80" />,
  },
  {
    skillName: 'FramerMotion',
    Icon: <SiFramer size="80" />,
  },
  {
    skillName: 'Tailwindcss',
    Icon: <SiTailwindcss size="80" />,
  },
];

export const backEndTech = [
  {
    skillName: 'NodeJS',
    Icon: <SiNodedotjs size="80" />,
  },

  {
    skillName: 'MongoDB',
    Icon: <SiMongodb size="80" />,
  },
  {
    skillName: 'ExpressJS',
    Icon: <SiExpress size="80" />,
  },
];

export const otherTech = [
  {
    skillName: 'Vite',
    Icon: <SiVite size="80" />,
  },
  {
    skillName: 'Git',
    Icon: <SiGit size="80" />,
  },

  {
    skillName: 'Npm',
    Icon: <DiNpm size="80" />,
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
        skillName: 'ReactJS',
        Icon: <SiReact size="" />,
      },
      {
        skillName: 'Tailwindcss',
        Icon: <SiTailwindcss size="" />,
      },
      {
        skillName: 'TypeScript',
        Icon: <SiTypescript size="" />,
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
        skillName: 'ReactJS',
        Icon: <SiReact size="" />,
      },
      {
        skillName: 'Tailwindcss',
        Icon: <SiTailwindcss size="" />,
      },
      {
        skillName: 'TypeScript',
        Icon: <SiTypescript size="" />,
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
        skillName: 'ReactJS',
        Icon: <SiReact size="" />,
      },
      {
        skillName: 'Tailwindcss',
        Icon: <SiTailwindcss size="" />,
      },
      {
        skillName: 'TypeScript',
        Icon: <SiTypescript size="" />,
      },
    ],
  },
];

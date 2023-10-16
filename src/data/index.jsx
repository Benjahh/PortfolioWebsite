import {
  SiExpress,
  SiNodedotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVite,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiGit,
  SiRedux,
  SiNextdotjs,
} from 'react-icons/si';

import testImage from '../assets/iamges/test_image.png';

export const flexBetweeen = 'flex justify-center items-center';

export const frontEndTech = [
  {
    skillName: 'ReactJS',
    Icon: <SiReact size="50" />,
  },
  {
    skillName: 'Tailwindcss',
    Icon: <SiTailwindcss size="50" />,
  },
  {
    skillName: 'TypeScript',
    Icon: <SiTypescript size="50" />,
  },

  {
    id: 4,
    skillName: 'JavaScript',
    Icon: <SiJavascript size="50" />,
  },
  {
    id: 5,
    skillName: 'HTML',
    Icon: <SiHtml5 size="50" />,
  },

  {
    id: 6,
    skillName: 'CSS',
    Icon: <SiCss3 size="50" />,
  },
  {
    id: 7,
    skillName: 'Nextjs',
    Icon: <SiNextdotjs size="50" />,
  },
];

export const backEndTech = [
  {
    skillName: 'NodeJS',
    Icon: <SiNodedotjs size="50" />,
  },

  {
    skillName: 'MongoDB',
    Icon: <SiMongodb size="50" />,
  },
  {
    skillName: 'ExpressJS',
    Icon: <SiExpress size="50" />,
  },
];

export const otherTech = [
  {
    skillName: 'Vite',
    Icon: <SiVite size="50" />,
  },
  {
    skillName: 'Git',
    Icon: <SiGit size="50" />,
  },
  {
    skillName: 'Redux',
    Icon: <SiRedux size="50" />,
  },
  {
    skillName: 'Vite',
    Icon: <SiVite size="50" />,
  },
  {
    skillName: 'Git',
    Icon: <SiGit size="50" />,
  },
  {
    skillName: 'Redux',
    Icon: <SiRedux size="50" />,
  },
];

export const projects = [
  {
    projectName: 'WebScrapingApp',
    projectType: 'Practice Project',
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
    projectType: 'Practice Project',
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
    projectType: 'Practice Project',

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
    projectType: 'Practice Project',
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

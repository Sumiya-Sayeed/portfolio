import {
  FaReact,
  FaNodeJs,
  FaGit,
  FaDocker,
  FaJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaAws
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiKubernetes,
  SiJira,
  SiTailwindcss,
  SiBootstrap,
  SiAws,
  SiAzuredevops,
  SiGraphql
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { GiTeamIdea, GiThink } from 'react-icons/gi';
import { IoTimerOutline } from 'react-icons/io5';
import { MdSyncProblem } from 'react-icons/md';
import { TbBrandElastic } from 'react-icons/tb';
import { LiaCriticalRole } from 'react-icons/lia';

export const skills = [
  {
    label: 'Core Languages',
    data: [
      { label: 'C++', icon: <SiCplusplus /> },
      { label: 'HTML', icon: <FaHtml5 /> },
      { label: 'Python', icon: <FaPython /> },
      { label: 'JavaScript', icon: <FaJs /> }
    ]
  },
  {
    label: 'Web Technologies',
    data: [
      { label: 'Node.js', icon: <FaNodeJs /> },
      { label: 'Express', icon: <SiExpress /> },
      { label: 'React', icon: <FaReact /> },
      { label: 'Redux', icon: <SiRedux /> },
      { label: 'RTK', icon: <SiRedux /> },
      { label: 'TypeScript', icon: <SiTypescript /> },
      { label: 'HonoJS', icon: <SiGraphql /> }, // No direct HonoJS icon, using GraphQL as placeholder
      { label: 'Next.js', icon: <SiNextdotjs /> }
    ]
  },
  {
    label: 'Frameworks & UI',
    data: [
      { label: 'Shadcn-UI' },
      { label: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { label: 'Bootstrap', icon: <SiBootstrap /> },
      { label: 'Axios' },
      { label: 'TanStack' },
      { label: 'React Hook Form' }
    ]
  },
  {
    label: 'Containerization',
    data: [
      { label: 'Docker', icon: <FaDocker /> },
      { label: 'Kubernetes', icon: <SiKubernetes /> }
    ]
  },
  {
    label: 'Deployment',
    data: [
      { label: 'CI/CD Pipelines' },
      { label: 'AWS', icon: <FaAws /> },
      { label: 'Azure', icon: <VscAzure /> }
    ]
  },
  {
    label: 'Version Control',
    data: [
      { label: 'Git', icon: <FaGit /> },
      { label: 'GitLab' },
      { label: 'Jira', icon: <SiJira /> }
    ]
  },
  {
    label: 'Others',
    data: [
      { label: 'Data Visualization' },
      { label: 'Monorepo' },
      { label: 'Nx' }
    ]
  },
  {
    label: 'Soft Skills',
    data: [
      { label: 'Time Management', icon: <IoTimerOutline /> },
      { label: 'Teamwork', icon: <GiTeamIdea /> },
      { label: 'Problem Solving', icon: <MdSyncProblem /> },
      { label: 'Flexibility', icon: <TbBrandElastic /> },
      { label: 'Critical Thinking', icon: <LiaCriticalRole /> }
    ]
  }
];

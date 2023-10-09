import { SiLinktree, SiGithub } from 'react-icons/si';

const ProjectCard = ({
  projectLink,
  projectImage,
  projectRepo,
  projectName,
  projectDescription,
  projectSkill,
}) => {
  return (
    <article>
      <div>{projectName}</div>
    </article>
  );
};

export default ProjectCard;

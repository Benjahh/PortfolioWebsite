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
      <div className="" data-carousel="slide" id="carousel">
        <div data-carousel-item>{projectName}</div>
      </div>
    </article>
  );
};

export default ProjectCard;

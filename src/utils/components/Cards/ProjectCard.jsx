import { SiLinktree, SiGithub } from 'react-icons/si';

const ProjectCard = ({
  projectLink,
  projectImage,
  projectRepo,
  projectName,
  projectType,
  projectDescription,
  projectSkill,
  reverse,
}) => {
  return (
    <article>
      <div>
        <img className="border h-60 w-60" />
        <div>
          <div>
            <header className="flex gap-2 flex-row">
              <h1>{projectName}</h1>
              <h2>{projectType}</h2>
            </header>
            <p>{projectDescription}</p>
          </div>
          <a href="">gith</a>
          <a href="">live</a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

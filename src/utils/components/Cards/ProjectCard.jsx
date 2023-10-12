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
    <article className="relative">
      <div className="flex-row flex">
        <div className="">
          <img fill className="a border object-fill h-60 w-60 bg-blue-950" />
        </div>
        <div className=" border-green-200 border">
          <div>
            <header className="flex gap-2 border flex-row">
              <h1 className="bg-yellow-300">{projectName}</h1>
              <h2 className="bg-yellow-400">{projectType}</h2>
            </header>
            <p className="p-2">{projectDescription}</p>
          </div>
          <div className="p-2 flex flex-row gap-2">
            <a href="" className="border p-1 rounded-md">
              gith
            </a>
            <a href="" className="p-1 border rounded-md">
              live
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

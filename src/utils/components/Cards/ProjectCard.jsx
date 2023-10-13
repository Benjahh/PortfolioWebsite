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
    <article className="relative  w-2/3 ">
      <div className="flex-row flex">
        <div className="">
          <img
            fill
            src={projectImage}
            alt="Project Image"
            className="  object-fill 
         bg-blue-950"
          />
        </div>
        <div className="relative flex flex-col ">
          <div>
            <header className="flex gap-2 ml-2 flex-row">
              <h1 className="bg-yellow-300 p-1 ">{projectName}</h1>
              <h2 className="bg-yellow-400 p-1">{projectType}</h2>
            </header>
            <p className="p-2 text-sm">{projectDescription}</p>
          </div>
          <div className="p-2 absolute right-0 bottom-0 m-2  self-end  flex flex-row gap-2">
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

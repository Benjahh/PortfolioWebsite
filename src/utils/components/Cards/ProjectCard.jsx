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
    <article className="relative  w-4/5 ">
      <div className="flex-row flex">
        <div className="self-center">
          <img
            fill
            src={projectImage}
            alt="Project Image"
            className=" object-fill border bg-blue-950"
          />
        </div>

        <div className="relative flex-col">
          <header className="flex gap-2 ml-2 text-md flex-row">
            <h1 className="bg-yellow-300 px-1 ">{projectName}</h1>
            <h2 className="bg-yellow-400 px-1">{projectType}</h2>
          </header>
          <div className="relative flex flex-col border p-2 auto ">
            <div className="border-b">
              <p className="text-sm my-2 ">{projectDescription}</p>
            </div>
            <div className="my-2 gap-2 text-sm flex flex-row italic">
              Built using
              {projectSkill.map(({ skillName, Icon, color }) => (
                <p className=""> {skillName}</p>
              ))}
            </div>
            <div className=" self-end text-sm flex flex-row gap-2">
              <a
                href=""
                className="border p- flex-between px-1 rounded-xl w-18  "
              >
                Source code
              </a>
              <a href="" className="px-1 border flex-between rounded-xl w-18">
                Live site
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

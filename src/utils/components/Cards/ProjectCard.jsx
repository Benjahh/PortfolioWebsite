import { SiGithub } from 'react-icons/si';
import { HiLink } from 'react-icons/hi2';

/* TODO: ANIMATION AND COLOR PALETTE */

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
      <div
        className={`${reverse ? 'flex-row-reverse' : 'flex-row'}
      flex`}
      >
        <div className="self-center absolute w-60 h-full p-1 bg-blue-300">
          <img
            fill
            src={projectImage}
            alt="Project Image"
            className="border w-full h-full"
          />
        </div>
        <div
          className={`my-6 mb-12 relative flex-col ${
            reverse
              ? 'lg:mr-40 lg:ml-20 mr-20 ml-10'
              : 'lg:ml-40 lg:mr-20 ml-20 mr-10'
          } `}
        >
          <header
            className={`flex gap-2  text-sm ${
              reverse ? 'flex-row ml-2' : 'flex-row-reverse mr-2'
            }`}
          >
            <h1 className="bg-yellow-300 p-1 ">{projectName}</h1>
            <h2 className="bg-yellow-400 p-1">{projectType}</h2>
          </header>
          <div className="relative flex flex-col border rounded-md p-5  ">
            <div className="border-b">
              <p className="text-xs mb-4 ">{projectDescription}</p>
            </div>
            <div className="my-2 gap-2 mt-4 text-xs flex flex-row italic">
              Built using
              {projectSkill.map(({ skillName, Icon, color }) => (
                <p className=""> {skillName}</p>
              ))}
            </div>
            <div
              className={`  text-xs mt-8 flex-row flex ${
                reverse ? 'self-startt' : 'self-end'
              } gap-2`}
            >
              <a
                href=""
                className="border gap-2 flex-between px-2 rounded-md w-18  "
              >
                Github <SiGithub />
              </a>
              <a
                href=""
                className="px-2 gap-2 border flex-between rounded-md w-18"
              >
                Live Site <HiLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

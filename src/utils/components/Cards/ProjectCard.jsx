import { SiGithub } from 'react-icons/si';
import { HiLink } from 'react-icons/hi2';
import { MoveOnScroll } from '../shared/MoveOnScroll';

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
    <article className="relative   ">
      <div
        className={`flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}
      flex`}
      >
        <div className="self-center border-2 border-white p-2 brightness-50 rounded-md absolute w-80 h-96">
          <img
            src={projectImage}
            alt="Project Image"
            className="w-full  h-full"
          />
        </div>
        <MoveOnScroll
          className={`my-6 mb-12 relative flex-col ${
            reverse
              ? 'lg:mr-40 lg:ml-20 mr-40 ml-10'
              : 'lg:ml-40 lg:mr-20 ml-40 mr-10'
          } `}
        >
          <header
            className={`flex text-primary gap-2 shadow-xl font-mono text-lg ${
              reverse ? 'flex-row ml-2' : 'flex-row-reverse mr-2'
            }`}
          >
            <h1 className="bg-yellow-300 py-1 px-2 ">{projectName}</h1>
            <h2 className="bg-accent py-1 px-2">{projectType}</h2>
          </header>
          <div className="shadow-xl relative flex text-primary flex-col bg-white  rounded-sm p-5  ">
            <div className="border-b-2 border-primary">
              <p className="text-sm font-medium font-openSans mb-4 ">
                {projectDescription}
              </p>
              <p className="text-sm font-medium font-openSans mb-4 ">
                {projectDescription}
              </p>
            </div>
            <div className=" font-openSans font-medium my-2 gap-1 mt-4 text-sm flex flex-row italic">
              Built using
              {projectSkill.map(({ skillName, Icon, color }) => (
                <p className=""> {skillName}</p>
              ))}
            </div>
            <div
              className={` text-white text-sm mt-8 flex-row flex ${
                reverse ? 'self-startt' : 'self-end'
              } gap-2`}
            >
              <a
                href=""
                className="border bg-black gap-2 flex-between py-[3px] px-2 rounded-sm w-18  "
              >
                Github <SiGithub />
              </a>
              <a
                href=""
                className="px-2 gap-2 bg-black border py-[3px] flex-between rounded-sm w-18"
              >
                Live Site <HiLink />
              </a>
            </div>
          </div>
        </MoveOnScroll>
      </div>
    </article>
  );
};

export default ProjectCard;

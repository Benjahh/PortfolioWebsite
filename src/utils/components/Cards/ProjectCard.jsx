import { SiGithub } from 'react-icons/si';
import { HiLink } from 'react-icons/hi2';
import { MoveOnScroll } from '../framerComponents/MoveOnScroll';
import { FadeInOnScroll } from '../framerComponents/FadeInOnScroll';
import { ScaleInView } from '../framerComponents/ScaleInView';

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
    <article className="relative ">
      <div
        className={`flex-col border-b-2   border-accent ${
          reverse
            ? 'md:flex-row-reverse border-l-2 '
            : ' border-r-2 md:flex-row'
        }
      flex`}
      >
        <div className="project__image">
          <img
            src={projectImage}
            alt="Project Image"
            className="w-full opacity-50 h-full"
          />
        </div>
        <MoveOnScroll
          className={`my-6 mb-12 flex relative flex-col ${
            reverse ? 'lg:mr-80 mr-40 ml-10' : 'lg:ml-80  ml-40 mr-10'
          } `}
        >
          <header
            className={`flex font-bold flex-col gap-2 font-mono text-xl ${
              reverse ? ' ml-2  items-start' : ' mr-2 items-end'
            }`}
          >
            <h2 className=" py-1 px-2  text-accent">{projectType}</h2>
            <h1 className="bg-accent rounded-sm py-1 px-2 text-white ">
              {projectName}
            </h1>
          </header>
          <div className="project__description ">
            <div className="border-b-2 border-white">
              <FadeInOnScroll className=" brightness-75 font-medium font-openSans mb-4 ">
                {projectDescription}
              </FadeInOnScroll>
              <FadeInOnScroll className=" brightness-75 font-medium font-openSans mb-4 ">
                {projectDescription}
              </FadeInOnScroll>
            </div>
            <div className="project__skills">
              <span className="brightness-75">Built using</span>
              {projectSkill.map(({ skillName, Icon, color }) => (
                <p className="text-accent"> {skillName}</p>
              ))}
            </div>
          </div>
          <div
            className={` text-white text-sm mt-4  flex-row flex ${
              reverse ? 'self-start' : 'self-end'
            } gap-2`}
          >
            <a href={projectRepo} className="project__button  ">
              Github <SiGithub />
            </a>
            <a href={projectLink} className="project__button ">
              Live Site <HiLink />
            </a>
          </div>
        </MoveOnScroll>
      </div>
    </article>
  );
};

export default ProjectCard;

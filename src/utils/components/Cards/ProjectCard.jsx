import { SiGithub } from 'react-icons/si';
import { HiLink } from 'react-icons/hi2';
import { MoveOnScroll } from '../framerComponents/MoveOnScroll';
import { FadeInOnScroll } from '../framerComponents/FadeInOnScroll';
import { ScaleInView } from '../framerComponents/ScaleInView';
import CustomButtonLink from '../shared/CustomButton';

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
        className={`flex-col ${
          reverse ? 'md:flex-row-reverse ' : ' md:flex-row'
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
            <h2 className=" py-1 px-2  text-white">{projectType}</h2>
            <h1 className="bg-accent rounded-sm py-1 px-2 text-primary ">
              {projectName}
            </h1>
          </header>
          <FadeInOnScroll className="project__description ">
            <div className="border-b-2 border-white">
              <div className=" font-medium font-openSans mb-4 ">
                {projectDescription}
              </div>
              <div className=" font-medium font-openSans mb-4 ">
                {projectDescription}
              </div>
            </div>
            <div className="project__skills">
              <span>Built using</span>
              {projectSkill.map(({ skillName, Icon, color }) => (
                <p key={skillName} className="text-accent">
                  {skillName}
                </p>
              ))}
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll
            className={`  mt-4  flex-row flex ${
              reverse ? 'self-start flex-row-reverse' : 'self-end'
            } gap-2`}
          >
            <CustomButtonLink
              href={projectRepo}
              className="bg-accent text-black "
              buttonText="Github"
            >
              <SiGithub />
            </CustomButtonLink>
            <CustomButtonLink
              href={projectLink}
              className="bg-secondAccent text-white"
              buttonText="Live"
            >
              <HiLink />
            </CustomButtonLink>
          </FadeInOnScroll>
        </MoveOnScroll>
      </div>
    </article>
  );
};

export default ProjectCard;

import { FadeInOnScroll } from '../framerComponents/FadeInOnScroll';

const SkillCard = ({ stack, stackName }) => {
  return (
    <article className="flex-row flex">
      <FadeInOnScroll className="gap-4 p-4  shadow-lg w-52 flex-between flex-wrap bg-primary rounded-md  ">
        {stack.map(({ skillName, Icon }) => (
          <div className="skill__card" key={skillName}>
            <div className="text-accent">{Icon}</div>
            <p className="font-openSans text-white text-sm">{skillName}</p>
          </div>
        ))}
      </FadeInOnScroll>
      <div className="w-10 min-h-[70%] rounded-sm flex-between self-center flex-col  bg-accent">
        <h1 className="text-lg rotate-90 whitespace-pre  text-white font-medium    ">
          {stackName}
        </h1>
      </div>
    </article>
  );
};

export default SkillCard;

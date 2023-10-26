import { FadeInOnScroll } from '../framerComponents/FadeInOnScroll';

const SkillCard = ({ stack, stackName }) => {
  return (
    <article className="flex-row  flex-between">
      <FadeInOnScroll className=" gap-2 p-4 shadow-lg bg-primary rounded-md flex-between  flex-wrap ">
        {stack.map(({ skillName, Icon }) => (
          <div className="skill__card" key={skillName}>
            <div className="text-accent">{Icon}</div>
            <p className="font-openSans text-white text-sm">{skillName}</p>
          </div>
        ))}
      </FadeInOnScroll>
      <div className="w-10 min-h-[70%] rounded-sm flex-between flex-col  bg-accent">
        <h1 className="text-lg rotate-90 whitespace-pre  text-white font-medium    ">
          {stackName}
        </h1>
      </div>
    </article>
  );
};

export default SkillCard;

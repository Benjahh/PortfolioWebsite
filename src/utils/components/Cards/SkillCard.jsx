import { FadeInOnScroll } from '../framerComponents/FadeInOnScroll';

const SkillCard = ({ stack, stackName }) => {
  return (
    <article className="skill__container  ">
      <div className=" rounded-sm  w-5/6  h-6 text-center self-center  bg-accent">
        <h1 className="text-lg   text-secondary font-bold    ">{stackName}</h1>
      </div>
      <FadeInOnScroll className="gap-4 p-8 relative  shadow-lg  flex-between flex-wrap bg-secondAccent rounded-sm  ">
        {stack.map(({ skillName, Icon }) => (
          <div className="skill__card" key={skillName}>
            <div className="text-accent">{Icon}</div>
            <p className="font-openSans text-white text-sm">{skillName}</p>
          </div>
        ))}
      </FadeInOnScroll>
    </article>
  );
};

export default SkillCard;

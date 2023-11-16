import { FadeInOnScroll } from '../framerComponents/FadeInOnScroll';

const SkillCard = ({ stack, stackName }) => {
  return (
    <article className="flex-col relative p-2 flex ">
      <FadeInOnScroll className="gap-4 p-8 relative  shadow-lg  flex-between flex-wrap bg-primary rounded-sm  ">
        <div className=" rounded-sm  w-5/6  h-6 text-center self-center  bg-secondAccent">
          <h1 className="text-lg   text-thirdAccent font-medium    ">
            {stackName}
          </h1>
        </div>
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

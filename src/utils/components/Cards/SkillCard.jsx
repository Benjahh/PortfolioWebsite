import { FadeInOnScroll } from '../framerComponents/FadeInOnScroll';

const SkillCard = ({ stack, stackName }) => {
  return (
    <article className="flex-col flex ">
      <div className=" rounded-sm flex-between self-center w-5/6  bg-secondAccent">
        <h1 className="text-lg   text-thirdAccent font-medium    ">
          {stackName}
        </h1>
      </div>
      <FadeInOnScroll className="gap-4 p-4   shadow-lg w-52 flex-between flex-wrap bg-primary rounded-md  ">
        {stack.map(({ skillName, Icon }) => (
          <div className="skill__card" key={skillName}>
            <div className="text-thirdAccent">{Icon}</div>
            <p className="font-openSans text-white text-sm">{skillName}</p>
          </div>
        ))}
      </FadeInOnScroll>
    </article>
  );
};

export default SkillCard;

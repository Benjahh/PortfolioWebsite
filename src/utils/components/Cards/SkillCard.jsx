import { FadeInOnScroll } from '../framerComponents/FadeInOnScroll';

const SkillCard = ({ stack, stackName }) => {
  return (
    <article className="flex-row bg-red-300 flex-between  flex ">

      
      <FadeInOnScroll className="gap-4 p-4 relative  shadow-lg w-52 flex-between flex-wrap bg-primary rounded-md  ">
        {stack.map(({ skillName, Icon }) => (
          <div className="skill__card" key={skillName}>
            <div className="text-thirdAccent">{Icon}</div>
            <p className="font-openSans text-white text-sm">{skillName}</p>
          </div>
        ))}
        
      </FadeInOnScroll>
      <div className=" rounded-sm  rotate-90 w-5/6  bg-secondAccent">
        <h1 className="text-lg   text-thirdAccent font-medium    ">
          {stackName}
        </h1>
      </div>
      
    </article>
  );
};

export default SkillCard;

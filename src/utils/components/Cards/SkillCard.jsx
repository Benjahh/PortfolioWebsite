import { FadeInOnScroll } from '../framerComponents/FadeInOnScroll';

const SkillCard = ({ stack, stackName }) => {
  return (
    <article className="flex-col bg-red-300 relative p-2 flex ">


      <FadeInOnScroll className="gap-4 p-8 relative  shadow-lg  flex-between flex-wrap bg-primary rounded-md  ">
        {stack.map(({ skillName, Icon }) => (
          <div className="skill__card" key={skillName}>
            <div className="text-thirdAccent">{Icon}</div>
            <p className="font-openSans text-white text-sm">{skillName}</p>
          </div>
        ))}
        
      </FadeInOnScroll>
      <div className=" rounded-sm  w-5/6 absolute h-6 text-center right-0    bg-secondAccent">
        <h1 className="text-lg   text-thirdAccent font-medium    ">
          {stackName}
        </h1>
      </div>
      
    </article>
  );
};

export default SkillCard;

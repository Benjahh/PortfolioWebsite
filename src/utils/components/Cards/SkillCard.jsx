import { FadeInOnScroll } from '../framerComponents/FadeInOnScroll';

const SkillCard = ({ stack, stackName }) => {
  return (
    <article className="flex-col gap-4 flex-between">
      <h1 className="text-lg text-secondAccent">{stackName}</h1>
      <FadeInOnScroll className="flex-row gap-2 flex">
        {stack.map(({ skillName, Icon }) => (
          <div className="skill__card" key={skillName}>
            <div className="text-accent">{Icon}</div>
            <p className="font-openSans text-sm">{skillName}</p>
          </div>
        ))}
      </FadeInOnScroll>
    </article>
  );
};

export default SkillCard;

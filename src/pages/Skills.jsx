import { ShrinkInView } from '../utils/components/framerComponents/ShrinkInView';

export const SkillPage = () => {
  return (
    <ShrinkInView
      id="skills"
      className=" hidden relative bg-secondary flex-between gap-24 flex-col text-white  min-h-screen"
    >
      <div className="flex-between flex-col">
        <h1 className=" font-mono font-bold mb-8 border text-3xl text-secondAccent ">
          Skills Section
        </h1>
        <p className="text-xl font-openSans">
          Technologies that i use for developing software.
        </p>
      </div>

      <div className="skill__container">
        {/*  <div className="flex-col flex-between gap-2">
          <h1 className="text-lg text-secondAccent">Front-End Stack</h1>
          <FadeInOnScroll className="flex flex-row gap-2 ">
            {frontEndTech.map(({ Icon, skillName }) => (
              <SkillCard key={skillName} skillName={skillName} Icon={Icon} />
            ))}
          </FadeInOnScroll>
        </div>

        <div className="flex-col gap-2 self-start flex-between">
          <h1 className="text-lg text-secondAccent">Back-End Stack</h1>
          <FadeInOnScroll className="flex-row gap-2 flex">
            {backEndTech.map(({ skillName, Icon }) => (
              <SkillCard key={skillName} skillName={skillName} Icon={Icon} />
            ))}
          </FadeInOnScroll>
        </div>
        <div className="flex-col self-end flex-between gap-2">
          <h1 className="text-secondAccent text-lg">Other Tech</h1>
          <FadeInOnScroll className="flex-row flex gap-2">
            {otherTech.map(({ skillName, Icon }) => (
              <SkillCard key={skillName} skillName={skillName} Icon={Icon} />
            ))}
          </FadeInOnScroll>
        </div> */}
      </div>
    </ShrinkInView>
  );
};

import { frontEndTech, backEndTech, otherTech } from '@/data';
import SkillCard from '../utils/components/Cards/SkillCard';
import { flexBetweeen } from '@/data';

export const SkillPage = () => {
  return (
    <section
      id="skills"
      className=" relative bg-secondary  flex-between flex-col text-white  min-h-screen"
    >
      <h1 className=" mt-16  font-mono font-bold  text-3xl text-white ">
        Skills Section
      </h1>
      <p>Technologies that i use for developing software.</p>

      <div className="flex flex-col m-12 bg-primary  items-center rounded-md justify-center gap-4 p-4">
        <div className="flex-col flex-between gap-2">
          <h1>Front-End Stack</h1>
          <div className="flex flex-row gap-2">
            {frontEndTech.map(({ Icon, skillName }) => (
              <SkillCard key={skillName} skillName={skillName} Icon={Icon} />
            ))}
          </div>
        </div>

        <div className="flex-col gap-2 flex-between">
          <h1>Back-End Stack</h1>
          <div className="flex-row gap-2 flex">
            {backEndTech.map(({ skillName, Icon }) => (
              <SkillCard key={skillName} skillName={skillName} Icon={Icon} />
            ))}
          </div>
        </div>
        <div className="flex-col flex-between gap-2">
          <h1>Other Tech</h1>
          <div className="flex-row flex gap-2">
            {otherTech.map(({ skillName, Icon }) => (
              <SkillCard key={skillName} skillName={skillName} Icon={Icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

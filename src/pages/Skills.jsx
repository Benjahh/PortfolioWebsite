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
      <div className="m-12 bg-primary ">
        <div className="flex flex-col items-center justify-center gap-2 p-2">
          <div className="flex-row flex gap-2">
            {frontEndTech.map(({ group, skills }) => (
              <div
                className={`flex ${group === 'One' ? 'flex-row' : 'flex-col'}`}
              >
                {skills.map(({ skillName, Icon }) => (
                  <SkillCard
                    key={skillName}
                    skillName={skillName}
                    Icon={Icon}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="flex-row gap-2 flex">
            {backEndTech.map(({ skillName, Icon }) => (
              <SkillCard key={skillName} skillName={skillName} Icon={Icon} />
            ))}
          </div>
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

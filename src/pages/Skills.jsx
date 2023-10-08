import { frontEndTech, backEndTech, otherTech } from '@/data';
import SkillCard from '../utils/components/Cards/SkillCard';
import { flexBetweeen } from '@/data';

/* TODO: ADD SKILL SECCTION SO IT SURROINDS EVERYTHING */
export const SkillPage = () => {
  return (
    <div
      id="skills"
      className={`bg-black flex-col gap-2 ${flexBetweeen} w-full h-full`}
    >
      <h2 className="text-xl ">TITLE</h2>
      <div className="w-5/6 p-2 flex flex-col gap-4 ">
        <div className="flex justify-between gap-2 flex-row">
          <section id="frontend" className=" rounded-md">
            <h2 className={`flex-col ${flexBetweeen} text-thirdColor>`}>
              Front-End
            </h2>
            <div className="flex flex-col">
              {frontEndTech.map(({ skillName, Icon }) => (
                <SkillCard key={skillName} skillName={skillName} Icon={Icon} />
              ))}
            </div>
          </section>

          <section id="backend" className={`rounded-md h-auto flex flex-col`}>
            <h2 className={`text-thirdColor ${flexBetweeen}`}>Back-End</h2>
            <div className="flex flex-col justify-end self-end h-full">
              {backEndTech.map(({ skillName, Icon }) => (
                <SkillCard key={skillName} skillName={skillName} Icon={Icon} />
              ))}
            </div>
          </section>
        </div>

        <section id="other" className="rounded-md">
          <h2 className="flex flex-row justify-center text-thirdColor">
            Additional
          </h2>
          <div className={`flex-row ${flexBetweeen} gap-6`}>
            {otherTech.map(({ skillName, Icon }) => (
              <SkillCard key={skillName} skillName={skillName} Icon={Icon} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

import { frontEndTech, backEndTech, otherTech } from '@/data';
import SkillCard from '../utils/components/Cards/SkillCard';
import { flexBetweeen } from '@/data';

export const SkillPage = () => {
  return (
    <section
      id="skills"
      className="border-2 relative flex-col text-white flex-between border-white min-h-screen"
    >
      <div>
        <h1 className=" border-b-green-100 ">Skills Section</h1>

        <div className="flex-between ">
          {frontEndTech.map(({ skillName, Icon }) => (
            <SkillCard key={skillName} skillName={skillName} Icon={Icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

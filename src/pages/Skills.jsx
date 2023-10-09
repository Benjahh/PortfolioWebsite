import { frontEndTech, backEndTech, otherTech } from '@/data';
import SkillCard from '../utils/components/Cards/SkillCard';
import { flexBetweeen } from '@/data';

export const SkillPage = () => {
  return (
    <section
      id="skills"
      className="border-2  flex-col text-white flex-between border-white min-h-screen"
    >
      <h1 className=" border-b-green-100 ">Skills Section</h1>

      <div>
        {frontEndTech.map(({ skillName, Icon }) => (
          <SkillCard skillName={skillName} Icon={Icon} />
        ))}
      </div>
    </section>
  );
};

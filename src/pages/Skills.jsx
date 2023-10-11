import { frontEndTech, backEndTech, otherTech } from '@/data';
import SkillCard from '../utils/components/Cards/SkillCard';
import { flexBetweeen } from '@/data';

export const SkillPage = () => {
  return (
    <section
      id="skills"
      className="border-2 relative flex justify-center text-white border-white min-h-screen"
    >
      <div className="m-12 border">
        <h1 className=" border-b-green-100 border ">Skills Section</h1>

        <div className="flex-between gap-4 ">
          {frontEndTech.map(({ skillName, Icon }) => (
            <SkillCard key={skillName} skillName={skillName} Icon={Icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

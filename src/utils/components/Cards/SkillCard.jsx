const SkillCard = ({ skillName, Icon }) => {
  return (
    <article className="flex-between w-20 h-20 text-sm flex-col p-2 border gap-2 bg-primary">
      {Icon}
      {skillName}
    </article>
  );
};

export default SkillCard;

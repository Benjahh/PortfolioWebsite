const SkillCard = ({ skillName, Icon }) => {
  return (
    <article className="flex-between flex-col p-1 border bg-primary">
      {Icon}
      {skillName}
    </article>
  );
};

export default SkillCard;

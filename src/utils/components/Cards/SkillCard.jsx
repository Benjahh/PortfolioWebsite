const SkillCard = ({ skillName, Icon }) => {
  return (
    <article className="flex-between flex-col m-2 p-1 bg-primary">
      {Icon}
      {skillName}
    </article>
  );
};

export default SkillCard;

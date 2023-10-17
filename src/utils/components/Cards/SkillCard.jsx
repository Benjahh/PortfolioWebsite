const SkillCard = ({ skillName, Icon }) => {
  return (
    <article className="flex-between w-24 h-24 text-sm flex-col p-1 border border-accent gap-1 rounded-md bg-primary">
      <div className="text-accent">{Icon}</div>
      <p className="font-openSans text-sm">{skillName}</p>
    </article>
  );
};

export default SkillCard;

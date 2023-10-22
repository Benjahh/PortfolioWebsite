const SkillCard = ({ skillName, Icon }) => {
  return (
    <article className="flex-between w-28  text-sm flex-col p-2 border-b-2 shadow-sm shadow-accent border-accent gap-1 rounded-md bg-primary">
      <div className="text-accent">{Icon}</div>
      <p className="font-openSans text-sm">{skillName}</p>
    </article>
  );
};

export default SkillCard;

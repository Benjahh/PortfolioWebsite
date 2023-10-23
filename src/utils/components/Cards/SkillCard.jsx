const SkillCard = ({ skillName, Icon }) => {
  return (
    <article className="skill__card">
      <div className="text-accent">{Icon}</div>
      <p className="font-openSans text-sm">{skillName}</p>
    </article>
  );
};

export default SkillCard;

const SkillCard = ({ skillName, Icon }) => {
  return (
    <article>
      <div>
        <Icon />
        <p>{skillName}</p>
      </div>
      <div>
        <Icon />
        <p>{skillName}</p>
      </div>
    </article>
  );
};

export default SkillCard;

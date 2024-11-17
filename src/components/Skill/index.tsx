import { FC } from "react";
import { SkillProg } from "../../types/user";
import style from "./style.module.css";

type Props = {
  skill: SkillProg;
};

const Skill: FC<Props> = ({ skill }) => {
  return (
    <div className={style.container}>
      <img className={style.img} src={skill.img} alt="" />
      <span className={style.name}>{skill.name}</span>
    </div>
  );
};

export default Skill;

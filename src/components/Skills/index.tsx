import { FC } from "react";
import Skill from "../Skill";
import style from "./style.module.css";
import { SkillDev } from "../../types/user";

type Props = {
  skills: SkillDev[];
};

const Skills: FC<Props> = ({ skills }) => {
  return (
    <div className={style.container}>
      {skills && skills.map((skill) => <Skill skill={skill} key={skill.id} />)}
    </div>
  );
};

export default Skills;

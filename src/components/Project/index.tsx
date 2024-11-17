import { FC } from "react";
import { ProjectDev } from "../../types/user";
import style from "./style.module.css";

type Props = {
  project: ProjectDev;
};

const Project: FC<Props> = ({ project }) => {
  return (
    <div className={style.container}>
      <span className={style.name}>{project.name}</span>
      <a href={project.url} className={style.link}>
        view project
      </a>
    </div>
  );
};

export default Project;

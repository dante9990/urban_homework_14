import { FC } from "react";
import { ProjectDev } from "../../types/user";
import Project from "../Project";
import style from "./style.module.css";

type Props = {
  projects: ProjectDev[];
};

const Projects: FC<Props> = ({projects}) => {
  return (
    <div className={style.container}>
      {projects && projects.map((project)=> <Project key={project.id} project={project} />)}
    </div>
  );
};

export default Projects;

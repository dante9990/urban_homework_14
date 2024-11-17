import { FC } from "react";
import { ProjectDev } from "../../types/user";
import Projects from "../Projects";
import style from "./style.module.css";

type Props = {
  projects: ProjectDev[];
};

const Portfolio: FC<Props> = ({ projects }) => {
  return (
    <section className={style.container}>
      <span className={style.subtitle}>Portfolio</span>
      <h2 className={style.title}>Explore My work.</h2>
      <Projects projects={projects} />
    </section>
  );
};

export default Portfolio;

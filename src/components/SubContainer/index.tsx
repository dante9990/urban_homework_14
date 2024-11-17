import style from "./style.module.css";
import { FC } from "react";

type Props = {
  firstName: string;
  lastName: string;
};

const SubContainer: FC<Props> = ({ firstName, lastName }) => {
  return (
    <section className={style.container}>
      <div className={style.textContainer}>
        <span className={style.subtitle}>stunning programmer by</span>
        <h1 className={style.title}>{firstName} {lastName}</h1>
      </div>
      <div>
        <span className={style.text}>let's</span>
        <button className={style.button}>
        </button>
        <br />
        <span className={style.text}>work together</span>
      </div>
    </section>
  );
};

export default SubContainer;

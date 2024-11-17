import { FC } from "react";
import style from "./style.module.css";

type Props = {
  firstName: string;
};

const Name: FC<Props> = ({ firstName }) => {
  return <span className={style.logo}>{firstName}</span>;
};

export default Name;

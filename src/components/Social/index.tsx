import { FC } from "react";
import { SocialDev } from "../../types/user";
import style from "./style.module.css";

type Props = {
  social: SocialDev;
};

const Social: FC<Props> = ({ social }) => {
  return (
    <a href={social.url}>
      <img className={style.img} src={social.img} alt="" />
    </a>
  );
};

export default Social;

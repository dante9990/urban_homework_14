import { FC } from "react";
import { SocialDev } from "../../types/user";
import style from "./style.module.css";

type Props = {
  social: SocialDev;
};

const ContactMe: FC<Props> = ({ social }) => {
  return (
    <div className={style.container}>
      <a href={social.url}>
        <img className={style.img} src={social.img} alt="" />
      </a>
    </div>
  );
};

export default ContactMe;

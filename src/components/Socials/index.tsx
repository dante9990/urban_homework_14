import style from "./style.module.css";
import Social from "../Social";
import { SocialDev } from "../../types/user";
import { FC } from "react";

type Props = {
  socials: SocialDev[]
}

const Socials: FC<Props> = ({socials}) => {
  return (
    <div className={style.social}>
      {socials && socials.map((social)=><Social social={social} key={social.id} />)}
    </div>
  );
};

export default Socials;

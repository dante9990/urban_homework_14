import { Dispatch, FC, useContext } from "react";
import { SocialDev } from "../../types/user";
import style from "./style.module.css";
import { ThemeContext } from "../../App";

type Props = {
  social: SocialDev;
  isVisible: boolean;
  setIsVisible: Dispatch<React.SetStateAction<boolean>>;
};

const BurgerMenu: FC<Props> = ({ social, isVisible, setIsVisible }) => {
  const currentTheme = useContext(ThemeContext);
  const handleClick = () => {
    setIsVisible(false);
  };
  return (
    <div
      className={`${style.container} ${
        currentTheme?.theme === "light" ? style.light : style.dark
      }  ${isVisible ? style.active : ""}`}
    >
      <a href="#" className={style.link}>
        Home
      </a>
      <a href="#" className={style.link}>
        About me
      </a>
      <a href="#" className={style.link}>
        Portfolio
      </a>
      <a href="#" className={style.link}>
        Services
      </a>
      <a href={social.url} className={style.social}>
        <img className={style.img} src={social.img} alt="" />
      </a>
      <div className={style.close} onClick={handleClick}></div>
    </div>
  );
};

export default BurgerMenu;

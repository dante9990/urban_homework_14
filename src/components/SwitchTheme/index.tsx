import { useContext } from "react";
import { ThemeContext } from "../../App";
import sun from "../../assets/img/sun.svg";
import moon from "../../assets/img/moon.svg";
import style from "./style.module.css";

const SwitchTheme = () => {
  const currentTheme = useContext(ThemeContext);
  const handleClick = () => {
    if (currentTheme?.theme === "") {
      currentTheme.setTheme("light");
    } else {
      currentTheme?.setTheme("");
    }
  };
  return (
    <div onClick={handleClick} className={style.container}>
      <img className={style.img} src={currentTheme?.theme === "light" ? moon : sun} alt="" />
    </div>
  );
};

export default SwitchTheme;

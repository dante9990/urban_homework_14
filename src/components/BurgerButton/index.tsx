import { Dispatch, FC, useContext } from "react";
import style from "./style.module.css";
import { ThemeContext } from "../../App";

type Props = {
  setIsVisible: Dispatch<React.SetStateAction<boolean>>;
};

const BurgerButton: FC<Props> = ({ setIsVisible }) => {
  const currentTheme = useContext(ThemeContext);
  const handleClick = () => {
    setIsVisible(true);
  };
  return (
    <div className={style.button} onClick={handleClick}>
      {currentTheme?.theme === "light" ? (
        <div className={style.burgerBlack}></div>
      ) : (
        <div className={style.burgerWhite}></div>
      )}
    </div>
  );
};

export default BurgerButton;

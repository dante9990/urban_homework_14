import ContactMe from "../ContactMe";
import Name from "../Name";
import Nav from "../Nav";
import style from "./style.module.css";
import developer from "../../data/data.json";
import SwitchTheme from "../SwitchTheme";
import BurgerButton from "../BurgerButton";
import BurgerMenu from "../BurgerMenu";
import { useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <header className={style.container}>
      <Name firstName={developer.firstName} />
      <Nav />
      <SwitchTheme />
      <ContactMe social={developer.socials[0]} />
      <BurgerMenu
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        social={developer.socials[0]}
      />
      <BurgerButton setIsVisible={setIsVisible} />
    </header>
  );
};

export default Header;

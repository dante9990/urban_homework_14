import style from "./style.module.css";

const Nav = () => {
  return (
    <div className={style.container}>
      <a href="#" className={style.link}>Home</a>
      <a href="#" className={style.link}>About me</a>
      <a href="#" className={style.link}>Portfolio</a>
      <a href="#" className={style.link}>Services</a>
    </div>
  );
};

export default Nav;

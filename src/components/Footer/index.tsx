import Social from "../Socials";
import style from "./style.module.css";
import developer from '../../data/data.json'

const Footer = () => {
  return (
    <div className={style.container}>
      <Social socials={developer.socials} />
      <span>&copy; by {developer.firstName} {developer.lastName}</span>
    </div>
  );
};

export default Footer;

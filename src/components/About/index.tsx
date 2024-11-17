import style from "./style.module.css";
import img from "../../assets/img/photo_2024-11-16_14-52-20.jpg";
import Socials from "../Socials";
import { SkillDev, SocialDev } from "../../types/user";
import { FC } from "react";

type Props = {
  firstName: string;
  description: string;
  socials: SocialDev[];
  email: string;
  phone: string;
  skills: SkillDev[];
};

const About: FC<Props> = ({
  firstName,
  description,
  socials,
  email,
  phone,
  skills,
}) => {
  return (
    <section className={style.container}>
      <div className={style.titleContainer}>
        <div>
          <span className={style.subtitle}>about</span>
          <h2 className={style.title}>i am {firstName}</h2>
        </div>
        <a href="#" className={style.button}>
          Know more
        </a>
      </div>
      <div className={style.information}>
        <img className={style.img} src={img} alt="" />
        <div className={style.description}>
          <div className={style.introduction}>
            <h3>Introduction</h3>
            <p>{description}</p>
            <h4>Skills</h4>
            <ul>{skills && skills.map((skill) => <li>{skill.name}</li>)}</ul>
          </div>
          <div className={style.contactInfo}>
            <h3>Contact Information</h3>
            <div className={style.contact}>
              <span className={style.email}>Email</span>
              <span className={style.phone}>Phone Number</span>
              <a className={style.emailLink} href={`mailto:${email}`}>{email}</a>
              <a className={style.phoneLink} href={`tel:${phone}`}>{phone}</a>
            </div>
            <div className={style.contactMe}>
              <Socials socials={socials} />
              <div className={style.links}>
                <a href="#">Let’s Work</a>
                <a href="#">Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

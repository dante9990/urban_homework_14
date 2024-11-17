import About from "../About";
import Portfolio from "../Portfolio";
import Skills from "../Skills";
import SubContainer from "../SubContainer";
import style from "./style.module.css";
import developer from "../../data/data.json";

const Main = () => {
  return (
    <main className={style.container}>
      <SubContainer
        firstName={developer.firstName}
        lastName={developer.lastName}
      />
      <Skills skills={developer.skills} />
      <About
        firstName={developer.firstName}
        description={developer.description}
        socials={developer.socials}
        email={developer.email}
        phone={developer.phone}
        skills={developer.skills}
      />
      <Portfolio projects={developer.projects} />
      <Skills skills={developer.skills} />
    </main>
  );
};

export default Main;

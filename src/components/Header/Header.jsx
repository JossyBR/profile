import Image from "next/image";
import profile from "../../../public/images/profile.jpg";
import styles from "./Header.module.css";
import "animate.css";

const Header = () => {
  return (
    <header id="inicio" className={`${styles.header} `}>
      {/* <img src={profile} alt="Perfil de usuario" /> */}
      <Image
        className={`${styles.image} animate__animated animate__backInDown`}
        src={profile}
        alt="Foto perfil"
      />

      <h1 className="animate__animated animate__backInUp">Carlos Mendoza</h1>
    </header>
  );
};

export default Header;

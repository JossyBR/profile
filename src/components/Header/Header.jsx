import Image from "next/image";
import profile from "../../../public/images/profile.jpg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* <img src={profile} alt="Perfil de usuario" /> */}
      <Image className={styles.image} src={profile} alt="Foto perfil" />

      <h1>Nombre de usuario</h1>
    </header>
  );
};

export default Header;

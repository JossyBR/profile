import Image from "next/image";
import profile from "../../../public/images/profile.jpg";

const Header = () => {
  return (
    <header>
      {/* <img src={profile} alt="Perfil de usuario" /> */}
      <Image src={profile} width={300} height={300} alt="Foto perfil" />

      <h1>Nombre de usuario</h1>
    </header>
  );
};

export default Header;

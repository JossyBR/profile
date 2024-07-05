import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Interests from "@/components/Interests/Interests";
import ContactForm from "@/components/ContactForm/ContactForm";
import NavBar from "@/components/Nav/NavBar";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Interests />
      <ContactForm />
      <Footer />
    </div>
  );
}

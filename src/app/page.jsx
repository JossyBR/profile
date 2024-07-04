import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Interests from "@/components/Interests/Interests";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Interests />
      <ContactForm />
    </div>
  );
}

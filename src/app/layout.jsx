// import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["400", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Profile",
  description: "Creado Por JB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

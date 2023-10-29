import "./globals.css";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import HeaderDesktop from "../components/Header/HeaderDesktop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Поиск людей",
  description:
    "Наша команда занимается поиском людей. В силу своих возможностей у нас инструменты позволяющие заниматься поиском людей на СВО. Да, мы не встретим человека лично, но точно будем знать о состоянии дел и здоровье человека путем анализа всей документации",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32px" />
      </head>
      <body className={inter.className}>
        <HeaderDesktop></HeaderDesktop>
        <div className={styles.layoutContainer}>{children}</div>
      </body>
    </html>
  );
}

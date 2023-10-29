import "./globals.css";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import HeaderDesktop from "../components/Header/HeaderDesktop";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Поиск людей",
  description:
    "Наша команда занимается поиском людей. В силу своих возможностей у нас инструменты позволяющие заниматься поиском людей на СВО. Да, мы не встретим человека лично, но точно будем знать о состоянии дел и здоровье человека путем анализа всей документации",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <body className={inter.className}>
        <HeaderDesktop></HeaderDesktop>
        <div className={styles.layoutContainer}>{children}</div>
      </body>
    </html>
  );
}

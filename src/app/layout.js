import "./globals.css";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import HeaderDesktop from "../components/Header/HeaderDesktop";
import Head from "next/head";
import Script from "next/script";
import { YandexMetrika } from "@/components/metrica/Matrica";

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
        <Script id="metrika-counter" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
              ym(95508734, "init", {
                    defer: true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`}
        </Script>
        <YandexMetrika />
      </body>
    </html>
  );
}

"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import homeSvg from "../../../public/🦆 icon _home simple door_.svg";
import { useRouter } from "next/navigation";

const HeaderDesktop = () => {
  const router = useRouter();

  const clickHandler = (link) => {
    router.push(link);
  };

  return (
    <div className={styles.headerContainer}>
      <ul className={styles.listContainer}>
        <li
          className={styles.itemContainerSvg}
          onClick={() => {
            clickHandler("/");
          }}
        >
          <Image alt="home" height={40} width={40} src={homeSvg}></Image>
        </li>
        <ul className={styles.textItemContainer}>
          <li
            className={styles.itemContainer}
            onClick={() => {
              clickHandler("/search");
            }}
          >
            Поиск
          </li>
          <li
            className={styles.itemContainer}
            onClick={() => {
              clickHandler("/about");
            }}
          >
            О нас
          </li>
          <li
            className={styles.itemContainer}
            onClick={() => {
              clickHandler("/faq");
            }}
          >
            FAQ
          </li>
          <li
            className={styles.itemContainer}
            onClick={() => {
              clickHandler("/contact");
            }}
          >
            Контакты
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default HeaderDesktop;

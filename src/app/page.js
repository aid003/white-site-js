"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import handSvg from "../../public/🦆 icon _open select hand gesture_.svg";
import fastArrowSvg from "../../public/🦆 icon _fast arrow right_.svg";
import cloudSvg from "../../public/ОБЛАчко 2.svg";
import AskContainer from "../components/asks/AskContainer";
import UserInfo from "../components/userInfo/UserInfo";
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  const textAreaField =
    "Poisk-centr.ru - сервис поиска людей, затерянных (пропавших) в зоне СВО, территории боевых действий! Благодаря доступа к закрытым источникам, мы можем установить личность и местонахождение почти каждого участника специальной военной операции! Если у вас остались вопросы, то более подробно мы попытались рассказать в разделе <FAQ>! ";

  const textAreaField2 =
    "Результатом поиска будет являться самая свежая информация о местонахождении человека. На текущий момент мы имеем доступ к базам МО, а также информацию повышенной конфиденциальности ! Ответы на часто задаваемый вопросы вы можете обнаружить здесь <FAQ>";

  const searchHandler = () => {
    router.push("/search");
  };

  return (
    <>
      <head>
        <meta name="yandex-verification" content="bf325057bf823910" />
      </head>
      <div className={styles.pageContainer}>
        <div className={styles.searchButtonContainer}>
          <Image
            alt="hand"
            width={350}
            height={320}
            src={handSvg}
            className={styles.handIcon}
          ></Image>
          <div className={styles.searchButtonWrapper} onClick={searchHandler}>
            <BiSearchAlt2 className={styles.searchIcon} />
            <button className={styles.searchButton}>Найти человека</button>
          </div>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>Добро пожаловать</h1>
          <p className={styles.text1p}>{textAreaField}</p>
          <p className={styles.text2p}>{textAreaField2}</p>
        </div>
        <AskContainer></AskContainer>
        <div className={styles.mouthenContainer}>
          <Image alt="arrow" width={320} height={430} src={fastArrowSvg} />
        </div>
        <div className={styles.cloudContainer}>
          <Image
            width={1400}
            height={1500}
            alt=""
            src={cloudSvg}
            className={styles.cloudIcon}
          ></Image>
          <p className={styles.cloudText}>Правильно заполни информацию !</p>
        </div>
        <UserInfo></UserInfo>
        <p style={{ height: "300px" }}></p>
      </div>
    </>
  );
}

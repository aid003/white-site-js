import Image from "next/image";
import styles from "./page.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import handSvg from "../../public/🦆 icon _open select hand gesture_.svg";
import fastArrowSvg from '../../public/🦆 icon _fast arrow right_.svg'
import cloudSvg from "../../public/ОБЛАчко 2.svg"
import AskContainer from "../components/asks/AskContainer";
import UserInfo from "../components/userInfo/UserInfo";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.searchButtonContainer}>
        <Image
          alt="hand"
          width={350}
          height={320}
          src={handSvg}
          className={styles.handIcon}
        ></Image>
        <div className={styles.searchButtonWrapper}>
          <BiSearchAlt2 className={styles.searchIcon} />
          <button className={styles.searchButton}>Найти человека</button>
        </div>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Добро пожаловать</h1>
        <p className={styles.text1p}>
          Poisk:RU - сервис поиска людей в интернете по фотографии. Благодаря
          технологии нейронных сетей и машинному обучению мы поможем вам найти
          нужного человека или очень на него похожего в течение нескольких
          секунд. Результатом является ссылка на изображение в сети или ссылка
          на профиль найденного человека в социальной сети vk.com или ok.ru,
          tiktok.com, clubhouse.com (а в ближайшем будущем и других).
        </p>
        <p className={styles.text2p}>
          На текущий момент частично или полностью собраны 5 базы данных:
          аватарки социальной сети Вконтакте и главные фотографии социальной
          сети Одноклассники, фотографии профиля социальной сети Вконтакте,
          аватарки пользователей Tiktok, аватарки пользователей ClubHouse, база
          данных знаменитостей (Википедия, ИМДБ и другие).
        </p>
      </div>
      <AskContainer></AskContainer>
      <div className={styles.mouthenContainer}>
        <Image alt="" width={320} height={430} src={fastArrowSvg} />
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
      <p style={{height: "300px"}}></p>
    </div>
  );
}

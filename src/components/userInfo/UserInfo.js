"use client"
import userSvg from "../../../public/🦆 icon _user_.svg";
import Image from "next/image";
import styles from "./userInfo.module.css";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useRouter } from "next/navigation";


const UserInfo = () => {
    const router = useRouter()
    const clickHandler = () => {
        router.push("/search")
    }
  return (
    <div className={styles.userContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.iconContainer}>
          <Image
            className={styles.icon}
            width={200}
            height={400}
            alt=""
            src={userSvg}
          ></Image>
        </div>

        <div className={styles.buttonContainer} onClick={clickHandler}>
          <button className={styles.buttons}>Перейти к заполнению</button>
          <BsBoxArrowUpRight className={styles.arrowIcon} />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.input}>
            <p className={styles.text}>Иванов</p>
          </div>
          <div className={styles.input}>
            <p className={styles.text}>Александр</p>
          </div>
          <div className={styles.input}>
            <p className={styles.text}>Александрович</p>
          </div>
          <div className={styles.input}>
            <p className={styles.text}>24г</p>
          </div>
          <div className={styles.input}>
            <p className={styles.text}>24.09.23</p>
          </div>
          <div className={styles.input}>
            <p className={styles.text} style={{ fontSize: "smaller" }}>
              Республика Башкортостан, Уфа, улица Карла Маркса, 14
            </p>
          </div>
          <div className={styles.input}>
            <p className={styles.text}>А-123456</p>
          </div>
          <div className={styles.input}>
            <p className={styles.text}>Воинская часть 85243</p>
          </div>
          <div className={styles.input}>
            <p className={styles.text}>Седой (необязательно)</p>
          </div>
          <div className={styles.input}>
            <p className={styles.text} style={{ fontSize: "smaller" }}>
              Татуировка на правой руке (необязательно)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

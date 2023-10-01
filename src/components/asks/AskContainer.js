"use client";
import Image from "next/image";
import styles from "./AskItem.module.css";
import writeSvg from "../../../public/🦆 icon _page edit_.svg";
import okSvg from "../../../public/🦆 icon _circle check_.svg";
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";

const AskContainer = () => {
  const [isOpen, setIsOpen] = useState(0);

  const clickHandler = (number) => {
    if (isOpen === number) {
      setIsOpen(0);
    }
    setIsOpen(number);

    console.log(isOpen);
  };

  return (
    <div className={styles.container}>
      {isOpen === 1 ? (
        <div
          className={styles.modalWindow}
          onClick={() => {
            setIsOpen(0);
          }}
        >
          <ImCancelCircle className={styles.cancelSvg} />
          <p>efefe</p>
        </div>
      ) : (
        ""
      )}

      {isOpen === 2 ? (
        <div
          className={styles.modalWindow}
          onClick={() => {
            setIsOpen(0);
          }}
        >
          <ImCancelCircle className={styles.cancelSvg} />
          <p>efefe</p>
        </div>
      ) : (
        ""
      )}
      {isOpen === 3 ? (
        <div
          className={styles.modalWindow}
          onClick={() => {
            setIsOpen(0);
          }}
        >
          <ImCancelCircle className={styles.cancelSvg} />
          <p>efefe</p>
        </div>
      ) : (
        ""
      )}
      {isOpen === 4 ? (
        <div
          className={styles.modalWindow}
          onClick={() => {
            setIsOpen(0);
          }}
        >
          <ImCancelCircle className={styles.cancelSvg} />
          <p>efefe</p>
        </div>
      ) : (
        ""
      )}
      {isOpen === 5 ? (
        <div
          className={styles.modalWindow}
          onClick={() => {
            setIsOpen(0);
          }}
        >
          <ImCancelCircle className={styles.cancelSvg} />
          <p>efefe</p>
        </div>
      ) : (
        ""
      )}
      {isOpen === 6 ? (
        <div
          className={styles.modalWindow}
          onClick={() => {
            setIsOpen(0);
          }}
        >
          <ImCancelCircle className={styles.cancelSvg} />
          <p>efefe</p>
        </div>
      ) : (
        ""
      )}
      {isOpen === 7 ? (
        <div
          className={styles.modalWindow}
          onClick={() => {
            setIsOpen(0);
          }}
        >
          <ImCancelCircle className={styles.cancelSvg} />
          <p>efefe</p>
        </div>
      ) : (
        ""
      )}
      {isOpen === 8 ? (
        <div
          className={styles.modalWindow}
          onClick={() => {
            setIsOpen(0);
          }}
        >
          <ImCancelCircle className={styles.cancelSvg} />
          <p>efefe</p>
        </div>
      ) : (
        ""
      )}
      {isOpen === 9 ? (
        <div
          className={styles.modalWindow}
          onClick={() => {
            setIsOpen(0);
          }}
        >
          <ImCancelCircle className={styles.cancelSvg} />
          <p>efefe</p>
        </div>
      ) : (
        ""
      )}

      <div className={styles.askText}>
        <p className={styles.text}>Часто задаваемые вопросы !</p>
        <Image alt="" width={30} height={30} src={okSvg}></Image>
      </div>
      <div className={styles.askContainer}>
        <div
          className={styles.askItem}
          onClick={() => {
            clickHandler(1);
          }}
        >
          <p className={styles.AskItemText}>Кто мы такие ?</p>
          <Image alt="" width={30} height={30} src={writeSvg}></Image>
        </div>
        <div
          className={styles.askItem}
          onClick={() => {
            clickHandler(2);
          }}
        >
          <p className={styles.AskItemText}>Можно ли нам доверять ?</p>
          <Image alt="" width={30} height={30} src={writeSvg}></Image>
        </div>
        <div
          className={styles.askItem}
          onClick={() => {
            clickHandler(3);
          }}
        >
          <p className={styles.AskItemText}>Сколько стоит услуга поиска</p>
          <Image alt="" width={30} height={30} src={writeSvg}></Image>
        </div>
        <div
          className={styles.askItem}
          onClick={() => {
            clickHandler(4);
          }}
        >
          <p className={styles.AskItemText}>
            Сколько занимает поиск информации ?
          </p>
          <Image alt="" width={30} height={30} src={writeSvg}></Image>
        </div>
        <div
          className={styles.askItem}
          onClick={() => {
            clickHandler(5);
          }}
        >
          <p className={styles.AskItemText}>В каком виде приходят данные ?</p>
          <Image alt="" width={30} height={30} src={writeSvg}></Image>
        </div>
        <div
          className={styles.askItem}
          onClick={() => {
            clickHandler(6);
          }}
        >
          <p className={styles.AskItemText}>Куда приходит ответ?</p>
          <Image alt="" width={30} height={30} src={writeSvg}></Image>
        </div>
        <div
          className={styles.askItem}
          onClick={() => {
            clickHandler(7);
          }}
        >
          <p className={styles.AskItemText}>Являются ли данные настоящими ?</p>
          <Image alt="" width={30} height={30} src={writeSvg}></Image>
        </div>
        <div
          className={styles.askItem}
          onClick={() => {
            clickHandler(8);
          }}
        >
          <p className={styles.AskItemText}>Где мы берём информацию ?</p>
          <Image alt="" width={30} height={30} src={writeSvg}></Image>
        </div>
        <div
          className={styles.askItem}
          onClick={() => {
            clickHandler(9);
          }}
        >
          <p className={styles.AskItemText}>
            Могу ли я получить больше данных ?
          </p>
          <Image alt="" width={30} height={30} src={writeSvg}></Image>
        </div>
      </div>
    </div>
  );
};

export default AskContainer;

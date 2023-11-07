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
          <p className={styles.textDecoration}>
            Самый часто задаваемый вопрос, который нам приходится слышать! Это
            не имеет особой важности, действительно важно то, что мы имеем
            доступ к Базе регистрации ведомства самого большого Южного города,
            что несомненно отвечает на вопрос откуда мы мы владеем данной
            информацией.
          </p>
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
          <p className={styles.textDecoration}>
            Никто не заставляет вас нам доверять! Мы делаем это исключительно из
            за неравнодушия к происходящему вокруг! Делаем доступным то, что от
            нас скрывают и врут нам каждый раз.
          </p>
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
          <p className={styles.textDecoration}>
            Мы не берём плату за поиск самой информации, мы берем плату за
            поддержку работы наших серверов, что помогает большему количеству
            людей воспользоваться нашим благотворительным сервисом поиска
            информации о человеке!
          </p>
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
          <p className={styles.textDecoration}>
            Нет наиболее точного ответа на данный вопрос, так как всё зависит от
            сложности полученных данных! *загруженной фотографии; *совпадения
            имён; *совпадения фамилии; *совпадения даты рождения; *совпадения
            общих сведений.
          </p>
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
          <p className={styles.textDecoration}>
            (Данные приходят в формате PDF / DOC / TXT файла) всё зависит от
            структуры и наполненности данных !
          </p>
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
          <p className={styles.textDecoration}>
            Данные приходят на указанную вами почту, поэтому перепроверьте ее
            несколько раз! Вся информация не поддается огласке и носит строго
            конфиденциальный характер!
          </p>
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
          <p className={styles.textDecoration}>
            Данный вопрос является самым скептическим, исходя из анализа
            данных! Данные являются собственностью МО и РФ, и формируются в
            зависимости от формата указанного вами запроса!
          </p>
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
          <p className={styles.textDecoration}>
            Вся информация идёт и закрытых источников МО, что является прямым
            нарушением законодательства! Поэтому любая информация полученная с
            помощью данного сайта является строго конфиденциальной.
          </p>
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
          <p className={styles.textDecoration}>
            В случае необходимости в получении дополнительных данных просим вас
            написать на указанную ниже почту! <strong>wwdwdw82@gmail.com</strong>
          </p>
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
          <p className={styles.AskItemText}>Как приходят данные ?</p>
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

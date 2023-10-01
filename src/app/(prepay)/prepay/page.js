"use client";
import styles from "./prepay.module.css";
import { useState } from "react";


const Page = () => {
  const [currentEmail, setCurrentEmail] = useState("");

  const sendHandler = () => {
    // fetch<InitialData>("", { email: currentEmail });
  };

  return (
    <div className={styles.container}>
      <p className={styles.p1}>Почти всё, осталось совсем немного ...</p>
      <p className={styles.p2}>Оплатить разовый поиск</p>
      <div className={styles.buttonContainerPay}>
        <button
          className={styles.buttonPay}
          onClick={() => {
            currentEmail
              ? ""
              : alert(
                  "Введите Ваш email(почту) на которую прийдет ответ о проделанный работе и результаты поиска"
                );
          }}
        >
          Оплатить
        </button>
      </div>
      <p className={styles.p3}>
        Теперь введи свою почту, куда мы пришлём результат
      </p>
      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            onChange={(e) => {
              setCurrentEmail(e.target.value);
            }}
            placeholder="alexnadrova.ol@mail.ru"
          ></input>
          <button className={styles.buttonSend} onClick={sendHandler}>
            Отправить
          </button>
        </div>
        <div className={styles.buttonNextContainer}>
          <button
            className={styles.buttonNext}
            onClick={() => {
              currentEmail
                ? ""
                : alert(
                    "Введите Ваш email(почту) на которую прийдет ответ о проделанный работе и результаты поиска"
                  );
            }}
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;

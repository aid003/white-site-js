"use client";
import { useRouter } from "next/navigation";
import styles from "./prepay.module.css";
import sha256 from "sha256";
import { useState } from "react";

const Page = () => {
  const [currentEmail, setCurrentEmail] = useState("");
  const [orderId, setOrderId] = useState("");

  const router = useRouter();

  let data = {
    merchant_id: process.env.NEXT_PUBLIC_MERCHANT_ID,
    amount: 200.0,
    currency: "RUB",
    email: currentEmail,
    secret: process.env.NEXT_PUBLIC_SECRET_1,
    order_id: orderId,
    sign: "",
    desc: "Order Payment",
    lang: "ru",
  };

  data.sign = sha256(
    `${data.merchant_id}:${data.amount}:${data.currency}:${data.secret}:${data.order_id}`
  );

  const sendHandler = async () => {
    const searchData = localStorage.getItem("searchData");
    await fetch(`${process.env.NEXT_PUBLIC_BASE_SERVER_PATH}create-search/`, {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        email: currentEmail,
        searchData: searchData,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setOrderId(data.orderId);
      })
      .then(() => {
        const str = "https://aaio.io/merchant/pay?" + new URLSearchParams(data);
        router.push(str);
      });
  };

  return (
    <div className={styles.container}>
      <p className={styles.p1}>Почти всё, осталось совсем немного ...</p>
      <p className={styles.p2}>Оплатить разовый поиск</p>
      <div className={styles.buttonContainerPay}>
        <div>
          <button
            className={styles.buttonPay}
            onClick={() => {
              currentEmail
                ? sendHandler()
                : alert(
                    "Введите Ваш email(почту) на которую прийдет ответ о проделанный работе и результаты поиска"
                  );
            }}
          >
            Оплатить
          </button>
        </div>
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
        </div>
        <div className={styles.buttonNextContainer}>
          <div>
            <button
              className={styles.buttonPay}
              onClick={() => {
                currentEmail
                  ? sendHandler()
                  : alert(
                      "Введите Ваш email(почту) на которую прийдет ответ о проделанный работе и результаты поиска"
                    );
              }}
            >
              Оплатить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

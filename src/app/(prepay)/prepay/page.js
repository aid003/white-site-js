"use client";
import { useRouter } from "next/navigation";
import styles from "./prepay.module.css";
import sha256 from "sha256";
import { useState } from "react";

const Page = () => {
  const [currentEmail, setCurrentEmail] = useState("");
  
  const currentId = fetch(`${process.env.NEXT_PUBLIC_BASE_SERVER_PATH}get-current-id/`, {
     method: "GET"
  });
  
  let data = {
    merchant_id: process.env.NEXT_PUBLIC_MERCHANT_ID,
    amount: 30.0,
    currency: "RUB",
    email: currentEmail,
    secret: process.env.NEXT_PUBLIC_SECRET_1,
    order_id: `${currentId.id}`,
    sign: "",
    desc: "Order Payment",
    lang: "ru",
  };

  data.sign = sha256(
    `${data.merchant_id}:${data.amount}:${data.currency}:${data.secret}:${data.order_id}`
  );

  const sendHandler = () => {
    const searchData = localStorage.getItem("searchData");
    fetch(`${process.env.NEXT_PUBLIC_BASE_SERVER_PATH}create-search/`, {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        email: currentEmail,
        searchData: searchData,
      }),
    })
  };

  return (
    <div className={styles.container}>
      <p className={styles.p1}>Почти всё, осталось совсем немного ...</p>
      <p className={styles.p2}>Оплатить разовый поиск</p>
      <div className={styles.buttonContainerPay}>
        <form method="POST" action="https://aaio.io/merchant/pay">
          <input type="hidden" name="merchant_id" value={data.merchant_id} />
          <input type="hidden" name="amount" value={data.amount} />
          <input type="hidden" name="currency" value={data.currency} />
          <input type="hidden" name="order_id" value={data.order_id} />
          <input type="hidden" name="sign" value={data.sign} />
          <input type="hidden" name="email" value={data.email} />
          <input type="hidden" name="lang" value={data.lang} />
          <input
            type="submit"
            name="pay"
            value="Оплатить"
            className={styles.buttonPay}
            onClick={() => {
              currentEmail
                ? sendHandler()
                : alert(
                    "Введите Ваш email(почту) на которую прийдет ответ о проделанный работе и результаты поиска"
                  );
            }}
          />
        </form>
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
          <form method="POST" action="https://aaio.io/merchant/pay">
            <input type="hidden" name="merchant_id" value={data.merchant_id} />
            <input type="hidden" name="amount" value={data.amount} />
            <input type="hidden" name="currency" value={data.currency} />
            <input type="hidden" name="order_id" value={data.order_id} />
            <input type="hidden" name="sign" value={data.sign} />
            <input type="hidden" name="email" value={data.email} />
            <input type="hidden" name="lang" value={data.lang} />
            <input
              type="submit"
              name="pay"
              value="Далее"
              className={styles.buttonPay}
              onClick={() => {
                currentEmail
                  ? sendHandler()
                  : alert(
                      "Введите Ваш email(почту) на которую прийдет ответ о проделанный работе и результаты поиска"
                    );
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;

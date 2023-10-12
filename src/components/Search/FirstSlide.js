"use client";
import Image from "next/image";
import styles from "./searchSlides.module.css";
import plusSvg from "../../../public/AddNew.svg";
import { useState } from "react";

const initialValues = {
  name: "defaultValue",
  surname: "defaultValue",
  fatherName: "defaultValue",
  age: "defaultValue",
  contractDate: "defaultValue",
  locateCall: "defaultValue",
  soldatId: "defaultValue",
  stateNumber: "defaultValue",
  callSign: "defaultValue",
  specialSigns: "defaultValue",
};

const initialState = { values: initialValues };

const FirstSlide = ({ setSlideNumber }) => {
  const [state, setState] = useState(initialState);
  const { values } = state;

  const nextHandler = () => {
    if (
      values.name == "defaultValue" ||
      values.surname == "defaultValue" ||
      values.fatherName == "defaultValue"
    ) {
      alert("Не введен минимальный набор данных для поиска");
      return;
    }
    localStorage.setItem("searchData", JSON.stringify(values));
    setSlideNumber(1);
  };

  const changeValueHandler = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            alt=""
            width={400}
            height={300}
            src={plusSvg}
          ></Image>
        </div>
        <label className={styles.inputFile}>
          <input
            type="file"
            name="file[]"
            multiple
            className={styles.buttonLoad}
          ></input>
          <span>Выберите файл</span>
        </label>
      </div>
      <div className={styles.rightContainer}>
        <ul className={styles.inputContainer}>
          <li className={styles.inputItem}>
            <input
              className={styles.input}
              onChange={changeValueHandler}
              placeholder="Фамилия"
              name="surname"
              type="text"
            ></input>
          </li>
          <li className={styles.inputItem}>
            <input
              className={styles.input}
              onChange={changeValueHandler}
              placeholder="Имя"
              name="name"
              type="text"
            ></input>
          </li>
          <li className={styles.inputItem}>
            <input
              className={styles.input}
              onChange={changeValueHandler}
              placeholder="Отчество"
              name="fatherName"
              type="text"
            ></input>
          </li>
          <li className={styles.inputItem}>
            <input
              className={styles.input}
              onChange={changeValueHandler}
              placeholder="Возраст"
              name="age"
              type="text"
            ></input>
          </li>
          <li className={styles.inputItem}>
            <input
              className={styles.input}
              placeholder="Подписание контракта"
              onChange={changeValueHandler}
              name="contractDate"
              type="text"
            ></input>
          </li>
          <li className={styles.inputItem}>
            <input
              className={styles.input}
              placeholder="Место призыва"
              onChange={changeValueHandler}
              name="locateCall"
              type="text"
            ></input>
          </li>
          <li className={styles.inputItem}>
            <input
              className={styles.input}
              placeholder="Личный номер"
              onChange={changeValueHandler}
              name="soldatId"
              type="text"
            ></input>
          </li>
          <li className={styles.inputItem}>
            <input
              className={styles.input}
              placeholder="Войсковая часть"
              onChange={changeValueHandler}
              name="stateNumber"
              type="text"
            ></input>
          </li>
          <li className={styles.inputItem}>
            <input
              className={styles.input}
              placeholder="Позывной (необязательно)"
              onChange={changeValueHandler}
              name="callSign"
              type="text"
            ></input>
          </li>
          <li className={styles.inputItem}>
            <input
              className={styles.input}
              placeholder="Особые приметы"
              onChange={changeValueHandler}
              name="specialSigns"
              type="text"
            ></input>
          </li>
        </ul>
        <div className={styles.buttonContainerNext}>
          <button className={styles.buttonNext} onClick={nextHandler}>
            Далее
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSlide;

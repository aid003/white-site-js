"use client";
import clockSvg from "../../../../public/🦆 icon _clock outline_.svg";
import styles from "./search.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FirstSlide from "../../../components/Search/FirstSlide";

const Search = () => {
  const [slideNumber, setSlideNumber] = useState(0);

  const router = useRouter();

  

  if (slideNumber === 1) {
    router.push("/prepay");
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>ПОИСК</h1>
      {slideNumber === 0 && (
        <FirstSlide setSlideNumber={setSlideNumber}></FirstSlide>
      )}
      <div className={styles.clockContainer}>
        <Image alt="" width={400} height={600} src={clockSvg}></Image>
      </div>
      <div className={styles.textAlert}>
        <p className={styles.alert}>
          Внимательно посмотри сколько времени займёт поиск информации
        </p>
      </div>
      <div style={{ width: "100%", height: "300px" }}></div>
    </div>
  );
};

export default Search;

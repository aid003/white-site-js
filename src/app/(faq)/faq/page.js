import AskContainer from "@/components/asks/AskContainer";
import styles from "./faq.module.css";

const Faq = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>FAQ</h1>
      <AskContainer></AskContainer>
    </div>
  );
};

export default Faq;

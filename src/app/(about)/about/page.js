import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>О НАС</h1>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          Самый часто задаваемый вопрос, который нам приходится слышать! Это не
          имеет особой важности, действительно важно то, что мы имеем доступ к
          Базе регистрации ведомства самого большого Южного города, что
          несомненно отвечает на тот вопрос откуда мы мы владеем данной
          информацией
        </p>
      </div>
    </div>
  );
};

export default About;

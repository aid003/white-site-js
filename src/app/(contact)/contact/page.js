import styles from "./contact.module.css";
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>КОНТАКТЫ</h1>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          Перед тем, как связаться с нами, рекомендуем перейти в раздел Часто
          задаваемых вопросов и попытаться найти ответ на ваш вопрос там. Чтобы
          запросить удаление своих изображений из поисковой выдачи, вы можете
          написать нам на email указанный ниже. В случае, если ответ найти не
          удалось, вы можете написать нам письмо с подробным описанием проблемы
          или по любому возникшему вопросу. Мы с вами свяжемся в течении 24
          часов - search4faces@gmail.com. Если мы не свяжемся с вами в течение
          24 часов, снова напишите нам и дайте знать, что вы не получили ответа.
        </p>
      </div>
    </div>
  );
};

export default Contact;
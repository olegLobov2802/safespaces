import styles from "./Login.module.css";
import cn from "classnames";
import { LogoBigIcon } from "../../components/UI/icons/LogoBig";
import { Button, Input } from "../../components";

export const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.blur}></div>
      <div className={styles.logo}>
        <LogoBigIcon />
      </div>

      <form className={styles.form}>
        <div className={styles.title}>Вход или регистрация</div>
        <label>
          <div className={styles.pseudo}>+7</div>
          <Input
            className={cn(styles.input, styles.number)}
            type={"number"}
            placeholder={"номер телефона"}
          />
        </label>
        <Input className={styles.input} type={"password"} placeholder={"_ _ _ _ _ _ "} />
        <div className={styles.text}>Мы отправим СМС с кодом для входа в Ваш личный кабинет</div>
        <Button className={styles.buttonSend} arrow={true} appearance={"blueLight"}>
          Присоедениться
        </Button>
      </form>
    </div>
  );
};

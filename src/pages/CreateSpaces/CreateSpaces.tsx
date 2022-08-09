import styles from "./CreateSpaces.module.css";
import cn from "classnames";
import { useState } from "react";
import { OptionsIcon } from "../../components/UI/icons/OptionsIcon";
import { MicroOnIcon } from "../../components/UI/icons/MicroOnIcon";
import { MicroOffIcon } from "../../components/UI/icons/MicroOffIcon";
import { CameraOnIcon } from "../../components/UI/icons/CameraOnIcon";
import { CameraOffIcon } from "../../components/UI/icons/CameraOffIcon";
import { LogoIcon } from "../../components/UI/icons/Logo";
import { Button, Input } from "../../components";
import { useNavigate } from "react-router-dom";

export const CreateSpaces = (): JSX.Element => {
  const navigate = useNavigate();
  const [isOnMicro, setIsOnMicro] = useState<boolean>(false);
  const [isOnCamera, setIsOnCamera] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const changeOnMicro = () => {
    setIsOnMicro(!isOnMicro);
  };

  const changeOnCamera = () => {
    setIsOnCamera(!isOnCamera);
  };

  const navigateToSpaces = () => {
    if (name.length) {
      navigate("/spaces/123");
    }
  };

  const submit = (e: any) => {
    e.preventDefault();
    navigateToSpaces()
  }

  return (
    <div className={styles.start}>
      <div className={styles.logo}>
        <LogoIcon />
      </div>
      <div className={styles.camera}>
        <div className={styles.top}>
          <div className={styles.options}>
            <OptionsIcon />
          </div>
        </div>
        <div className={styles.preview}></div>
        <div className={styles.bottom}>
          <div
            onClick={changeOnMicro}
            className={cn(styles.btn, {
              [styles.active]: isOnMicro,
            })}
          >
            {isOnMicro ? <MicroOnIcon /> : <MicroOffIcon />}
          </div>
          <div
            onClick={changeOnCamera}
            className={cn(styles.btn, {
              [styles.active]: isOnCamera,
            })}
          >
            {isOnCamera ? <CameraOnIcon /> : <CameraOffIcon />}
          </div>
        </div>
      </div>
      <form onSubmit={submit} className={styles.form}>
        <div className={styles.title}>Как вас зовут?</div>
        <Input value={name} onChange={(e) => setName(e.target.value)} className={styles.input} />
        <Button type={'submit'} className={styles.buttonSend} arrow={true} appearance={"blueLight"}>
          Присоедениться
        </Button>
      </form>
    </div>
  );
};

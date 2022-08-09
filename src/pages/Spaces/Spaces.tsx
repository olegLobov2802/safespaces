import styles from "./Spaces.module.css";
import cn from "classnames";
import { LogoIcon } from "../../components/UI/icons/Logo";
import { MicroOnIcon } from "../../components/UI/icons/MicroOnIcon";
import { MicroOffIcon } from "../../components/UI/icons/MicroOffIcon";
import { CameraOnIcon } from "../../components/UI/icons/CameraOnIcon";
import { CameraOffIcon } from "../../components/UI/icons/CameraOffIcon";
import { useState } from "react";
import { PhoneIcon } from "../../components/UI/icons/PhoneIcon";
import { ArrowSIcon } from "../../components/UI/icons/ArrowSIcon";
import { OptionsIcon } from "../../components/UI/icons/OptionsIcon";
import { InfoIcon } from "../../components/UI/icons/InfoIcon";
import { UserIcon } from "../../components/UI/icons/UserIcon";
import { ChatIcon } from "../../components/UI/icons/ChatIcon";
import { useNavigate } from "react-router-dom";

export const Spaces = () => {
  const [isOnMicro, setIsOnMicro] = useState<boolean>(true);
  const [isOnCamera, setIsOnCamera] = useState<boolean>(false);
  const navigate = useNavigate();

  const changeOnMicro = () => {
    setIsOnMicro(!isOnMicro);
  };

  const changeOnCamera = () => {
    setIsOnCamera(!isOnCamera);
  };

  const left = () => {
    return (
      <div className={styles.left}>
        <div className={cn(styles.btn, styles.exit, styles.gray)}>
          <div onClick={() => navigate('/')}>
            <ArrowSIcon />
          </div>
        </div>
        <div className={cn(styles.btn, styles.options)}>
          <OptionsIcon />
        </div>
      </div>
    );
  };

  const middle = () => {
    return (
      <div className={styles.middle}>
        <div
          className={cn(styles.btn, {
            [styles.active]: isOnMicro,
          })}
          onClick={changeOnMicro}
        >
          {isOnMicro ? <MicroOnIcon /> : <MicroOffIcon />}
        </div>
        <div
          className={cn(styles.btn, {
            [styles.active]: isOnCamera,
          })}
          onClick={changeOnCamera}
        >
          {isOnCamera ? <CameraOnIcon /> : <CameraOffIcon />}
        </div>
        <div className={cn(styles.btn, styles.phone)}>
          <PhoneIcon />
        </div>
      </div>
    );
  };

  const right = () => {
    return (
      <div className={styles.right}>
        <div className={cn(styles.btn, styles.info, styles.gray)}>
          <div>
            <InfoIcon />
          </div>
        </div>
        <div className={cn(styles.btn, styles.chat, styles.gray)}>
          <UserIcon />
        </div>
        <div className={cn(styles.btn, styles.chat, styles.gray)}>
          <ChatIcon />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.communication}>
      <div className={styles.logo}>
        <LogoIcon />
      </div>
      <div className={styles.window}>
        <div className={styles.user}>
          <div className={styles.time}>10:29</div>
          <div className={styles.name}>Айдар Валиев</div>
        </div>
        <div className={styles.myWindows}>
          <div className={styles.maAvatar}>Вы</div>
        </div>
        <div className={styles.partnerAvatar}>АВ</div>
      </div>
      <div className={styles.bottom}>
        {left()}
        {middle()}
        {right()}
      </div>
    </div>
  );
};

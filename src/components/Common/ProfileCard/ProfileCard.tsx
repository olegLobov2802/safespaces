import { ProfileCardProps } from "./ProfileCard.props";
import styles from "./ProfileCard.module.css";
import cn from "classnames";
import { Rating } from "../../UI/Rating/Rating";
import photo from "../../../static/img/photo.png";

export const ProfileCard = ({
  className,
  firstName,
  lastName,
  middleName,
  text,
  status,
  tags,
  reviewsNumber,
  language,
  rating,
  ...props
}: ProfileCardProps) => {
  const buildLang = () => {
    return language.map((l) => <span className={styles.lang}>{l}</span>);
  };

  const buildTags = () => {
    return tags.map((t) => (
      <div className={styles.tag}>
        <div className={styles.tName}>{t.name}</div>
        <div className={styles.tValue}>{t.value}</div>
      </div>
    ));
  };

  const Left = () => {
    return (
      <div className={styles.left}>
        <div className={styles.photo}>
          <img src={photo} alt="photo" />
          <div className={styles.status}>{status ? 'онлайн' : 'нет в сети'}</div>
        </div>
        <button className={styles.button}>Позвонить</button>
        <div className={styles.langs}>{buildLang()}</div>
      </div>
    );
  };

  const Right = () => {
    return (
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.tags}>{buildTags()}</div>
          <div className={styles.rating}>
            <Rating rating={rating} />
            <div className={styles.rate}>{rating}</div>
            <div className={styles.recall}>({reviewsNumber} отзывов)</div>
          </div>
          <div className={styles.fullName}>{firstName} {lastName} {middleName}</div>
          <div className={styles.text}>{text}</div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.sound}></div>
          <div className={styles.edit}><a href="#">Редактировать профиль</a></div>
          <div className={styles.social}></div>
        </div>
      </div>
    );
  };

  return (
    <div className={cn(className, styles.profileCard)} {...props}>
      <Left />
      <Right />
    </div>
  );
};

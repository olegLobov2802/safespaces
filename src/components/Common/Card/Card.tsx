import { CardProps } from "./Card.props";
import styles from "./Card.module.css";
import cn from "classnames";
import { Interest } from "../../UI/Interest/Interest";
import photo from "../../../static/img/photo.png";
import { StarIcon } from "../../UI/icons/StarIcon";
import { PhoneIcon } from "../../UI/icons/PhoneIcon";
import { useNavigate } from "react-router-dom";

export const Card = ({ className, user, ...props }: CardProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className={cn(styles.card, className)} {...props}>
      <div className={styles.rate}>
        <StarIcon />
        <div>{user.rate}</div>
      </div>
      <img className={styles.photo} src={photo} alt="photo" />
      <div className={styles.status}>
        <div
          className={cn(styles.circle, {
            [styles.red]: !user.status,
            [styles.green]: user.status,
          })}
        ></div>
        <div className={styles.statusText}>{status ? "онлайн" : "нет в сети"}</div>
      </div>
      <div className={styles.specialty}>{user.specialty}</div>
      <div className={styles.text}>{user.text}</div>
      <div className={styles.interests}>
        {user.interests.map((item) => (
          <Interest key={item} color={"blueExtraLight"}>
            {item}
          </Interest>
        ))}
      </div>
      <div className={styles.priceWrap}>
        <div className={styles.price}>
          <div className={styles.r}>₽</div>
          <div>{user.price}/час</div>
        </div>
        <button onClick={() => navigate('/spaces')} className={styles.phone}>
          <PhoneIcon />
        </button>
      </div>
      <div className={styles.border}></div>
    </div>
  );
};

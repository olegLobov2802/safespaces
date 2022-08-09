import styles from "./Profile.module.css";
import cn from "classnames";
import { ProfileCard } from "../../components";

const profileData: {
  tags: { name: string; value: number }[];
  rating: number;
  reviewsNumber: number;
  firstName: string;
  lastName: string;
  middleName: string;
  text: string;
  status: boolean;
  language: string[];
} = {
  firstName: "Зубенко",
  language: ['татарский', 'русский', 'французский', 'испанский'],
  lastName: "Михаил",
  middleName: "Петрович",
  rating: 4,
  reviewsNumber: 987,
  tags: [
    { name: "рыбалка", value: 12 },
    { name: "альпинизм", value: 12 },
    { name: "мафия", value: 12 },
    { name: "вождение", value: 12 },
    { name: "охота", value: 0 },
  ],
  status: true,
  text: "Лишь многие известные личности могут быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Кстати, акционеры крупнейших компаний могут быть подвергнуты целой серии независимых исследований.",
};

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <div className={styles.logo}></div>
        <div className={styles.nav}></div>
      </div>
      <div className={styles.profileCard}>
        <ProfileCard {...profileData} />
      </div>
      <div className={styles.recalls}></div>
      <div className={styles.footer}></div>
    </div>
  );
};

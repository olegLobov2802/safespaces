import styles from "./Home.module.css";
import cn from "classnames";
import { Button, Card, Tabs } from "../../components";
import { UsersInterface } from "../../interface/users.interface";
import { LogoIcon } from "../../components/UI/icons/Logo";
import { SearchIcon } from "../../components/UI/icons/SearchIcon";
import {useNavigate} from 'react-router-dom';

const users: UsersInterface[] = [
  {
    status: true,
    interests: ["Вино", "Кино", "Домино"],
    specialty: "Летчик",
    text: "Какой-нибудь текст",
    price: 250,
    rate: 4.7,
  },
  {
    status: true,
    interests: ["Вино", "Кино", "Домино"],
    specialty: "Летчик",
    text: "Какой-нибудь текст",
    price: 250,
    rate: 4.7,
  },
  {
    status: true,
    interests: ["Вино", "Кино", "Домино"],
    specialty: "Летчик",
    text: "Какой-нибудь текст",
    price: 250,
    rate: 4.7,
  },
  {
    status: true,
    interests: ["Вино", "Кино", "Домино"],
    specialty: "Летчик",
    text: "Какой-нибудь текст",
    price: 250,
    rate: 4.7,
  },
  {
    status: true,
    interests: ["Вино", "Кино", "Домино"],
    specialty: "Летчик",
    text: "Какой-нибудь текст",
    price: 250,
    rate: 4.7,
  },
  {
    status: true,
    interests: ["Вино", "Кино", "Домино"],
    specialty: "Летчик",
    text: "Какой-нибудь текст",
    price: 250,
    rate: 4.7,
  },
  {
    status: true,
    interests: ["Вино", "Кино", "Домино"],
    specialty: "Летчик",
    text: "Какой-нибудь текст",
    price: 250,
    rate: 4.7,
  },
  {
    status: true,
    interests: ["Вино", "Кино", "Домино"],
    specialty: "Летчик",
    text: "Какой-нибудь текст",
    price: 250,
    rate: 4.7,
  },
];

const tabs = [
  { id: 0, value: "Все" },
  { id: 1, value: "Онлайн" },
];

export const Home = (): JSX.Element => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login')
  };

  const cards = users.map((user, index) => <Card key={user.text + index} user={user} />);

  return (
    <div className={cn(styles.home)}>
      <div className={styles.blur}></div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <LogoIcon />
        </div>
        <div className={styles.nav}>
          <Button className={styles.search} appearance={"blue"}>
            <SearchIcon />
          </Button>
          <Button onClick={navigateToLogin} appearance={"blue"}>Регистрация</Button>
          <Button onClick={navigateToLogin} appearance={"blue"}>Вход</Button>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.tabs}>
          <Tabs tabs={tabs} />
        </div>
        <div className={styles.cards}>{cards}</div>
      </div>
    </div>
  );
};

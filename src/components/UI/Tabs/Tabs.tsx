import { TabsProps } from "./Tabs.props";
import styles from "./Tabs.module.css";
import cn from "classnames";
import { useState } from "react";

export const Tabs = ({ tabs, className, ...props }: TabsProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const changeTabHandler = (active: number) => {
    setActiveTab(active);
  };

  const Tab = (item: { id: number; value: string }) => {
    return (
      <div
        className={cn(styles.tab, {
          [styles.active]: item.id === activeTab,
        })}
        onClick={() => changeTabHandler(item.id)}
      >
        {item.value}
      </div>
    );
  };

  const tabsList = tabs.map((item) => <Tab key={item.id} {...item} />);

  return (
    <div className={cn(className, styles.tabs)} {...props}>
      {tabsList}
    </div>
  );
};

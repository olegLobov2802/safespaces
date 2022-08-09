import { InterestProps } from "./Interest.props";
import styles from "./Interest.module.css";
import cn from "classnames";

export const Interest = ({ color, children, className, ...props }: InterestProps): JSX.Element => {
  return <div className={cn(styles.interest, className, {
    [styles.blue]: color === 'blue',
    [styles.blueLight]: color === 'blueLight',
    [styles.blueExtraLight]: color === 'blueExtraLight',
    [styles.green]: color === 'green',
  })} {...props} >{children}</div>;
};

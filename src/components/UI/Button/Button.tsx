import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";
import {ArrowIcon} from '../icons/ArrowIcon';

export const Button = ({ appearance, children, className, arrow = false, ...props }: ButtonProps): JSX.Element => {
  return <button className={cn(styles.button, className, {
    [styles.blue]: appearance === 'blue',
    [styles.blueLight]: appearance === 'blueLight',
    [styles.ghost]: appearance === 'ghost',
  })} {...props} >
    {children}
    {arrow && <ArrowIcon />}
  </button>;
};

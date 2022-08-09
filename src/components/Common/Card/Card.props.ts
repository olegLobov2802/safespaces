import { DetailedHTMLProps, HTMLAttributes } from "react";
import {UsersInterface} from '../../../interface/users.interface';

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  user: UsersInterface;
}

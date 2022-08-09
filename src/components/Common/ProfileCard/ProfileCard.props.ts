import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProfileCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tags: {name:string; value: number}[];
  rating: number;
  reviewsNumber: number;
  firstName: string;
  lastName: string;
  middleName: string;
  text: string;
  status: boolean;
  language: string[];
}

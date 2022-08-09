import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TabsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tabs: {id: number, value: string}[];
}

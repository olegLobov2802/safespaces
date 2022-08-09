import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface InterestProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color: "blue" | "blueLight" | "blueExtraLight" | "green";
  children: ReactNode;
}

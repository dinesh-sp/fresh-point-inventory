import { ReactNode } from "react";

export interface IGridLayout {
  title: string;
  action?: ReactNode;
   children: ReactNode;
}
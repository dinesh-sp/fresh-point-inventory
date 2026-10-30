import { ReactNode } from "react";

export interface IForm {
  title: string;
  description?: string;
  children: ReactNode;
  action: IActions;
  submitting: boolean;
  footerAction?: boolean;
}

interface IActions {
  Submit?: () => void;
  Reset: () => void;
  Cancle: () => void;
  Close: () => void;
}

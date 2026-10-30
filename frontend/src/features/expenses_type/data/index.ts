import {
  createexpensesTypeFormSchema,
  CreateexpensesTypeFormValues,
} from "../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const expensesTypeDefault = () =>
  useForm<CreateexpensesTypeFormValues>({
    resolver: zodResolver(createexpensesTypeFormSchema),
    defaultValues: {
      name: "",
      code: "",
    },
    mode: "onBlur",
  });

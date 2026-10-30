import {
  creatematerialFormSchema,
  CreatematerialFormValues,
} from "../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const materialDefault = () =>
  useForm<CreatematerialFormValues>({
    resolver: zodResolver(creatematerialFormSchema),
    defaultValues: {
      name: "",
      code: "",
    },
    mode: "onBlur",
  });

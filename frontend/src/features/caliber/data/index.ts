import { createCaliberFormSchema, CreateCaliberFormValues } from "../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const CaliberDefault = () =>
  useForm<CreateCaliberFormValues>({
    resolver: zodResolver(createCaliberFormSchema),
    defaultValues: {
      code: "",
      name: "",
    },
    mode: "onBlur",
  });

import { createbatchFormSchema, CreatebatchFormValues } from "../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const batchDefault = () =>
  useForm<CreatebatchFormValues>({
    resolver: zodResolver(createbatchFormSchema),
    defaultValues: {
      code: "",
      name: "",
      is_default: true,
      status: true,
      start_date: new Date(),
    },
    mode: "onBlur",
  });

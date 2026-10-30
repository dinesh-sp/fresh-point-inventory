import {
  createCategoryTypeFormSchema,
  CreateCategoryTypeFormValues,
} from "../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const CategoryTypeDefault = () =>
  useForm<CreateCategoryTypeFormValues>({
    resolver: zodResolver(createCategoryTypeFormSchema),
    defaultValues: {
      name: "",
      code: "",
    },
    mode: "onBlur",
  });

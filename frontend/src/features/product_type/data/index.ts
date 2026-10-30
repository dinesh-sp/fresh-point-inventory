import {
  createproductTypeFormSchema,
  CreateproductTypeFormValues,
} from "../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const productTypeDefault = () =>
  useForm<CreateproductTypeFormValues>({
    resolver: zodResolver(createproductTypeFormSchema),
    defaultValues: {
      name: "",
      code: "",
    },
    mode: "onBlur",
  });

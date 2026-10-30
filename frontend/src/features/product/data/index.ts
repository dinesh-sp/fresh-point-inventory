import {
  createproductFormSchema,
  CreateproductFormValues,
} from "../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const productDefault = () =>
  useForm<CreateproductFormValues>({
    resolver: zodResolver(createproductFormSchema),
    defaultValues: {
      name: "",
      code: "",
      batch_ids: [],
    },
    mode: "onBlur",
  });

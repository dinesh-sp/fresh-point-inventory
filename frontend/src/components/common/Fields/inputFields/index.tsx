import { Stack, Typography } from "@mui/material";
import { FormFieldProps } from "./interface";

export const FormField = ({ label, required, children }: FormFieldProps) => (
  <Stack
    direction="column"
    flexWrap="wrap"
    rowGap={1}
    columnGap={1}
    // sx={{ border: "1px solid " }}
    px={1}
  >
    <Typography variant="body2" fontWeight={600} color="text.primary">
      {label}
      {required && (
        <Typography component="span" color="error">
          {" *"}
        </Typography>
      )}
    </Typography>

    {children}
  </Stack>
);

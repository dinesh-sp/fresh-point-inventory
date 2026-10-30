import { Grid, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormField } from "../../../components/common/Fields";
import { CategoryTypeDefault } from "../data";
import { CreateCategoryTypeFormValues } from "../schema";
import { CusForm } from "../../../components/common/Layout";
import { IActions } from "../interface";

export const CtgAdd = (props: IActions) => {
  const { _handleClose } = props;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = CategoryTypeDefault();

  const onSubmit = async (data: CreateCategoryTypeFormValues) => {
    console.log(data);

    // API Call
    // await createProduct(data);

    reset();
  };

  return (
    <>
      <CusForm
        action={{
          Cancle: () => {},
          Reset: () => {},
          Submit: handleSubmit(onSubmit),
          Close: _handleClose,
        }}
        submitting={isSubmitting}
        title=" Measurement Information"
      >
        <Grid
          container
          spacing={3}
          sx={{
            mx: 4,
          }}
        ><Grid xs={12} md={4}>
            <FormField label="Code" required>
              <Controller
                name="code"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    size="small"
                    placeholder="Enter Unique Code"
                    error={!!errors.code}
                    helperText={errors.code?.message}
                  />
                )}
              />
            </FormField>
          </Grid>
          <Grid xs={12} md={4}>
            <FormField label="Name" required>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    size="small"
                    placeholder="Enter Name"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                )}
              />
            </FormField>
          </Grid>
        </Grid>
      </CusForm>
    </>
  );
};

import { Grid, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormField } from "../../../components/common/Fields";
import { CaliberDefault } from "../data";
import { CreateCaliberFormValues } from "../schema";
import { CusForm } from "../../../components/common/Layout";
import { IActions } from "../interface";
import { useAddcaliberMutation } from "../slice";

export const ClbrAdd = (props: IActions) => {
  const { _handleClose } = props;
  const [addBatch, { isLoading, error, isSuccess }] = useAddcaliberMutation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = CaliberDefault();

  const onSubmit = async (data: CreateCaliberFormValues) => {
    await addBatch(data).unwrap();
    if (isSuccess) {
      await _handleClose();
    }
    await console.log(data, isSuccess);
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
        >
          <Grid xs={12} md={4}>
            <FormField label="Code" required>
              <Controller
                name="code"
                control={control}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    {...field}
                    size="small"
                    fullWidth
                    error={!!errors.code}
                    helperText={
                      errors.code ? errors.code?.message : "✓ Code is available"
                    }
                    placeholder="Enter Unique code"
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

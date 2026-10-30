import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { FormField } from "../../../components/common/Fields";
import { productDefault } from "../data";
import { CreateproductFormValues } from "../schema";
import { CusForm } from "../../../components/common/Layout";
import { IActions } from "../interface";
import { useGetproductTypeQuery } from "../slice";

export const GenForm = (props: IActions) => {
  const { _handleClose } = props;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = productDefault();
  const { data: productTypes = [], isLoading: productTypeLoading } =
    useGetproductTypeQuery();

  const { data: batches = [], isLoading: batchLoading } = {
    isLoading: false,
    data: [
      { id: "550e8400-e29b-41d4-a716-446655440000", name: "coconut oil" },
      { id: "550e8400-e29b-41d4-a716-44665544010", name: "coconut oil1" },
    ],
  };
  //   useGetProductTypesQuery();
  const onSubmit = async (data: CreateproductFormValues) => {
    console.log(data);
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
        title=" product Information"
      >
        <Grid
          container
          spacing={3}
          sx={{
            mx: 4,
          }}
        >
          <Grid xs={12} md={5}>
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
          <Grid xs={12} md={5}>
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
          <Grid xs={12} md={5}>
            <FormField label="Product Type" required>
              <Controller
                name="product_typ_id"
                control={control}
                render={({ field }) => (
                  <FormControl
                    fullWidth
                    size="small"
                    error={!!errors.product_typ_id}
                  >
                    <InputLabel>Product Type</InputLabel>

                    <Select
                      {...field}
                      label="Product Type"
                      disabled={productTypeLoading}
                      value={field.value ?? ""}
                    >
                      <MenuItem value="" color="gray">
                        <em>Select Product Type</em>
                      </MenuItem>

                      {productTypes &&
                        productTypes.map((item: any) => (
                          <MenuItem key={item.id ?? 0} value={item.id}>
                            {item.name}
                          </MenuItem>
                        ))}
                    </Select>

                    <FormHelperText>
                      {errors.product_typ_id?.message}
                    </FormHelperText>
                  </FormControl>
                )}
              />
            </FormField>
          </Grid>

          <Grid xs={12} md={5}>
            <FormField label="Batch ID" required>
              <Controller
                name="batch_ids"
                control={control}
                render={({ field }) => (
                  <FormControl
                    fullWidth
                    size="small"
                    error={!!errors.batch_ids}
                  >
                    <InputLabel>Batch ID</InputLabel>

                    <Select<string[]>
                      multiple
                      label="Batch ID"
                      value={field.value ?? []}
                      onChange={(event) => {
                        const value = event.target.value;
                        field.onChange(
                          typeof value === "string" ? value.split(",") : value,
                        );
                      }}
                      renderValue={(selected) =>
                        batches
                          .filter((item) =>
                            (selected as string[]).includes(item.id),
                          )
                          .map((item) => item.name)
                          .join(", ")
                      }
                    >
                      {batches.map((item) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </Select>

                    <FormHelperText>
                      {errors.batch_ids?.message ?? ""}
                    </FormHelperText>
                  </FormControl>
                )}
              />
            </FormField>
          </Grid>
        </Grid>
      </CusForm>
    </>
  );
};

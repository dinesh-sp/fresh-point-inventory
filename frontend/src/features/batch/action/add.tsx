import {
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import { FormField } from "../../../components/common/Fields";
import { batchDefault } from "../data";
import { CreatebatchFormValues } from "../schema";
import { CusForm } from "../../../components/common/Layout";
import { IActions } from "../interface";
import {
  useAddbatchMutation,
  useGetCaliberQuery,
  useGetmaterialQuery,
} from "../slice";
import dayjs from "dayjs";

export const GenForm = (props: IActions) => {
  const { _handleClose } = props;
  const [addBatch, { isLoading, error }] = useAddbatchMutation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = batchDefault();

  const { data: material = [], isLoading: materialLoading } =
    useGetmaterialQuery();
  const { data: measurement = [], isLoading: measurementLoading } =
    useGetCaliberQuery();

  const onSubmit = async (data: CreatebatchFormValues) => {
    // API Call
    await addBatch(data).unwrap();
    reset();
    _handleClose();
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
        title=" Batch Information"
        description="Price Mapping"
      >
        <Grid
          container
          spacing={3}
          sx={{
            mx: 4,
          }}
        >
          <Grid key={Math.random()} xs={12} md={4} display="grid">
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
          <Grid key={Math.random()} xs={12} md={5}>
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
          <Grid
            key={Math.random()}
            xs={12}
            md={1}
            display="grid"
            justifyContent={"flex-end"}
          >
            <FormField label="Default">
              <Controller
                name="is_default"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Switch
                    className="play-pause-switch"
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                )}
              />
            </FormField>
          </Grid>
          <Grid
            key={Math.random()}
            xs={12}
            md={1}
            display="grid"
            justifyContent={"flex-end"}
          >
            <FormField label="Status">
              <Controller
                name="status"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Switch
                    className="play-pause-switch"
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                )}
              />
            </FormField>
          </Grid>
          <Grid key={Math.random()} xs={12} md={4} display="grid">
            <FormField label="Material" required>
              <Controller
                name="material_id"
                control={control}
                render={({ field }) => (
                  <FormControl
                    fullWidth
                    size="small"
                    error={!!errors.material_id}
                  >
                    <InputLabel>select</InputLabel>

                    <Select
                      {...field}
                      label="Product Type"
                      disabled={materialLoading}
                      value={field.value ?? ""}
                    >
                      <MenuItem value="" disabled>
                        <em>Select Material</em>
                      </MenuItem>

                      {material &&
                        material.map((item: any) => (
                          <MenuItem key={item.id ?? 0} value={item.id}>
                            {item.name}
                          </MenuItem>
                        ))}
                    </Select>

                    <FormHelperText>
                      {errors.material_id?.message}
                    </FormHelperText>
                  </FormControl>
                )}
              />
            </FormField>
          </Grid>
          <Grid key={Math.random()} xs={12} md={4} display="grid">
            <FormField label="Measuremnt" required>
              <Controller
                name="measurement_id"
                control={control}
                render={({ field }) => (
                  <FormControl
                    fullWidth
                    size="small"
                    error={!!errors.measurement_id}
                  >
                    <InputLabel>select</InputLabel>

                    <Select
                      {...field}
                      label="Product Type"
                      //   disabled={productTypeLoading}
                      value={field.value ?? ""}
                    >
                      <MenuItem value="" disabled>
                        <em>Select Measurement</em>
                        <Divider />
                      </MenuItem>

                      {measurement &&
                        measurement.map((item: any) => (
                          <MenuItem key={item.id ?? 0} value={item.id}>
                            {item.name}
                          </MenuItem>
                        ))}
                    </Select>

                    <FormHelperText>
                      {errors.measurement_id?.message}
                    </FormHelperText>
                  </FormControl>
                )}
              />
            </FormField>
          </Grid>
          <Grid key={Math.random()} xs={12} md={3}>
            <FormField label="Price" required>
              <Controller
                name="price"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    size="small"
                    placeholder="Enter Price"
                    error={!!errors.price}
                    helperText={errors.price?.message}
                  />
                )}
              />
            </FormField>
          </Grid>
          <Grid key={Math.random()} xs={12} md={4} display="grid">
            <FormField label="start Date" required>
              <Controller
                name="start_date"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(value) => field.onChange(value)}
                    // format="DD/MM/YYYY"
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        size: "small",
                        placeholder: "Select Date",
                        error: !!errors.start_date,
                        helperText: errors.start_date?.message,
                      },
                    }}
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

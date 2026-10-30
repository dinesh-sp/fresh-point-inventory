import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, TextField, Button, Stack, Alert } from '@mui/material';
import { createTodoFormSchema, CreateTodoFormValues } from './todoSchema';
import { useAddTodoMutation } from './todosApiSlice';

export function TodoForm() {
  const [addTodo, { isLoading, error }] = useAddTodoMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTodoFormValues>({
    resolver: zodResolver(createTodoFormSchema),
    defaultValues: { title: '' },
  });

  const onSubmit = async (values: CreateTodoFormValues) => {
    await addTodo(values).unwrap();
    reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mb: 3 }}>
      <Stack direction="row" spacing={1} alignItems="flex-start">
        <TextField
          fullWidth
          size="small"
          label="New todo"
          placeholder="What needs to be done?"
          error={!!errors.title}
          helperText={errors.title?.message}
          {...register('title')}
        />
        <Button type="submit" variant="contained" color='secondary' disabled={isLoading} sx={{ height: 40 }}>
          Add
        </Button>
      </Stack>
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          Something went wrong adding that todo. Please try again.
        </Alert>
      )}
    </Box>
  );
}

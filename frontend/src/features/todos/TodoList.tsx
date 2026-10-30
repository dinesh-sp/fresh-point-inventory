import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  CircularProgress,
  Alert,
  Typography,
  Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useGetTodosQuery, useUpdateTodoMutation, useDeleteTodoMutation } from './todosApiSlice';

export function TodoList() {
  const { data: todos, isLoading, isError } = useGetTodosQuery();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  if (isLoading) {
    return (
      <Paper sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress size={28} />
      </Paper>
    );
  }

  if (isError) {
    return <Alert severity="error">Could not load todos. Is the backend running?</Alert>;
  }

  if (!todos || todos.length === 0) {
    return (
      <Paper variant="outlined" sx={{ p: 3, textAlign: 'center' }}>
        <Typography color="text.secondary">No todos yet — add your first one above.</Typography>
      </Paper>
    );
  }

  return (
    <Paper variant="outlined">
      <List disablePadding>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            }
            divider
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={todo.completed}
                onChange={(e) => updateTodo({ id: todo.id, completed: e.target.checked })}
              />
            </ListItemIcon>
            <ListItemText
              primary={todo.title}
              sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

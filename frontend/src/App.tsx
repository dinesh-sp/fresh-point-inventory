import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import { Layout } from './components/Layout';
import { TodoForm } from './features/todos/TodoForm';
import { TodoList } from './features/todos/TodoList';
import { Routes } from "./app/routes";
import { useRoutes } from "react-router-dom";

function App() {
  const content = useRoutes(Routes);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
          {content}
      </Layout>
    </ThemeProvider>
  );
}

export default App;

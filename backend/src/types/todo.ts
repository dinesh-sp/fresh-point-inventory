export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
}

// Shape as stored in SQLite (booleans are stored as 0/1)
export interface TodoRow {
  id: number;
  title: string;
  completed: number;
  created_at: string;
}

export function mapRowToTodo(row: TodoRow): Todo {
  return {
    id: row.id,
    title: row.title,
    completed: Boolean(row.completed),
    createdAt: row.created_at,
  };
}

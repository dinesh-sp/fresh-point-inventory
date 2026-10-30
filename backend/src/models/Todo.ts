import { db } from '../config/database';
import { Todo, TodoRow, mapRowToTodo } from '../types/todo';
import { CreateTodoInput, UpdateTodoInput } from '../validators/todoValidator';

export const TodoModel = {
  findAll(): Todo[] {
    const rows = db.prepare('SELECT * FROM todos ORDER BY id DESC').all() as unknown as TodoRow[];
    return rows.map(mapRowToTodo);
  },

  findById(id: number): Todo | undefined {
    const row = db.prepare('SELECT * FROM todos WHERE id = ?').get(id) as unknown as TodoRow | undefined;
    return row ? mapRowToTodo(row) : undefined;
  },

  create(input: CreateTodoInput): Todo {
    const result = db
      .prepare('INSERT INTO todos (title, completed) VALUES (?, 0)')
      .run(input.title);
    return this.findById(Number(result.lastInsertRowid))!;
  },

  update(id: number, input: UpdateTodoInput): Todo | undefined {
    const existing = this.findById(id);
    if (!existing) return undefined;

    const title = input.title ?? existing.title;
    const completed = input.completed ?? existing.completed;

    db.prepare('UPDATE todos SET title = ?, completed = ? WHERE id = ?').run(
      title,
      completed ? 1 : 0,
      id
    );

    return this.findById(id);
  },

  remove(id: number): boolean {
    const result = db.prepare('DELETE FROM todos WHERE id = ?').run(id);
    return result.changes > 0;
  },
};

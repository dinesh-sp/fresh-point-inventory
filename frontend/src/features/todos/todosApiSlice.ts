import { apiSlice } from '../../api/apiSlice';
import { Todo, todoListSchema, todoSchema } from './todoSchema';

interface UpdateTodoArgs {
  id: number;
  title?: string;
  completed?: boolean;
}

export const todosApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => '/todos',
      // Validate the response shape at runtime with Zod. Throwing here
      // surfaces a clear error instead of silently trusting the server.
      transformResponse: (response: unknown) => todoListSchema.parse(response),
      providesTags: (result) =>
        result
          ? [...result.map((todo) => ({ type: 'Todo' as const, id: todo.id })), { type: 'Todo', id: 'LIST' }]
          : [{ type: 'Todo', id: 'LIST' }],
    }),

    addTodo: builder.mutation<Todo, { title: string }>({
      query: (body) => ({
        url: '/todos',
        method: 'POST',
        body,
      }),
      transformResponse: (response: unknown) => todoSchema.parse(response),
      invalidatesTags: [{ type: 'Todo', id: 'LIST' }],
    }),

    updateTodo: builder.mutation<Todo, UpdateTodoArgs>({
      query: ({ id, ...patch }) => ({
        url: `/todos/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      transformResponse: (response: unknown) => todoSchema.parse(response),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Todo', id }, { type: 'Todo', id: 'LIST' }],
    }),

    deleteTodo: builder.mutation<void, number>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Todo', id }, { type: 'Todo', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApiSlice;

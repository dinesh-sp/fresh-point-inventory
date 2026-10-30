import { apiSlice } from "../../../api/apiSlice";
import {
  batch,
  batchListSchema,
  batchschema,
  CreatebatchFormValues,
} from "../schema";

const batchsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getbatch: builder.query<batch[], void>({
      query: () => ({ url: "/batch", method: "GET" }),
      // Validate the response shape at runtime with Zod. Throwing here
      // surfaces a clear error instead of silently trusting the server.
      transformResponse: (response: unknown) => batchListSchema.parse(response),
      providesTags: (result) =>
        result
          ? [
              ...result.map((batch) => ({
                type: "batch" as const,
                id: batch.id,
              })),
              { type: "batch", id: "LIST" },
            ]
          : [{ type: "batch", id: "LIST" }],
    }),
    addbatch: builder.mutation<batch, CreatebatchFormValues>({
      query: (body) => ({
        url: "/batch",
        method: "POST",
        body,
      }),
      transformResponse: (response: unknown) => batchschema.parse(response),
      invalidatesTags: [{ type: "batch", id: "LIST" }],
    }),
  }),
});

export const { useGetbatchQuery, useAddbatchMutation } = batchsApiSlice;

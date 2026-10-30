import { apiSlice } from "../../../api";
import { expensesType, expensesTypeListSchema } from "../schema";

export const expensesTypeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getexpensesType: builder.query<expensesType[], void>({
      query: () => "/expensesType",
      // Validate the response shape at runtime with Zod. Throwing here
      // surfaces a clear error instead of silently trusting the server.
      transformResponse: (response: unknown) =>
        expensesTypeListSchema.parse(response),
      providesTags: (result) =>
        result
          ? [
              ...result.map((expensesType) => ({
                type: "expensesType" as const,
                id: expensesType.id,
              })),
              { type: "expensesType", id: "LIST" },
            ]
          : [{ type: "expensesType", id: "LIST" }],
    }),
  }),
});

export const { useGetexpensesTypeQuery } = expensesTypeApiSlice;

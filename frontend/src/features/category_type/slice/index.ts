import { apiSlice } from "../../../api/apiSlice";
import { CategoryType, CategoryTypeListSchema } from "../schema";

export const categoryTypeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategoryType: builder.query<CategoryType[], void>({
      query: () => "/categoryType",
      // Validate the response shape at runtime with Zod. Throwing here
      // surfaces a clear error instead of silently trusting the server.
      transformResponse: (response: unknown) =>
        CategoryTypeListSchema.parse(response),
      providesTags: (result) =>
        result
          ? [
              ...result.map((categoryType) => ({
                type: "categoryType" as const,
                id: categoryType.id,
              })),
              { type: "categoryType", id: "LIST" },
            ]
          : [{ type: "categoryType", id: "LIST" }],
    }),
  }),
});

export const { useGetCategoryTypeQuery } = categoryTypeApiSlice;

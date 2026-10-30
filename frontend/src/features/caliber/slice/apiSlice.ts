import { apiSlice } from "../../../api/apiSlice";
import {
  Caliber,
  caliberListSchema,
  calibershema,
  CreateCaliberFormValues,
} from "../schema";

const calibersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCaliber: builder.query<Caliber[], void>({
      query: () => "/caliber",
      // Validate the response shape at runtime with Zod. Throwing here
      // surfaces a clear error instead of silently trusting the server.
      transformResponse: (response: unknown) =>
        caliberListSchema.parse(response),
      providesTags: (result) =>
        result
          ? [
              ...result.map((caliber) => ({
                type: "caliber" as const,
                id: caliber.id,
              })),
              { type: "caliber", id: "LIST" },
            ]
          : [{ type: "caliber", id: "LIST" }],
    }),
    addcaliber: builder.mutation<Caliber, CreateCaliberFormValues>({
      query: (body) => ({
        url: "/caliber",
        method: "POST",
        body,
      }),
      transformResponse: (response: unknown) => calibershema.parse(response),
      invalidatesTags: [{ type: "caliber", id: "LIST" }],
    }),
  }),
});

export const { useGetCaliberQuery, useAddcaliberMutation } = calibersApiSlice;

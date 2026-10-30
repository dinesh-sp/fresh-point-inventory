import { apiSlice } from "../../../api/apiSlice";
import { cashFlow, cashFlowshema } from "../schema";

const cashFlowsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addcashFlow: builder.mutation<cashFlow, cashFlow>({
      query: (body) => ({
        url: "/cashflow",
        method: "POST",
        body,
      }),
      transformResponse: (response: unknown) => cashFlowshema.parse(response),
      invalidatesTags: [{ type: "cashFlow", id: "LIST" }],
    }),
  }),
});

export const { useAddcashFlowMutation } = cashFlowsApiSlice;

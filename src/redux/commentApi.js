import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://6481896d29fa1c5c50318ee3.mockapi.io";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ["Comments"],
    }),
    addComment: builder.mutation({
      query: ({ author, content }) => ({
        url: "/comments",
        method: "POST",
        body: { author, content },
      }),
      invalidatesTags: ["Comments"],
    }),
    updateCommentCount: builder.mutation({
      query: ({ id, ...comment }) => ({
        url: `${API_ENDPOINT}/${id}`,
        method: "PUT",
        body: comment,
      }),
      invalidatesTags: ["Comments"],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useAddCommentMutation,
  useUpdateCommentCountMutation,
} = commentApi;

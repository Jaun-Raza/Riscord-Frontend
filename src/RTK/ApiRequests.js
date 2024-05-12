import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const Api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://backend-riscord.vercel.app/"
    }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
                query: (data) => ({
                    url: "auth/sign-up",
                    method: "POST",
                    body: data
                })
            }),
        logIn: builder.mutation({
            query: (data) => ({
                url: "auth/log-in",
                method: "POST",
                body: data
            })
        })
    })
})

export const { useSignUpMutation, useLogInMutation, useGetUserDataQuery } = Api
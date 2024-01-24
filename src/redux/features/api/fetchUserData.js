import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { githubFetchURL } from "../../../constants"



export const fetchUserData = createApi({
    reducerPath: "fetchUserData",
    baseQuery: fetchBaseQuery({ baseUrl: githubFetchURL }),
    endpoints: (builder) => ({
        userDetail: builder.query({
            query: (name) => {
                if (!name) {
                    return; // Skip the query
                }
                return `/${name}`;
            }
        }),
        userRepo: builder.query({
            query: (name) => {
                if (!name) {
                    return;
                }
                return `/${name}/repos`
            }
        })
    })
})

export const { useUserDetailQuery, useUserRepoQuery } = fetchUserData

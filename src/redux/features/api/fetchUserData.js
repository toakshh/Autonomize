import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { githubFetchURL } from "../../../constants"



export const fetchUserData = createApi({
    reducerPath: "fetchUserData",
    baseQuery: fetchBaseQuery({ baseUrl: githubFetchURL }),
    endpoints: (builder) => ({
        userDetail: builder.query({
            query: (name) => {
                if (!name) {
                    return; // skip query
                }
                return `/users/${name}`;
            }
        }),
        userRepo: builder.query({
            query: (name) => {
                if (!name) {
                    return;
                }
                return `/users/${name}/repos`
            }
        }),
        followerList: builder.query({
            query: (name) => {
                if (!name) {
                    return;
                }
                return `/users/${name}/followers`
            }
        }),
        repoDetail: builder.query({
            query: (name, repo) => {
                if (!name || !repo) {
                    return;
                }
                return `/repos/${name}/${repo}`
            }
        }),
    })
})

export const { useUserDetailQuery, useUserRepoQuery, useRepoDetailQuery, useFollowerListQuery } = fetchUserData

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { githubFetchURL } from "../../../constants"



export const fetchUserData = createApi({
    reducerPath: "fetchUserData",
    baseQuery: fetchBaseQuery({ baseUrl: githubFetchURL }),
    endpoints: (builder) => ({
        userDetail: builder.query({
            query: (name) => `/${name}`,
        })
    })
})

export const { useUserDetailQuery } = fetchUserData

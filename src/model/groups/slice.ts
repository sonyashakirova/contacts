import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {GroupContactsDto} from 'src/types/dto/GroupContactsDto';

export const groupsSlice = createApi({
  reducerPath: 'groups',
  baseQuery: fetchBaseQuery({
    // https://fs.getcourse.ru/fileservice/file/download/a/177331/sc/503/h/03b7cef5194e433422491a8f22413a18.json
    baseUrl: 'https://mocki.io/v1',
  }),
  endpoints: (builder) => ({
    getGroups: builder.query<GroupContactsDto[], void>({
      query() {
        return {
          url: '/43a86137-1ab3-46d9-8b5f-b7d32047782b',
        };
      },
    }),
  }),
});

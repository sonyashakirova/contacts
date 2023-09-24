import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ContactDto} from 'src/types/dto/ContactDto';

export const contactsSlice = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    // https://fs.getcourse.ru/fileservice/file/download/a/177331/sc/503/h/03b7cef5194e433422491a8f22413a18.json
    baseUrl: 'https://mocki.io/v1',
  }),
  endpoints: (builder) => ({
    getContacts: builder.query<ContactDto[], void>({
      query() {
        return {
          url: '/63cd5608-40ea-4ec7-a9ca-9ac1981214fa',
        };
      },
    }),
  }),
});

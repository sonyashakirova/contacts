import {contactsSlice} from './slice';

export default contactsSlice.reducer;

export const contactsReducerPath = contactsSlice.reducerPath;
export const contactsMiddleware = contactsSlice.middleware;

export const {useGetContactsQuery} = contactsSlice;

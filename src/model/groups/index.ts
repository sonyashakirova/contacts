import {groupsSlice} from './slice';

export default groupsSlice.reducer;

export const groupsReducerPath = groupsSlice.reducerPath;
export const groupsMiddleware = groupsSlice.middleware;

export const {useGetGroupsQuery} = groupsSlice;

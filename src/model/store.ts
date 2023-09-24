import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import contactsReducer, {
  contactsMiddleware,
  contactsReducerPath,
} from './contacts';
import groupsReducer, {groupsMiddleware, groupsReducerPath} from './groups';

const rootReducer = combineReducers({
  [contactsReducerPath]: contactsReducer,
  [groupsReducerPath]: groupsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([contactsMiddleware, groupsMiddleware]),
});

export type RootState = ReturnType<typeof rootReducer>;

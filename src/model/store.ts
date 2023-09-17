import {combineReducers, createStore} from 'redux';
import {
  contactsReducer,
  favoriteContactsReducer,
  groupsReducer,
} from './reducers';

export const store = createStore(
  combineReducers({
    contacts: contactsReducer,
    favoriteContacts: favoriteContactsReducer,
    groups: groupsReducer,
  })
);

export type RootState = ReturnType<typeof store.getState>;

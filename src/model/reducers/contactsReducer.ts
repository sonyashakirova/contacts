import {DATA_CONTACT} from 'src/__data__';
import {FILTER_CONTACTS_ACTION, ProjectActions} from '../actions';
import {ContactDto} from 'src/types/dto/ContactDto';

export const contactsReducer = (
  state: ContactDto[] = DATA_CONTACT,
  action: ProjectActions
) => {
  switch (action.type) {
    case FILTER_CONTACTS_ACTION:
      const {filterValues, groups} = action.payload;
      let findContacts = DATA_CONTACT;

      if (filterValues.name) {
        const fvName = filterValues.name.toLowerCase();
        findContacts = findContacts.filter(
          ({name}) => name.toLowerCase().indexOf(fvName) > -1
        );
      }

      if (filterValues.groupId) {
        const groupContacts = groups.find(
          ({id}) => id === filterValues.groupId
        );

        if (groupContacts) {
          findContacts = findContacts.filter(({id}) =>
            groupContacts.contactIds.includes(id)
          );
        }
      }

      return findContacts;
    default:
      return state;
  }
};

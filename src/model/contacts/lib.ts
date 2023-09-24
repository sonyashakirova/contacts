import {FilterFormValues} from 'src/components/FilterForm';
import {ContactDto} from 'src/types/dto/ContactDto';
import {GroupContactsDto} from 'src/types/dto/GroupContactsDto';

export const filterContacts = (
  contacts: ContactDto[],
  filterValues: Partial<FilterFormValues>,
  groups: GroupContactsDto[]
) => {
  let findContacts = contacts;

  if (filterValues.name) {
    const fvName = filterValues.name.toLowerCase();
    findContacts = findContacts.filter(
      ({name}) => name.toLowerCase().indexOf(fvName) > -1
    );
  }

  if (filterValues.groupId) {
    const groupContacts = groups.find(({id}) => id === filterValues.groupId);

    if (groupContacts) {
      findContacts = findContacts.filter(({id}) =>
        groupContacts.contactIds.includes(id)
      );
    }
  }

  return findContacts;
};

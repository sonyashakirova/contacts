import {makeAutoObservable} from 'mobx';
import {ContactDto} from 'src/types/dto/ContactDto';
import {groupsStore} from './groupsStore';
import {FilterFormValues} from 'src/components/FilterForm';

export const contactsStore = makeAutoObservable({
  contacts: [] as ContactDto[],
  filter(filterValues: Partial<FilterFormValues>) {
    const groups = groupsStore.groups;
    let findContacts = [...this.contacts];

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

    this.contacts = findContacts;
  },
  *get() {
    const data: ContactDto[] = yield fetch(
      //'https://fs.getcourse.ru/fileservice/file/download/a/177331/sc/190/h/560e0501fa0e19aed9ef169df6095f00.json',
      'https://mocki.io/v1/63cd5608-40ea-4ec7-a9ca-9ac1981214fa',
      {
        headers: {
          'content-type': 'application/json',
        },
      }
    ).then((res) => res.json());

    if (data) {
      this.contacts = data;
    }
  },
});

import {makeAutoObservable} from 'mobx';
import {GroupContactsDto} from 'src/types/dto/GroupContactsDto';

export const groupsStore = makeAutoObservable({
  groups: [] as GroupContactsDto[],
  *get() {
    const data: GroupContactsDto[] = yield fetch(
      // 'https://fs.getcourse.ru/fileservice/file/download/a/177331/sc/503/h/03b7cef5194e433422491a8f22413a18.json',
      'https://mocki.io/v1/43a86137-1ab3-46d9-8b5f-b7d32047782b',
      {
        headers: {
          'content-type': 'application/json',
        },
      }
    ).then((res) => res.json());

    if (data) {
      this.groups = data;
    }
  },
});

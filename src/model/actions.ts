import {FilterFormValues} from 'src/components/FilterForm';
import {GroupContactsDto} from 'src/types/dto/GroupContactsDto';

export const FILTER_CONTACTS_ACTION = 'FILTER_CONTACTS_ACTION';

export interface IFilterContactsAction {
  type: typeof FILTER_CONTACTS_ACTION;
  payload: {
    filterValues: Partial<FilterFormValues>;
    groups: GroupContactsDto[];
  };
}

export const filterContactsActionCreator = (
  filterValues: Partial<FilterFormValues>,
  groups: GroupContactsDto[]
): IFilterContactsAction => {
  return {type: FILTER_CONTACTS_ACTION, payload: {filterValues, groups}};
};

export type ProjectActions = IFilterContactsAction;

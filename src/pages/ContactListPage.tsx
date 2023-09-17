import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import {FilterForm, FilterFormValues} from 'src/components/FilterForm';
import {
  filterContactsActionCreator,
  useAppDispatch,
  useAppSelector,
} from 'src/model';

export const ContactListPage = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector((state) => state.contacts);
  const groups = useAppSelector((state) => state.groups);

  const onSubmit = (filterValues: Partial<FilterFormValues>): void => {
    dispatch(filterContactsActionCreator(filterValues, groups));
  };

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm
          groupContactsList={groups}
          initialValues={{}}
          onSubmit={onSubmit}
        />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {contacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

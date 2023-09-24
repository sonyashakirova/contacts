import {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {Col, Row} from 'react-bootstrap';
import {ContactCard, FilterForm} from 'src/components';
import {FilterFormValues} from 'src/components/FilterForm';
import {contactsStore, groupsStore} from 'src/model';

export const ContactListPage = observer(() => {
  const contacts = contactsStore.contacts;
  const groups = groupsStore.groups;

  useEffect(() => {
    if (!contacts.length) {
      contactsStore.get();
    }

    if (!groups.length) {
      groupsStore.get();
    }
  }, []);

  const onSubmit = (filterValues: Partial<FilterFormValues>): void => {
    contactsStore.filter(filterValues);
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
});

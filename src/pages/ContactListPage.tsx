import {useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {ContactCard, FilterForm} from 'src/components';
import {FilterFormValues} from 'src/components/FilterForm';
import {useGetGroupsQuery} from 'src/model/groups';
import {useGetContactsQuery} from 'src/model/contacts';
import {filterContacts} from 'src/model/contacts/lib';

export const ContactListPage = () => {
  const contactsData = useGetContactsQuery();
  const contacts = contactsData.isSuccess ? contactsData.data : [];
  const groupsData = useGetGroupsQuery();
  const groups = groupsData.isSuccess ? groupsData.data : [];

  const [filteredContacts, setFilteredContacts] = useState(contacts);

  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);

  const onSubmit = (filterValues: Partial<FilterFormValues>): void => {
    setFilteredContacts(filterContacts(contacts, filterValues, groups));
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
          {filteredContacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

import {observer} from 'mobx-react-lite';
import {useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components';
import {contactsStore} from 'src/model';

const favoriteContactIds = [
  '27370c62-0dad-4f21-ab4d-6e5588d6bf74',
  '68f42b37-2954-4a4e-9df1-c8ff86128d70',
];

export const FavoritListPage = observer(() => {
  const favoriteContacts = contactsStore.contacts.filter(({id}) =>
    favoriteContactIds.includes(id)
  );

  useEffect(() => {
    if (!contactsStore.contacts.length) {
      contactsStore.get();
    }
  }, []);

  return (
    <Row xxl={4} className="g-4">
      {favoriteContacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
});

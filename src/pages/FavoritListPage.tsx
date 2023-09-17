import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components';
import {useAppSelector} from 'src/model';

export const FavoritListPage = () => {
  const favoriteContacts = useAppSelector((state) => state.favoriteContacts);
  const contacts = useAppSelector((state) => state.contacts).filter(({id}) =>
    favoriteContacts.includes(id)
  );

  return (
    <Row xxl={4} className="g-4">
      {contacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
};

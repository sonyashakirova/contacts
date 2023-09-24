import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components';
import {useGetContactsQuery} from 'src/model/contacts';

const favoriteContactIds = [
  '27370c62-0dad-4f21-ab4d-6e5588d6bf74',
  '68f42b37-2954-4a4e-9df1-c8ff86128d70',
];

export const FavoritListPage = () => {
  const contactsData = useGetContactsQuery();
  const favoriteContacts = contactsData.isSuccess
    ? contactsData.data.filter(({id}) => favoriteContactIds.includes(id))
    : [];

  return (
    <Row xxl={4} className="g-4">
      {favoriteContacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
};

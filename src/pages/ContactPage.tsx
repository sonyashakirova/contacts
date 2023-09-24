import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactCard, Empty} from 'src/components';
import {useGetContactsQuery} from 'src/model/contacts';

export const ContactPage = () => {
  const {contactId} = useParams<{contactId: string}>();
  const contactsData = useGetContactsQuery();
  const contact = contactsData.isSuccess
    ? contactsData.data.find(({id}) => id === contactId)
    : null;

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
};

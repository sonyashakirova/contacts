import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactCard} from 'src/components/ContactCard';
import {Empty} from 'src/components/Empty';
import {useAppSelector} from 'src/model';

export const ContactPage = () => {
  const {contactId} = useParams<{contactId: string}>();
  const contact = useAppSelector((state) =>
    state.contacts.find(({id}) => id === contactId)
  );

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
};

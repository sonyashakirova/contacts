import {observer} from 'mobx-react-lite';
import {useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactCard, Empty} from 'src/components';
import {contactsStore} from 'src/model';

export const ContactPage = observer(() => {
  const {contactId} = useParams<{contactId: string}>();
  const contact = contactsStore.contacts.find(({id}) => id === contactId);

  useEffect(() => {
    if (!contactsStore.contacts.length) {
      contactsStore.get();
    }
  }, []);

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
});

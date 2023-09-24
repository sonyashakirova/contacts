import {observer} from 'mobx-react-lite';
import {useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactCard, Empty, GroupContactsCard} from 'src/components';
import {contactsStore, groupsStore} from 'src/model';

export const GroupPage = observer(() => {
  const {groupId} = useParams<{groupId: string}>();
  const group = groupsStore.groups.find(({id}) => id === groupId);
  const contacts = group
    ? contactsStore.contacts.filter(({id}) => group.contactIds.includes(id))
    : [];

  useEffect(() => {
    if (!groupsStore.groups.length) {
      groupsStore.get();
    }

    if (!contactsStore.contacts.length) {
      contactsStore.get();
    }
  }, []);

  return (
    <Row className="g-4">
      {group ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={group} />
              </Col>
            </Row>
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
        </>
      ) : (
        <Empty />
      )}
    </Row>
  );
});

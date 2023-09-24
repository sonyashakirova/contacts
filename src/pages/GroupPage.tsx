import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactCard, Empty, GroupContactsCard} from 'src/components';
import {useGetContactsQuery} from 'src/model/contacts';
import {useGetGroupsQuery} from 'src/model/groups';

export const GroupPage = () => {
  const {groupId} = useParams<{groupId: string}>();
  const groupsData = useGetGroupsQuery();
  const group = groupsData.isSuccess
    ? groupsData.data.find(({id}) => id === groupId)
    : null;
  const contactsData = useGetContactsQuery();
  const contacts =
    contactsData.isSuccess && group
      ? contactsData.data.filter(({id}) => group.contactIds.includes(id))
      : [];

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
};

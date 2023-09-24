import {observer} from 'mobx-react-lite';
import {useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import {GroupContactsCard} from 'src/components';
import {groupsStore} from 'src/model';

export const GroupListPage = observer(() => {
  const groups = groupsStore.groups;

  useEffect(() => {
    if (!groups.length) {
      groupsStore.get();
    }
  }, []);

  return (
    <Row xxl={4}>
      {groups.map((group) => (
        <Col key={group.id}>
          <GroupContactsCard groupContacts={group} withLink />
        </Col>
      ))}
    </Row>
  );
});

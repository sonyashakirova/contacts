import {Col, Row} from 'react-bootstrap';
import {GroupContactsCard} from 'src/components';
import {useAppSelector} from 'src/model';

export const GroupListPage = () => {
  const groups = useAppSelector((state) => state.groups);

  return (
    <Row xxl={4}>
      {groups.map((group) => (
        <Col key={group.id}>
          <GroupContactsCard groupContacts={group} withLink />
        </Col>
      ))}
    </Row>
  );
};

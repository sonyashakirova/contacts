import {Col, Row} from 'react-bootstrap';
import {GroupContactsCard} from 'src/components';
import {useGetGroupsQuery} from 'src/model/groups';

export const GroupListPage = () => {
  const groupsData = useGetGroupsQuery();
  const groups = groupsData.isSuccess ? groupsData.data : [];

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

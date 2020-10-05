import React from 'react';
import PropTypes from 'prop-types';
import { List, Button, Card } from 'antd';
import { StopOutlined } from '@ant-design/icons';

const FollowList = ({ header, data }) => (
  <List
    style={{ marginBottom: 20 }}
    grid={{ gutter: 4, xs: 2, md: 3 }}
    size='small'
    header={header}
    loadMore={
      // eslint-disable-next-line react/jsx-wrap-multilines
      <div style={{ textAlign: 'center', margin: '10px 0' }}>
        <Button>더 보기</Button>
      </div>
    }
    bordered
    dataSource={data}
    renderItem={(item) => (
      <List.Item style={{ margin: 20 }}>
        <Card actions={[<StopOutlined key='stop' />]}>
          <Card.Meta description={item.nickname} />
        </Card>
      </List.Item>
    )}
  />
);

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;

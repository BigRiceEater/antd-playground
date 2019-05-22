import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { Table } from 'antd';

class OrderTableList extends Component {
  columns = [{ title: 'Order Number', dataIndex: 'id' }];

  data = new Array(10).fill(0).map(i => ({ id: uuid().replace(/-/g, '') }));

  render() {
    const { match, history } = this.props;
    return (
      <Table
        bordered
        columns={this.columns}
        dataSource={this.data}
        onRow={(record, rowIndex) => ({
          onClick: event => history.push(`${match.url}/${record.id}`)
        })}
      />
    );
  }
}

export default OrderTableList;
